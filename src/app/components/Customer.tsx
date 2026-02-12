"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaRocket, FaUsers, FaDollarSign } from "react-icons/fa";

export default function GrowthStats() {
  const [projects, setProjects] = useState(1700);
  const [holders, setHolders] = useState(1000000);
  const [volume, setVolume] = useState(20000000);

  useEffect(() => {
    const startTime = new Date("2026-02-09T00:00:00Z").getTime();

    const updateStats = () => {
      const now = Date.now();
      const secondsPassed = Math.max(0, (now - startTime) / 1000);

      // Projects: +1 alle 5 Minuten, cap bei 2100
      const newProjects = Math.min(2100, 1700 + Math.floor(secondsPassed / 300));

      // Holders: +100 pro Tag (dezente Steigerung)
      const newHolders = 1000000 + Math.floor(secondsPassed / 86400 * 100);

      // Volume: +10,000 pro Tag
      const newVolume = 20000000 + Math.floor(secondsPassed / 86400 * 10000);

      setProjects(newProjects);
      setHolders(newHolders);
      setVolume(newVolume);
    };

    updateStats(); // Initial update
    const interval = setInterval(updateStats, 1000); // Update jede Sekunde für fließenden Effekt

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number, isMillion: boolean = false) => {
    if (isMillion) {
      return (num / 1000000).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + "M";
    }
    return num.toLocaleString("en-US");
  };

  return (
    <section className="bg-black py-5">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-2xl md:text-2xl text-gray-500 mb-4 animate-fade-in">We help you grow your project</p>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">Join hundreds of satisfied customers who have seen real results.</p>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
          {/* Kästchen 1: Projects – Glasscontainer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-lg p-6 w-full md:w-1/3 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <FaRocket className="text-white text-4xl mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 relative inline-block">
              {formatNumber(projects)}+
              <span className="absolute inset-0 bg-cyan-500/10 rounded-full blur-md opacity-50"></span>
            </h3>
            <p className="text-gray-400 text-sm md:text-base">Projects Boosted</p>
          </motion.div>

          {/* Kästchen 2: Holders – Glasscontainer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-lg p-6 w-full md:w-1/3 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <FaUsers className="text-white text-4xl mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 relative inline-block">
              {formatNumber(holders, true)}+
              <span className="absolute inset-0 bg-cyan-500/10 rounded-full blur-md opacity-50"></span>
            </h3>
            <p className="text-gray-400 text-sm md:text-base">Holders Added</p>
          </motion.div>

          {/* Kästchen 3: Volume – Glasscontainer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-lg p-6 w-full md:w-1/3 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <FaDollarSign className="text-white text-4xl mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 relative inline-block">
              {formatNumber(volume, true)}+
              <span className="absolute inset-0 bg-cyan-500/10 rounded-full blur-md opacity-50"></span>
            </h3>
            <p className="text-gray-400 text-sm md:text-base">Volume Generated</p>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
}