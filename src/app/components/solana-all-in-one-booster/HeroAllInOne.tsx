// src/components/solana-all-in-one-booster/HeroAllInOne.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroAllInOne() {
  // === Google Conversion Handler für den Telegram Bot Klick ===
  const handleLaunchBot = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const url = "https://t.me/sol_volume_holder_bot";

    const callback = () => {
      if (typeof url === "string") {
        window.location.href = url;
      }
    };

    const win = window as Window & {
      gtag?: (key: string, event: string, params: Record<string, unknown>) => void;
    };

    if (typeof win.gtag === "function") {
      win.gtag("event", "conversion_event_outbound_click", {
        event_callback: callback,
        event_timeout: 2000,
      });
    } else {
      window.location.href = url;
    }
  };

  return (
    <section className="relative min-h-[70dvh] flex flex-col items-center justify-center pt-4 pb-8 text-center">
      {/* Winziger Top-Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-amber-400/70 text-xs tracking-[3px] font-medium mb-4"
      >
        WELCOME TO SOLANAHOLDERBOT.COM
      </motion.div>

      {/* Clean Premium H1 */}
      <h1 className="text-6xl md:text-[82px] font-bold tracking-[-1.5px] leading-none text-white drop-shadow-[0_0_35px_#fcd34d]">
        Volume + Holders
        <br />
        <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
          in One Bot
        </span>
      </h1>

      {/* Hero Bild – gleiches Bild wie im Blog */}
      <div className="my-8 w-full max-w-[360px] px-4">
        <Image
          src="/blogthumb/bestsolanaallinonebooster2026.png"
          alt="Solana All-in-One Booster 2026 – Real Volume and Permanent Holders simultaneously"
          width={1200}
          height={675}
          priority
          sizes="(max-width: 768px) 90vw, 720px"
          className="rounded-3xl shadow-2xl shadow-amber-950/50 border border-amber-400/30 mx-auto"
        />
        <p className="text-amber-400/60 text-xs mt-3 tracking-wide">
          Real results • March 2026
        </p>
      </div>

      {/* Premium CTA Button mit Conversion Tracking */}
      <Link
        href="https://t.me/sol_volume_holder_bot"
        onClick={handleLaunchBot}
        className="group relative mt-4 inline-flex items-center px-10 py-4 bg-gradient-to-r from-amber-400 to-yellow-300 text-black font-semibold text-xl rounded-3xl shadow-[0_0_40px_#fcd34d] hover:shadow-[0_0_60px_#fde047] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 overflow-hidden"
      >
        Launch All-in-One Booster
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%]" />
      </Link>
    </section>
  );
}