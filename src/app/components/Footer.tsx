"use client";

import { FaXTwitter, FaRedditAlien, FaTelegram, FaYoutube, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black py-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <Link href="https://www.leeksol.online" target="_blank" rel="noopener noreferrer">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-3 tracking-tight hover:text-white transition-colors">
                $LEEK
              </h3>
            </Link>
            <p className="text-sm text-gray-100 leading-relaxed">
              Next-gen tools for Solana growth: Holder & Volume Bots.
            </p>
            <p className="text-xs text-gray-100 mt-6">© 2026 $LEEK. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-medium text-gray-100 mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solana-volume-bot" className="text-gray-100 hover:text-cyan-400">Solana Volume Bot</Link></li>
              <li><Link href="/solana-holder-bot" className="text-gray-100 hover:text-cyan-400">Solana Holder Bot</Link></li>
              <li><Link href="/solana-all-in-one-booster" className="text-gray-100 hover:text-cyan-400">Solana All-in-One Booster</Link></li>
              <li><Link href="/blog" className="text-gray-100 hover:text-cyan-400">Blog</Link></li>
              <li><Link href="#faqs" className="text-gray-100 hover:text-cyan-400">FAQs</Link></li>
              <li><Link href="#guide" className="text-gray-100 hover:text-cyan-400">Guide</Link></li>
              <li><Link href="/partners" className="text-cyan-400 hover:text-cyan-300 font-medium">View all Partners →</Link></li>
            </ul>
          </div>

          {/* Our Bots */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-medium text-gray-100 mb-4 uppercase tracking-wider">Our Bots</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://t.me/Degen_wg_bot" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-blue-400">Solana Holder Bot</a></li>
              <li><a href="https://t.me/leektradingbot" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-green-400">Solana Volume Bot</a></li>
              <li><a href="https://t.me/sol_volume_holder_bot" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-yellow-400">Solana Volume + Holder Bot</a></li>
              <li><a href="https://t.me/+3XCV3c958XwyYjE8" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-emerald-400">Telegram Support</a></li>
              <li><a href="mailto:leek.sol@gmx.de" className="text-gray-100 hover:text-cyan-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Profile Icons – jetzt mit Reddit */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-sm font-medium text-gray-100 mb-4 uppercase tracking-wider">Follow Us</h4>
            <div className="flex justify-center md:justify-end gap-4 flex-wrap">
              {/* X */}
              <a href="https://x.com/solanaholderbot" target="_blank" rel="noopener noreferrer" className="group relative p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-cyan-400 transition-all">
                <FaXTwitter className="w-6 h-6 text-gray-100 group-hover:text-cyan-400" />
              </a>

              {/* Reddit */}
              <a href="https://www.reddit.com/r/holana_holder_bot/" target="_blank" rel="noopener noreferrer" className="group relative p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-orange-500/40 transition-all">
                <FaRedditAlien className="w-6 h-6 text-gray-100 group-hover:text-orange-400" />
              </a>

              {/* YouTube */}
              <a href="https://www.youtube.com/@SolanaHolderBot" target="_blank" rel="noopener noreferrer" className="group relative p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-red-500 transition-all">
                <FaYoutube className="w-6 h-6 text-gray-100 group-hover:text-red-500" />
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/solanaholderbot2026/" target="_blank" rel="noopener noreferrer" className="group relative p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-pink-500 transition-all">
                <FaInstagram className="w-6 h-6 text-gray-100 group-hover:text-pink-500" />
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/solana-holdder-bot-523958370/" target="_blank" rel="noopener noreferrer" className="group relative p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-blue-600 transition-all">
                <FaLinkedin className="w-6 h-6 text-gray-100 group-hover:text-blue-600" />
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/people/Solana-Holder-Bot" target="_blank" rel="noopener noreferrer" className="group relative p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-blue-500 transition-all">
                <FaFacebook className="w-6 h-6 text-gray-100 group-hover:text-blue-500" />
              </a>

              {/* Telegram */}
              <a href="https://t.me/+3XCV3c958XwyYjE8" target="_blank" rel="noopener noreferrer" className="group relative p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-emerald-400 transition-all">
                <FaTelegram className="w-6 h-6 text-gray-100 group-hover:text-emerald-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-gray-100 leading-relaxed max-w-3xl mx-auto">
            $LEEK is a memecoin with no intrinsic value or expectation of financial return. All cryptocurrencies are subject to fluctuations, creating possibilities for both profit and loss.
          </p>
        </div>
      </div>
    </footer>
  );
}