"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { SiTelegram } from 'react-icons/si';
import { FaUsers, FaShieldAlt, FaCoins, FaChartLine, FaExchangeAlt, } from 'react-icons/fa';

export default function Header() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const ShineEffect = () => (
    <div className="pointer-events-none absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-linear" />
  );

  return (
    <header className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      {/* Ultra-minimal background glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(59,130,246,0.06)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(34,197,94,0.06)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Subtle centered mascot in background */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.5 }}
        >
          <Image
            src="/solholderbot.png"
            alt="Solana Growth Mascot"
            width={900}
            height={900}
            className="drop-shadow-2xl opacity-35"
            priority
          />
        </motion.div>

        {/* Grid mit zwei Hauptspalten */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Glass Container – Holder Bot */}
          <motion.div className="lg:col-span-5 lg:col-start-1" variants={itemVariants}>
            <div className="relative p-10 lg:p-12 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl">
              {/* Logo Circle – immer zentriert (Mobile + Desktop) */}
              <div className="relative mx-auto w-36 h-36 mb-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 opacity-30 blur-xl" />
                <div className="relative w-full h-full rounded-full bg-black/50 border-4 border-blue-500/50 p-4 flex items-center justify-center">
                  <Image
                    src="/holderbot.png"
                    alt="Solana Holder Bot"
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center border-4 border-black">
                    <SiTelegram className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Alles zentriert (auch auf Desktop) */}
              <div className="space-y-8 text-center">
                <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
                  <span className="block text-gray-400">Solana</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500 font-normal">
                    Holder Bot
                  </span>
                </h2>

                <p className="text-lg lg:text-xl text-gray-400 leading-relaxed">
                  Permanently boost your holder count with authentic Solana wallets. Rise to the top of every major ranking.
                </p>

                <ul className="space-y-6">
                  <li className="flex items-center justify-center gap-5">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <FaUsers className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-gray-300">Real & Permanent Holders</span>
                  </li>
                  <li className="flex items-center justify-center gap-5">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <FaShieldAlt className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-gray-300">Fully Automated & Secure</span>
                  </li>
                  <li className="flex items-center justify-center gap-5">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center ring-4 ring-blue-400/30">
                      <FaCoins className="w-7 h-7 text-blue-300" />
                    </div>
                    <span className="text-xl font-semibold text-white">Start from just 0.1 SOL</span>
                  </li>
                </ul>
              </div>

              {/* Button – zentriert, neuer permanenter + Hover-Effekt */}
              <Link href="https://t.me/Degen_wg_bot">
                <motion.button
                  className="group relative mt-12 w-full max-w-md mx-auto px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-medium text-lg 
                  border-2 border-blue-400/60 
                  shadow-2xl shadow-blue-500/30 
                  transition-all duration-400 ease-out
                  hover:border-blue-800/80 
                  hover:shadow-2xl hover:shadow-blue-500/60 
                  hover:ring-4 hover:ring-blue-400/40
                  overflow-hidden"
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Launch Holder Bot
                  
                  </span>
                  <ShineEffect />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Glass Container – Volume Bot */}
          <motion.div className="lg:col-span-5 lg:col-start-8" variants={itemVariants}>
            <div className="relative p-10 lg:p-12 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl">
              {/* Logo Circle – immer zentriert */}
              <div className="relative mx-auto w-36 h-36 mb-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-green-600 opacity-30 blur-xl" />
                <div className="relative w-full h-full rounded-full bg-black/50 border-4 border-green-500/50 p-4 flex items-center justify-center">
                  <Image
                    src="/volumebot.png"
                    alt="Solana Volume Bot"
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-green-600 flex items-center justify-center border-4 border-black">
                    <SiTelegram className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Alles zentriert (auch auf Desktop) */}
              <div className="space-y-8 text-center">
                <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
                  <span className="block text-gray-400">Solana</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500 font-normal">
                    Volume Bot
                  </span>
                </h2>

                <p className="text-lg lg:text-xl text-gray-400 leading-relaxed">
                  Create genuine on-chain trading volume. Dominate trending charts across all major platforms.
                </p>

                <ul className="space-y-6">
                  <li className="flex items-center justify-center gap-5">
                    <span className="text-gray-300">Explosive Real Volume</span>
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <FaChartLine className="w-6 h-6 text-green-400" />
                    </div>
                  </li>
                  <li className="flex items-center justify-center gap-5">
                    <span className="text-gray-300">100% On-Chain Trades</span>
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <FaExchangeAlt className="w-6 h-6 text-green-400" />
                    </div>
                  </li>
                  <li className="flex items-center justify-center gap-5">
                    <span className="text-xl font-semibold text-white">Start from just 0.1 SOL</span>
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center ring-4 ring-green-400/30">
                      <FaCoins className="w-7 h-7 text-green-300" />
                    </div>
                  </li>
                </ul>
              </div>

              {/* Button – zentriert, gleicher neuer Effekt (grün) */}
              <Link href="https://t.me/leektradingbot">
                <motion.button
                  className="group relative mt-12 w-full max-w-md mx-auto px-12 py-5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl font-medium text-lg 
                  border-2 border-green-400/60 
                  shadow-2xl shadow-green-500/30 
                  transition-all duration-400 ease-out
                  hover:border-green-800/80 
                  hover:shadow-2xl hover:shadow-green-500/60 
                  hover:ring-4 hover:ring-green-400/40
                  overflow-hidden"
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Launch Volume Bot
                  </span>
                  <ShineEffect />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-32 lg:mt-40 space-y-10 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          <h1 className="text-5xl lg:text-6xl font-light tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
              Premium Solana Growth Suite
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Authentic holders. Massive real volume. Simple Telegram interface. Engineered for moonshots.
          </p>

          <motion.button
            onClick={openVideo}
            className="mt-6 mb-6 border border-gray-700/50 text-white px-14 py-5 rounded-2xl font-medium text-lg hover:bg-white/10 hover:border-gray-600 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Demo
          </motion.button>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-6xl w-full bg-black rounded-3xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              <button
                onClick={closeVideo}
                className="absolute top-8 right-8 z-10 text-white/70 hover:text-white text-4xl transition-colors"
              >
                ×
              </button>
              <div className="aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/7jdOvbVwZeI?autoplay=1"
                  title="Solana Holder Bot Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}