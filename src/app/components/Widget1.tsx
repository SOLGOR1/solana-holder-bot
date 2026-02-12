// src/components/Widget1.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaTelegramPlane } from "react-icons/fa";

const LogoAvatar = ({ size = "12", showPulse = false }: { size?: string; showPulse?: boolean }) => {
  const sizeClass = size === "12" ? "w-12 h-12" : "w-10 h-10";
  return (
    <div className={`relative flex-shrink-0 ${sizeClass}`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg" />
      <div className="absolute inset-0.5 rounded-full bg-black/80 flex items-center justify-center overflow-hidden">
        <svg
          className="w-[82%] h-[82%] text-white"
          fill="currentColor"
          viewBox="0 0 18 18"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
          <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
        </svg>
      </div>
      {showPulse && (
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-4 border-black/70 animate-pulse" />
      )}
    </div>
  );
};

export default function Widget1() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowTyping(true);
      setShowMessage(false);

      const timer = setTimeout(() => {
        setShowTyping(false);
        setShowMessage(true);
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      setShowTyping(false);
      setShowMessage(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) return;

    const firstTimer = setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 6000);
    }, 10000);

    const interval = setInterval(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 6000);
    }, 40000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Notification Bubble */}
      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-20 right-0 w-80 bg-black/60 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-5 mb-4"
          >
            <div className="flex gap-4">
              <LogoAvatar size="12" showPulse={true} />
              <div className="flex-1">
                <p className="font-semibold text-white">Support</p>
                <p className="text-white leading-relaxed mt-2">
                  Need help? Let's Chat!
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Fenster */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-96 h-[500px] bg-black/50 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <div className="flex items-center gap-4">
                <LogoAvatar size="12" showPulse={false} />
                <div>
                  <p className="font-semibold text-white">Support</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-green-300">online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-6 overflow-y-auto">
              {showTyping && (
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex-shrink-0" />
                  <div className="bg-white/10 rounded-3xl px-5 py-4">
                    <div className="flex gap-1.5">
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {showMessage && (
                <div className="flex items-start gap-4">
                  <LogoAvatar size="10" showPulse={false} />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Support</p>
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl px-5 py-4 text-white max-w-xs">
                      GM! Let's chat on Telegram. I'm here to help! 🤜🤛
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Button */}
            <div className="p-5 border-t border-white/10">
              <a
                href="https://t.me/+3XCV3c958XwyYjE8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-blue-600/30 hover:bg-blue-600/50 rounded-2xl text-white font-medium transition-all duration-300 backdrop-blur-md border border-blue-500/30"
              >
                <FaTelegramPlane className="w-7 h-7" />
                Chat on Telegram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full shadow-2xl flex items-center justify-center"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex gap-1">
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
            />
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, delay: 0.2 }}
            />
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, delay: 0.4 }}
            />
          </div>
        </motion.button>
      )}
    </div>
  );
}