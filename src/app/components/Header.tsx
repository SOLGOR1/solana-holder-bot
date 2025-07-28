"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export default function Header() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isGifLoaded, setIsGifLoaded] = useState(false);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants: Variants = {
    hover: {
      scale: 1.05,
      boxShadow: '0px 4px 15px rgba(59, 130, 246, 0.5)',
      transition: { duration: 0.2, ease: 'easeOut' },
    },
    tap: { scale: 0.95 },
  };

  return (
    <header className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.2)_0%,_transparent_70%)] animate-pulse-slow" />

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
        <motion.div
          className="md:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {!isGifLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <Image
            src="/solholderbot.png"
            alt="Solana Holder Bot for Memecoin Rankings"
            width={500}
            height={500}
            className="mx-auto rounded-lg shadow-2xl"
            unoptimized
            onLoad={() => setIsGifLoaded(true)}
          />
        </motion.div>

        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Solana Holder Bot
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl font-medium text-gray-300 mt-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Skyrocket Your Memecoin with Automated Holder Growth
          </motion.h2>
          <motion.p
            className="mt-6 text-lg text-gray-400 max-w-lg mx-auto md:mx-0"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            Boost rankings effortlessly with secure, permanent Solana holders. Start in minutes with our Telegram bot!
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <Link href="https://t.me/Degen_wg_bot">
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 shadow-lg hover:shadow-blue-500/50 transition-shadow group-hover:animate-shine"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Holder Bot
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                </svg>
              </motion.button>
            </Link>
            <Link href="https://t.me/MellowHyperVolumeBot?start=ref_xSR5v">
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 shadow-lg hover:shadow-blue-500/50 transition-shadow group-hover:animate-shine"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Volume Bot
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
                </svg>
              </motion.button>
            </Link>
            <motion.button
              onClick={openVideo}
              className="border border-blue-400 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-blue-500/10 transition-colors"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Watch Demo
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 22V2l18 10L3 22z" />
              </svg>
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-12 p-6 bg-gray-800/50 rounded-xl border border-blue-500/30 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-3xl font-bold text-blue-400">
              ✨ NEW: All-in-One Booster Bot (Beta) ✨
            </h3>
            <p className="mt-3 text-gray-300">
              Supercharge your memecoin with volume, holders, and transactions—all in one bot. Start from just 0.5 SOL!
            </p>
            <Link href="https://t.me/LeekRevenue_bot">
              <motion.button
                className="relative mt-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-4 rounded-xl font-semibold flex items-center gap-3 shadow-lg hover:shadow-blue-600/50 transition-shadow group-hover:animate-shine"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="relative z-10">Try Booster Bot Now</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 group-hover:animate-shine" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-gray-900 p-4 rounded-xl max-w-4xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={closeVideo}
                className="absolute -top-4 -right-4 text-white text-2xl font-bold bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700"
              >
                ×
              </button>
              <div className="relative" style={{ paddingTop: '56.25%' }}>
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