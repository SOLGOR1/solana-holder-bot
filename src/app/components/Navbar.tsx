"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black text-white py-4 fixed top-0 w-full z-20 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <div className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <svg
            className="w-12 h-12 text-blue-500 animate-pulse hover:text-blue-400 transition-colors"
            fill="currentColor"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
            <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
          </svg>
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Solana Holder Bot
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#header" className="text-lg hover:text-blue-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#benefits" className="text-lg hover:text-blue-400 transition-colors">
              Benefits
            </a>
          </li>
          <li>
            <a href="#guide" className="text-lg hover:text-blue-400 transition-colors">
              Guide
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="text-lg hover:text-blue-400 transition-colors">
              How It Works
            </a>
          </li>
          <li>
            <a href="#testimonials" className="text-lg hover:text-blue-400 transition-colors">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#faqs" className="text-lg hover:text-blue-400 transition-colors">
              FAQs
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Pulsierender Strich */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 animate-pulse" />

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-gray-900 to-black w-full absolute top-full left-0 shadow-lg">
          <ul className="flex flex-col items-center space-y-6 py-6">
            <li>
              <a
                href="#header"
                className="text-lg hover:text-blue-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#benefits"
                className="text-lg hover:text-blue-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                Benefits
              </a>
            </li>
            <li>
              <a
                href="#guide"
                className="text-lg hover:text-blue-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                Guide
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="text-lg hover:text-blue-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-lg hover:text-blue-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                className="text-lg hover:text-blue-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}