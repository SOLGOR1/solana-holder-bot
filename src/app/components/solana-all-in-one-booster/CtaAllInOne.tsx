// src/components/solana-all-in-one-booster/CtaAllInOne.tsx
"use client";

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { SiTelegram } from 'react-icons/si';

const ShineEffect = () => (
  <motion.div
    className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
    initial={{ x: "-120%" }}
    animate={{ x: "120%" }}
    transition={{ duration: 2.8, ease: "easeOut", repeat: Infinity, repeatDelay: 3 }}
  />
);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.23, 1, 0.32, 1] } },
};

export default function CtaAllInOne() {
  return (
    <section className="relative py-20 overflow-hidden bg-transparent">
      {/* Premium gold glows */}
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-[550px] h-[550px] bg-transparent rounded-full blur-[90px]"
        animate={{ scale: [1.05, 0.97, 1.05] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left text */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-[-1.2px] leading-tight mb-4">
              Ready to dominate the charts?
            </h2>
            <p className="text-lg text-gray-100 max-w-md">
              Real volume + permanent holders at the same time.<br />
              Starting at just 0.15 SOL.
            </p>
          </motion.div>

          {/* Bot Logo SVG (behalten & premium aufpoliert) */}
          <motion.div variants={itemVariants} className="flex-shrink-0">
            <div className="relative w-28 h-28 md:w-32 md:h-32">
              <div className="absolute inset-0 bg-transparent rounded-[2.5rem] blur-3xl" />
              <svg
                className="w-full h-full text-white drop-shadow-[0_0_40px_#fcd34d]"
                fill="currentColor"
                viewBox="0 0 18 18"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Mega Premium CTA Button */}
        <motion.div variants={itemVariants} className="mt-12 max-w-md mx-auto">
          <Link href="https://t.me/sol_volume_holder_bot" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="group relative w-full py-6 bg-gradient-to-r from-amber-400 to-yellow-300 text-black font-bold text-1xl tracking-[-0.5px] rounded-3xl shadow-2xl shadow-amber-500/50 hover:shadow-amber-400/70 transition-all duration-500 overflow-hidden"
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.03 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                <SiTelegram className="w-8 h-8" />
                START ALL-IN-ONE BOOSTER NOW
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <ShineEffect />
              </div>
            </motion.button>
          </Link>

          <p className="text-center text-amber-300/60 text-xs mt-5 tracking-widest">
            BETA • LIMITED SLOTS • LIVE NOW
          </p>
        </motion.div>
      </div>
    </section>
  );
}