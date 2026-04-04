// app/solana-all-in-one-booster/layout.tsx
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Solana All-in-One Booster 2026 • Volume + Permanent Holders Starting at 0.15 SOL",
  description: "The ultimate Solana booster 2026: Real trading volume and permanent holders at the same time in one Telegram bot. From just 0.15 SOL • MEV protection • Wallet rotation • Live dashboard • 100% natural-looking activity.",
  
  openGraph: {
    title: "Solana All-in-One Booster 2026 – Volume + Holders in One Bot",
    description: "Real on-chain volume and permanent holders simultaneously. The most powerful Solana launch tool of 2026 starting at only 0.15 SOL.",
    url: "https://solanaholderbot.com/solana-all-in-one-booster",
    images: [{ url: "https://solanaholderbot.com/blogthumb/bestsolanaallinonebooster2026.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solana All-in-One Booster 2026 • Volume + Permanent Holders",
    images: "https://solanaholderbot.com/blogthumb/bestsolanaallinonebooster2026.png",
  },
  alternates: {
    canonical: "https://solanaholderbot.com/solana-all-in-one-booster",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AllInOneBoosterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}