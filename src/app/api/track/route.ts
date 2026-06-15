/**
 * POST /api/track  — public, called by the configurator (anonymous users).
 * Logs visits, item selections and PDF download snapshots.
 * Always returns 200 so it can never break the client experience.
 *
 * Path: src/app/api/track/route.ts
 * If you have the "@/*" -> "src/*" alias, you can import from '@/lib/analytics'.
 */
import { NextRequest, NextResponse } from 'next/server';
import { recordVisit, recordSelect, recordDownload, type DownloadSnapshot } from '../../../lib/analytics';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    switch (body?.type) {
      case 'visit':
        await recordVisit();
        break;

      case 'select':
        if (body.id && body.name && body.category) {
          await recordSelect({ id: String(body.id), name: String(body.name), category: String(body.category) });
        }
        break;

      case 'download':
        if (body.snapshot) {
          const s = body.snapshot as Partial<DownloadSnapshot>;
          await recordDownload({
            ref: String(s.ref ?? ''),
            ts: Date.now(),
            months: Number(s.months ?? 0),
            itemCount: Number(s.itemCount ?? 0),
            usdc: Number(s.usdc ?? 0),
            solSOL: Number(s.solSOL ?? 0),
            solUsd: Number(s.solUsd ?? 0),
            teamFee: Number(s.teamFee ?? 0),
            grandUSD: Number(s.grandUSD ?? 0),
            items: Array.isArray(s.items) ? s.items.slice(0, 60) : [],
          });
        }
        break;
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}