"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

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
      alt: "Step 2: Launch Solana Holder Bot for Holder Increase on Telegram",
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
      }, 16000); // 16 Sekunden pro Schritt
      return () => clearInterval(interval);
    }
  }, [autoPlay, steps.length]);

  const nextStep = () => setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  const prevStep = () => setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  const toggleAutoPlay = () => setAutoPlay(!autoPlay);

  return (
    <section id="guide" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">
          How to Boost Your Solana Token Volume with Permanent Holders
        </h2>
        <div className="relative max-w-4xl mx-auto lg:max-w-5xl">
          {/* Fortschrittsbalken */}
          <div className="w-full h-1 bg-gray-800 rounded-full mb-4 relative overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* Schritt-Anzeige */}
          <div className="text-center mb-10 text-gray-400 text-sm">
            Step {currentStep + 1} of {steps.length}
          </div>

          {/* Container */}
          <div className="bg-black border border-gray-700/30 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-lg">
            {/* Bild */}
            <div className="flex justify-center">
              <Image
                src={steps[currentStep].image}
                alt={steps[currentStep].alt}
                width={300}
                height={500}
                className="rounded-lg object-cover"
                unoptimized={steps[currentStep].image.endsWith('.gif')}
                loading="lazy"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                {steps[currentStep].title}
              </h3>
              <p className="mt-4 text-gray-200 text-lg leading-relaxed">
                {steps[currentStep].desc}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            {/* Pfeil links */}
            <button
              onClick={prevStep}
              className="hover:text-blue-800 transition-colors lg:static lg:-translate-y-0 lg:order-1"
            >
              <svg
                className="w-10 h-10 text-blue-500 animate-pulse hover:text-blue-400 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Play/Pause */}
            <button
              onClick={toggleAutoPlay}
              className="flex items-center justify-center gap-2 px-5 py-2 bg-gray-700 border border-gray-600 rounded-full text-blue-400 hover:bg-blue-800 hover:text-white hover:shadow-blue-800/30 transition-all duration-300 order-2"
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
            </button>

            {/* Pfeil rechts */}
            <button
              onClick={nextStep}
              className="hover:text-blue-800 transition-colors lg:static lg:-translate-y-0 lg:order-3"
            >
              <svg
                className="w-10 h-10 text-blue-500 animate-pulse hover:text-blue-400 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}