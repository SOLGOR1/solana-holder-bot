"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What is the Holder Bot?",
      a: "An automated Telegram bot that creates permanent, authentic holders for your Solana token using real wallets – designed for long-term growth and healthier charts.",
    },
    {
      q: "What is the Volume Bot?",
      a: "The most advanced volume generation bot on Solana. It creates genuine on-chain buys and sells via Jupiter with more buys than sells for bullish pressure and natural-looking activity.",
    },
    {
      q: "Which platforms are supported?",
      a: "Both bots work seamlessly with all major Solana DEXs and launchpads including Raydium, Pump.fun, Bonk.fun, Bags.fm, Meteora, Orca, Jupiter, Kamino, Lifinity, Saros, PumpSwap, Crema, Solanium, StarLaunch, SolPad, PinkSale, and many more.",
    },
    {
      q: "Is it safe to use?",
      a: "Absolutely. We never ask for private keys or wallet access. All transactions are transparent, on-chain, and use secure automation. MEV protection and real wallet diversity keep everything undetectable and compliant.",
    },
    {
      q: "How much do the packages cost?",
      a: "Holder Bot pricing (permanent holders):",
      table: (
        <table className="mt-4 w-full text-left">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-2 text-gray-400">Package</th>
              <th className="py-2 text-gray-400 text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/5">
              <td className="py-3">10 Holders</td>
              <td className="py-3 text-right">0.1 SOL</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-3">50 Holders</td>
              <td className="py-3 text-right">0.15 SOL</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-3">100 Holders</td>
              <td className="py-3 text-right">0.25 SOL</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-3">500 Holders</td>
              <td className="py-3 text-right">1.5 SOL</td>
            </tr>
          </tbody>
        </table>
      ),
    },
    {
      q: "How long does holder creation take?",
      a: "One holder every ~3-5 seconds. Estimated times:",
      table: (
        <table className="mt-4 w-full text-left">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-2 text-gray-400">Package</th>
              <th className="py-2 text-gray-400 text-right">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/5">
              <td className="py-3">10 Holders</td>
              <td className="py-3 text-right">~2 minutes</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-3">50 Holders</td>
              <td className="py-3 text-right">~5 minutes</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-3">100 Holders</td>
              <td className="py-3 text-right">~10 minutes</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-3">500 Holders</td>
              <td className="py-3 text-right">~50 minutes</td>
            </tr>
          </tbody>
        </table>
      ),
    },
    {
      q: "Can I pause or control the bots?",
      a: "Yes – both bots allow you to start, pause, resume, or withdraw remaining funds at any time. Full control via Telegram.",
    },
    {
      q: "What payment methods are accepted?",
      a: "Only SOL. Each session generates a unique payment address – we never ask for wallet connections or private keys.",
    },
    {
      q: "Are the holders and volume permanent/real?",
      a: "100% yes. Holders are real wallets that stay forever. Volume consists of genuine on-chain trades.",
    },
    {
      q: "Can I leave the Telegram chat during operation?",
      a: "Yes, the bots run independently. Just don’t restart until completion to avoid issues.",
    },
    {
      q: "What if I send the wrong SOL amount?",
      a: "The bot will pause or not start until the correct amount arrives. Do not restart mid-process.",
    },
    {
      q: "Are refunds possible?",
      a: "Payments are final and non-refundable. Test thoroughly and contact support if needed – we handle cases individually.",
    },
  ];

  return (
    <section id="faqs" className="relative bg-black py-20 overflow-hidden">
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
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-green-600/20 text-green-400 text-sm font-medium rounded-full border border-green-500/30">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion – Glassmorph Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-500/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                  {faq.q}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="w-5 h-5 text-cyan-400" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-gray-300 text-base leading-relaxed">
                  <p>{faq.a}</p>
                  {faq.table && <div className="mt-4">{faq.table}</div>}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}