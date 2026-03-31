// src/components/solana-holder-bot/FaqHolder.tsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

export default function FaqHolder() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What is the Solana Holder Bot?",
      a: "A high-performance Telegram bot that creates real, permanent holders on Solana. It uses real organic wallets to boost your token on Raydium, Pump.fun, Meteora and DexScreener – instantly increasing holder count and social proof.",
    },
    {
      q: "Are the holders real and permanent?",
      a: "100% real and permanent. Every wallet is a unique, on-chain Solana address that holds your token forever. No fake wallets, no wash trading – fully organic and compliant with natural market behavior.",
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
      q: "How many holders can I get?",
      a: "Depends on your package – here are real examples:",
      table: (
        <div className="mt-5 bg-zinc-900/60 backdrop-blur-md border border-cyan-900/30 rounded-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-cyan-900/40 bg-zinc-950/50">
                <th className="py-3 px-5 text-cyan-300 font-medium">Package</th>
                <th className="py-3 px-5 text-cyan-300 font-medium text-right">Holders Added</th>
                <th className="py-3 px-5 text-cyan-300 font-medium text-right">Runtime</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-cyan-900/20">
                <td className="py-4 px-5 text-gray-100">Test Drive (0.1 SOL)</td>
                <td className="py-4 px-5 text-right text-gray-100">10 holders</td>
                <td className="py-4 px-5 text-right text-gray-100">~30 seconds</td>
              </tr>
              <tr className="border-b border-cyan-900/20">
                <td className="py-4 px-5 text-gray-100">Start Boost (0.15 SOL)</td>
                <td className="py-4 px-5 text-right text-gray-100">50 holders</td>
                <td className="py-4 px-5 text-right text-gray-100">~1 minute</td>
              </tr>
              <tr className="border-b border-cyan-900/20">
                <td className="py-4 px-5 text-gray-100">Super Boost (0.25 SOL)</td>
                <td className="py-4 px-5 text-right text-gray-100">100 holders</td>
                <td className="py-4 px-5 text-right text-gray-100">~2 minutes</td>
              </tr>
              <tr className="border-b border-cyan-900/20">
                <td className="py-4 px-5 text-gray-100">Massive Growth (1.5 SOL)</td>
                <td className="py-4 px-5 text-right text-gray-100">500 holders</td>
                <td className="py-4 px-5 text-right text-gray-100">~5 minutes</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      q: "Will the bot automatically increase my token price?",
      a: "The bot itself focuses on holder growth and social proof. When combined with real market buying or during a Solana uptrend, the increased holder count and visibility often help push the price upward.",
    },
    {
      q: "Can you provide custom holder plans?",
      a: "Yes – contact support via Telegram. We can create any size package (1,000+ holders) tailored to your budget and goals.",
    },
    {
      q: "Can I pause, resume or withdraw funds?",
      a: "Yes – full control via Telegram at any time: pause, resume, add more tokens or withdraw remaining SOL. No lock-ins, no commitments.",
    },
    {
      q: "What payment methods are accepted?",
      a: "Only SOL. Each session creates a unique one-time payment address. No wallet connections or approvals required.",
    },
    {
      q: "Are there any refunds?",
      a: "Payments are final due to the on-chain nature. We recommend starting with the Test Drive package to see results first. Support handles exceptional cases individually.",
    },
    {
      q: "How fast do holders appear on DexScreener?",
      a: "Holders appear within seconds after starting the bot. The Super Boost package usually shows 100+ holders in under 2 minutes.",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative z-10">
      <div className="max-w-5xl mx-auto px-5 md:px-6">

        {/* Badge */}
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

        <p className="text-center text-gray-100 text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          Everything you need to know about the Solana Holder Bot – safety, real holders, pricing and results.
        </p>

        {/* Accordion – alles in Cyan/Blau */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`
                bg-zinc-900/70 backdrop-blur-xl border border-cyan-900/30 
                rounded-3xl overflow-hidden transition-all duration-300
                hover:border-cyan-600/40 hover:shadow-[0_0_25px_#22d3ee20]
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
                <div className="px-6 pb-6 md:pb-8 text-gray-100 text-base leading-relaxed">
                  {faq.a && <p>{faq.a}</p>}
                  {faq.table && <div className="mt-5">{faq.table}</div>}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-cyan-400 mt-8">
          Need the other tool? 
          <Link href="/solana-holder-bot" className="underline">→ Solana Holder Bot</Link> | 
          <Link href="/solana-volume-bot" className="underline">→ Solana Volume Bot</Link> | 
          <Link href="/solana-all-in-one-booster" className="underline">→ Volume & Holder Bot</Link> | 
        </p>
        <p className="text-xs text-gray-100">Last updated: March 23, 2026</p>

        {/* Contact Support Button – jetzt Cyan */}
        <div className="text-center mt-16">
          <Link
            href="https://t.me/+3XCV3c958XwyYjE8"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3 px-4 py-2 
              bg-gradient-to-r from-cyan-600 to-cyan-400 
              text-white font-semibold text-md rounded-2xl
              transition-all duration-400
              hover:from-cyan-500 hover:to-cyan-300
              hover:shadow-[0_0_35px_#22d3eeaa] hover:-translate-y-0.5
              active:scale-98
              shadow-lg shadow-cyan-950/30
            "
          >
            Contact Support Here
          </Link>
        </div>

      </div>
    </section>
  );
}