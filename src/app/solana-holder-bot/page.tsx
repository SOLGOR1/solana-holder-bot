// app/solana-holder-bot/page.tsx
"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ← Neue Holder-Components (werden später erstellt)
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
      {/* Schema Markup – jetzt für Holder Bot */}
      <Script
        id="schema-holder"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Solana Holder Bot",
            "applicationCategory": "UtilityApplication",
            "offers": { "@type": "Offer", "price": "0.005", "priceCurrency": "SOL" },
            "description": "The strongest Solana Holder Booster 2026 for Raydium, Pump.fun & DexScreener",
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

        {/* Holder Components (Platzhalter – wir bauen sie gleich nacheinander) */}
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