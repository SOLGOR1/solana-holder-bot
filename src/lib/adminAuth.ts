/**
 * LEEK — admin signature verification
 * Path: src/lib/adminAuth.ts
 *
 * Verifies that a request was signed by the admin wallet. Shared by the
 * /api/admin/* routes. Deps: tweetnacl, bs58.
 */
import nacl from 'tweetnacl';
import bs58 from 'bs58';

export const ADMIN_WALLET = 'GxtFLStH14atRjdz1VQZr395DHFbbpBkjSFwNVHwzheu';
const MAX_AGE_MS = 5 * 60 * 1000; // signed message must be < 5 minutes old

export interface AdminAuthResult {
  ok: boolean;
  status: number;
  error?: string;
}

export function verifyAdmin(body: unknown): AdminAuthResult {
  const { pubkey, message, signature } = (body ?? {}) as Record<string, unknown>;

  if (typeof pubkey !== 'string' || typeof message !== 'string' || typeof signature !== 'string') {
    return { ok: false, status: 400, error: 'bad_request' };
  }
  if (pubkey !== ADMIN_WALLET) {
    return { ok: false, status: 403, error: 'forbidden' };
  }

  const m = /ts:(\d{10,})/.exec(message);
  if (!m || Math.abs(Date.now() - Number(m[1])) > MAX_AGE_MS) {
    return { ok: false, status: 401, error: 'stale_signature' };
  }

  try {
    const valid = nacl.sign.detached.verify(
      new TextEncoder().encode(message),
      bs58.decode(signature),
      bs58.decode(pubkey),
    );
    if (!valid) return { ok: false, status: 401, error: 'invalid_signature' };
  } catch {
    return { ok: false, status: 401, error: 'invalid_signature' };
  }

  return { ok: true, status: 200 };
}