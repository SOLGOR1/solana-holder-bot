// src/components/Header1.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaTelegramPlane, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import BotAnime from "./BotAnime";

const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ?!@#$%^&*()_+-=[]{}|;:'\",.<>?/0123456789";

const finalText = "Solana Holder & Volume Bot";

const ScrambleText = () => {
  const [displayText, setDisplayText] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const scramble = () => {
      setDisplayText(
        finalText
          .split("")
          .map(() => scrambleChars[Math.floor(Math.random() * scrambleChars.length)])
          .join("")
      );
    };

    scramble();
    const t1 = setTimeout(scramble, 40);
    const t2 = setTimeout(() => setDisplayText(finalText), 180);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!mounted) {
    return (
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white text-center">
        {finalText}
      </h1>
    );
  }

  return (
    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white text-center">
      {displayText}
    </h1>
  );
};

const ShineEffect = () => (
  <motion.div
    className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
    initial={{ x: "-100%" }}
    animate={{ x: "100%" }}
    transition={{ duration: 2, ease: "easeOut", repeat: Infinity, repeatDelay: 3 }}
  />
);

export default function Header1() {
  return (
    <section id="header" className="relative bg-black py-2 md:py-5 overflow-hidden">
      {/* === OPTIMIERTE HINTERGRUND-GLOWS (CLS-FIX) === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cyan Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl will-change-transform"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "center center" }}
        />
        
        {/* Emerald Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl will-change-transform"
          animate={{ scale: [1.05, 0.98, 1.05] }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "center center" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-2 md:px-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl px-6 md:px-12 py-12 md:py-16 text-center"
        >
          {/* Top Rated Badge */}
          <div className="inline-block mb-8 px-5 py-2 bg-green-900/40 border border-green-700/50 rounded-full text-green-400 text-xs uppercase tracking-widest font-medium">
            Top Rated Bot 2026
          </div>

          {/* Logo + Title */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-10">
            <Link href="/" className="flex-shrink-0 order-2 md:order-1">
              <svg
                className="w-16 h-16 md:w-20 md:h-20 text-white"
                fill="currentColor"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Solana Holder & Volume Bot Logo"
              >
                <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
              </svg>
            </Link>

            <div className="order-1 md:order-2">
              <ScrambleText />
            </div>
          </div>

          {/* Beschreibung */}
          <p className="text-base md:text-xl font-bold text-gray-100 max-w-3xl mx-auto mb-12 leading-relaxed px-4">
            Boost your Solana volume, makers, and holders with the cheapest, most organic DEX-trending bot, delivering an unmatched, user-friendly Telegram experience for effortless growth.
          </p>

          {/* === HAUPT-BUTTONS (TG) – bleiben für maximale Conversion === */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <motion.a
              href="https://t.me/Degen_wg_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-white/10 backdrop-blur-md text-white font-medium rounded-2xl border border-white/20 shadow-lg overflow-hidden transition-all duration-500 hover:bg-white/20 hover:border-white/40 hover:shadow-xl hover:ring-4 hover:ring-blue-400/20"
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <FaTelegramPlane className="w-5 h-5" />
                Launch Holder Bot
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                <ShineEffect />
              </div>
            </motion.a>

            <motion.a
              href="https://t.me/leektradingbot"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-white/10 backdrop-blur-md text-white font-medium rounded-2xl border border-white/20 shadow-lg overflow-hidden transition-all duration-500 hover:bg-white/20 hover:border-white/40 hover:shadow-xl hover:ring-4 hover:ring-green-400/20"
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <FaTelegramPlane className="w-5 h-5" />
                Launch Volume Bot
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                <ShineEffect />
              </div>
            </motion.a>
          </div>

          {/* === NEU: STYLISH INTERNE LINKS (SEO-Boost) – direkt darunter === */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
            <Link
              href="/solana-holder-bot"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/30 hover:border-emerald-400 rounded-2xl transition-all duration-300 hover:shadow-[0_0_25px_#10b98130] text-emerald-400 font-medium"
            >
              <span>Discover Solana Holder Bot</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>

            <Link
              href="/solana-volume-bot"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/30 hover:border-emerald-400 rounded-2xl transition-all duration-300 hover:shadow-[0_0_25px_#10b98130] text-emerald-400 font-medium"
            >
              <span>Discover Solana Volume Bot</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Kleiner Hinweis unter den Links */}
          <p className="text-[11px] text-gray-100 mt-4">
            Detailed features, pricing &amp; real examples on the dedicated pages
          </p>

          {/* Solana + Safety */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mt-14">
            <div className="relative h-10 w-[200px]">
              <Image
                src="https://solana.com/src/img/branding/solanaLogo.svg"
                alt="Powered by Solana"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex items-center gap-2.5 bg-green-900/40 px-5 py-2.5 rounded-full text-green-400 text-sm font-medium border border-green-700/50">
              <FaShieldAlt className="w-5 h-5" />
              <span>We Never Ask for Private Keys</span>
            </div>
          </div>
        </motion.div>

        <BotAnime />
      </div>
    </section>
  );
}