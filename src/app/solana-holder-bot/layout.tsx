// app/solana-holder-bot/layout.tsx
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Solana Holder Bot • #1 Holder Booster Raydium • Pump.fun • DexScreener 2026",
  description: "Solana Holder Bot – The most affordable & powerful holder booster for Raydium, Pump.fun, Meteora, and PumpSwap. Create real organic permanent holders starting at just 0.005 SOL • Live stats • Pause anytime • 100% undetectable.",
  keywords: [
    "solana holder bot",
    "holder bot solana",
    "solana holders maker",
    "holder booster solana",
    "increase solana holders",
    "raydium holder bot",
    "pump.fun holder bot",
    "meteora holder bot",
    "organic holders solana",
    "permanent holders solana",
    "cheapest solana holder bot",
    "real holders solana",
    "solana holder maker",
    "boost token holders",
    "dexscreener holders",
    "solana holder bot 2026",
  ],
  openGraph: {
    title: "Solana Holder Bot – Raydium • Pump.fun • Meteora Holder Booster 2026",
    description: "Create real, permanent holders for your Solana token and boost stats organically starting at just 0.005 SOL. The #1 Solana Holder Bot of 2026.",
    url: "https://www.solanaholderbot.com/solana-holder-bot",
    images: [{ url: "https://www.solanaholderbot.com/og-holder.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solana Holder Bot • #1 Holder Booster 2026",
    images: "https://www.solanaholderbot.com/og-holder.jpg",
  },
  alternates: { canonical: "https://www.solanaholderbot.com/solana-holder-bot" },
  robots: "index, follow",
};

export default function HolderLayout({ children }: { children: React.ReactNode }) {
  // KEIN <html> und KEIN <body> – Root-Layout übernimmt alles
  return <>{children}</>;
}