'use client';

/**
 * Solana wallet providers for solanaholderbot.com
 * Path: src/app/providers/WalletProviders.tsx
 *
 * Wraps the app so any client component (e.g. the admin dashboard) can use
 * useWallet() and the WalletMultiButton. Major wallets (Phantom, Solflare, …)
 * auto-register via the Wallet Standard, so the `wallets` array can stay empty.
 *
 * The admin gate only signs a message (no on-chain reads), so the RPC endpoint
 * isn't critical — but set NEXT_PUBLIC_SOLANA_RPC to your own RPC if you have one,
 * since the public endpoint is heavily rate-limited.
 */

import { ReactNode, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// wallet-adapter modal/button styles (import once, globally)
import '@solana/wallet-adapter-react-ui/styles.css';

export default function WalletProviders({ children }: { children: ReactNode }) {
  const endpoint = useMemo(
    () => process.env.NEXT_PUBLIC_SOLANA_RPC || clusterApiUrl('mainnet-beta'),
    [],
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}