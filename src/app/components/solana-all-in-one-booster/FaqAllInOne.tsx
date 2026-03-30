// src/components/solana-all-in-one-booster/FaqAllInOne.tsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

export default function FaqAllInOne() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { q: "What is the Solana All-in-One Booster?", a: "The first Telegram bot that generates real on-chain trading volume AND permanent rent-exempt holders at the same time — all in one powerful tool." },
    { q: "Is the activity real and undetectable?", a: "Yes — 100% on-chain with natural randomization, wallet rotation, buy-heavy patterns and MEV protection. It looks completely organic to DexScreener, Birdeye and all platforms." },
    { q: "Which platforms and tokens are supported?", a: "Works seamlessly with Raydium, Pump.fun, Meteora, Jupiter, Orca, Kamino, PumpSwap, Bonk.fun, Bags.fm and all major Solana DEXs & launchpads. Supports SPL and Token-2022." },
    { q: "Is it safe? Do you need private keys?", a: "Completely safe. No private keys, no wallet connections. Everything runs through Telegram and on-chain transactions you can verify." },
    {
      q: "How much volume and holders can I generate?",
      a: "Depends on the amount sent and chosen speed. Examples:",
      table: (
        <div className="mt-5 bg-zinc-900/60 backdrop-blur-md border border-amber-900/30 rounded-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-amber-900/40 bg-zinc-950/50">
                <th className="py-3 px-5 text-amber-300 font-medium">Amount Sent</th>
                <th className="py-3 px-5 text-amber-300 font-medium text-right">Est. Volume</th>
                <th className="py-3 px-5 text-amber-300 font-medium text-right">Holders Added</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-amber-900/20"><td className="py-4 px-5 text-gray-200">0.15 SOL</td><td className="py-4 px-5 text-right text-gray-200">up to 40 SOL</td><td className="py-4 px-5 text-right text-gray-200">50–120</td></tr>
              <tr className="border-b border-amber-900/20"><td className="py-4 px-5 text-gray-200">0.5 SOL</td><td className="py-4 px-5 text-right text-gray-200">up to 150 SOL</td><td className="py-4 px-5 text-right text-gray-200">150–350</td></tr>
              <tr className="border-b border-amber-900/20"><td className="py-4 px-5 text-gray-200">1 SOL</td><td className="py-4 px-5 text-right text-gray-200">up to 300 SOL</td><td className="py-4 px-5 text-right text-gray-200">300–700</td></tr>
              <tr className="border-b border-amber-900/20"><td className="py-4 px-5 text-gray-200">5 SOL</td><td className="py-4 px-5 text-right text-gray-200">up to 1500 SOL</td><td className="py-4 px-5 text-right text-gray-200">1,500+</td></tr>
              <tr><td className="py-4 px-5 text-gray-200">25+ SOL</td><td className="py-4 px-5 text-right text-gray-200">up to 7500+ SOL</td><td className="py-4 px-5 text-right text-gray-200">Massive long-term growth</td></tr>
            </tbody>
          </table>
        </div>
      ),
    },
    { q: "Will this automatically pump my token price?", a: "The bot creates strong volume and holder growth. When combined with real market buying or in a bullish phase, it significantly helps push price upward." },
    { q: "Can I pause, resume or withdraw funds?", a: "Yes — full control at any time directly in Telegram: pause, change speed or withdraw remaining SOL instantly." },
    { q: "What payment methods are accepted?", a: "Only SOL. Each session creates a unique one-time payment address. No wallet connections needed." },
    { q: "Are there any refunds?", a: "Payments are final due to the on-chain nature. We recommend starting small to test. Support handles exceptional cases individually." },
    { q: "How fast do I see results?", a: "Volume and holders usually appear within minutes in Fast/Medium modes. Slow and Ultra Slow modes spread activity naturally for maximum organic look." },
  ];

  return (
    <section className="py-20 md:py-28 relative z-10">
      <div className="max-w-5xl mx-auto px-5 md:px-6">
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
          Everything you need to know about the Solana All-in-One Booster — safety, features and performance.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900/70 backdrop-blur-xl border border-amber-900/30 rounded-3xl overflow-hidden transition-all duration-300 hover:border-amber-500/40 hover:shadow-[0_0_25px_#fcd34d20]"
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
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <FaChevronDown className="w-5 h-5 text-amber-400" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
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

        <p className="text-center text-amber-400 mt-8">
          Need more help?
          <p><Link href="https://t.me/+3XCV3c958XwyYjE8" className="underline">→ Contact Support</Link></p> 
          
          <p><Link href="https://t.me/Degen_wg_bot" className="underline">→ Holder Bot</Link></p>
          
          <p><Link href="https://t.me/leektradingbot" className="underline">→ Volume Bot</Link></p>
          
        </p>
        <p className="text-xs text-gray-500 text-center mt-2">Last updated: March 30, 2026</p>
      </div>
    </section>
  );
}