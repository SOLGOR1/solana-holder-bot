// src/components/solana-volume-bot/FaqVolume.tsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

export default function FaqVolume() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What is the Solana Volume Bot?",
      a: "A high-performance Telegram bot that generates real, organic on-chain volume on Solana DEXs. It uses Jupiter aggregation for natural buys/sells with bullish pressure, helping tokens trend on DexScreener, Birdeye and Raydium.",
    },
    {
      q: "Is the volume real and undetectable?",
      a: "Yes – 100% on-chain trades via real wallets and Jupiter. We maintain healthy buy/sell ratios, avoid patterns and include Jito MEV protection. No fake wallets, no wash trading – fully compliant and natural-looking.",
    },
    {
      q: "Which platforms and tokens are supported?",
      a: "Works natively with Raydium, Pump.fun, Meteora, Jupiter, Orca, Kamino, PumpSwap, Bonk.fun, Bags.fm and all major Solana DEXs/launchpads. Supports both SPL and Token-2022 standards.",
    },
    {
      q: "Is it safe? Do you need private keys?",
      a: "Completely safe. We never ask for private keys, seed phrases or wallet connections. All actions are user-initiated via Telegram, transactions are transparent on-chain and protected by MEV shielding.",
    },
    {
      q: "How much volume can I generate?",
      a: "Depends on package and pool fees, but examples:",
      table: (
        <div className="mt-5 bg-zinc-900/60 backdrop-blur-md border border-emerald-900/30 rounded-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-emerald-900/40 bg-zinc-950/50">
                <th className="py-3 px-5 text-emerald-300 font-medium">Package</th>
                <th className="py-3 px-5 text-emerald-300 font-medium text-right">Est. Volume</th>
                <th className="py-3 px-5 text-emerald-300 font-medium text-right">Runtime</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-emerald-900/20">
                <td className="py-4 px-5 text-gray-200">0.1 SOL</td>
                <td className="py-4 px-5 text-right text-gray-200">up to 30 SOL</td>
                <td className="py-4 px-5 text-right text-gray-200">30 min – 1 hr</td>
              </tr>
              <tr className="border-b border-emerald-900/20">
                <td className="py-4 px-5 text-gray-200">0.5 SOL</td>
                <td className="py-4 px-5 text-right text-gray-200">up to 150 SOL</td>
                <td className="py-4 px-5 text-right text-gray-200">1–3 hr</td>
              </tr>
              <tr className="border-b border-emerald-900/20">
                <td className="py-4 px-5 text-gray-200">1 SOL</td>
                <td className="py-4 px-5 text-right text-gray-200">up to 300 SOL</td>
                <td className="py-4 px-5 text-right text-gray-200">2–5 hr</td>
              </tr>
              <tr className="border-b border-emerald-900/20">
                <td className="py-4 px-5 text-gray-200">5 SOL</td>
                <td className="py-4 px-5 text-right text-gray-200">up to 1500 SOL</td>
                <td className="py-4 px-5 text-right text-gray-200">6–12 hr</td>
              </tr>
              <tr>
                <td className="py-4 px-5 text-gray-200">25 SOL</td>
                <td className="py-4 px-5 text-right text-gray-200">up to 7500 SOL</td>
                <td className="py-4 px-5 text-right text-gray-200">12–36 hr</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      q: "Will the bot automatically cause our token price to go up?",
      a: "On its own the bot provides price-neutral volume. When combined with market buyers or in a Solana uptrend phase, the bot will help push price up with volume.",
    },
    {
      q: "Can you provide custom plans?",
      a: "Yes, contact support using the Telegram bot to start developing a detailed volume strategy, for any size project and budget.",
    },
    {
      q: "Can I pause, resume or withdraw funds?",
      a: "Yes – full control via Telegram at any time: pause, resume, adjust speed or withdraw remaining SOL. No lock-ins.",
    },
    {
      q: "What payment methods are accepted?",
      a: "Only SOL. Each session creates a unique one-time payment address. No wallet connections or approvals required.",
    },
    {
      q: "Are there any refunds?",
      a: "Payments are final and non-refundable due to on-chain nature. We recommend starting with small packages to test. Support handles exceptional cases individually.",
    },
    {
      q: "How fast does volume appear on DexScreener/Birdeye?",
      a: "Usually within minutes in Fast/Medium modes. Slow mode spreads it naturally over hours for more organic chart behavior.",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative z-10">
      <div className="max-w-5xl mx-auto px-5 md:px-6">

        {/* Badge – konsistent mit Packages */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex px-5 py-2 bg-white/90 rounded-full shadow-sm">
            <span className="text-black text-xs font-semibold uppercase tracking-widest">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
        </div>

        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          Got Questions?
        </h2>

        <p className="text-center text-gray-400 text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          Everything you need to know about Solana Volume Bot – safety, features, pricing and performance.
        </p>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`
                bg-zinc-900/70 backdrop-blur-xl border border-emerald-900/30 
                rounded-3xl overflow-hidden transition-all duration-300
                hover:border-emerald-600/40 hover:shadow-[0_0_25px_#10b98120]
              `}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 md:py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                  {faq.q}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="w-5 h-5 text-emerald-400" />
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
                <div className="px-6 pb-6 md:pb-8 text-gray-300 text-base leading-relaxed">
                  {faq.a && <p>{faq.a}</p>}
                  {faq.table && <div className="mt-5">{faq.table}</div>}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-emerald-400 mt-8">
          Need the other tool? 
          <Link href="/solana-holder-bot" className="underline">→ Solana Holder Bot</Link> | 
          <Link href="/solana-volume-bot" className="underline">→ Solana Volume Bot</Link> |
          <Link href="/solana-all-in-one-booster" className="underline">→ Volume & Holder Bot</Link> | 
        </p>
        <p className="text-xs text-gray-500">Last updated: March 23, 2026</p>

        {/* Contact Support Button – am Ende */}
        <div className="text-center mt-16">
          <Link
            href="https://t.me/+3XCV3c958XwyYjE8"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3 px-4 py-2 
              bg-gradient-to-r from-emerald-600 to-emerald-400 
              text-white font-semibold text-md rounded-2xl
              transition-all duration-400
              hover:from-emerald-500 hover:to-emerald-300
              hover:shadow-[0_0_35px_#10b981aa] hover:-translate-y-0.5
              active:scale-98
              shadow-lg shadow-emerald-950/30
            "
          >
            Contact Support Here
          </Link>
        </div>

      </div>
    </section>
  );
}