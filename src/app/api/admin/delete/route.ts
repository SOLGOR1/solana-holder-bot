/**
 * POST /api/admin/delete — removes a single download entry (admin only).
 * Body: { pubkey, message, signature, ref, ts }
 *
 * Path: src/app/api/admin/delete/route.ts
 */
import { NextRequest, NextResponse } from 'next/server';
import { deleteDownload } from '../../../../lib/analytics';
import { verifyAdmin } from '../../../../lib/adminAuth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const auth = verifyAdmin(body);
    if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });

    const { ref, ts } = body as { ref?: string; ts?: number };
    if (typeof ref !== 'string' || typeof ts !== 'number') {
      return NextResponse.json({ error: 'bad_request' }, { status: 400 });
    }

    const removed = await deleteDownload(ref, ts);
    return NextResponse.json({ ok: removed });
  } catch {
    return NextResponse.json({ error: 'server_error' }, { status: 500 });
  }
}