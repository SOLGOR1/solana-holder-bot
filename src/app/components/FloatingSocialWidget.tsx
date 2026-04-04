"use client";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";

export default function FloatingSocialWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end">
      <motion.div
        initial={{ width: 60 }}
        animate={{ width: isOpen ? 220 : 60 }}
        onHoverStart={() => setIsOpen(true)}
        onHoverEnd={() => setIsOpen(false)}
        className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-2 flex flex-col gap-3 overflow-hidden"
      >
        {/* Trigger Button */}
        <button
          className="w-12 h-12 flex items-center justify-center text-white hover:text-cyan-400 transition-colors"
          aria-label="Share"
        >
          <span className="text-2xl">🔗</span>
        </button>

        {/* Sharing Buttons (nur 2 → minimaler Impact auf Link-Anzahl) */}
        {isOpen && (
          <>
            <a
              href="https://twitter.com/intent/tweet?url=https://solanaholderbot.com&text=Solana%20Volume%20Bot%20-%20Boost%20SOL%20Stats%20%26%20Holders%20in%202026"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 rounded-2xl transition-colors"
            >
              <FaXTwitter className="w-5 h-5" />
              <span className="text-sm font-medium">Share on X</span>
            </a>

            <a
              href="https://t.me/share/url?url=https://solanaholderbot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 rounded-2xl transition-colors"
            >
              <FaTelegram className="w-5 h-5" />
              <span className="text-sm font-medium">Share on Telegram</span>
            </a>
          </>
        )}
      </motion.div>
    </div>
  );
}