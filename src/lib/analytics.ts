/**
 * LEEK — lightweight analytics store
 * Backed by Upstash Redis (REST). No SDK, just fetch — works on Vercel serverless.
 *
 * Setup:
 *   1) Create a free Upstash Redis DB (upstash.com).
 *   2) Add to .env.local / Vercel env:
 *        UPSTASH_REDIS_REST_URL=...
 *        UPSTASH_REDIS_REST_TOKEN=...
 *
 * If the env vars are missing, every function degrades to a safe no-op so the
 * site never breaks — you just won't collect data until it's configured.
 */

const URL = process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

export const storageReady = () => Boolean(URL && TOKEN);

type Cmd = (string | number)[];

async function pipeline(commands: Cmd[]): Promise<unknown[]> {
  if (!storageReady() || commands.length === 0) return [];
  try {
    const res = await fetch(`${URL}/pipeline`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(commands),
      cache: 'no-store',
    });
    if (!res.ok) return [];
    const json = (await res.json()) as { result?: unknown }[];
    return Array.isArray(json) ? json.map((r) => r?.result ?? null) : [];
  } catch {
    return [];
  }
}

/* ---------- keys ---------- */
const K = {
  visits: 'an:visits',
  downloads: 'an:downloads',
  pipelineUsd: 'an:pipeline_usd',
  selectCount: 'an:select_count', // hash: itemId -> count
  itemMeta: 'an:item_meta',       // hash: itemId -> "name|category"
  catCount: 'an:cat_count',       // hash: category -> count
  daily: 'an:downloads_daily',    // hash: YYYY-MM-DD -> count
  log: 'an:download_log',         // list: JSON snapshots (latest first)
};

/* ---------- types ---------- */
export interface DownloadSnapshot {
  ref: string;
  ts: number;
  months: number;
  itemCount: number;
  usdc: number;     // USDC required (incl. team fee)
  solSOL: number;   // SOL required
  solUsd: number;   // USD value of the SOL
  teamFee: number;
  grandUSD: number;
  items: { name: string; config: string; settle: string; usdValue: number }[];
}

export interface AdminStats {
  visits: number;
  downloads: number;
  conversion: number;       // downloads / visits
  pipelineUsd: number;      // sum of all downloaded quote totals
  avgQuoteUsd: number;      // pipelineUsd / downloads
  topItems: { id: string; name: string; category: string; count: number }[];
  categories: { category: string; count: number }[];
  daily: { date: string; count: number }[]; // last 14 days
  recent: DownloadSnapshot[];
  storageReady: boolean;
}

/* ---------- helpers ---------- */
function hashToObj(raw: unknown): Record<string, string> {
  // Upstash returns HGETALL as a flat [k,v,k,v] array; handle object too.
  if (!raw) return {};
  if (Array.isArray(raw)) {
    const o: Record<string, string> = {};
    for (let i = 0; i < raw.length; i += 2) o[String(raw[i])] = String(raw[i + 1]);
    return o;
  }
  if (typeof raw === 'object') return raw as Record<string, string>;
  return {};
}

const num = (v: unknown) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
};

/* ---------- writers ---------- */
export async function recordVisit(): Promise<void> {
  await pipeline([['INCR', K.visits]]);
}

export async function recordSelect(p: { id: string; name: string; category: string }): Promise<void> {
  await pipeline([
    ['HINCRBY', K.selectCount, p.id, 1],
    ['HSET', K.itemMeta, p.id, `${p.name}|${p.category}`],
    ['HINCRBY', K.catCount, p.category, 1],
  ]);
}

export async function recordDownload(snap: DownloadSnapshot): Promise<void> {
  const date = new Date(snap.ts).toISOString().slice(0, 10);
  await pipeline([
    ['INCR', K.downloads],
    ['HINCRBY', K.daily, date, 1],
    ['INCRBYFLOAT', K.pipelineUsd, String(Math.round(snap.grandUSD))],
    ['LPUSH', K.log, JSON.stringify(snap)],
    ['LTRIM', K.log, 0, 99],
  ]);
}

/* ---------- reader ---------- */
export async function getStats(): Promise<AdminStats> {
  const res = await pipeline([
    ['GET', K.visits],
    ['GET', K.downloads],
    ['GET', K.pipelineUsd],
    ['HGETALL', K.selectCount],
    ['HGETALL', K.itemMeta],
    ['HGETALL', K.catCount],
    ['HGETALL', K.daily],
    ['LRANGE', K.log, 0, 49],
  ]);

  const visits = num(res[0]);
  const downloads = num(res[1]);
  const pipelineUsd = num(res[2]);
  const selectCount = hashToObj(res[3]);
  const itemMeta = hashToObj(res[4]);
  const catCount = hashToObj(res[5]);
  const daily = hashToObj(res[6]);
  const logRaw = Array.isArray(res[7]) ? (res[7] as string[]) : [];

  const topItems = Object.entries(selectCount)
    .map(([id, c]) => {
      const [name, category] = (itemMeta[id] ?? '|').split('|');
      return { id, name: name || id, category: category || '—', count: num(c) };
    })
    .sort((a, b) => b.count - a.count);

  const categories = Object.entries(catCount)
    .map(([category, c]) => ({ category, count: num(c) }))
    .sort((a, b) => b.count - a.count);

  // last 14 days, oldest -> newest
  const days: { date: string; count: number }[] = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date();
    d.setUTCDate(d.getUTCDate() - i);
    const key = d.toISOString().slice(0, 10);
    days.push({ date: key, count: num(daily[key]) });
  }

  const recent: DownloadSnapshot[] = logRaw
    .map((s) => {
      try { return JSON.parse(s) as DownloadSnapshot; } catch { return null; }
    })
    .filter((x): x is DownloadSnapshot => !!x);

  return {
    visits,
    downloads,
    conversion: visits > 0 ? downloads / visits : 0,
    pipelineUsd,
    avgQuoteUsd: downloads > 0 ? pipelineUsd / downloads : 0,
    topItems,
    categories,
    daily: days,
    recent,
    storageReady: storageReady(),
  };
}