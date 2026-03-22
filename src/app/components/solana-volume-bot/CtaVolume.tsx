// src/components/solana-volume-bot/CtaVolume.tsx
"use client";

import { motion } from "framer-motion";

export default function CtaVolume() {
  return (
    <section className="py-16 md:py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-6">

        {/* Haupt-Content: Text links + Logo rechts */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mb-10 md:mb-12">

          {/* Linke Seite: Text */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Ready to dominate the charts?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl">
              Start now and see what our Solana Volume Bot can do for your project.
            </p>
          </div>

          {/* Rechte Seite: Logo */}
          <div className="flex-shrink-0">
            <svg
              className="w-20 h-20 md:w-24 md:h-24 text-white opacity-90 drop-shadow-lg"
              fill="currentColor"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
              <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
            </svg>
          </div>
        </div>

        {/* Button unten – groß, dominant, zentriert */}
        <div className="text-center">
          <motion.a
            href="https://t.me/leektradingbot"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-3 px-6 py-3
              bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400
              text-white font-semibold text-md md:text-md rounded-2xl
              shadow-[0_10px_40px_rgba(16,185,129,0.3)]
              transition-all duration-400
              hover:from-emerald-500 hover:via-emerald-400 hover:to-emerald-300
              hover:shadow-[0_15px_50px_rgba(16,185,129,0.5)]
              hover:-translate-y-1 active:scale-98
            "
            whileTap={{ scale: 0.98 }}
          >
            Launch Solana Volume Bot Now
          </motion.a>
        </div>

      </div>
    </section>
  );
}