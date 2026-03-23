// app/solana-volume-bot/layout.tsx
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Solana Volume Bot 2026 • #1 Raydium & Pump.fun Volume Booster starting at 0.005 SOL",
  description: "The cheapest and most powerful Solana Volume Bot for Raydium, Pump.fun, Meteora & PumpSwap. Generate real on-chain volume starting at just 0.005 SOL • Pause anytime • 100% undetectable • Full MEV protection.",
  
  openGraph: {
    title: "Solana Volume Bot 2026 – Raydium & Pump.fun Volume Booster",
    description: "Real organic trading volume on DexScreener starting at 0.005 SOL. The #1 Telegram Volume Bot of 2026.",
    url: "https://www.solanaholderbot.com/solana-volume-bot",
    images: [{ url: "https://www.solanaholderbot.com/og-volume.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solana Volume Bot 2026 • #1 Raydium & Pump.fun Booster",
    images: "https://www.solanaholderbot.com/og-volume.jpg",
  },
  alternates: {
    canonical: "https://www.solanaholderbot.com/solana-volume-bot",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function VolumeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}