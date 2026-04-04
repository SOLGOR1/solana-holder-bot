// src/app/components/Guide.tsx
"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Guide() {
  const steps = [
    {
      title: "Welcome to the Solana Holder Bot Guide",
      desc: "Follow these 10 simple steps to boost your Solana token with permanent holders. Let's get started!",
      image: "/logo.png",                    // Leichtes PNG statt schwerem GIF
      alt: "Solana Holder Bot Guide - Welcome",
      isGif: false,
    },
    {
      title: "Step 1: Get Your Solana Token CA",
      desc: "Kick off your holder boost by copying the Contract Address (CA) of your Solana token.",
      image: "/CA.gif",
      alt: "Step 1: Copy Solana Token Contract Address",
      isGif: true,
    },
    {
      title: "Step 2: Launch the Holder Bot",
      desc: (
        <>
          Fire up the{' '}
          <a href="https://t.me/Degen_wg_bot" className="text-blue-400 hover:text-blue-600 underline">
            Solana Holder Creator Bot
          </a>{' '}
          on Telegram and smash that Start button.
        </>
      ),
      image: "/Screen2.gif",
      alt: "Step 2: Launch the Bot",
      isGif: true,
    },
    {
      title: "Step 3: Pick Your Holder Package",
      desc: "Choose a package: 10, 50, 100, 500, or 1000 permanent holders.",
      image: "/Screen3.gif",
      alt: "Step 3: Select Holder Package",
      isGif: true,
    },
    {
      title: "Step 4: Input Your Token CA",
      desc: "Enter the CA of your Solana token to start the process.",
      image: "/Screen4.gif",
      alt: "Step 4: Enter Token CA",
      isGif: true,
    },
    {
      title: "Step 5: Send Project Tokens",
      desc: "Transfer your project’s tokens to the given Solana address.",
      image: "/TOK.gif",
      alt: "Step 5: Send Project Tokens",
      isGif: true,
    },
    {
      title: "Step 6: Confirm Token Transfer",
      desc: "Verify your token transfer in the bot.",
      image: "/Screen6.gif",
      alt: "Step 6: Confirm Token Transfer",
      isGif: true,
    },
    {
      title: "Step 7: Send SOL Fees",
      desc: "Send the listed SOL amount to cover fees.",
      image: "/SOL.gif",
      alt: "Step 7: Send SOL Fees",
      isGif: true,
    },
    {
      title: "Step 8: Confirm SOL Payment",
      desc: "Confirm your SOL transaction.",
      image: "/Screen8.gif",
      alt: "Step 8: Confirm SOL Payment",
      isGif: true,
    },
    {
      title: "Step 9: Start Holder Distribution",
      desc: "Hit Start and watch the bot stack permanent holders.",
      image: "/Screen9.gif",
      alt: "Step 9: Start Holder Distribution",
      isGif: true,
    },
    {
      title: "Step 10: Track Your Holder Growth",
      desc: "Monitor the holder increase with the bot’s loading bar.",
      image: "/Screen10.gif",
      alt: "Step 10: Track Holder Growth",
      isGif: true,
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
        setImageLoaded(false);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [autoPlay]);

  const nextStep = () => {
    setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    setImageLoaded(false);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
    setImageLoaded(false);
  };

  const toggleAutoPlay = () => setAutoPlay(!autoPlay);

  const current = steps[currentStep];

  return (
    <section id="guide" className="relative bg-black py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl" 
             style={{ animation: 'gentlePulse 32s ease-in-out infinite' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl" 
             style={{ animation: 'gentlePulse 36s ease-in-out infinite reverse' }} />
      </div>

      <style jsx>{`
        @keyframes gentlePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          How to Boost Your Solana Token with Permanent Holders
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Fortschrittsbalken */}
          <div className="w-full h-1 bg-white/10 rounded-full mb-6 relative overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="text-center mb-8 text-gray-100 text-sm md:text-base">
            Step {currentStep + 1} of {steps.length}
          </div>

          <motion.div
            className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            key={currentStep}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Linke Seite: Bild */}
            <div className="flex-1 bg-black p-6 md:p-8 flex justify-center items-center relative min-h-[420px]">
              <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none"></div>

              {/* Loading Spinner */}
              {!imageLoaded && current.isGif && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
                  <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                </div>
              )}

              <Image
                src={current.image}
                alt={current.alt}
                width={600}
                height={420}
                className="rounded-lg object-contain shadow-md max-h-[420px] w-auto"
                unoptimized={current.isGif}           // GIFs nicht optimieren
                loading="lazy"
                priority={false}
                sizes="(max-width: 768px) 100vw, 50vw"
                onLoadingComplete={() => setImageLoaded(true)}
              />
            </div>

            {/* Rechte Seite: Text */}
            <div className="flex-1 bg-white/5 backdrop-blur-xl p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-4">
                {current.title}
              </h3>
              <p className="text-gray-100 text-base md:text-lg leading-relaxed">
                {current.desc}
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-10 gap-6">
            <motion.button
              onClick={prevStep}
              className="text-white hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              onClick={toggleAutoPlay}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              {autoPlay ? 'Pause' : 'Play'}
            </motion.button>

            <motion.button
              onClick={nextStep}
              className="text-white hover:text-green-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}