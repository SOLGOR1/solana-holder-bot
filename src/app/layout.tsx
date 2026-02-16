// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "Solana Holder Bot – #1 Holder & Volume Bot for Solana in 2026",
    template: "%s | Solana Holder Bot", // Für Unterseiten
  },
  description:
    "Solana Holder Bot is the leading all-in-one Telegram bot suite for permanent holder creation and genuine on-chain volume boosting. The fastest, cheapest, and most reliable tools to dominate DexScreener, Pump.fun, Raydium trending charts in 2026 – starting at just 0.1 SOL, no private keys required.",
  keywords: [
    "Solana Holder Bot",
    "Solana Volume Bot",
    "solana holder bot",
    "solana volume bot",
    "permanent holders bot",
    "solana volume booster",
    "pumpfun volume bot",
    "dexscreener trending",
    "birdeye trending",
    "pumpfun trending",
    "solana trending bot",
    "solana memecoin bot",
    "solana token marketing",
    "solana holder growth",
    "real holders solana",
    "rent-exempt holders",
    "solana trading bot",
    "memecoin tools 2026",
    "solana automation",
    "telegram crypto bot",
  ],
  authors: [{ name: "Solana Holder Bot Team" }],
  creator: "Solana Holder Bot",
  publisher: "Solana Holder Bot",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.solanaholderbot.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.solanaholderbot.com",
    siteName: "Solana Holder Bot",
    title: "Solana Holder Bot – The #1 Holder & Volume Bot for Solana Memecoins in 2026",
    description:
      "Permanent holders, genuine volume boosting, and full Telegram automation – the fastest and cheapest way to reach trending on DexScreener, Pump.fun, and Raydium. Start from just 0.1 SOL.",
    images: [
      {
        url: "https://www.solanaholderbot.com/blogthumb/blogthumb2.png",
        width: 1200,
        height: 630,
        alt: "Solana Holder Bot – Permanent Holders & Genuine Volume Booster for Solana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@solanaholderbot",
    creator: "@solanaholderbot",
    title: "Solana Holder Bot – #1 Solana Holder & Volume Bot 2026",
    description:
      "The fastest, cheapest, and most reliable Telegram bots for permanent holders and real volume on Solana.",
    images: "https://www.solanaholderbot.com/blogthumb/blogthumb2.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}