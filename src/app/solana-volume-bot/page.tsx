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
import { motion } from 'framer-motion';   // ← Fix für die Errors!


export default function SolanaVolumeBot() {
  return (
    <>
      {/* Schema Markup */}
      <Script
        id="schema-volume"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Solana Volume Bot",
            "applicationCategory": "UtilityApplication",
            "offers": { "@type": "Offer", "price": "0.005", "priceCurrency": "SOL" },
            "description": "The strongest Solana Volume Booster 2026 for Raydium, Pump.fun & DexScreener",
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