"use client";

import { FaChartLine, FaShieldAlt, FaRocket, FaCoins, FaUsers, FaBolt, FaRobot, } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Benefits() {
  const benefits = [
    {
      title: "Permanent Holders & Genuine Volume",
      desc: "Boost your Solana token with lasting holders and 100% on-chain trades that feel organic and drive real momentum.",
      icon: <FaUsers className="w-10 h-10 text-blue-400" />,
      color: "blue",
    },
    {
      title: "Undetectable & Secure",
      desc: "Advanced MEV protection and no private key access ensure your growth is safe, compliant, and impossible to flag.",
      icon: <FaShieldAlt className="w-10 h-10 text-green-400" />,
      color: "green",
    },
    {
      title: "Lightning-Fast Setup",
      desc: "Launch in minutes via Telegram, automated for both holders and volume, perfect for quick moonshots on any DEX.",
      icon: <FaBolt className="w-10 h-10 text-blue-400" />,
      color: "blue",
    },
    {
      title: "Dominate Trending Charts",
      desc: "Explode visibility on DexScreener, Birdeye, and more with bullish pressure from more buys than sells.",
      icon: <FaChartLine className="w-10 h-10 text-green-400" />,
      color: "green",
    },
    {
      title: "Fully Automated & Flexible",
      desc: "Set once and forget: Real-time stats, pause/withdraw anytime, supports SPL/Token2022 across all platforms.",
      icon: <FaRobot className="w-10 h-10 text-blue-400" />,
      color: "blue",
    },
    {
      title: "Affordable Scalability",
      desc: "Start from just 0.1 SOL scale holders and volume effortlessly for projects of any size without hidden fees.",
      icon: <FaCoins className="w-10 h-10 text-green-400" />,
      color: "green",
    },
  ];

  return (
    <section className="relative bg-black py-5 overflow-hidden">
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
        {/* Intro Block – keyword-optimiert, natürlich */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6">
            In the hyper-competitive Solana ecosystem, real <span className="text-green-400 font-semibold">on-chain trading volume</span> and <span className="text-blue-400 font-semibold">permanent holders</span> are the ultimate game-changers.
          </p>
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
            Whether launching on Pump.fun, Raydium, Meteora, or Orca, our bots deliver explosive growth to top DexScreener and Birdeye charts. No more getting buried, dominate with authentic, lasting activity.
          </p>
        </div>

        {/* Benefits Grid – 6 cards, alternierend blau/grün für Holder/Volume */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`group p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-${benefit.color}-500/20 hover:border-${benefit.color}-500/50`}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`w-16 h-16 rounded-full bg-${benefit.color}-500/10 flex items-center justify-center mb-4 group-hover:bg-${benefit.color}-500/20 transition-colors mx-auto`}>
                {benefit.icon}
              </div>
              <h3 className={`text-xl font-semibold text-white group-hover:text-${benefit.color}-400 transition-colors mb-3 text-center`}>
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-center text-sm md:text-base">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Abschluss CTA Block – zwei Buttons */}
        <div className="max-w-4xl mx-auto mt-20 text-center space-y-8">
          <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light">
            Stop watching your token sit flat. Unlock explosive <span className="text-green-400 font-semibold">volume boost</span> and <span className="text-blue-400 font-semibold">holder growth</span> today.
          </p>
          <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed font-bold">
            HOLDERS + MASSIVE VOLUME = UNSTOPPABLE MOMENTUM.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Holder Bot Button */}
            <Link href="https://t.me/Degen_wg_bot">
              <motion.button
                className="group relative w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md text-white font-medium rounded-2xl border border-white/20 shadow-lg overflow-hidden transition-all duration-500 hover:bg-white/20 hover:border-white/40 hover:shadow-xl hover:ring-4 hover:ring-blue-400/20"
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <FaRocket className="w-5 h-5" />
                  Launch Holder Bot
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                  <ShineEffect />
                </div>
              </motion.button>
            </Link>

            {/* Volume Bot Button */}
            <Link href="https://t.me/leektradingbot">
              <motion.button
                className="group relative w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md text-white font-medium rounded-2xl border border-white/20 shadow-lg overflow-hidden transition-all duration-500 hover:bg-white/20 hover:border-white/40 hover:shadow-xl hover:ring-4 hover:ring-green-400/20"
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <FaChartLine className="w-5 h-5" />
                  Launch Volume Bot
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                  <ShineEffect />
                </div>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  );
}

const ShineEffect = () => (
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
);