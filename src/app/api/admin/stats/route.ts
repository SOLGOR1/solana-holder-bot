/**
 * POST /api/admin/stats — returns analytics, but ONLY to the admin wallet.
 *
 * Security: the client signs a fresh message with the admin wallet; we verify
 * the ed25519 signature server-side. A connected wallet alone is not enough.
 *
 * Path: src/app/api/admin/stats/route.ts
 * Deps: tweetnacl, bs58
 */
import { NextRequest, NextResponse } from 'next/server';
import { getStats } from '../../../../lib/analytics';
import { verifyAdmin } from '../../../../lib/adminAuth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const auth = verifyAdmin(await req.json());
    if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });

    const stats = await getStats();
    return NextResponse.json({ ok: true, stats });
  } catch {
    return NextResponse.json({ error: 'server_error' }, { status: 500 });
  }
}