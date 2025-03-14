"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Guide() {
  const steps = [
    {
      title: "Step 1: Get Your Token Contract Address",
      desc: "Start by copying the CA (Contract Address) of your Solana token you want to generate holders for.",
      image: "/CA.gif",
      alt: "Step 1: Copy Solana Token Contract Address for Holder Generation",
    },
    {
      title: "Step 2: Launch the Solana Holder Bot",
      desc: (
        <>
          Open the{' '}
          <a href="https://t.me/Degen_wg_bot" className="text-blue-400 hover:text-blue-600 underline">
            Solana Holder Creator Bot
          </a>{' '}
          on Telegram and hit the Start button.
        </>
      ),
      image: "/Screen2.gif",
      alt: "Step 2: Launch Solana Holder Bot on Telegram",
    },
    {
      title: "Step 3: Choose Your Package",
      desc: "Select the perfect package for your needs: 10, 50, 100, 500, or 1000 new permanent holders.",
      image: "/Screen3.gif",
      alt: "Step 3: Select Holder Package in Solana Holder Bot",
    },
    {
      title: "Step 4: Enter Your Token CA",
      desc: "Input the Contract Address (CA) of the Solana token you want to boost.",
      image: "/Screen4.gif",
      alt: "Step 4: Enter Solana Token CA in Bot",
    },
    {
      title: "Step 5: Send Your Project Tokens",
      desc: "Transfer the specified amount of your project’s tokens to the provided Solana address.",
      image: "/TOK.gif",
      alt: "Step 5: Send Project Tokens to Solana Address",
    },
    {
      title: "Step 6: Confirm Token Transaction",
      desc: "Verify the token transfer in the bot to proceed.",
      image: "/Screen6.gif",
      alt: "Step 6: Confirm Token Transaction in Solana Holder Bot",
    },
    {
      title: "Step 7: Send SOL Fees",
      desc: "Send the displayed amount of SOL to the provided address to cover processing fees.",
      image: "/SOL.gif",
      alt: "Step 7: Send SOL Fees for Holder Generation",
    },
    {
      title: "Step 8: Confirm SOL Transaction",
      desc: "Confirm the SOL transaction in the bot to finalize setup.",
      image: "/Screen8.gif",
      alt: "Step 8: Confirm SOL Transaction in Bot",
    },
    {
      title: "Step 9: Start Distribution",
      desc: "Hit the Start button to begin generating your permanent holders.",
      image: "/Screen9.gif",
      alt: "Step 9: Start Permanent Holder Distribution",
    },
    {
      title: "Step 10: Watch It Happen",
      desc: "Done! The distribution is underway – track progress with the loading bar in the bot.",
      image: "/Screen10.gif",
      alt: "Step 10: Track Holder Distribution Progress in Solana Holder Bot",
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
    <section id="guide" className="py-16 bg-black text-white"> {/* Gradient zu bg-black */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">
          How to Boost Your Solana Token Volume with Solana Holder Bot
        </h2>
        <div className="relative max-w-4xl mx-auto">
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
          <div className="bg-black border border-gray-700/30 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-lg"> {/* bg-gray-800/20 zu bg-black */}
            {/* Bild */}
            <div className="flex justify-center">
              <Image
                src={steps[currentStep].image}
                alt={steps[currentStep].alt} // SEO-optimierter Alt-Text
                width={300}
                height={500}
                className="rounded-lg object-cover"
                unoptimized={steps[currentStep].image.endsWith('.gif')} // Für GIFs
                loading="lazy" // Lazy Loading hinzugefügt
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
              className="hover:text-blue-800 transition-colors md:absolute md:left-[-60px] md:top-1/2 md:-translate-y-1/2 order-1 md:order-none"
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
              className="hover:text-blue-800 transition-colors md:absolute md:right-[-60px] md:top-1/2 md:-translate-y-1/2 order-3 md:order-none"
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