/**
 * LEEK — shared quote PDF generator
 * Path: src/lib/quotePdf.ts
 *
 * Single source of truth for the branded PDF, used by:
 *   - the configurator (app/web3/page.tsx) when a client downloads their quote
 *   - the admin dashboard (app/admin/page.tsx) to re-download any stored quote
 *
 * Deps: jspdf, jspdf-autotable (loaded dynamically on call, browser-only).
 */

export type Settle = 'USDC' | 'SOL';

export interface QuoteLine {
  name: string;
  config: string;
  settle: Settle;
  usdValue: number;
  solValue?: number | null;
}

export interface QuoteData {
  ref: string;
  date?: number;        // epoch ms shown on the PDF (defaults to now)
  months: number;
  solPrice: number;     // SOL price used for conversion
  lines: QuoteLine[];
  subtotalUSD: number;
  teamFee: number;
  usdcRequired: number;
  solTotalSOL: number;
  solTotalUSD: number;
  grandUSD: number;
}

const usd = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const usd2 = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
const sol = (n: number) => `${n.toLocaleString('en-US', { maximumFractionDigits: 1 })} SOL`;

export async function generateQuotePdf(q: QuoteData): Promise<void> {
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

  const dateMs = q.date ?? Date.now();
  doc.setTextColor(200, 210, 225);
  doc.setFontSize(9);
  doc.text(new Date(dateMs).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), W - M, 44, { align: 'right' });
  doc.text(`Quote ref: ${q.ref}`, W - M, 60, { align: 'right' });
  doc.text(`SOL @ ${usd2(q.solPrice)}`, W - M, 76, { align: 'right' });

  // table
  const body = q.lines.map((l) => [
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

  row('Subtotal (selected)', usd(q.subtotalUSD));
  row('Team fee (2%)', usd(q.teamFee));
  doc.setDrawColor(225, 230, 238);
  doc.line(labelX, y - 6, right, y - 6);
  y += 4;
  row('USDC required', usd(q.usdcRequired));
  row('SOL required', `${sol(q.solTotalSOL)}  (~${usd(q.solTotalUSD)})`);
  doc.setDrawColor(210, 216, 226);
  doc.line(labelX, y - 6, right, y - 6);
  y += 4;
  row('Estimated total (USD)', usd(q.grandUSD), true, BLUE);

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

  doc.save(`LEEK-Quote-${q.ref}.pdf`);
}