// src/app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { FaTelegramPlane, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiHome,
  HiChartBar,
  HiBookOpen,
  HiCog,
  HiChatAlt2,
  HiQuestionMarkCircle,
  HiNewspaper,
} from "react-icons/hi";

const mainLinks = [
  { name: "Blog", href: "/blog", icon: HiNewspaper },
  { name: "Docs", href: "https://solana-holder-bot.gitbook.io/solana-holder-bot-docs", icon: HiBookOpen },
];

const moreLinks = [
  { name: "Benefits", href: "/#benefits", icon: HiChartBar },
  { name: "Guide", href: "/#guide", icon: HiBookOpen },
  { name: "How It Works", href: "/#how-it-works", icon: HiCog },
  { name: "Testimonials", href: "/#testimonials", icon: HiChatAlt2 },
  { name: "FAQs", href: "/#faqs", icon: HiQuestionMarkCircle },
];

const botLinks = [
  { name: "Solana Volume Bot", href: "/solana-volume-bot", icon: HiChartBar },
  { name: "Solana Holder Bot", href: "/solana-holder-bot", icon: HiHome },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isMobileHomeOpen, setIsMobileHomeOpen] = useState(false);

  let moreCloseTimeout: NodeJS.Timeout | null = null;
  let homeCloseTimeout: NodeJS.Timeout | null = null;

  const handleMoreMouseEnter = () => {
    if (moreCloseTimeout) clearTimeout(moreCloseTimeout);
    setIsMoreOpen(true);
  };

  const handleMoreMouseLeave = () => {
    moreCloseTimeout = setTimeout(() => setIsMoreOpen(false), 300);
  };

  const handleHomeMouseEnter = () => {
    if (homeCloseTimeout) clearTimeout(homeCloseTimeout);
    setIsHomeOpen(true);
  };

  const handleHomeMouseLeave = () => {
    homeCloseTimeout = setTimeout(() => setIsHomeOpen(false), 300);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileHomeOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-2xl border-b border-white/10">
      {/* Firefox-Fix: 1px solider schwarzer Streifen oben */}
      <div className="absolute inset-x-0 top-0 h-px bg-black pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <svg
                className="w-9 h-9 text-white flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
              </svg>
              <span className="text-xl font-medium tracking-tight text-white hidden sm:block">
                Solana Holder Bot
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center space-x-12">
              {/* Home Dropdown */}
              <li className="relative" onMouseEnter={handleHomeMouseEnter} onMouseLeave={handleHomeMouseLeave}>
                <button className="flex items-center gap-2 text-lg text-gray-200 hover:text-white transition-colors">
                  Home
                  <FaChevronDown className={`w-4 h-4 transition-transform ${isHomeOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isHomeOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-64 bg-black/80 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl py-4"
                    >
                      <ul className="space-y-2">
                        {botLinks.map((link) => (
                          <li key={link.name}>
                            <Link
                              href={link.href}
                              className="flex items-center gap-4 px-6 py-4 text-lg text-gray-200 hover:text-white hover:bg-white/10 transition-all rounded-2xl"
                            >
                              <link.icon className="w-6 h-6 text-cyan-400" />
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Restliche Main-Links */}
              {mainLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("#") ? (
                    <a href={link.href} className="text-lg text-gray-200 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-lg text-gray-200 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}

              {/* More Dropdown (unverändert) */}
              <li className="relative" onMouseEnter={handleMoreMouseEnter} onMouseLeave={handleMoreMouseLeave}>
                <button className="flex items-center gap-2 text-lg text-gray-200 hover:text-white transition-colors">
                  More
                  <FaChevronDown className={`w-4 h-4 transition-transform ${isMoreOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isMoreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-64 bg-black/80 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl py-4"
                    >
                      <ul className="space-y-2">
                        {moreLinks.map((link) => (
                          <li key={link.name}>
                            {link.href.startsWith("#") ? (
                              <a href={link.href} className="flex items-center gap-4 px-6 py-4 text-lg text-gray-200 hover:text-white hover:bg-white/10 transition-all rounded-2xl">
                                <link.icon className="w-6 h-6 text-cyan-400" />
                                {link.name}
                              </a>
                            ) : (
                              <Link href={link.href} className="flex items-center gap-4 px-6 py-4 text-lg text-gray-200 hover:text-white hover:bg-white/10 transition-all rounded-2xl">
                                <link.icon className="w-6 h-6 text-cyan-400" />
                                {link.name}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </div>

{/* === DEZENTE BOT-BUTTONS (neu: 3 Buttons – kompakt & elegant) === */}
<div className="hidden lg:flex items-center gap-3">
  {/* Holder Bot */}
  <a
    href="https://t.me/Degen_wg_bot"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2.5 bg-cyan-600/20 backdrop-blur-md text-white font-semibold rounded-2xl border border-cyan-500/30 hover:bg-cyan-600/40 hover:border-cyan-500/60 transition-all duration-300 shadow-lg"
  >
    <span className="flex items-center gap-2 text-sm">
      <FaTelegramPlane className="w-4 h-4" />
      Holder Bot
    </span>
  </a>

  {/* Volume Bot */}
  <a
    href="https://t.me/leektradingbot"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2.5 bg-emerald-600/20 backdrop-blur-md text-white font-semibold rounded-2xl border border-emerald-500/30 hover:bg-emerald-600/40 hover:border-emerald-500/60 transition-all duration-300 shadow-lg"
  >
    <span className="flex items-center gap-2 text-sm">
      <FaTelegramPlane className="w-4 h-4" />
      Volume Bot
    </span>
  </a>

  {/* NEU: Volume + Holder Bot (Gelb) */}
  <a
    href="https://t.me/sol_volume_holder_bot"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2.5 bg-amber-600/20 backdrop-blur-md text-white font-semibold rounded-2xl border border-amber-500/30 hover:bg-amber-600/40 hover:border-amber-500/60 transition-all duration-300 shadow-lg"
  >
    <span className="flex items-center gap-2 text-sm">
      <FaTelegramPlane className="w-4 h-4" />
      Volume + Holder
    </span>
  </a>
</div>
          {/* Mobile Hamburger */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden relative p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
          >
            <motion.svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={isMobileMenuOpen ? "open" : "closed"}
            >
              <motion.path variants={{ closed: { d: "M4 6h16" }, open: { d: "M6 18L18 6" } }} strokeWidth="2" strokeLinecap="round" />
              <motion.path variants={{ closed: { d: "M4 12h16", opacity: 1 }, open: { opacity: 0 } }} strokeWidth="2" strokeLinecap="round" />
              <motion.path variants={{ closed: { d: "M4 18h16" }, open: { d: "M6 6l12 12" } }} strokeWidth="2" strokeLinecap="round" />
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu mit Home-Accordion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/90 backdrop-blur-3xl border-b border-white/20 shadow-2xl"
          >
            <div className="px-6 py-6">
              <ul className="space-y-1 mb-10">
                {/* Home Accordion */}
                <li>
                  <button
                    onClick={() => setIsMobileHomeOpen(!isMobileHomeOpen)}
                    className="flex w-full items-center justify-between px-5 py-3.5 text-lg font-medium text-white hover:bg-white/10 rounded-2xl transition-all"
                  >
                    <span className="flex items-center gap-4">
                      <HiHome className="w-6 h-6 text-cyan-400" />
                      Home
                    </span>
                    <FaChevronDown className={`w-4 h-4 transition-transform ${isMobileHomeOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isMobileHomeOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                        <ul className="pl-10 space-y-1 pt-1">
                          {botLinks.map((link) => (
                            <li key={link.name}>
                              <a href={link.href} onClick={closeMobileMenu} className="flex items-center gap-4 px-5 py-3.5 text-lg font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded-2xl transition-all">
                                <link.icon className="w-6 h-6 text-cyan-400" />
                                {link.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                {/* Restliche Links */}
                {mainLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} onClick={closeMobileMenu} className="flex items-center gap-4 px-5 py-3.5 text-lg font-medium text-white hover:bg-white/10 rounded-2xl transition-all">
                      <link.icon className="w-6 h-6 text-cyan-400" />
                      {link.name}
                    </a>
                  </li>
                ))}
                {moreLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} onClick={closeMobileMenu} className="flex items-center gap-4 px-5 py-3.5 text-lg font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded-2xl transition-all">
                      <link.icon className="w-6 h-6 text-cyan-400" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

{/* === Mobile Bot-Buttons (kompakt & dezent) === */}
<div className="space-y-3">
  {/* Holder Bot */}
  <a
    href="https://t.me/Degen_wg_bot"
    target="_blank"
    rel="noopener noreferrer"
    className="block px-4 py-2.5 bg-cyan-600/20 backdrop-blur-md text-white font-semibold rounded-2xl border border-cyan-500/40 hover:bg-cyan-600/30 hover:border-cyan-500/60 transition-all duration-300 text-center"
  >
    <span className="flex items-center justify-center gap-2 text-sm">
      <FaTelegramPlane className="w-4 h-4" />
      Holder Bot
    </span>
  </a>

  {/* Volume Bot */}
  <a
    href="https://t.me/leektradingbot"
    target="_blank"
    rel="noopener noreferrer"
    className="block px-4 py-2.5 bg-emerald-600/20 backdrop-blur-md text-white font-semibold rounded-2xl border border-emerald-500/40 hover:bg-emerald-600/30 hover:border-emerald-500/60 transition-all duration-300 text-center"
  >
    <span className="flex items-center justify-center gap-2 text-sm">
      <FaTelegramPlane className="w-4 h-4" />
      Volume Bot
    </span>
  </a>

  {/* NEU: Volume + Holder Bot (Gelb) */}
  <a
    href="https://t.me/sol_volume_holder_bot"
    target="_blank"
    rel="noopener noreferrer"
    className="block px-4 py-2.5 bg-amber-600/20 backdrop-blur-md text-white font-semibold rounded-2xl border border-amber-500/40 hover:bg-amber-600/30 hover:border-amber-500/60 transition-all duration-300 text-center"
  >
    <span className="flex items-center justify-center gap-2 text-sm">
      <FaTelegramPlane className="w-4 h-4" />
      Volume + Holder
    </span>
  </a>
</div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}