'use client';

/**
 * LEEK — Package Configurator
 * Route: app/web3/page.tsx
 *
 * Clients assemble their own package, see a live price breakdown
 * (split into USDC vs. SOL capital using the current SOL price),
 * and export a branded PDF quote to submit back to the LEEK team.
 *
 * ──────────────────────────────────────────────────────────────
 * HOW TO EDIT THE CATALOG
 *  - Everything the client can pick lives in the `CATALOG` array below.
 *  - To add a line item: drop a new object into the right category.
 *  - To add a category: append a new object to CATALOG.
 *  - `settle` decides which bucket the item funds: 'USDC' or 'SOL'.
 *  - `group` makes items mutually exclusive (radio behaviour), e.g. pool tiers.
 *
 * DEPENDENCIES (install once):
 *   npm i jspdf jspdf-autotable
 *
 * NOTE: This is a Client Component, so it can't export `metadata`.
 * Put SEO metadata in app/web3/layout.tsx if you need it.
 * ──────────────────────────────────────────────────────────────
 */

import { useEffect, useMemo, useState, useCallback } from 'react';

/* ============================ TYPES ============================ */

type Billing = 'oneTime' | 'monthly' | 'weekly' | 'perUnit' | 'perDay' | 'perWeek';
type Settle = 'USDC' | 'SOL';
type Unit = 'USD' | 'SOL';

interface Item {
  id: string;
  name: string;
  desc?: string;
  price: number;            // amount expressed in `unit`
  unit: Unit;               // currency the price is quoted in
  settle: Settle;           // how the client funds it
  billing: Billing;
  from?: boolean;           // "from / starting at" pricing
  qty?: boolean;            // client can set a count
  qtyLabel?: string;        // e.g. "pages", "features", "days", "weeks"
  defaultQty?: number;
  amountEditable?: boolean; // client can override the USD amount (capital items)
  defaultAmount?: number;   // starting value for amountEditable/slider items
  slider?: { min: number; max: number; step: number }; // budget slider (e.g. KOL)
  monthlyOptional?: boolean;     // shows a "bill monthly" toggle (× project duration)
  billingOptions?: Billing[];    // segmented control, e.g. ['oneTime','monthly','weekly']
}

interface Category {
  id: string;
  num: string;
  title: string;
  blurb: string;
  items: Item[];
}

/* ============================ CATALOG ============================ */
/* Edit freely — add, remove or reprice items here. */

