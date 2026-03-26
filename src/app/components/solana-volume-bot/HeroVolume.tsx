// src/components/solana-volume-bot/HeroVolume.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroVolume() {
  // === Google Conversion Handler für den Telegram Bot Klick ===
  const handleLaunchBot = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // verhindert die normale Navigation

    const url = "https://t.me/leektradingbot";

    const callback = () => {
      if (typeof url === "string") {
        window.location.href = url; // öffnet den Bot erst NACH dem Conversion-Event
      }
    };

    // TypeScript-sicher ohne "any" (vermeidet den ESLint-Fehler)
    const win = window as Window & {
      gtag?: (key: string, event: string, params: Record<string, unknown>) => void;
    };

    if (typeof win.gtag === "function") {
      win.gtag("event", "conversion_event_outbound_click", {
        event_callback: callback,
        event_timeout: 2000,
        // Optional: Wert pro Bot-Start (kann später angepasst werden)
        // value: 5.0,
        // currency: "EUR",
      });
    } else {
      // Fallback, falls gtag noch nicht geladen ist
      window.location.href = url;
    }
  };

  return (
    <section className="relative min-h-[70dvh] flex flex-col items-center justify-center pt-4 pb-8 text-center">
      {/* Winziger Top-Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-emerald-400/70 text-xs tracking-[3px] font-medium mb-4"
      >
        WELCOME TO SOLANAHOLDERBOT.COM
      </motion.div>

      {/* Clean H1 */}
      <h1 className="text-6xl md:text-[82px] font-bold tracking-[-1.5px] leading-none text-white drop-shadow-[0_0_35px_#10b981]">
        The Most Powerful<br />
        Volume Bot on Solana
      </h1>

      {/* === KLEINERES, CLEANES HERO-BILD === */}
      <div className="my-8 w-full max-w-[360px] px-4">
        <Image
          src="/images/volume-dexscreener-before-after.webp"
          alt="Solana Volume Bot Raydium DexScreener Trending 2026 – Before and After real on-chain volume boost with Jupiter trades"
          width={1200}
          height={675}
          priority
          sizes="(max-width: 768px) 90vw, 720px"
          className="rounded-3xl shadow-2xl shadow-emerald-950/50 border border-emerald-500/30 mx-auto"
        />
        {/* Kleiner Caption – starkes EEAT-Signal */}
        <p className="text-emerald-400/60 text-xs mt-3 tracking-wide">
          Real DexScreener results • March 2026
        </p>
      </div>

      {/* Button mit Conversion-Tracking */}
      <Link
        href="https://t.me/leektradingbot"
        onClick={handleLaunchBot}
        className="group relative mt-4 inline-flex items-center px-9 py-3 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white font-semibold text-lg rounded-2xl shadow-[0_0_35px_#34d399] hover:shadow-[0_0_55px_#67e8f9] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 overflow-hidden"
      >
        Launch Volume Bot
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%]" />
      </Link>
    </section>
  );
}