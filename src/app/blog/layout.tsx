// src/app/blog/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Solana Holder Bot Blog: Volume & Holder Guides 2026",
    template: "%s | Solana Holder Bot",
  },
  description:
    "Expert guides, strategies, and updates on Solana Holder Bot and Solana Volume Bot – the leading tools for permanent holders, genuine volume boosting, and trending on DexScreener, Pump.fun, Raydium, and more in 2026.",
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
    "solana trending bot",
    "solana memecoin tools",
    "solana trading bot",
    "crypto blog",
    "solana blog",
    "memecoin marketing 2026",
  ],
  authors: [{ name: "Solana Holder Bot Team" }],
  creator: "Solana Holder Bot",
  publisher: "Solana Holder Bot",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://solanaholderbot.com/blog",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://solanaholderbot.com/blog",
    siteName: "Solana Holder Bot",
    title: "Solana Holder Bot Blog: Volume & Holder Guides 2026",
    description:
      "Read the latest guides, bot updates, and expert strategies for Solana Holder Bot and Volume Bot – the fastest, cheapest, and most reliable tools for memecoin success in 2026.",
    images: [
      {
        url: "https://solanaholderbot.com/blogthumb/blogthumb.png",
        width: 1200,
        height: 630,
        alt: "Solana Holder Bot Blog – Expert Solana Volume and Holder Strategies",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@solanaholderbot",
    creator: "@solanaholderbot",
    title: "Solana Holder Bot Blog – Volume & Holder Guides 2026",
    description:
      "Expert guides and updates on Solana Holder Bot & Volume Bot – dominate trending charts in 2026.",
    images: [
      {
        url: "https://solanaholderbot.com/blogthumb/blogthumb.png",
        width: 1200,
        height: 630,
        alt: "Solana Holder Bot Blog Thumbnail",
      },
    ],
  },
  // RSS als custom meta (falls du ein RSS-Feed hast)
  other: {
    "rss": "https://solanaholderbot.com/blog/rss.xml",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}