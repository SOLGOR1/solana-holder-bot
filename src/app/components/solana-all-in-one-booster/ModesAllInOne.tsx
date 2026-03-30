// src/components/solana-all-in-one-booster/ModesAllInOne.tsx
"use client";

import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } 
  },
};

export default function ModesAllInOne() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Premium Label */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-amber-400/10 to-yellow-300/10 border border-amber-400/30 rounded-3xl text-amber-200 text-sm font-semibold tracking-widest uppercase backdrop-blur-md">
            ⚡ CHOOSE YOUR MOMENTUM
          </div>
        </div>

        <h2 className="text-center text-4xl md:text-5xl font-bold tracking-[-1.2px] text-white mb-4">
          SELECT YOUR BOOST SPEED
        </h2>

        <p className="text-center text-gray-400 max-w-xl mx-auto mb-16">
          Four carefully tuned speeds. Real volume and permanent holders in perfect harmony.
        </p>

        {/* 2×2 Grid – Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* FAST */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative bg-zinc-900/70 backdrop-blur-2xl border border-amber-400/20 rounded-3xl p-8 hover:border-amber-400/60 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-6 right-6 px-5 py-1.5 bg-amber-400/10 border border-amber-400/30 rounded-2xl text-amber-300 text-sm font-semibold">
              1 – 2 HOURS
            </div>

            <h3 className="text-4xl font-bold text-white mb-8">Fast</h3>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3"><span className="text-amber-400">→</span> Instant volume spikes</li>
              <li className="flex items-center gap-3"><span className="text-amber-400">→</span> Perfect for launch day</li>
              <li className="flex items-center gap-3"><span className="text-amber-400">→</span> Strong buy-heavy pressure</li>
              <li className="flex items-center gap-3"><span className="text-amber-400">→</span> Rapid holder growth</li>
            </ul>

            <div className="mt-10 pt-6 border-t border-amber-400/10 text-amber-300 text-sm font-medium">
              High impact • Aggressive momentum
            </div>
          </motion.div>

          {/* MEDIUM */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative bg-zinc-900/70 backdrop-blur-2xl border border-amber-400/20 rounded-3xl p-8 hover:border-amber-400/60 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-6 right-6 px-5 py-1.5 bg-amber-400/10 border border-amber-400/30 rounded-2xl text-amber-300 text-sm font-semibold">
              4 – 6 HOURS
            </div>

            <h3 className="text-4xl font-bold text-white mb-8">Medium</h3>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3"><span className="text-amber-400">→</span> Balanced &amp; steady growth</li>
              <li className="flex items-center gap-3"><span className="text-amber-400">→</span> Ideal for maintaining rank</li>
              <li className="flex items-center gap-3"><span className="text-amber-400">→</span> Natural buy/sell ratio</li>
              <li className="flex items-center gap-3"><span className="text-amber-400">→</span> Consistent holders</li>
            </ul>

            <div className="mt-10 pt-6 border-t border-amber-400/10 text-amber-300 text-sm font-medium">
              Best all-rounder
            </div>
          </motion.div>

          {/* SLOW */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative bg-zinc-900/70 backdrop-blur-2xl border border-amber-400/20 rounded-3xl p-8 hover:border-amber-400/60 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-6 right-6 px-5 py-1.5 bg-amber-400/10 border border-amber-400/30 rounded-2xl text-amber-300 text-sm font-semibold">
              12 – 14 HOURS
            </div>

            <h3 className="text-4xl font-bold text-white mb-8">Slow</h3>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3"><span className="text-amber-400">→</span> Spread-out natural activity</li>
              <li className="flex items-center gap-3"><span className="text-amber-400">→</span> Very organic looking</li>
              <li className="flex items-center gap-3"><span className="text-amber-400">→</span> Long-term holder growth</li>
              <li className="flex items-center gap-3"><span className="text-amber-400">→</span> Sustained chart presence</li>
            </ul>

            <div className="mt-10 pt-6 border-t border-amber-400/10 text-amber-300 text-sm font-medium">
              Most natural behavior
            </div>
          </motion.div>

          {/* ULTRA SLOW */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative bg-zinc-900/70 backdrop-blur-2xl border border-amber-400/20 rounded-3xl p-8 hover:border-amber-400/60 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-6 right-6 px-5 py-1.5 bg-amber-400/10 border border-amber-400/30 rounded-2xl text-amber-300 text-sm font-semibold">
              22 – 24 HOURS
            </div>

            <h3 className="text-4xl font-bold text-white mb-8">Ultra Slow</h3>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3"><span className="text-amber-400">→</span> Maximum stealth mode</li>
              <li className="flex items-center gap-3"><span className="text-amber-400">→</span> Ultra natural behavior</li>
              <li className="flex items-center gap-3"><span className="text-amber-400">→</span> Long-term holder focus</li>
              <li className="flex items-center gap-3"><span className="text-amber-400">→</span> Perfect for big campaigns</li>
            </ul>

            <div className="mt-10 pt-6 border-t border-amber-400/10 text-amber-300 text-sm font-medium">
              Stealth &amp; longevity
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}