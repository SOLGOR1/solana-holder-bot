// app/solana-volume-bot/page.tsx
"use client"; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import HeroVolume from '../components/solana-volume-bot/HeroVolume';
import BannerVolume from '../components/solana-volume-bot/BannerVolume';
import ModesVolume from '../components/solana-volume-bot/ModesVolume';
import PackageVolume from '../components/solana-volume-bot/PackageVolume';
import FaqVolume from '../components/solana-volume-bot/FaqVolume';
import CtaVolume from '../components/solana-volume-bot/CtaVolume';

import Script from 'next/script';

export default function SolanaVolumeBot() {
  return (
    <>
      {/* === FULL SoftwareApplication Schema (Rich Snippets + EEAT) === */}
      <Script
        id="schema-volume-app"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Solana Volume Bot",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Telegram",
            "url": "https://www.solanaholderbot.com/solana-volume-bot",
            "description": "The strongest Solana Volume Booster 2026 for Raydium, Pump.fun & DexScreener",
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
            "screenshot": "https://www.solanaholderbot.com/og-volume.jpg",
            "featureList": [
              "Real on-chain Jupiter trades",
              "MEV protection",
              "Pause anytime",
              "100% undetectable",
              "Token-2022 & SPL support"
            ]
          }),
        }}
      />

      {/* === COMPLETE FAQPage Schema (using your exact FAQs – ready for Google rich results) === */}
      <Script
        id="schema-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the Solana Volume Bot?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A high-performance Telegram bot that generates real, organic on-chain volume on Solana DEXs. It uses Jupiter aggregation for natural buys/sells with bullish pressure, helping tokens trend on DexScreener, Birdeye and Raydium."
                }
              },
              {
                "@type": "Question",
                "name": "Is the volume real and undetectable?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes – 100% on-chain trades via real wallets and Jupiter. We maintain healthy buy/sell ratios, avoid patterns and include Jito MEV protection. No fake wallets, no wash trading – fully compliant and natural-looking."
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
                "name": "How much volume can I generate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Depends on package and pool fees, but examples: 0.1 SOL → up to 30 SOL (30 min – 1 hr); 0.5 SOL → up to 150 SOL (1–3 hr); 1 SOL → up to 300 SOL (2–5 hr); 5 SOL → up to 1500 SOL (6–12 hr); 25 SOL → up to 7500 SOL (12–36 hr)."
                }
              },
              {
                "@type": "Question",
                "name": "Will the bot automatically cause our token price to go up?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "On its own the bot provides price-neutral volume. When combined with market buyers or in a Solana uptrend phase, the bot will help push price up with volume."
                }
              },
              {
                "@type": "Question",
                "name": "Can you provide custom plans?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, contact support using the Telegram bot to start developing a detailed volume strategy, for any size project and budget."
                }
              },
              {
                "@type": "Question",
                "name": "Can I pause, resume or withdraw funds?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes – full control via Telegram at any time: pause, resume, adjust speed or withdraw remaining SOL. No lock-ins."
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
                  "text": "Payments are final and non-refundable due to on-chain nature. We recommend starting with small packages to test. Support handles exceptional cases individually."
                }
              },
              {
                "@type": "Question",
                "name": "How fast does volume appear on DexScreener/Birdeye?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Usually within minutes in Fast/Medium modes. Slow mode spreads it naturally over hours for more organic chart behavior."
                }
              }
            ]
          }),
        }}
      />

      <div className="flex flex-col min-h-screen pt-16 relative overflow-hidden">
        <Navbar />

        {/* TSUNAMI-Style Green Rising Smoke – jetzt mit richtig viel Bewegung */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
          {/* Layer 1 – großer langsamer Aufstieg */}
          <div className="absolute -bottom-40 -left-40 w-[140%] h-[140%] bg-gradient-to-br from-emerald-500/20 via-cyan-400/10 to-transparent blur-[140px] rounded-[60%] animate-[riseSlow_65s_linear_infinite]" />
          
          {/* Layer 2 – mittel, etwas schneller + leichte Rotation */}
          <div className="absolute -bottom-20 left-10 w-[110%] h-[110%] bg-gradient-to-tr from-emerald-400/15 via-transparent to-cyan-300/10 blur-[120px] rounded-[50%] animate-[riseMedium_48s_linear_infinite_4s] rotate-6" />
          
          {/* Layer 3 – kleiner, schneller, mehr Bewegung */}
          <div className="absolute bottom-10 right-20 w-[80%] h-[80%] bg-gradient-to-tl from-cyan-400/12 to-emerald-600/18 blur-[90px] rounded-[70%] animate-[riseFast_35s_linear_infinite_9s]" />
          
          {/* Feine Partikel-Dots für Tiefe */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,#10b981_0.6px,transparent_1.5px)] bg-[length:3px_3px] opacity-40" />
          
          {/* Sanfter Top-Fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/70" />
        </div>

        <HeroVolume />
        <BannerVolume />
        <ModesVolume />
        <PackageVolume />
        <FaqVolume />
        <CtaVolume />

        <Footer />
      </div>
    </>
  );
}