"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isGifLoaded, setIsGifLoaded] = useState(false); // Zustand für GIF-Ladevorgang

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <header className="bg-black text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 relative">
          {/* Ladeanimation */}
          {!isGifLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <Image
            src="/solholder.gif"
            alt="Solana Holder Bot for Memecoin Rankings"
            width={400}
            height={600}
            className="mx-auto"
            unoptimized // Für animierte GIFs
            onLoad={() => setIsGifLoaded(true)} // onLoadingComplete durch onLoad ersetzt
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
            Automate Holder Generation with Our Telegram Bot
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Boost Your Memecoin
            <span className="block text-3xl md:text-4xl mt-1">
              with Permanent Solana Holders
            </span>
          </h1>
          <p className="mt-6 text-gray-300">
            Elevate your Solana memecoin’s ranking effortlessly. <br />
            This Telegram bot creates random wallets and distributes tokens for secure, permanent holders.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-6">
            <Link
              href="https://t.me/Degen_wg_bot"
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 border border-blue-400 hover:from-blue-600 hover:to-blue-800 transition-all text-lg"
            >
              Get Started
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </Link>
            <button
              onClick={openVideo}
              className="px-8 py-4 rounded-lg font-semibold flex items-center gap-3 border border-white text-white hover:bg-gray-800 transition-all text-lg"
            >
              Watch Demo
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 22V2l18 10L3 22z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Video Popup */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-gray-900 p-6 rounded-lg max-w-5xl w-full">
            <button
              onClick={closeVideo}
              className="absolute -top-4 -right-4 text-white text-3xl font-bold bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:text-gray-300"
            >
              ×
            </button>
            <div className="relative" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/7jdOvbVwZeI?autoplay=1"
                title="Solana Holder Bot Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}