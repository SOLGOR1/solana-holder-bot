// src/components/solana-holder-bot/HeroHolder.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroHolder() {
  return (
    <section className="relative min-h-[70dvh] flex flex-col items-center justify-center pt-4 pb-4 text-center">
      {/* Winziger Top-Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-cyan-400/70 text-xs tracking-[3px] font-medium mb-4"
      >
        WELCOME TO SOLANAHOLDERBOT.COM
      </motion.div>

      {/* Clean H1 – jetzt Holder Bot + starker Cyan-Glow */}
      <h1 className="text-6xl md:text-[82px] font-bold tracking-[-1.5px] leading-none text-white drop-shadow-[0_0_35px_#22d3ee]">
        The Most Powerful<br />
        Holder Bot on Solana
      </h1>

      {/* Button – komplett in Cyan/Blau (Holder-Branding) */}
      <Link
        href="https://t.me/Degen_wg_bot"
        className="group relative mt-9 inline-flex items-center px-9 py-3 bg-gradient-to-r from-cyan-500 to-cyan-700 text-white font-semibold text-lg rounded-2xl shadow-[0_0_35px_#22d3ee] hover:shadow-[0_0_55px_#67e8f9] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 overflow-hidden"
      >
        Launch Holder Bot
        {/* Kontrollierter Shine – jetzt cyan */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%]" />
      </Link>
    </section>
  );
}