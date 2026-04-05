"use client";

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { SiTelegram } from 'react-icons/si';
import { FaFire, FaChartLine, FaUsers, FaBolt, FaPauseCircle, FaRobot, FaGlobe } from 'react-icons/fa';

export default function AllInOneBooster() {
  const ShineEffect = () => (
    <motion.div
      className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"  // opacity von 20% auf 10% reduziert
      initial={{ x: "-120%" }}
      animate={{ x: "120%" }}
      transition={{ duration: 3, ease: "easeOut", repeat: Infinity, repeatDelay: 4 }}
    />
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.08, delayChildren: 0.1 } 
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.85, ease: [0.23, 1, 0.32, 1] } 
    },
  };

  return (
    <section className="relative bg-black py-16 overflow-hidden">
      {/* Ultra-premium layered gold glows */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[650px] h-[650px] bg-gradient-to-br from-amber-400/8 to-transparent rounded-full blur-[90px]"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-[520px] h-[520px] bg-gradient-to-br from-yellow-300/6 to-transparent rounded-full blur-[80px]"
        animate={{ scale: [1.04, 0.98, 1.04] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 lg:px-40 max-w-8xl relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-4 lg:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left content – premium tight layout */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-3xl bg-gradient-to-r from-amber-400/10 to-yellow-300/10 border border-amber-400/25 text-amber-200 text-sm font-semibold tracking-[0.5px] uppercase"
            >
              <FaFire className="text-lg animate-pulse" />
              LIVE BETA • NOW AVAILABLE
            </motion.div>

            <motion.h3
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold tracking-[-1.5px] leading-[1.05] text-white mb-3"
            >
              Volume + Holder
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
                All-in-One Booster
              </span>
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-base text-gray-100 max-w-md lg:max-w-none mx-auto lg:mx-0 leading-relaxed"
            >
              Real trading volume and permanent holders — at the same time.<br />
              Starting from just 0.15 SOL. The most powerful Solana launch tool of 2026.
            </motion.p>

            {/* Super tight feature grid */}
            <motion.div
              variants={itemVariants}
              className="mt-9 grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 text-left"
            >
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-2xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <FaChartLine className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-sm">
                  <p className="text-white font-medium">Volume + Holders simultaneously</p>
                  <p className="text-gray-100 text-xs">One bot. Two powerful effects.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-2xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <FaUsers className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-sm">
                  <p className="text-white font-medium">Authentic wallets</p>
                  <p className="text-gray-100 text-xs">Natural organic growth</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-2xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <FaBolt className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-sm">
                  <p className="text-white font-medium">Sub-second execution</p>
                  <p className="text-gray-100 text-xs">Full MEV protection</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-2xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <FaPauseCircle className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-sm">
                  <p className="text-white font-medium">Pause anytime</p>
                  <p className="text-gray-100 text-xs">Total control</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-2xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <FaRobot className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-sm">
                  <p className="text-white font-medium">Telegram full-auto</p>
                  <p className="text-gray-100 text-xs">One click to launch</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-2xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <FaGlobe className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-sm">
                  <p className="text-white font-medium">Multi-DEX ready</p>
                  <p className="text-gray-100 text-xs">Perfect for any token</p>
                </div>
              </div>
            </motion.div>

            {/* Elegant price */}
            <motion.div
              variants={itemVariants}
              className="mt-7 flex items-center justify-center lg:justify-start gap-3 text-amber-200"
            >
              <span className="uppercase text-xs font-medium tracking-widest text-gray-100">Starting at</span>
              <div className="px-5 py-2 bg-white/5 border border-amber-400/25 rounded-3xl font-semibold text-xl flex items-center gap-2">
                <FaFire className="text-amber-400" />
                0.15 SOL
              </div>
            </motion.div>
          </div>

          {/* Right visual – premium orb with refined animation */}
          <motion.div
            variants={itemVariants}
            className="flex-1 flex justify-center lg:justify-end lg:-ml-50"
          >
            <div className="relative w-64 h-64 lg:w-64 lg:h-64">
              {/* Soft outer glow layer */}
              <motion.div
                className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-amber-400/15 to-yellow-300/8"
                animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Main premium orb */}
              <div className="relative w-full h-full rounded-[3rem] bg-gradient-to-br from-black/95 to-black border border-amber-400/30 flex items-center justify-center shadow-2xl overflow-hidden">
                {/* Animated Telegram icon – very subtle luxury movement */}
                <motion.div
                  className="text-8xl text-amber-300 drop-shadow-[0_0_40px_#fcd34d]"
                  animate={{ y: [0, -6, 0], rotate: [0, 6, -6, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <SiTelegram />
                </motion.div>

                {/* Tiny LIVE badge inside orb */}
                <div className="absolute top-6 left-6 bg-emerald-400 text-black text-[10px] font-bold px-3 py-1 rounded-2xl tracking-widest shadow-inner">
                  LIVE
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Elegant compact CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-10 max-w-md mx-auto"
        >
          <Link href="https://t.me/sol_volume_holder_bot" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="group relative w-full py-5 bg-gradient-to-r from-amber-400 to-yellow-300 text-black font-bold text-xl tracking-[-0.5px] rounded-3xl shadow-xl shadow-amber-500/30 hover:shadow-amber-400/40 transition-all duration-500 overflow-hidden"
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.03 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <SiTelegram className="w-6 h-6" />
                START ALL-IN-ONE BOOSTER NOW
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <ShineEffect />
              </div>
            </motion.button>
          </Link>

          <p className="text-center text-amber-300/60 text-xs mt-4 tracking-widest">
            BETA • LIMITED SLOTS • LIVE NOW
          </p>
        </motion.div>
      </div>
    </section>
  );
}