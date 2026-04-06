// app/solana-volume-bot/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solana Volume Bot 2026 • Bot starting at 0.01 SOL",
  description: "The cheapest and most powerful Solana Volume Bot for Raydium, Pump.fun, Meteora & PumpSwap. Generate real on-chain volume starting at just 0.01 SOL",
  
  openGraph: {
    title: "Solana Volume Bot 2026 – Raydium & Pump.fun Volume Booster",
    description: "Real organic trading volume on DexScreener starting at 0.005 SOL. The #1 Telegram Volume Bot of 2026.",
    url: "https://solanaholderbot.com/solana-volume-bot",
    images: [{ url: "https://solanaholderbot.com/og-volume.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solana Volume Bot 2026 • #1 Raydium & Pump.fun Booster",
    images: "https://solanaholderbot.com/og-volume.jpg",
  },
  alternates: {
    canonical: "https://solanaholderbot.com/solana-volume-bot",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function VolumeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}