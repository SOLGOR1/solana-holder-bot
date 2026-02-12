"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Guide() {
  const steps = [
    {
      title: "Step 1: Get Your Solana Token CA",
      desc: "Kick off your holder boost by copying the Contract Address (CA) of your Solana token for permanent holder generation.",
      image: "/CA.gif",
      alt: "Step 1: Copy Solana Token Contract Address for Permanent Holder Boost",
    },
    {
      title: "Step 2: Launch the Holder Bot",
      desc: (
        <>
          Fire up the{' '}
          <a href="https://t.me/Degen_wg_bot" className="text-blue-400 hover:text-blue-600 underline">
            Solana Holder Creator Bot
          </a>{' '}
          on Telegram and smash that Start button to boost your Solana token.
        </>
      ),
      image: "/Screen2.gif",
      alt: "Step 2: Launch the Bot for Holder Increase on Telegram",
    },
    {
      title: "Step 3: Pick Your Holder Package",
      desc: "Choose a package for your memecoin: 10, 50, 100, 500, or 1000 permanent holders to skyrocket your holder rise.",
      image: "/Screen3.gif",
      alt: "Step 3: Select Permanent Holder Package in Solana Holder Bot",
    },
    {
      title: "Step 4: Input Your Token CA",
      desc: "Enter the CA of your Solana token to kickstart that holder increase process.",
      image: "/Screen4.gif",
      alt: "Step 4: Enter Solana Token CA for Holder Boost in Bot",
    },
    {
      title: "Step 5: Send Project Tokens",
      desc: "Transfer your project’s tokens to the given Solana address for a seamless holder boost.",
      image: "/TOK.gif",
      alt: "Step 5: Send Project Tokens for Permanent Holders on Solana",
    },
    {
      title: "Step 6: Confirm Token Transfer",
      desc: "Verify your token transfer in the bot to keep the holder rise rolling.",
      image: "/Screen6.gif",
      alt: "Step 6: Confirm Token Transaction for Solana Holder Increase",
    },
    {
      title: "Step 7: Send SOL Fees",
      desc: "Send the listed SOL amount to cover fees and fuel your permanent holder generation.",
      image: "/SOL.gif",
      alt: "Step 7: Send SOL Fees for Permanent Holder Boost",
    },
    {
      title: "Step 8: Confirm SOL Payment",
      desc: "Confirm your SOL transaction to lock in that holder boost for your Solana token.",
      image: "/Screen8.gif",
      alt: "Step 8: Confirm SOL Transaction for Holder Rise in Bot",
    },
    {
      title: "Step 9: Start Holder Distribution",
      desc: "Hit Start and watch the bot stack permanent holders for your memecoin.",
      image: "/Screen9.gif",
      alt: "Step 9: Start Permanent Holder Distribution for Solana Token",
    },
    {
      title: "Step 10: Track Your Holder Growth",
      desc: "Done! Monitor the holder increase with the bot’s loading bar—your Solana token’s on the rise!",
      image: "/Screen10.gif",
      alt: "Step 10: Track Permanent Holder Growth in Solana Holder Bot",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
      }, 10000); // Verkürzt auf 10s für dynamischeren Flow
      return () => clearInterval(interval);
    }
  }, [autoPlay, steps.length]);

  const nextStep = () => setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  const prevStep = () => setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  const toggleAutoPlay = () => setAutoPlay(!autoPlay);

  return (
    <section id="guide" className="relative bg-black py-20 overflow-hidden">
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

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
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
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>

          {/* Schritt-Anzeige */}
          <div className="text-center mb-8 text-gray-400 text-sm md:text-base">
            Step {currentStep + 1} of {steps.length}
          </div>

          {/* Cohesiver Container – flex row, no gap, shared styles */}
          <motion.div
            className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl border border-white/10" // Gemeinsamer Border und Shadow für Einheit
            key={currentStep}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Linke Hälfte: GIF-Seite – black bg mit coolen border */}
            <div className="flex-1 bg-black p-6 md:p-8 flex justify-center items-center relative">
              {/* Cooler interner Border */}
              <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none"></div>
              <Image
                src={steps[currentStep].image}
                alt={steps[currentStep].alt}
                width={250}
                height={450}
                className="rounded-lg object-cover shadow-md"
                unoptimized={steps[currentStep].image.endsWith('.gif')}
                loading="lazy"
              />
            </div>

            {/* Rechte Hälfte: Text-Seite – glassmorph */}
            <div className="flex-1 bg-white/5 backdrop-blur-xl p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-4">
                {steps[currentStep].title}
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {steps[currentStep].desc}
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-10 gap-6">
            {/* Pfeil links */}
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

            {/* Play/Pause */}
            <motion.button
              onClick={toggleAutoPlay}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-md hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {autoPlay ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 3l16 9-16 9V3z" />
                </svg>
              )}
              {autoPlay ? 'Pause' : 'Play'}
            </motion.button>

            {/* Pfeil rechts */}
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