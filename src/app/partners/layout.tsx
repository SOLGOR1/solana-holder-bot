// app/partners/layout.tsx
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Our Partners & Featured On Sites",
  description: "All trusted partners, DEXs, launchpads and directories where Solana Volume Bot and Holder Bot are featured in 2026. Real partnerships for real on-chain growth.",

  openGraph: {
    title: "Our Partners & Featured On – Solana Volume Bot & Holder Bot",
    description: "Discover every platform and directory that features our Solana bots. Trusted by the best DEXs and crypto directories in 2026.",
    url: "https://solanaholderbot.com/partners",
    images: [
      {
        url: "https://solanaholderbot.com/blogthumb/meme-coin-volume-bot-2026.png",
        width: 1200,
        height: 630,
        alt: "Solana Volume Bot & Holder Bot Partners 2026",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Partners & Featured On | Solana Volume Bot & Holder Bot 2026",
    images: "https://solanaholderbot.com/blogthumb/meme-coin-volume-bot-2026.png",
  },

  alternates: {
    canonical: "https://solanaholderbot.com/partners",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}