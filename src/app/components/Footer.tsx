// src/components/Footer.tsx
"use client"; // Mark as Client Component for animations and interactivity

import { FaXTwitter, FaRedditAlien, FaYoutube, FaTelegram, FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  const shareUrl = "https://www.solanaholderbot.com/";
  const shareTitle = "Boost your Solana project with Solana Booster Bot! 🚀";

  return (
    <footer className="bg-black text-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">$LEEK</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4 max-w-xs mx-auto md:mx-0">
              Fueling the $SOL Solana ecosystem with next-gen tools like{" "}
              <Link href="/blog/solana-booster-bot" className="text-blue-400 hover:text-cyan-300 underline transition-colors duration-200">
                Solana Booster Bot
              </Link>{" "}
              and{" "}
              <Link href="/blog/solana-holder-bot" className="text-blue-400 hover:text-cyan-300 underline transition-colors duration-200">
                Solana Holder Bot
              </Link>.
            </p>
            <p className="text-xs text-gray-500">© 2025 $LEEK. All rights reserved.</p>
          </div>

          {/* Social & Sharing */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">Connect & Share</h3>
            {/* Social Profiles */}
            <div className="flex justify-center gap-4 mb-6">
              <a
                href="https://x.com/solanaholderbot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white bg-gray-800/50 rounded-full p-3 hover:bg-blue-600/50 transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on X"
              >
                <FaXTwitter className="text-lg" />
              </a>
              <a
                href="https://www.reddit.com/r/holana_holder_bot/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white bg-gray-800/50 rounded-full p-3 hover:bg-blue-600/50 transition-all duration-300 transform hover:scale-110"
                aria-label="Join our Reddit community"
              >
                <FaRedditAlien className="text-lg" />
              </a>
              <a
                href="https://www.youtube.com/@SolanaHolderBot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white bg-gray-800/50 rounded-full p-3 hover:bg-blue-600/50 transition-all duration-300 transform hover:scale-110"
                aria-label="Subscribe to our YouTube channel"
              >
                <FaYoutube className="text-lg" />
              </a>
            </div>
            {/* Sharing Buttons */}
            <p className="text-xs text-gray-400 mb-3">Spread the Revolution</p>
            <div className="flex flex-wrap justify-center gap-2">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-sm font-medium px-4 py-2 rounded-full hover:from-blue-800 hover:to-blue-600 hover:shadow-blue-500/50 transition-all duration-300"
              >
                <FaXTwitter className="text-base" /> X
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-sm font-medium px-4 py-2 rounded-full hover:from-blue-800 hover:to-blue-600 hover:shadow-blue-500/50 transition-all duration-300"
              >
                <FaFacebookF className="text-base" /> Facebook
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-sm font-medium px-4 py-2 rounded-full hover:from-blue-800 hover:to-blue-600 hover:shadow-blue-500/50 transition-all duration-300"
              >
                <FaLinkedinIn className="text-base" /> LinkedIn
              </a>
              <a
                href="https://www.instagram.com/solanaholderbot/" // Placeholder, replace with actual Instagram profile
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-sm font-medium px-4 py-2 rounded-full hover:from-blue-800 hover:to-blue-600 hover:shadow-blue-500/50 transition-all duration-300"
              >
                <FaInstagram className="text-base" /> Instagram
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">Get in Touch</h3>
            <div className="flex justify-center md:justify-end gap-6">
              <a
                href="https://t.me/+3XCV3c958XwyYjE8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                aria-label="Contact us on Telegram"
              >
                <FaTelegram className="text-lg" /> Telegram
              </a>
              <a
                href="mailto:leek.sol@gmx.de"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                aria-label="Email us"
              >
                <FaEnvelope className="text-lg" /> Email
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 text-center border-t border-gray-800 pt-6">
          <p className="text-xs text-gray-500 leading-relaxed max-w-2xl mx-auto">
            $LEEK is a memecoin with no intrinsic value or expectation of financial return. All cryptocurrencies are subject to fluctuations, creating possibilities for both profit and loss.
          </p>
        </div>
      </div>
    </footer>
  );
}