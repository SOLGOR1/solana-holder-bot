"use client";

import { FaXTwitter, FaRedditAlien, FaTelegram } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";

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

          {/* Quick Links – neu */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#guide" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Guide
                </Link>
              </li>
              <li>
                <a href="https://solana-holder-bot.gitbook.io/solana-holder-bot-docs" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Docs (GitBook)
                </a>
              </li>
            </ul>
          </div>

          {/* Bots Links */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Our Bots</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://t.me/Degen_wg_bot" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Solana Holder Bot
                </a>
              </li>
              <li>
                <a href="https://t.me/leektradingbot" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                  Solana Volume Bot
                </a>
              </li>
              <li>
                <a href="https://t.me/+3XCV3c958XwyYjE8" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Telegram Support
                </a>
              </li>
              <li>
                <a href="mailto:leek.sol@gmx.de" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons – rechts */}
          <div className="flex justify-center md:justify-end gap-5">
            <a
              href="https://x.com/solanaholderbot"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
            >
              <FaXTwitter className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              <motion.div
                className="absolute inset-0 rounded-2xl bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
              />
            </a>

            <a
              href="https://www.reddit.com/r/holana_holder_bot/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-orange-500/40 transition-all duration-300"
            >
              <FaRedditAlien className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
              <motion.div
                className="absolute inset-0 rounded-2xl bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
              />
            </a>

            <a
              href="https://t.me/+3XCV3c958XwyYjE8"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300"
            >
              <FaTelegram className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
              <motion.div
                className="absolute inset-0 rounded-2xl bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
              />
            </a>
          </div>
        </div>

        {/* Disclaimer – sehr dezent */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-gray-600 leading-relaxed max-w-3xl mx-auto">
            $LEEK is a memecoin with no intrinsic value or expectation of financial return. All cryptocurrencies are subject to fluctuations, creating possibilities for both profit and loss.
          </p>
        </div>
      </div>
    </footer>
  );
}