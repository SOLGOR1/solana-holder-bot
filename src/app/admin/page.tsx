'use client';

/**
 * LEEK — Admin Analytics
 * Route: app/admin/page.tsx
 *
 * Wallet-gated: only the admin wallet can read the data. The UI is gated on the
 * connected pubkey, and the data API additionally verifies a signed message
 * server-side — so a spoofed front-end can't pull the numbers.
 *
 * Deps (client): bs58. Make sure your app is wrapped in the Solana
 * WalletProvider + WalletModalProvider (same setup the LEEK app already uses),
 * and that '@solana/wallet-adapter-react-ui/styles.css' is imported once globally.
 */

import { Fragment, useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';

const WalletMultiButton = dynamic(
  () => import('@solana/wallet-adapter-react-ui').then((m) => m.WalletMultiButton),
  { ssr: false },
);

const ADMIN_WALLET = 'GxtFLStH14atRjdz1VQZr395DHFbbpBkjSFwNVHwzheu';

const ACCENTS = ['#3b82f6', '#22d3ee', '#8b5cf6', '#06b6d4', '#60a5fa', '#a78bfa', '#0ea5e9', '#2dd4bf', '#6366f1'];

/* ---------- types (mirror lib/analytics) ---------- */
interface DownloadSnapshot {
  ref: string; ts: number; months: number; itemCount: number;
  usdc: number; solSOL: number; solUsd: number; teamFee: number; grandUSD: number;
  items: { name: string; config: string; settle: string; usdValue: number }[];
}
interface AdminStats {
  visits: number; downloads: number; conversion: number;
  pipelineUsd: number; avgQuoteUsd: number;
  topItems: { id: string; name: string; category: string; count: number }[];
  categories: { category: string; count: number }[];
  daily: { date: string; count: number }[];
  recent: DownloadSnapshot[];
  storageReady: boolean;
}

/* ---------- format helpers ---------- */
const usd = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const compact = (n: number) =>
  n >= 1000 ? n.toLocaleString('en-US', { notation: 'compact', maximumFractionDigits: 1 }) : String(Math.round(n));
const pct = (n: number) => `${(n * 100).toFixed(1)}%`;
const sol = (n: number) => `${n.toLocaleString('en-US', { maximumFractionDigits: 1 })} SOL`;
const short = (a: string) => `${a.slice(0, 4)}…${a.slice(-4)}`;
const ago = (ts: number) => {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return 'just now';
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
};

/* ============================ PAGE ============================ */

export default function AdminDashboard() {
  const { publicKey, signMessage } = useWallet();
  const [authed, setAuthed] = useState(false);
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [updatedAt, setUpdatedAt] = useState(0);
  const [auth, setAuth] = useState<{ message: string; signature: string; signedAt: number } | null>(null);

  const address = publicKey?.toBase58() ?? null;
  const isAdmin = address === ADMIN_WALLET;

  const fetchStats = useCallback(async (forceSign = false) => {
    if (!publicKey || !signMessage) return;
    setLoading(true); setError(null);
    try {
      let a = auth;
      if (!a || forceSign || Date.now() - a.signedAt > 4 * 60 * 1000) {
        const message = `LEEK Admin Dashboard\nWallet: ${publicKey.toBase58()}\nts:${Date.now()}`;
        const sig = await signMessage(new TextEncoder().encode(message));
        a = { message, signature: bs58.encode(sig), signedAt: Date.now() };
        setAuth(a);
      }
      const res = await fetch('/api/admin/stats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pubkey: publicKey.toBase58(), message: a.message, signature: a.signature }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error === 'forbidden' ? 'This wallet is not authorized.' : 'Verification failed.');
      }
      const j = await res.json();
      setStats(j.stats as AdminStats);
      setAuthed(true);
      setUpdatedAt(Date.now());
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }, [publicKey, signMessage, auth]);

  /* ---------------- gates ---------------- */

  if (!address) {
    return (
      <Shell>
        <Gate
          title="Admin access"
          body="Connect the LEEK admin wallet to view analytics."
          action={<WalletMultiButton />}
        />
      </Shell>
    );
  }

  if (!isAdmin) {
    return (
      <Shell>
        <Gate
          tone="danger"
          title="Access denied"
          body={`The connected wallet ${short(address)} is not authorized for this dashboard.`}
          action={<WalletMultiButton />}
        />
      </Shell>
    );
  }

  if (!authed) {
    return (
      <Shell>
        <Gate
          title="Verify ownership"
          body="Sign a message to confirm you control the admin wallet. No transaction, no fees."
          action={
            <button
              onClick={() => fetchStats(true)}
              disabled={loading}
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:opacity-50"
            >
              {loading ? 'Waiting for signature…' : 'Sign & unlock dashboard'}
            </button>
          }
          error={error}
        />
      </Shell>
    );
  }

  /* ---------------- dashboard ---------------- */
  const s = stats!;
  const maxItem = Math.max(1, ...s.topItems.map((i) => i.count));
  const catTotal = s.categories.reduce((a, c) => a + c.count, 0);

  return (
    <Shell>
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* top bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_12px_2px_rgba(59,130,246,0.7)]" />
              LEEK · Analytics
            </div>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white">Customer activity</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden rounded-lg border border-white/10 bg-white/3 px-3 py-1.5 text-xs text-slate-400 sm:inline">
              {short(address)}
            </span>
            <button
              onClick={() => fetchStats(false)}
              disabled={loading}
              className="rounded-lg border border-white/10 bg-white/4 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-blue-500/50 hover:text-white disabled:opacity-50"
            >
              {loading ? 'Refreshing…' : 'Refresh'}
            </button>
          </div>
        </div>

        {updatedAt > 0 && (
          <p className="mt-1 text-[11px] text-slate-500">Updated {ago(updatedAt)}</p>
        )}

        {!s.storageReady && (
          <div className="mt-5 rounded-xl border border-amber-500/30 bg-amber-500/8 px-4 py-3 text-sm text-amber-200">
            Storage isn’t configured yet — set <code className="rounded bg-black/30 px-1">UPSTASH_REDIS_REST_URL</code> and{' '}
            <code className="rounded bg-black/30 px-1">UPSTASH_REDIS_REST_TOKEN</code> to start collecting data.
          </div>
        )}

        {/* KPI row */}
        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-5">
          <Kpi label="Visitors" value={compact(s.visits)} />
          <Kpi label="Quotes downloaded" value={compact(s.downloads)} accent />
          <Kpi label="Conversion" value={pct(s.conversion)} sub="downloads / visits" />
          <Kpi label="Avg quote" value={usd(s.avgQuoteUsd)} />
          <Kpi label="Pipeline value" value={usd(s.pipelineUsd)} sub="sum of all quotes" />
        </div>

        {/* charts */}
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.55fr_1fr]">
          {/* most selected */}
          <Card title="Most selected services" hint="how often each item was picked">
            {s.topItems.length === 0 ? (
              <Empty />
            ) : (
              <div className="space-y-2.5">
                {s.topItems.slice(0, 12).map((it, i) => (
                  <div key={it.id} className="group">
                    <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
                      <span className="flex min-w-0 items-center gap-2">
                        <span className="truncate text-slate-200">{it.name}</span>
                        <span className="shrink-0 rounded bg-white/5 px-1.5 py-0.5 text-[10px] text-slate-400">{it.category}</span>
                      </span>
                      <span className="shrink-0 font-semibold tabular-nums text-white">{it.count}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${(it.count / maxItem) * 100}%`, background: ACCENTS[i % ACCENTS.length] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>

          {/* right column */}
          <div className="space-y-4">
            <Card title="Category interest" hint="share of all selections">
              {catTotal === 0 ? (
                <Empty />
              ) : (
                <div className="flex items-center gap-5">
                  <Donut segments={s.categories.map((c, i) => ({ value: c.count, color: ACCENTS[i % ACCENTS.length] }))} total={catTotal} />
                  <div className="min-w-0 flex-1 space-y-1.5">
                    {s.categories.slice(0, 6).map((c, i) => (
                      <div key={c.category} className="flex items-center justify-between gap-2 text-xs">
                        <span className="flex min-w-0 items-center gap-2">
                          <span className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ background: ACCENTS[i % ACCENTS.length] }} />
                          <span className="truncate text-slate-300">{c.category}</span>
                        </span>
                        <span className="shrink-0 tabular-nums text-slate-400">{pct(c.count / catTotal)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>

            <Card title="Downloads · 14 days" hint={`${s.daily.reduce((a, d) => a + d.count, 0)} total`}>
              <Area points={s.daily.map((d) => d.count)} labels={s.daily.map((d) => d.date)} />
            </Card>
          </div>
        </div>

        {/* recent quotes */}
        <Card title="Recent quotes" hint="most recent PDF downloads" className="mt-4">
          {s.recent.length === 0 ? (
            <Empty />
          ) : (
            <RecentTable rows={s.recent} />
          )}
        </Card>
      </div>
    </Shell>
  );
}

/* ============================ UI PIECES ============================ */

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#05070d] text-slate-100 antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_-10%,rgba(59,130,246,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-size-[46px_46px]" />
      </div>
      {children}
    </div>
  );
}

function Gate({
  title, body, action, error, tone = 'default',
}: { title: string; body: string; action: React.ReactNode; error?: string | null; tone?: 'default' | 'danger' }) {
  return (
    <div className="grid min-h-screen place-items-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/3 p-8 text-center">
        <div className={`mx-auto grid h-12 w-12 place-items-center rounded-xl ${tone === 'danger' ? 'bg-red-500/15 text-red-400' : 'bg-blue-500/15 text-blue-400'}`}>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
            <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="mt-5 text-lg font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{body}</p>
        <div className="mt-6 flex justify-center [&_.wallet-adapter-button]:rounded-xl! [&_.wallet-adapter-button]:bg-blue-600!">{action}</div>
        {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
      </div>
    </div>
  );
}

function Kpi({ label, value, sub, accent }: { label: string; value: string; sub?: string; accent?: boolean }) {
  return (
    <div className={`rounded-xl border p-4 ${accent ? 'border-blue-500/40 bg-blue-500/8' : 'border-white/10 bg-white/2'}`}>
      <div className="text-[11px] uppercase tracking-wide text-slate-400">{label}</div>
      <div className="mt-1.5 text-2xl font-bold tabular-nums text-white">{value}</div>
      {sub && <div className="mt-0.5 text-[11px] text-slate-500">{sub}</div>}
    </div>
  );
}

function Card({ title, hint, children, className = '' }: { title: string; hint?: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`rounded-2xl border border-white/10 bg-white/2 p-5 ${className}`}>
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <h2 className="text-sm font-semibold tracking-tight text-white">{title}</h2>
        {hint && <span className="text-[11px] text-slate-500">{hint}</span>}
      </div>
      {children}
    </section>
  );
}

function Empty() {
  return <p className="py-8 text-center text-sm text-slate-500">No data yet.</p>;
}

function Donut({ segments, total }: { segments: { value: number; color: string }[]; total: number }) {
  const R = 52, C = 2 * Math.PI * R;
  let offset = 0;
  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28 shrink-0 -rotate-90">
      <circle cx="60" cy="60" r={R} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="14" />
      {segments.map((seg, i) => {
        const frac = seg.value / total;
        const dash = frac * C;
        const el = (
          <circle
            key={i}
            cx="60" cy="60" r={R} fill="none"
            stroke={seg.color} strokeWidth="14"
            strokeDasharray={`${dash} ${C - dash}`}
            strokeDashoffset={-offset}
          />
        );
        offset += dash;
        return el;
      })}
      <text x="60" y="60" transform="rotate(90 60 60)" textAnchor="middle" dominantBaseline="central" className="fill-white" style={{ fontSize: 20, fontWeight: 700 }}>
        {total}
      </text>
    </svg>
  );
}

function Area({ points, labels }: { points: number[]; labels: string[] }) {
  const W = 300, H = 72;
  const max = Math.max(1, ...points);
  const n = points.length;
  const step = n > 1 ? W / (n - 1) : W;
  const coords = points.map((v, i) => [i * step, H - (v / max) * (H - 8) - 2]);
  const line = coords.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
  const area = `M0 ${H} ` + coords.map((p) => `L${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ') + ` L${W} ${H} Z`;
  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="h-20 w-full">
        <defs>
          <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#areaFill)" />
        <path d={line} fill="none" stroke="#60a5fa" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
      <div className="mt-1 flex justify-between text-[10px] text-slate-500">
        <span>{labels[0]?.slice(5)}</span>
        <span>{labels[labels.length - 1]?.slice(5)}</span>
      </div>
    </div>
  );
}

function RecentTable({ rows }: { rows: DownloadSnapshot[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-[11px] uppercase tracking-wide text-slate-500">
            <th className="pb-2 pr-3 font-medium">When</th>
            <th className="pb-2 pr-3 font-medium">Ref</th>
            <th className="pb-2 pr-3 font-medium">Items</th>
            <th className="pb-2 pr-3 text-right font-medium">USDC</th>
            <th className="pb-2 pr-3 text-right font-medium">SOL</th>
            <th className="pb-2 text-right font-medium">Total</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <Fragment key={i}>
              <tr
                onClick={() => setOpen(open === i ? null : i)}
                className="cursor-pointer border-t border-white/5 transition hover:bg-white/3"
              >
                <td className="py-2.5 pr-3 text-slate-400">{ago(r.ts)}</td>
                <td className="py-2.5 pr-3 font-mono text-[11px] text-slate-300">{r.ref || '—'}</td>
                <td className="py-2.5 pr-3 text-slate-300">{r.itemCount}</td>
                <td className="py-2.5 pr-3 text-right tabular-nums text-slate-200">{usd(r.usdc)}</td>
                <td className="py-2.5 pr-3 text-right tabular-nums text-cyan-300">{sol(r.solSOL)}</td>
                <td className="py-2.5 text-right font-semibold tabular-nums text-white">{usd(r.grandUSD)}</td>
              </tr>
              {open === i && (
                <tr className="bg-white/1.5">
                  <td colSpan={6} className="px-2 pb-3 pt-1">
                    <div className="grid gap-1 rounded-lg border border-white/5 bg-black/20 p-3 sm:grid-cols-2">
                      {r.items.map((it, j) => (
                        <div key={j} className="flex items-center justify-between gap-3 text-xs">
                          <span className="flex min-w-0 items-center gap-2">
                            <span className="truncate text-slate-300">{it.name}</span>
                            <span className="shrink-0 text-slate-500">{it.config}</span>
                          </span>
                          <span className="shrink-0 tabular-nums text-slate-400">{usd(it.usdValue)}</span>
                        </div>
                      ))}
                      {r.items.length === 0 && <span className="text-xs text-slate-500">No item detail stored.</span>}
                    </div>
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}