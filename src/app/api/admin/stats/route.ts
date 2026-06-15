/**
 * POST /api/admin/stats — returns analytics, but ONLY to the admin wallet.
 *
 * Security: the client signs a fresh message with the admin wallet; we verify
 * the ed25519 signature server-side with tweetnacl. A connected wallet alone is
 * not enough — the signature proves ownership of the private key.
 *
 * Path: src/app/api/admin/stats/route.ts
 * Deps: npm i tweetnacl bs58
 */
import { NextRequest, NextResponse } from 'next/server';
import nacl from 'tweetnacl';
import bs58 from 'bs58';
import { getStats } from '../../../../lib/analytics';

const ADMIN_WALLET = 'GxtFLStH14atRjdz1VQZr395DHFbbpBkjSFwNVHwzheu';
const MAX_AGE_MS = 5 * 60 * 1000; // signed message must be < 5 minutes old

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { pubkey, message, signature } = await req.json();

    if (typeof pubkey !== 'string' || typeof message !== 'string' || typeof signature !== 'string') {
      return NextResponse.json({ error: 'bad_request' }, { status: 400 });
    }
    if (pubkey !== ADMIN_WALLET) {
      return NextResponse.json({ error: 'forbidden' }, { status: 403 });
    }

    // freshness: message embeds "ts:<epoch_ms>"
    const m = /ts:(\d{10,})/.exec(message);
    if (!m || Math.abs(Date.now() - Number(m[1])) > MAX_AGE_MS) {
      return NextResponse.json({ error: 'stale_signature' }, { status: 401 });
    }

    const ok = nacl.sign.detached.verify(
      new TextEncoder().encode(message),
      bs58.decode(signature),
      bs58.decode(pubkey),
    );
    if (!ok) {
      return NextResponse.json({ error: 'invalid_signature' }, { status: 401 });
    }

    const stats = await getStats();
    return NextResponse.json({ ok: true, stats });
  } catch {
    return NextResponse.json({ error: 'server_error' }, { status: 500 });
  }
}