"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { SiTelegram } from 'react-icons/si';
import { FaUsers, FaShieldAlt, FaCoins, FaChartLine, FaExchangeAlt, FaBolt, FaEye, FaPauseCircle, FaLock, FaWallet, FaClock, FaChartBar, FaRobot, FaGlobe, FaKey } from 'react-icons/fa';

export default function WhyChoose() {
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
    <motion.div
      className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      initial={{ x: "-100%" }}
      animate={{ x: "100%" }}
      transition={{ duration: 2, ease: "easeOut", repeat: Infinity, repeatDelay: 3 }}
    />
  );

  return (
    <section className="relative bg-black py-16 overflow-hidden">
      {/* Super dezenter Hintergrund – sanft pulsierende zentrale Blobs */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl"
        animate={{ scale: [1.1, 0.95, 1.1] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        {/* Titel und Subtext */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Why Choose Solana Holder Volume Bot?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Unmatched volume and holder generation at the lowest price, starting at 0.1 SOL so that even small projects have a chance to stand out.
          </p>
        </motion.div>

        {/* Grid mit zwei Glass Containern – zentriert und schmaler */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Glass Container – Solana Holder Bot */}
            <motion.div variants={itemVariants} className="max-w-md mx-auto w-full">
              <div className="relative p-4 md:p-6 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl">
                {/* Logo Circle – zentriert */}
                <div className="relative mx-auto w-20 h-20 mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 opacity-30 blur-xl" />
                  <div className="relative w-full h-full rounded-full bg-black/50 border-4 border-blue-500/50 p-2 flex items-center justify-center">
                    <Image
                      src="/holderbot.png"
                      alt="Solana Holder Bot"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center border-2 border-black">
                      <SiTelegram className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    Solana Holder Bot
                  </h3>

                  <p className="text-sm md:text-md text-gray-400 leading-relaxed">
                    Permanently boost your holder count with authentic Solana wallets. Rise to the top of every major ranking.
                  </p>

                  <ul className="space-y-2 text-left max-w-xs mx-auto">
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <FaUsers className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Creates Permanent Holders</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <FaShieldAlt className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Supports SPL and Token 2022 Standard</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <FaWallet className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Authentic Wallet Diversity for Natural Growth</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <FaClock className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Real Holder Addition to Mimic Organic Interest</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <FaChartBar className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Real-Time Holder Analytics and Growth Tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <FaRobot className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Fully Automated Setup with Telegram Integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <FaGlobe className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Multi-DEX and Launchpad Compatibility</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <FaKey className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Enhanced Security: No Private Key Access Required</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <FaShieldAlt className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Predictive Ranking Impact Analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center ring-2 ring-blue-400/30">
                        <FaCoins className="w-3 h-3 text-blue-300" />
                      </div>
                      <span className="text-sm font-semibold text-white">Start from just 0.1 SOL</span>
                    </li>
                  </ul>
                </div>

                {/* Button */}
                <Link href="https://t.me/Degen_wg_bot">
                  <motion.button
                    className="group relative mt-6 w-full px-6 py-2 bg-white/10 backdrop-blur-md text-white font-medium rounded-2xl border border-white/20 shadow-lg overflow-hidden transition-all duration-500 hover:bg-white/20 hover:border-white/40 hover:shadow-xl hover:ring-4 hover:ring-blue-400/20"
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                      <SiTelegram className="w-4 h-4" />
                      Launch Holder Bot
                    </span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                      <ShineEffect />
                    </div>
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Glass Container – Solana Volume Bot */}
            <motion.div variants={itemVariants} className="max-w-md mx-auto w-full">
              <div className="relative p-4 md:p-6 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl">
                {/* Logo Circle – zentriert */}
                <div className="relative mx-auto w-20 h-20 mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-green-600 opacity-30 blur-xl" />
                  <div className="relative w-full h-full rounded-full bg-black/50 border-4 border-green-500/50 p-2 flex items-center justify-center">
                    <Image
                      src="/volumebot.png"
                      alt="Solana Volume Bot"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-600 flex items-center justify-center border-2 border-black">
                      <SiTelegram className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    Solana Volume Bot
                  </h3>

                  <p className="text-sm md:text-md text-gray-400 leading-relaxed">
                    Create genuine on-chain trading volume. Dominate trending charts across all major platforms.
                  </p>

                  <ul className="space-y-2 text-left max-w-xs mx-auto">
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                        <FaChartLine className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Highest volume at the best market price</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                        <FaExchangeAlt className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm">More buys than sells for bullish pressure</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                        <FaEye className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Transparent, real-time volume stats</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                        <FaPauseCircle className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Start, pause or withdraw</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                        <FaLock className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm">MEV Protection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                        <FaBolt className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Sub-Second Transaction Landing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                        <FaShieldAlt className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Predictive Execution & Real-Time Slippage Estimator</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                        <FaCoins className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Gasless Support for Token2022 & Memecoin Swaps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                        <FaExchangeAlt className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Just-In-Time Market Revival for Long-Tail Assets</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center ring-2 ring-green-400/30">
                        <FaCoins className="w-3 h-3 text-green-300" />
                      </div>
                      <span className="text-sm font-semibold text-white">Start from just 0.1 SOL</span>
                    </li>
                  </ul>
                </div>

                {/* Button */}
                <Link href="https://t.me/leektradingbot">
                  <motion.button
                    className="group relative mt-6 w-full px-6 py-2 bg-white/10 backdrop-blur-md text-white font-medium rounded-2xl border border-white/20 shadow-lg overflow-hidden transition-all duration-500 hover:bg-white/20 hover:border-white/40 hover:shadow-xl hover:ring-4 hover:ring-green-400/20"
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                      <SiTelegram className="w-4 h-4" />
                      Launch Volume Bot
                    </span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                      <ShineEffect />
                    </div>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA – optional, falls gewünscht */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          <motion.button
            onClick={openVideo}
            className="border border-gray-700/50 text-white px-10 py-3 rounded-2xl font-medium text-md hover:bg-white/10 hover:border-gray-600 transition-all duration-500"
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
    </section>
  );
}