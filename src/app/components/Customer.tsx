"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaRocket, FaUsers, FaDollarSign } from "react-icons/fa";

// ─── Statische Basis-Werte ────────────────────────────────────────────────────
const START_TIME  = new Date("2026-02-09T00:00:00Z").getTime();
const BASE        = { projects: 1700, holders: 1_000_000, volume: 20_000_000 };
const MAX_PROJECTS = 2100;

function computeStats() {
  const secondsPassed = Math.max(0, (Date.now() - START_TIME) / 1000);
  return {
    projects: Math.min(MAX_PROJECTS, BASE.projects + Math.floor(secondsPassed / 300)),
    holders:  BASE.holders + Math.floor((secondsPassed / 86400) * 100),
    volume:   BASE.volume  + Math.floor((secondsPassed / 86400) * 10_000),
  };
}

function formatNum(num: number, asMillion = false) {
  if (asMillion) {
    return Math.floor(num / 1_000_000).toLocaleString("en-US") + "M";
  }
  return num.toLocaleString("en-US");
}

// ─── Card-Varianten (composited: nur opacity + transform) ─────────────────────
const cardVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0  },
};

// ─── Stat-Karten Config ───────────────────────────────────────────────────────
const CARDS = [
  { key: "projects" as const, icon: FaRocket,      label: "Projects Boosted",  million: false },
  { key: "holders"  as const, icon: FaUsers,       label: "Holders Added",     million: true  },
  { key: "volume"   as const, icon: FaDollarSign,  label: "Volume Generated",  million: true  },
];

// ─── Komponente ───────────────────────────────────────────────────────────────
export default function GrowthStats() {
  const [stats, setStats] = useState(BASE); // SSR-safe: Basis-Werte sofort
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Sofort beim Mount berechnen, dann jede Sekunde updaten
    setStats(computeStats());

    intervalRef.current = setInterval(() => {
      setStats(computeStats());
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []); // Leere Deps: läuft einmal nach Mount

  return (
    <section className="bg-black py-5">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-2xl text-gray-100 mb-4">
          We help you grow your project
        </p>
        <p className="text-lg text-gray-100 max-w-3xl mx-auto mb-10">
          Join hundreds of satisfied customers who have seen real results.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
          {CARDS.map(({ key, icon: Icon, label, million }, i) => (
            <motion.div
              key={key}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-lg p-6 w-full md:w-1/3 hover:shadow-xl transition-shadow duration-300"
            >
              <Icon className="text-white text-4xl mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {formatNum(stats[key], million)}+
              </h3>
              <p className="text-gray-100 text-sm md:text-base">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}