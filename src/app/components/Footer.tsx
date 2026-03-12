"use client";

import { FaXTwitter, FaRedditAlien, FaTelegram } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";   // ← NEU hinzugefügt

export default function Footer() {
  return (
    <footer className="relative bg-black py-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Brand Info – links */}
          <div className="text-center md:text-left">
            <Link href="https://www.leeksol.online" target="_blank" rel="noopener noreferrer">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-300 mb-3 tracking-tight hover:text-white transition-colors">
                $LEEK
              </h3>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Next-gen tools for Solana growth: Holder & Volume Bots.
            </p>
            <p className="text-xs text-gray-600 mt-6">© 2026 $LEEK. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">Blog</Link></li>
              <li><Link href="#faqs" className="text-gray-300 hover:text-cyan-400 transition-colors">FAQs</Link></li>
              <li><Link href="#guide" className="text-gray-300 hover:text-cyan-400 transition-colors">Guide</Link></li>
              <li><a href="https://solana-holder-bot.gitbook.io/solana-holder-bot-docs" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">Docs (GitBook)</a></li>
            </ul>
          </div>

          {/* Our Bots */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Our Bots</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://t.me/Degen_wg_bot" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">Solana Holder Bot</a></li>
              <li><a href="https://t.me/leektradingbot" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">Solana Volume Bot</a></li>
              <li><a href="https://t.me/+3XCV3c958XwyYjE8" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 transition-colors">Telegram Support</a></li>
              <li><a href="mailto:leek.sol@gmx.de" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Icons – nur Icons (rechts) */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex justify-center md:justify-end gap-5 flex-wrap">
              {/* X / Twitter */}
              <a href="https://x.com/solanaholderbot" target="_blank" rel="noopener noreferrer" className="group relative p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300">
                <FaXTwitter className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                <motion.div className="absolute inset-0 rounded-2xl bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" initial={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} />
              </a>

              {/* Reddit */}
              <a href="https://www.reddit.com/r/holana_holder_bot/" target="_blank" rel="noopener noreferrer" className="group relative p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-orange-500/40 transition-all duration-300">
                <FaRedditAlien className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
                <motion.div className="absolute inset-0 rounded-2xl bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" initial={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} />
              </a>

              {/* Telegram */}
              <a href="https://t.me/+3XCV3c958XwyYjE8" target="_blank" rel="noopener noreferrer" className="group relative p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300">
                <FaTelegram className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                <motion.div className="absolute inset-0 rounded-2xl bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" initial={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} />
              </a>
            </div>
          </div>
        </div>

        {/* ====================== BANNER + BACKLINKS REIHE ====================== */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h4 className="text-sm font-medium text-gray-400 mb-5 uppercase tracking-wider text-center md:text-right">Featured On &amp; Backlinks</h4>
          
          <div className="flex justify-center md:justify-end gap-6 flex-wrap">
            <a href="https://foundrlist.com/product/solanabots" target="_blank" rel="noopener noreferrer">
              <Image 
                src="https://foundrlist.com/api/badge/solanabots" 
                alt="Live on FoundrList" 
                width={160} 
                height={64} 
                className="h-7 w-auto"
                unoptimized
              />
            </a>

            <a href="https://indiehunt.io/project/solana-volume-bot-boost-sol-stats-holders" target="_blank" rel="noopener">
              <Image 
                src="https://indiehunt.io/badges/indiehunt-badge-dark.svg" 
                alt="Featured on IndieHunt" 
                width={265} 
                height={58} 
                className="h-7 w-auto"
              />
            </a>

            <a href="https://earlyhunt.com/project/solana-volume-bot-boost-sol-stats-holders" target="_blank" rel="noopener">
              <Image 
                src="https://earlyhunt.com/badges/earlyhunt-badge-dark.svg" 
                alt="Featured on EarlyHunt" 
                width={265} 
                height={58} 
                className="h-7 w-auto"
              />
            </a>

            <a href="https://www.aidirectori.es" target="_blank" rel="noopener">
              <Image 
                src="https://cdn.aidirectori.es/ai-tools/badges/no-background.png" 
                alt="Featured on AI Directories" 
                width={265} 
                height={58} 
                className="h-7 w-auto"
              />
            </a>

            {/* ← Neue Backlink-Banner einfach hier rein */}
          </div>
        </div>

        {/* ====================== BACKLINK EXCHANGE – HOVER INFO ====================== */}
        <div className="mt-8 flex justify-center md:justify-end">
          <div className="group relative inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 hover:text-cyan-300 cursor-pointer transition-colors">
            <span>Backlink Exchange</span>
            <motion.span className="text-lg" whileHover={{ rotate: 45 }} transition={{ duration: 0.2 }}>↗</motion.span>

            {/* Hover Tooltip */}
            <div className="pointer-events-none absolute bottom-full mb-3 left-1/2 -translate-x-1/2 hidden group-hover:block w-80 bg-zinc-900/90 backdrop-blur-2xl border border-white/20 rounded-3xl p-5 text-left text-sm text-gray-300 shadow-2xl z-30">
              <p className="font-medium">Our Domain Rating: <span className="text-cyan-400">29</span></p>
              <p className="mt-3 leading-relaxed">
                We offer mutual Do-Follow backlinks! Looking for websites with DR 20-90, preferably crypto, blockchain or Solana related.
              </p>
              <p className="mt-4 text-xs text-gray-400">Just contact us and we&apos;ll set it up in 24h.</p>
              <div className="mt-4 flex flex-col gap-1 text-[10px] text-cyan-400">
                <a href="mailto:leek.sol@gmx.de" className="hover:underline">leek.sol@gmx.de</a>
                <a href="https://t.me/+3XCV3c958XwyYjE8" className="hover:underline">Telegram Support</a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-gray-600 leading-relaxed max-w-3xl mx-auto">
            $LEEK is a memecoin with no intrinsic value or expectation of financial return. All cryptocurrencies are subject to fluctuations, creating possibilities for both profit and loss.
          </p>
        </div>
      </div>
    </footer>
  );
}