const CATALOG: Category[] = [
  {
    id: 'web',
    num: '01',
    title: 'Website & Development',
    blurb: 'High-performance Next.js builds, mobile-first, deployed and handed over.',
    items: [
      {
        id: 'landing',
        name: 'Landing Page',
        desc: 'Premium custom design, mobile-first, animations, social integration, deployment.',
        price: 499, unit: 'USD', settle: 'USDC', billing: 'oneTime', from: true,
      },
      {
        id: 'pages',
        name: 'Extra Pages & Small Features',
        desc: 'Roadmap, Tokenomics, FAQ, Team, News, Blog, Countdown.',
        price: 99, unit: 'USD', settle: 'USDC', billing: 'perUnit', qty: true, qtyLabel: 'pages', defaultQty: 1,
      },
      {
        id: 'advanced',
        name: 'Advanced Features',
        desc: 'Buy/Swap terminal, WalletConnect, staking, dashboard, on-chain analytics, contract integration.',
        price: 399, unit: 'USD', settle: 'USDC', billing: 'perUnit', from: true, qty: true, qtyLabel: 'features', defaultQty: 1,
      },
      {
        id: 'maintenance',
        name: 'Managed Maintenance',
        desc: '1 minor update + 1 bugfix per month, ongoing support.',
        price: 100, unit: 'USD', settle: 'USDC', billing: 'monthly',
      },
    ],
  },
  {
    id: 'seo',
    num: '02',
    title: 'SEO & Authority',
    blurb: 'Get found on Google and AI search — plus authority backlinks.',
    items: [
      {
        id: 'seo_main',
        name: 'Main Page SEO Package',
        desc: 'Technical SEO, meta, performance, keyword optimization.',
        price: 299, unit: 'USD', settle: 'USDC', billing: 'oneTime',
      },
      { id: 'bl_starter', name: 'Backlinks — Starter', price: 350, unit: 'USD', settle: 'USDC', billing: 'oneTime' },
      { id: 'bl_growth', name: 'Backlinks — Growth', price: 750, unit: 'USD', settle: 'USDC', billing: 'oneTime' },
      { id: 'bl_authority', name: 'Backlinks — Authority', price: 1250, unit: 'USD', settle: 'USDC', billing: 'oneTime' },
      { id: 'bl_dominate', name: 'Backlinks — Dominate', price: 2000, unit: 'USD', settle: 'USDC', billing: 'oneTime', from: true },
    ],
  },
  {
    id: 'social',
    num: '03',
    title: 'Socials, Bots & Moderation',
    blurb: 'X & Telegram setup, buybot, and round-the-clock moderation.',
    items: [
      {
        id: 'social_setup',
        name: 'Socials + Buybot & Rose Setup',
        desc: 'One-time X + Telegram configuration with buybot.',
        price: 290, unit: 'USD', settle: 'USDC', billing: 'oneTime',
      },
      { id: 'tg_mod', name: 'Telegram Community Mod', price: 600, unit: 'USD', settle: 'USDC', billing: 'monthly' },
      { id: 'x_mod', name: 'X (Twitter) Mod', price: 1000, unit: 'USD', settle: 'USDC', billing: 'monthly' },
      { id: 'raid', name: 'Raid Management', price: 1000, unit: 'USD', settle: 'USDC', billing: 'monthly' },
    ],
  },
  {
    id: 'assets',
    num: '04',
    title: 'Branding & Creative Assets',
    blurb: 'Promotional images and videos. Pick one tier — switch to monthly/weekly for fresh batches.',
    items: [
      {
        id: 'assets_starter',
        name: 'Creative — Starter',
        desc: '8 images · 2 square videos (5–10s) · 1 landscape video (10–15s).',
        price: 250, unit: 'USD', settle: 'USDC', billing: 'oneTime',
        billingOptions: ['oneTime', 'monthly', 'weekly'],
      },
      {
        id: 'assets_accelerator',
        name: 'Creative — Accelerator',
        desc: '20 images · 5 square videos · 2 landscape videos.',
        price: 500, unit: 'USD', settle: 'USDC', billing: 'oneTime',
        billingOptions: ['oneTime', 'monthly', 'weekly'],
      },
      {
        id: 'assets_dominate',
        name: 'Creative — Dominate',
        desc: '50 images · 12 square videos · 5 landscape videos.',
        price: 1000, unit: 'USD', settle: 'USDC', billing: 'oneTime',
        billingOptions: ['oneTime', 'monthly', 'weekly'],
      },
    ],
  },
  {
    id: 'launch',
    num: '05',
    title: 'Launch Support',
    blurb: 'Dedicated hands-on coverage for the critical launch window.',
    items: [
      {
        id: 'support72',
        name: 'Live Technical Support — First 72h',
        desc: 'Dedicated support across the first 72 hours after launch.',
        price: 864, unit: 'USD', settle: 'USDC', billing: 'oneTime',
      },
    ],
  },
  {
    id: 'marketing',
    num: '06',
    title: 'Marketing & Trending',
    blurb: 'Reach, trending placement and sustained volume.',
    items: [
      {
        id: 'kol',
        name: 'KOL Campaign',
        desc: 'Coordinated influencer coverage. Set your budget; toggle monthly to repeat over the project duration.',
        price: 3000, unit: 'USD', settle: 'USDC', billing: 'oneTime', from: true,
        slider: { min: 3000, max: 1_000_000, step: 3000 }, defaultAmount: 30000, monthlyOptional: true,
      },
      { id: 'dexscreener', name: 'Dexscreener Boost + Verification', price: 4800, unit: 'USD', settle: 'USDC', billing: 'oneTime' },
      { id: 'dextools_update', name: 'Dextools Update', desc: 'Info update: logo, links, socials & description.', price: 195, unit: 'USD', settle: 'USDC', billing: 'oneTime' },
      { id: 'dext_starter', name: 'Dextools Boost — Starter', price: 199, unit: 'USD', settle: 'USDC', billing: 'oneTime' },
      { id: 'dext_standard', name: 'Dextools Boost — Standard', price: 499, unit: 'USD', settle: 'USDC', billing: 'oneTime' },
      { id: 'dext_pro', name: 'Dextools Boost — Pro', price: 999, unit: 'USD', settle: 'USDC', billing: 'oneTime' },
      { id: 'dext_max', name: 'Dextools Boost — Max', price: 3999, unit: 'USD', settle: 'USDC', billing: 'oneTime' },
      { id: 'blogs', name: 'Blogs, News & Backlinks', price: 1500, unit: 'USD', settle: 'USDC', billing: 'monthly' },
      { id: 'aeo', name: 'AEO — AI Search Optimization', desc: 'Optimized for ChatGPT, Gemini & Perplexity.', price: 1500, unit: 'USD', settle: 'USDC', billing: 'monthly' },
      { id: 'outreach', name: 'Outreach Budget', desc: 'Flexible outreach spend.', price: 2000, unit: 'USD', settle: 'USDC', billing: 'oneTime' },
      {
        id: 'volume',
        name: 'Volume + Holder Boost',
        desc: 'Sustained on-chain volume. Funded in SOL.',
        price: 400, unit: 'SOL', settle: 'SOL', billing: 'perDay', qty: true, qtyLabel: 'days', defaultQty: 1,
      },
    ],
  },
  {
    id: 'listings',
    num: '07',
    title: 'Listings & Verification',
    blurb: 'Get verified and listed on the platforms that matter.',
    items: [
      { id: 'jupiter', name: 'Jupiter Verification', price: 1000, unit: 'USD', settle: 'USDC', billing: 'oneTime' },
      { id: 'coingecko', name: 'CoinGecko Fast Pass', price: 1000, unit: 'USD', settle: 'USDC', billing: 'oneTime' },
      { id: 'cmc', name: 'CoinMarketCap Priority', price: 5000, unit: 'USD', settle: 'USDC', billing: 'oneTime' },
      { id: 'listing_work', name: 'Listing Work Time', desc: 'Our handling of the listing submissions.', price: 1000, unit: 'USD', settle: 'USDC', billing: 'oneTime' },
      { id: 'contingency', name: 'Contingency / Buffer', desc: 'Reserve for unexpected listing costs.', price: 5000, unit: 'USD', settle: 'USDC', billing: 'oneTime' },
    ],
  },
  {
    id: 'liquidity',
    num: '08',
    title: 'Liquidity & Pools',
    blurb: 'On-chain liquidity deployment. Funded in SOL. Pick one tier.',
    items: [
      {
        id: 'pool_fast',
        name: 'Fast Path — 3 Pools',
        desc: 'Meteora · Raydium · Orca. Incl. $10k liquidity + $10k tokens.',
        price: 32000, unit: 'USD', settle: 'SOL', billing: 'oneTime',
      },
      {
        id: 'pool_medium',
        name: 'Medium — 2 Pools',
        desc: 'Two main pools. Incl. liquidity + token allocation.',
        price: 22000, unit: 'USD', settle: 'SOL', billing: 'oneTime',
      },
      {
        id: 'pool_low',
        name: 'Low — 1 Main Pool',
        desc: 'Single main pool (Meteora). Incl. liquidity + token allocation.',
        price: 12000, unit: 'USD', settle: 'SOL', billing: 'oneTime',
      },
    ],
  },
  {
    id: 'moneyflow',
    num: '09',
    title: 'Moneyflow & Buywalls',
    blurb: 'On-chain capital to defend levels and sustain healthy flow. Funded in SOL.',
    items: [
      {
        id: 'buywalls',
        name: 'Buywalls',
        desc: 'Capital placed at critical levels. Adjust the amount below.',
        price: 10000, unit: 'USD', settle: 'SOL', billing: 'oneTime', amountEditable: true,
      },
      {
        id: 'mf_initial',
        name: 'Moneyflow — Initial Injection',
        desc: 'Recommended minimum to start (≈ 6×$1k inflow + 1×$5k outflow).',
        price: 7000, unit: 'USD', settle: 'SOL', billing: 'oneTime', amountEditable: true,
      },
      {
        id: 'mf_weekly',
        name: 'Moneyflow — Weekly Injection',
        desc: 'Ongoing weekly top-up (excl. swap fees).',
        price: 1000, unit: 'USD', settle: 'SOL', billing: 'perWeek', qty: true, qtyLabel: 'weeks', defaultQty: 4,
      },
    ],
  },
];

