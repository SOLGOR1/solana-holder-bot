// app/solana-volume-bot/layout.tsx
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Solana Volume Bot • #1 Volume Booster Raydium • Pump.fun • DexScreener 2026",
  description: "Solana Volume Bot – The most affordable & powerful volume booster for Raydium, Pump.fun, Meteora, and PumpSwap. Real organic volume starting at 0.005 SOL • Live stats • Pause anytime • 100% undetectable.",
  keywords: [
    "solana volume bot", "sol volume bot", "solana volume booster", "volume bot solana",
    "raydium volume bot", "pump.fun volume bot", "meteora volume bot", "dexscreener volume booster",
    "solana volume generator", "cheapest solana volume bot", "organic volume solana", "solana trading volume bot 2026"
  ],
  openGraph: {
    title: "Solana Volume Bot – Raydium • Pump.fun • Meteora Volume Booster 2026",
    description: "Generate real trading volume and identify trends on DexScreener starting at just 0.005 SOL. The #1 Solana Volume Bot of 2026.",
    url: "https://www.solanaholderbot.com/solana-volume-bot",
    images: [{ url: "https://www.solanaholderbot.com/og-volume.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Solana Volume Bot • #1 Volume Booster 2026", images: "https://www.solanaholderbot.com/og-volume.jpg" },
  alternates: { canonical: "https://www.solanaholderbot.com/solana-volume-bot" },
  robots: "index, follow",
};

export default function VolumeLayout({ children }: { children: React.ReactNode }) {
  // KEIN <html> und KEIN <body> mehr hier!
  // Das übernimmt automatisch das Root-Layout.
  return <>{children}</>;
}