// app/solana-holder-bot/layout.tsx
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Solana Volume Bot – Pump.fun & Raydium Volume Booster",
  description: "The cheapest and most powerful Solana Holder Bot for Raydium, Pump.fun, Meteora & PumpSwap. Create real, permanent organic holders starting at just 0.1 SOL",
  
  openGraph: {
    title: "Solana Volume Bot – Pump.fun & Raydium Volume Booster",
    description: "Real permanent holders and social proof for your Solana token starting at 0.1 SOL. The #1 Telegram Holder Bot of 2026.",
    url: "https://solanaholderbot.com/solana-holder-bot",
    images: [{ url: "https://solanaholderbot.com/og-holder.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solana Holder Bot 2026 • #1 Raydium & Pump.fun Holder Booster",
    images: "https://solanaholderbot.com/og-holder.jpg",
  },
  alternates: {
    canonical: "https://solanaholderbot.com/solana-holder-bot",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HolderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}