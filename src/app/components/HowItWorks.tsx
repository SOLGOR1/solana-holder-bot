"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaTelegramPlane, FaCoins, FaUsers, FaChartLine, FaShieldAlt, FaRocket } from 'react-icons/fa';

export default function HowItWorks() {
  const [selectedBot, setSelectedBot] = useState('holder');
  const [highlightedStep, setHighlightedStep] = useState(0);

  const holderSteps = [
    { title: "Start the Bot", desc: "Launch the Solana Holder Bot on Telegram and hit Start.", icon: <FaTelegramPlane className="w-6 h-6" /> },
    { title: "Choose Package", desc: "10 Wallets (0.1 SOL) • 50 (0.15 SOL) • 100 (0.25 SOL) • 500 (1.5 SOL)", icon: <FaUsers className="w-6 h-6" /> },
    { title: "Send Token CA", desc: "Provide your Solana token Contract Address.", icon: <FaShieldAlt className="w-6 h-6" /> },
    { title: "Send Tokens", desc: "Transfer tokens (10+ per wallet + extras for safety).", icon: <FaCoins className="w-6 h-6" /> },
    { title: "Send SOL Fee", desc: "Pay the exact SOL amount for your package.", icon: <FaRocket className="w-6 h-6" /> },
    { title: "Confirm & Distribute", desc: "Bot creates real wallets and distributes permanently.", icon: <FaChartLine className="w-6 h-6" /> },
  ];

  const volumeSteps = [
    { title: "Start the Bot", desc: "Launch the Solana Volume Bot on Telegram and hit Start.", icon: <FaTelegramPlane className="w-6 h-6" /> },
    { title: "Send Token CA", desc: "Provide your Solana token Contract Address.", icon: <FaShieldAlt className="w-6 h-6" /> },
    { title: "Choose Speed", desc: "Fast (aggressive) • Medium • Slow (natural look)", icon: <FaRocket className="w-6 h-6" /> },
    { title: "Send SOL Funds", desc: "≥0.1 SOL – more SOL = more volume.", icon: <FaCoins className="w-6 h-6" /> },
    { title: "Confirm & Start", desc: "Bot runs with random amounts via Jupiter.", icon: <FaChartLine className="w-6 h-6" /> },
    { title: "Manage Anytime", desc: "Pause, withdraw remainder, or monitor stats.", icon: <FaUsers className="w-6 h-6" /> },
  ];

  const steps = selectedBot === 'holder' ? holderSteps : volumeSteps;
  const botColor = selectedBot === 'holder' ? 'blue' : 'green';
  const botLink = selectedBot === 'holder' ? 'https://t.me/Degen_wg_bot' : 'https://t.me/leektradingbot';
  const botName = selectedBot === 'holder' ? 'Holder Bot' : 'Volume Bot';

  // Auto-highlight loop (5s pro Schritt)
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="how-it-works" className="relative bg-black py-5 overflow-hidden">
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
          className="text-4xl md:text-5xl font-bold text-center mb-8 tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          How It Works
        </motion.h2>

        {/* Bot Selector – kompakt */}
        <div className="flex justify-center mb-8 gap-4">
          <motion.button
            onClick={() => setSelectedBot('holder')}
            className={`px-6 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
              selectedBot === 'holder'
                ? `bg-blue-600/80 text-white shadow-blue-500/20`
                : 'bg-white/10 text-gray-400 hover:bg-white/20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Holder Bot
          </motion.button>
          <motion.button
            onClick={() => setSelectedBot('volume')}
            className={`px-6 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
              selectedBot === 'volume'
                ? `bg-green-600/80 text-white shadow-green-500/20`
                : 'bg-white/10 text-gray-400 hover:bg-white/20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Volume Bot
          </motion.button>
        </div>

        {/* Kompakte Timeline – schmale Breite */}
        <motion.div
          className="max-w-md mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          key={selectedBot}
        >
          <div className="relative">
            {/* Verbindungslinie */}
            <div className={`absolute left-10 top-12 bottom-12 w-0.5 bg-${botColor}-500/30 hidden md:block`} />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex items-start gap-5 mb-7 last:mb-0 relative ${
                  highlightedStep === index ? 'z-10' : ''
                }`}
                animate={{
                  opacity: highlightedStep === index ? 1 : 0.7,
                  scale: highlightedStep === index ? 1.04 : 1,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Schritt-Nummer links – größer, ohne ) */}
                <div className="flex-shrink-0 w-10 text-right">
                  <motion.span
                    className={`text-3xl font-bold transition-colors duration-500 ${
                      highlightedStep === index ? `text-${botColor}-400` : 'text-gray-500'
                    }`}
                    animate={{
                      scale: highlightedStep === index ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {index + 1}
                  </motion.span>
                </div>

                {/* Icon mit stärkerem Highlight-Glow */}
                <motion.div
                  className={`flex-shrink-0 w-14 h-14 rounded-full bg-${botColor}-600/20 border-2 border-${botColor}-500/50 flex items-center justify-center shadow-lg relative overflow-hidden`}
                  animate={{
                    boxShadow: highlightedStep === index
                      ? `0 0 30px rgba(${botColor === 'blue' ? '59,130,246' : '34,197,94'}, 0.6)`
                      : '0 4px 15px rgba(0,0,0,0.3)',
                    scale: highlightedStep === index ? 1.15 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <span className={`text-${botColor}-400`}>{step.icon}</span>
                  {highlightedStep === index && (
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Text mit stärkerem Highlight für aktiven Schritt */}
                <motion.div
                  className="flex-1"
                  animate={{
                    y: highlightedStep === index ? -2 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className={`text-base md:text-lg font-semibold text-white mb-1 transition-colors duration-500 ${
                    highlightedStep === index ? `text-${botColor}-300` : ''
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`text-gray-400 text-sm leading-relaxed transition-colors duration-500 ${
                    highlightedStep === index ? 'text-gray-200' : ''
                  }`}>
                    {step.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button – näher dran */}
        <div className="text-center mt-8">
          <a
            href={botLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative inline-block px-10 py-4 bg-white/10 backdrop-blur-md text-white font-medium rounded-2xl border border-white/20 shadow-lg overflow-hidden transition-all duration-500 hover:bg-white/20 hover:border-white/40 hover:shadow-xl hover:ring-4 hover:ring-${botColor}-400/20`}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <FaTelegramPlane className="w-5 h-5" />
              Launch {botName}
            </span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
              <motion.div
                className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2, ease: "easeOut", repeat: Infinity, repeatDelay: 3 }}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}