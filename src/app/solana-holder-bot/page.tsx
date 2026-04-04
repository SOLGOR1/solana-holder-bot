// app/solana-holder-bot/page.tsx
"use client"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroHolder from "../components/solana-holder-bot/HeroHolder";
import BannerHolder from "../components/solana-holder-bot/BannerHolder";
import ModesHolder from "../components/solana-holder-bot/ModesHolder";
import PackageHolder from "../components/solana-holder-bot/PackageHolder";
import FaqHolder from "../components/solana-holder-bot/FaqHolder";
import CtaHolder from "../components/solana-holder-bot/CtaHolder";

import Script from "next/script";

export default function SolanaHolderBot() {
  return (
    <>
      {/* === FULL SoftwareApplication Schema (Rich Snippets + EEAT) === */}
      <Script
        id="schema-holder-app"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Solana Holder Bot",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Telegram",
            "url": "https://solanaholderbot.com/solana-holder-bot",
            "description": "The strongest Solana Holder Booster 2026 for Raydium, Pump.fun & DexScreener",
            "offers": {
              "@type": "Offer",
              "price": "0.005",
              "priceCurrency": "SOL",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2100"
            },
            "author": {
              "@type": "Organization",
              "name": "Solana Holder Bot",
              "url": "https://www.solanaholderbot.com"
            },
            "screenshot": "https://solanaholderbot.com/og-holder.jpg",
            "featureList": [
              "Real permanent on-chain holders",
              "MEV protection",
              "Pause anytime",
              "100% undetectable",
              "Token-2022 & SPL support"
            ]
          }),
        }}
      />

      {/* === COMPLETE FAQPage Schema (using the exact live FAQs from the page – ready for Google rich results) === */}
      <Script
        id="schema-faq-holder"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the Solana Holder Bot?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A high-performance Telegram bot that creates real, permanent holders on Solana. It uses real organic wallets to boost your token on Raydium, Pump.fun, Meteora and DexScreener – instantly increasing holder count and social proof."
                }
              },
              {
                "@type": "Question",
                "name": "Are the holders real and permanent?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "100% real and permanent. Every wallet is a unique, on-chain Solana address that holds your token forever. No fake wallets, no wash trading – fully organic and compliant with natural market behavior."
                }
              },
              {
                "@type": "Question",
                "name": "Which platforms and tokens are supported?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Works natively with Raydium, Pump.fun, Meteora, Jupiter, Orca, Kamino, PumpSwap, Bonk.fun, Bags.fm and all major Solana DEXs/launchpads. Supports both SPL and Token-2022 standards."
                }
              },
              {
                "@type": "Question",
                "name": "Is it safe? Do you need private keys?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Completely safe. We never ask for private keys, seed phrases or wallet connections. All actions are user-initiated via Telegram, transactions are transparent on-chain and protected by MEV shielding."
                }
              },
              {
                "@type": "Question",
                "name": "How many holders can I get?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Depends on your package – here are real examples: Test Drive (0.1 SOL) → 10 holders (~30 seconds); Start Boost (0.15 SOL) → 50 holders (~1 minute); Super Boost (0.25 SOL) → 100 holders (~2 minutes); Massive Growth (1.5 SOL) → 500 holders (~5 minutes)."
                }
              },
              {
                "@type": "Question",
                "name": "Will the bot automatically increase my token price?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The bot itself focuses on holder growth and social proof. When combined with real market buying or during a Solana uptrend, the increased holder count and visibility often help push the price upward."
                }
              },
              {
                "@type": "Question",
                "name": "Can you provide custom holder plans?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes – contact support via Telegram. We can create any size package (1,000+ holders) tailored to your budget and goals."
                }
              },
              {
                "@type": "Question",
                "name": "Can I pause, resume or withdraw funds?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes – full control via Telegram at any time: pause, resume, add more tokens or withdraw remaining SOL. No lock-ins, no commitments."
                }
              },
              {
                "@type": "Question",
                "name": "What payment methods are accepted?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Only SOL. Each session creates a unique one-time payment address. No wallet connections or approvals required."
                }
              },
              {
                "@type": "Question",
                "name": "Are there any refunds?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Payments are final due to the on-chain nature. We recommend starting with the Test Drive package to see results first. Support handles exceptional cases individually."
                }
              },
              {
                "@type": "Question",
                "name": "How fast do holders appear on DexScreener?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Holders appear within seconds after starting the bot. The Super Boost package usually shows 100+ holders in under 2 minutes."
                }
              }
            ]
          }),
        }}
      />

      <div className="flex flex-col min-h-screen pt-16 relative overflow-hidden">
        <Navbar />

        {/* TSUNAMI-Style Hintergrund – JETZT BLAU (cyan + blue) */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
          {/* Layer 1 – großer langsamer Aufstieg */}
          <div className="absolute -bottom-40 -left-40 w-[140%] h-[140%] bg-gradient-to-br from-cyan-500/20 via-blue-400/10 to-transparent blur-[140px] rounded-[60%] animate-[riseSlow_65s_linear_infinite]" />

          {/* Layer 2 – mittel, etwas schneller + leichte Rotation */}
          <div className="absolute -bottom-20 left-10 w-[110%] h-[110%] bg-gradient-to-tr from-cyan-400/15 via-transparent to-blue-300/10 blur-[120px] rounded-[50%] animate-[riseMedium_48s_linear_infinite_4s] rotate-6" />

          {/* Layer 3 – kleiner, schneller, mehr Bewegung */}
          <div className="absolute bottom-10 right-20 w-[80%] h-[80%] bg-gradient-to-tl from-blue-400/12 to-cyan-600/18 blur-[90px] rounded-[70%] animate-[riseFast_35s_linear_infinite_9s]" />

          {/* Feine Partikel-Dots für Tiefe */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,#22d3ee_0.6px,transparent_1.5px)] bg-[length:3px_3px] opacity-40" />

          {/* Sanfter Top-Fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/70" />
        </div>

        <HeroHolder />
        <BannerHolder />
        <ModesHolder />
        <PackageHolder />
        <FaqHolder />
        <CtaHolder />

        <Footer />
      </div>
    </>
  );
}