/* ============================ HELPERS ============================ */

const FALLBACK_SOL_PRICE = 71; // used only until the live price loads

const usd = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

const usd2 = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });

const sol = (n: number) =>
  `${n.toLocaleString('en-US', { maximumFractionDigits: 1 })} SOL`;

const WEEKS_PER_MONTH = 4;

function billingMultiplier(billing: Billing, months: number, qty: number): number {
  switch (billing) {
    case 'monthly': return Math.max(1, months);
    case 'weekly': return Math.max(1, months * WEEKS_PER_MONTH);
    case 'perUnit':
    case 'perDay':
    case 'perWeek': return Math.max(1, qty);
    default: return 1;
  }
}

function billingLabel(billing: Billing, months: number, qty: number, item: Item): string {
  switch (billing) {
    case 'monthly': return `${Math.max(1, months)} month${months > 1 ? 's' : ''}`;
    case 'weekly': return `${Math.max(1, months * WEEKS_PER_MONTH)} weeks`;
    case 'perUnit':
    case 'perDay':
    case 'perWeek': return `×${Math.max(1, qty)} ${item.qtyLabel ?? ''}`.trim();
    default: return 'one-time';
  }
}

/* ============================ COMPONENT ============================ */

export default function PackageConfigurator() {
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [qtyMap, setQtyMap] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    CATALOG.forEach((c) => c.items.forEach((i) => { if (i.qty) init[i.id] = i.defaultQty ?? 1; }));
    return init;
  });
  const [amountMap, setAmountMap] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    CATALOG.forEach((c) => c.items.forEach((i) => {
      if (i.amountEditable || i.slider) init[i.id] = i.defaultAmount ?? i.price;
    }));
    return init;
  });
  // per-item "bill monthly" toggle (e.g. KOL)
  const [monthlyMap, setMonthlyMap] = useState<Record<string, boolean>>({});
  // per-item billing mode for items with billingOptions (e.g. creative assets)
  const [billingModeMap, setBillingModeMap] = useState<Record<string, Billing>>(() => {
    const init: Record<string, Billing> = {};
    CATALOG.forEach((c) => c.items.forEach((i) => {
      if (i.billingOptions?.length) init[i.id] = i.billingOptions[0];
    }));
    return init;
  });
  const [months, setMonths] = useState(3);
  const [solPrice, setSolPrice] = useState(FALLBACK_SOL_PRICE);
  const [priceLive, setPriceLive] = useState(false);
  const [generating, setGenerating] = useState(false);

  /* live SOL price — swap this for your own /api proxy if you prefer */
  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const r = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd',
          { cache: 'no-store' }
        );
        const j = await r.json();
        const p = j?.solana?.usd;
        if (active && typeof p === 'number' && p > 0) { setSolPrice(p); setPriceLive(true); }
      } catch {
        /* keep fallback */
      }
    };
    load();
    const t = setInterval(load, 60_000);
    return () => { active = false; clearInterval(t); };
  }, []);

  // exclusive groups: items inside the same category that share a "tier" are radio-like.
  // We treat backlinks (bl_*), assets (assets_*), pools (pool_*) and dextools boosts (dext_*) as exclusive by prefix.
  const groupOf = (id: string): string | null => {
    if (id.startsWith('bl_')) return 'backlinks';
    if (id.startsWith('assets_')) return 'assets';
    if (id.startsWith('pool_')) return 'pools';
    if (id.startsWith('dext_')) return 'dextools';
    return null;
  };

  const toggle = useCallback((item: Item) => {
    setSelected((prev) => {
      const next = { ...prev };
      const turningOn = !prev[item.id];
      const g = groupOf(item.id);
      if (turningOn && g) {
        // clear siblings in the same exclusive group
        CATALOG.forEach((c) => c.items.forEach((i) => {
          if (groupOf(i.id) === g) next[i.id] = false;
        }));
      }
      next[item.id] = turningOn;
      return next;
    });
  }, []);

  const setQty = (id: string, v: number) =>
    setQtyMap((p) => ({ ...p, [id]: Math.max(1, Math.floor(v) || 1) }));

  const setAmount = (id: string, v: number) =>
    setAmountMap((p) => ({ ...p, [id]: Math.max(0, Math.floor(v) || 0) }));

  const setMonthly = (id: string, v: boolean) =>
    setMonthlyMap((p) => ({ ...p, [id]: v }));

  const setBillingMode = (id: string, b: Billing) =>
    setBillingModeMap((p) => ({ ...p, [id]: b }));

  // effective billing once per-item toggles are applied
  const effBilling = useCallback((item: Item): Billing => {
    if (item.billingOptions?.length) return billingModeMap[item.id] ?? item.billingOptions[0];
    if (item.monthlyOptional) return monthlyMap[item.id] ? 'monthly' : 'oneTime';
    return item.billing;
  }, [billingModeMap, monthlyMap]);

  // effective base amount (slider / editable override the catalog price)
  const effBase = useCallback((item: Item): number => {
    if (item.slider || item.amountEditable) return amountMap[item.id] ?? item.defaultAmount ?? item.price;
    return item.price;
  }, [amountMap]);

  /* ---------------- totals ---------------- */
  const TEAM_FEE_RATE = 0.02; // 2% base team fee on the selected subtotal

  const totals = useMemo(() => {
    let usdcUSD = 0;        // services paid in USDC
    let solFromUSD_USD = 0; // SOL-settled items that are quoted in USD
    let solNative_SOL = 0;  // SOL-settled items already quoted in SOL

    const lines: {
      cat: string; name: string; config: string; settle: Settle;
      usdValue: number; solValue: number | null;
    }[] = [];

    for (const cat of CATALOG) {
      for (const item of cat.items) {
        if (!selected[item.id]) continue;
        const qty = qtyMap[item.id] ?? item.defaultQty ?? 1;
        const billing = effBilling(item);
        const mult = billingMultiplier(billing, months, qty);
        const base = effBase(item);
        const config = billingLabel(billing, months, qty, item);

        if (item.unit === 'SOL') {
          const solAmt = base * mult;
          const usdValue = solAmt * solPrice;
          solNative_SOL += solAmt;
          lines.push({ cat: cat.title, name: item.name, config, settle: 'SOL', usdValue, solValue: solAmt });
        } else {
          const usdValue = base * mult;
          if (item.settle === 'SOL') {
            solFromUSD_USD += usdValue;
            lines.push({ cat: cat.title, name: item.name, config, settle: 'SOL', usdValue, solValue: usdValue / solPrice });
          } else {
            usdcUSD += usdValue;
            lines.push({ cat: cat.title, name: item.name, config, settle: 'USDC', usdValue, solValue: null });
          }
        }
      }
    }

    const solTotalSOL = solNative_SOL + solFromUSD_USD / solPrice;
    const solTotalUSD = solTotalSOL * solPrice;
    const subtotalUSD = usdcUSD + solTotalUSD;          // selected items, pre team fee
    const teamFee = subtotalUSD * TEAM_FEE_RATE;        // 2% team fee, charged in USDC
    const usdcRequired = usdcUSD + teamFee;             // USDC bucket includes the team fee
    const grandUSD = subtotalUSD + teamFee;

    return {
      lines, usdcUSD, usdcRequired, solTotalSOL, solTotalUSD,
      subtotalUSD, teamFee, grandUSD, count: lines.length,
    };
  }, [selected, qtyMap, amountMap, monthlyMap, billingModeMap, months, solPrice, effBilling, effBase]);

  const clearAll = () => { setSelected({}); };

  /* ---------------- PDF export ---------------- */
  const downloadPDF = async () => {
    if (totals.count === 0) return;
    setGenerating(true);
    try {
      const { jsPDF } = await import('jspdf');
      const autoTable = (await import('jspdf-autotable')).default;

      const doc = new jsPDF({ unit: 'pt', format: 'a4' });
      const W = doc.internal.pageSize.getWidth();
      const M = 40;

      const BLUE: [number, number, number] = [59, 130, 246];
      const DARK: [number, number, number] = [13, 18, 28];
      const MUTE: [number, number, number] = [120, 130, 148];

      // header band
      doc.setFillColor(...DARK);
      doc.rect(0, 0, W, 92, 'F');
      doc.setFillColor(...BLUE);
      doc.rect(0, 92, W, 3, 'F');

      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(26);
      doc.text('LEEK', M, 48);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(150, 170, 200);
      doc.text('PROJECT PROPOSAL', M, 66);

      const ref = `LEEK-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000 + 1000)}`;
      doc.setTextColor(200, 210, 225);
      doc.setFontSize(9);
      doc.text(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), W - M, 44, { align: 'right' });
      doc.text(`Quote ref: ${ref}`, W - M, 60, { align: 'right' });
      doc.text(`SOL @ ${usd2(solPrice)}`, W - M, 76, { align: 'right' });

      // table
      const body = totals.lines.map((l) => [
        l.name,
        l.config,
        l.settle,
        l.settle === 'SOL' && l.solValue != null
          ? `${usd(l.usdValue)}  (${sol(l.solValue)})`
          : usd(l.usdValue),
      ]);

      autoTable(doc, {
        startY: 120,
        head: [['Item', 'Configuration', 'Pay in', 'Subtotal']],
        body,
        margin: { left: M, right: M },
        styles: { font: 'helvetica', fontSize: 9, cellPadding: 6, textColor: [40, 48, 60] },
        headStyles: { fillColor: DARK, textColor: [255, 255, 255], fontStyle: 'bold' },
        alternateRowStyles: { fillColor: [244, 247, 252] },
        columnStyles: { 2: { halign: 'center' }, 3: { halign: 'right' } },
      });

      // totals
      // @ts-expect-error lastAutoTable is injected by the plugin
      let y = (doc.lastAutoTable?.finalY ?? 140) + 24;
      const right = W - M;
      const labelX = right - 230;

      const row = (label: string, value: string, bold = false, color: [number, number, number] = [40, 48, 60]) => {
        doc.setFont('helvetica', bold ? 'bold' : 'normal');
        doc.setFontSize(bold ? 12 : 10);
        doc.setTextColor(...(bold ? DARK : MUTE));
        doc.text(label, labelX, y);
        doc.setTextColor(...color);
        doc.text(value, right, y, { align: 'right' });
        y += bold ? 22 : 18;
      };

      row('Subtotal (selected)', usd(totals.subtotalUSD));
      row('Team fee (2%)', usd(totals.teamFee));
      doc.setDrawColor(225, 230, 238);
      doc.line(labelX, y - 6, right, y - 6);
      y += 4;
      row('USDC required', usd(totals.usdcRequired));
      row('SOL required', `${sol(totals.solTotalSOL)}  (~${usd(totals.solTotalUSD)})`);
      doc.setDrawColor(210, 216, 226);
      doc.line(labelX, y - 6, right, y - 6);
      y += 4;
      row('Estimated total (USD)', usd(totals.grandUSD), true, BLUE);

      // disclaimer
      y += 14;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(...MUTE);
      const note =
        'This is a self-configured estimate. Please submit it to the LEEK team for review — final pricing is confirmed after we check scope, market conditions and current SOL price. ' +
        'A 2% base team fee is applied to the selected subtotal. SOL amounts are converted at the live rate shown above and will move with the market. "From" prices are starting points and may rise with scope. ' +
        'Capital figures (liquidity, buywalls, moneyflow) are funds deployed on-chain, not agency fees.';
      doc.text(doc.splitTextToSize(note, W - M * 2), M, y);

      // footer
      const H = doc.internal.pageSize.getHeight();
      doc.setDrawColor(...BLUE);
      doc.line(M, H - 46, W - M, H - 46);
      doc.setFontSize(8);
      doc.setTextColor(...MUTE);
      doc.text('LEEK — leeksol.online', M, H - 30);
      doc.text('Submit this quote to finalize your package.', W - M, H - 30, { align: 'right' });

      doc.save(`LEEK-Quote-${ref}.pdf`);
    } finally {
      setGenerating(false);
    }
  };

  /* ============================ RENDER ============================ */

  return (
    <div className="min-h-screen bg-[#05070d] text-slate-100 antialiased">

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(59,130,246,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[46px_46px]" />
      </div>

      <header className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 pt-14 pb-10">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_12px_2px_rgba(59,130,246,0.7)]" />
            LEEK · Package Builder
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Build your launch package.
            <span className="block text-blue-400">Priced live, in real time.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
            Select what your project needs. We split the cost into agency fees (USDC) and
            on-chain capital (SOL), convert at the current SOL price, and let you export a
            branded quote to submit back to us.
          </p>

          <div className="mt-7 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/3 px-4 py-2.5">
            <span className={`inline-block h-2 w-2 rounded-full ${priceLive ? 'bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.7)]' : 'bg-slate-500'}`} />
            <span className="text-sm text-slate-400">SOL</span>
            <span className="text-sm font-semibold tabular-nums text-white">{usd2(solPrice)}</span>
            <span className="text-xs text-slate-500">{priceLive ? 'live' : 'loading…'}</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">

          <div className="space-y-12">

            <section className="rounded-2xl border border-white/10 bg-white/2 p-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-sm font-semibold text-white">Project duration</h2>
                  <p className="mt-1 text-xs text-slate-400">Drives all monthly retainers (mod, maintenance, AEO…).</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setMonths((m) => Math.max(1, m - 1))}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/3 text-lg text-slate-300 transition hover:border-blue-500/50 hover:text-white"
                    aria-label="Decrease months"
                  >–</button>
                  <span className="w-24 text-center text-sm font-semibold tabular-nums text-white">
                    {months} month{months > 1 ? 's' : ''}
                  </span>
                  <button
                    onClick={() => setMonths((m) => Math.min(36, m + 1))}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/3 text-lg text-slate-300 transition hover:border-blue-500/50 hover:text-white"
                    aria-label="Increase months"
                  >+</button>
                </div>
              </div>
            </section>

            {CATALOG.map((cat) => (
              <section key={cat.id}>
                <div className="mb-4 flex items-baseline gap-4">
                  <span className="text-sm font-mono text-blue-500/70">{cat.num}</span>
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight text-white">{cat.title}</h2>
                    <p className="text-sm text-slate-400">{cat.blurb}</p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {cat.items.map((item) => {
                    const on = !!selected[item.id];
                    const q = qtyMap[item.id] ?? item.defaultQty ?? 1;
                    const exclusive = groupOf(item.id) !== null;
                    return (
                      <div
                        key={item.id}
                        className={`group rounded-xl border transition ${
                          on
                            ? 'border-blue-500/60 bg-blue-500/[0.07] shadow-[0_0_0_1px_rgba(59,130,246,0.2)]'
                            : 'border-white/10 bg-white/2 hover:border-white/20'
                        }`}
                      >
                        <button
                          onClick={() => toggle(item)}
                          className="flex w-full items-start gap-4 px-4 py-3.5 text-left"
                        >
                          <span
                            className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center border transition ${
                              exclusive ? 'rounded-full' : 'rounded-md'
                            } ${on ? 'border-blue-400 bg-blue-500' : 'border-white/25 bg-transparent'}`}
                          >
                            {on && (
                              <svg viewBox="0 0 16 16" className="h-3 w-3 text-white" fill="none">
                                <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </span>

                          <span className="min-w-0 flex-1">
                            <span className="flex flex-wrap items-center gap-2">
                              <span className="text-sm font-medium text-white">{item.name}</span>
                              <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                                item.settle === 'SOL' ? 'bg-cyan-500/15 text-cyan-300' : 'bg-blue-500/15 text-blue-300'
                              }`}>{item.settle}</span>
                            </span>
                            {item.desc && <span className="mt-1 block text-xs leading-relaxed text-slate-400">{item.desc}</span>}
                          </span>

                          <span className="shrink-0 text-right">
                            <span className="block text-sm font-semibold tabular-nums text-white">
                              {item.from && <span className="mr-1 text-[10px] font-normal uppercase text-slate-500">from</span>}
                              {item.unit === 'SOL' ? sol(item.price) : usd(item.price)}
                            </span>
                            <span className="block text-[11px] text-slate-500">
                              {item.billing === 'monthly' && '/ month'}
                              {item.billing === 'perDay' && '/ day'}
                              {item.billing === 'perWeek' && '/ week'}
                              {item.billing === 'perUnit' && `/ ${item.qtyLabel?.replace(/s$/, '')}`}
                            </span>
                          </span>
                        </button>

                        {on && (item.qty || item.amountEditable || item.slider || item.monthlyOptional || item.billingOptions) && (
                          <div className="flex flex-col gap-3 border-t border-white/10 px-4 py-3">
                            {item.slider && (
                              <div>
                                <div className="mb-1.5 flex items-center justify-between">
                                  <span className="text-xs text-slate-400">Budget</span>
                                  <span className="text-sm font-semibold tabular-nums text-white">
                                    {usd(amountMap[item.id] ?? item.defaultAmount ?? item.price)}
                                    {monthlyMap[item.id] && <span className="ml-1 text-[11px] font-normal text-slate-500">/ month</span>}
                                  </span>
                                </div>
                                <input
                                  type="range"
                                  min={item.slider.min} max={item.slider.max} step={item.slider.step}
                                  value={amountMap[item.id] ?? item.defaultAmount ?? item.price}
                                  onChange={(e) => setAmount(item.id, Number(e.target.value))}
                                  className="w-full cursor-pointer accent-blue-500"
                                />
                                <div className="mt-1 flex justify-between text-[10px] text-slate-500">
                                  <span>{usd(item.slider.min)}</span>
                                  <span>steps of {usd(item.slider.step)}</span>
                                  <span>{usd(item.slider.max)}</span>
                                </div>
                              </div>
                            )}

                            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                              {item.qty && (
                                <div className="flex items-center gap-2">
                                  <span className="text-xs text-slate-400 capitalize">{item.qtyLabel}</span>
                                  <div className="flex items-center gap-1">
                                    <button onClick={() => setQty(item.id, q - 1)} className="grid h-7 w-7 place-items-center rounded-md border border-white/10 bg-white/3 text-slate-300 hover:text-white">–</button>
                                    <input
                                      type="number" min={1} value={q}
                                      onChange={(e) => setQty(item.id, Number(e.target.value))}
                                      className="h-7 w-14 rounded-md border border-white/10 bg-black/30 text-center text-sm tabular-nums text-white outline-none focus:border-blue-500/60"
                                    />
                                    <button onClick={() => setQty(item.id, q + 1)} className="grid h-7 w-7 place-items-center rounded-md border border-white/10 bg-white/3 text-slate-300 hover:text-white">+</button>
                                  </div>
                                </div>
                              )}

                              {item.amountEditable && (
                                <div className="flex items-center gap-2">
                                  <span className="text-xs text-slate-400">Amount (USD)</span>
                                  <div className="flex items-center rounded-md border border-white/10 bg-black/30 px-2">
                                    <span className="text-sm text-slate-500">$</span>
                                    <input
                                      type="number" min={0} step={500}
                                      value={amountMap[item.id] ?? item.price}
                                      onChange={(e) => setAmount(item.id, Number(e.target.value))}
                                      className="h-7 w-28 bg-transparent text-right text-sm tabular-nums text-white outline-none"
                                    />
                                  </div>
                                </div>
                              )}

                              {item.monthlyOptional && (
                                <button
                                  onClick={() => setMonthly(item.id, !monthlyMap[item.id])}
                                  className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
                                    monthlyMap[item.id]
                                      ? 'border-blue-500/60 bg-blue-500/15 text-blue-200'
                                      : 'border-white/10 bg-white/3 text-slate-400 hover:text-white'
                                  }`}
                                >
                                  <span className={`inline-block h-3.5 w-6 rounded-full p-0.5 transition ${monthlyMap[item.id] ? 'bg-blue-500' : 'bg-white/20'}`}>
                                    <span className={`block h-2.5 w-2.5 rounded-full bg-white transition ${monthlyMap[item.id] ? 'translate-x-2.5' : ''}`} />
                                  </span>
                                  Bill monthly ({months}m)
                                </button>
                              )}

                              {item.billingOptions && (
                                <div className="flex items-center gap-2">
                                  <span className="text-xs text-slate-400">Billing</span>
                                  <div className="inline-flex rounded-lg border border-white/10 bg-black/30 p-0.5">
                                    {item.billingOptions.map((opt) => {
                                      const active = (billingModeMap[item.id] ?? item.billingOptions![0]) === opt;
                                      const label = opt === 'oneTime' ? 'One-time' : opt === 'monthly' ? 'Monthly' : 'Weekly';
                                      return (
                                        <button
                                          key={opt}
                                          onClick={() => setBillingMode(item.id, opt)}
                                          className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
                                            active ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                                          }`}
                                        >{label}</button>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          <aside className="lg:sticky lg:top-6 lg:h-fit">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-linear-to-b from-white/6 to-white/2">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <h2 className="text-sm font-semibold tracking-tight text-white">Quote summary</h2>
                {totals.count > 0 && (
                  <button onClick={clearAll} className="text-xs text-slate-400 transition hover:text-white">Clear</button>
                )}
              </div>

              <div className="px-5 py-4">
                {totals.count === 0 ? (
                  <p className="py-6 text-center text-sm text-slate-500">
                    Select items to build your quote.
                  </p>
                ) : (
                  <>
                    <div className="max-h-64 space-y-2 overflow-auto pr-1">
                      {totals.lines.map((l, i) => (
                        <div key={i} className="flex items-start justify-between gap-3 text-sm">
                          <span className="min-w-0">
                            <span className="block truncate text-slate-200">{l.name}</span>
                            <span className="text-[11px] text-slate-500">{l.config}</span>
                          </span>
                          <span className="shrink-0 text-right tabular-nums">
                            <span className="block text-slate-200">{usd(l.usdValue)}</span>
                            {l.settle === 'SOL' && l.solValue != null && (
                              <span className="text-[11px] text-cyan-400">{sol(l.solValue)}</span>
                            )}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="my-4 h-px bg-white/10" />

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between text-slate-400">
                        <span>Subtotal</span>
                        <span className="tabular-nums">{usd(totals.subtotalUSD)}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-400">
                        <span>Team fee (2%)</span>
                        <span className="tabular-nums">+ {usd(totals.teamFee)}</span>
                      </div>
                    </div>

                    <div className="my-3 h-px bg-white/10" />

                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start justify-between">
                        <span className="flex items-center gap-2 text-slate-400">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400" /> USDC required
                        </span>
                        <span className="text-right">
                          <span className="block font-semibold tabular-nums text-white">{usd(totals.usdcRequired)}</span>
                          <span className="text-[11px] text-slate-500">incl. team fee</span>
                        </span>
                      </div>
                      <div className="flex items-start justify-between">
                        <span className="flex items-center gap-2 text-slate-400">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" /> SOL required
                        </span>
                        <span className="text-right">
                          <span className="block font-semibold tabular-nums text-white">{sol(totals.solTotalSOL)}</span>
                          <span className="text-[11px] text-slate-500">≈ {usd(totals.solTotalUSD)}</span>
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 rounded-xl border border-blue-500/30 bg-blue-500/8 px-4 py-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wide text-blue-300">Estimated total</span>
                        <span className="text-xl font-bold tabular-nums text-white">{usd(totals.grandUSD)}</span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-400">
                        SOL converted at {usd2(solPrice)} · live rate
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div className="border-t border-white/10 px-5 py-4">
                <button
                  onClick={downloadPDF}
                  disabled={totals.count === 0 || generating}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-slate-500"
                >
                  {generating ? 'Generating…' : (
                    <>
                      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                        <path d="M10 3v9m0 0l-3.5-3.5M10 12l3.5-3.5M4 15h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Download PDF quote
                    </>
                  )}
                </button>
                <p className="mt-3 text-[11px] leading-relaxed text-slate-500">
                  This is a self-built estimate. Submit it to the LEEK team for final review —
                  prices can vary, so we confirm everything before kickoff.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-slate-500">
          LEEK · leeksol.online — figures are indicative and confirmed after review.
        </div>
      </footer>
    </div>
  );
}