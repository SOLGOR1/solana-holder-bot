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
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            SOLANA HOLDER BOT
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
            Automate Holder Generation with Our Telegram Bot
          </h2>
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
          <p className="mt-10"></p>
          {/* Neuer Hinweis und Button für All-in-One Booster Bot */}
          <div className="mt-10">
            <h3 className="text-4xl md:text-5xl font-bold text-blue-400">
              ✨ NEW: All-in-One Booster Bot (Beta) ✨
            </h3>
            <p className="mt-4 text-xl text-gray-200">
              Revolutionize your memecoin with our cutting-edge bot! Boost Volume, Holders, and Transactions in one go. Startable from just 0.5 SOL.
            </p>
            <div className="mt-6">
              <Link
                href="https://t.me/LeekRevenue_bot"
                className="relative inline-flex items-center justify-center px-10 py-5 rounded-lg text-2xl font-bold text-white bg-gradient-to-r from-blue-500 to-blue-700 border border-blue-400 hover:from-blue-600 hover:to-blue-800 transition-all overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-3">
                  🚀 Try All-in-One Booster Bot Now
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 group-hover:animate-shine" />
              </Link>
            </div>
          </div>
          {/* Separator für klare Trennung */}
          <div className="mt-10 border-t border-gray-600 pt-8">
            <h3 className="text-4xl md:text-5xl font-bold mt-2">
              Boost Your Memecoin
              <span className="block text-3xl md:text-4xl mt-1">
                with Permanent Solana Holders
              </span>
            </h3>
            <p className="mt-6 text-gray-300">
              Elevate your Solana memecoin’s ranking effortlessly. <br />
              This Telegram bot creates random wallets and distributes tokens for secure, permanent holders.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-6">
              <Link
                href="https://t.me/Degen_wg_bot"
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 border border-blue-400 hover:from-blue-600 hover:to-blue-800 transition-all text-lg"
              >
                HOLDER BOT
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                </svg>
              </Link>
              <Link
                href="https://t.me/MellowHyperVolumeBot?start=ref_xSR5v"
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 border border-blue-400 hover:from-blue-600 hover:to-blue-800 transition-all text-lg"
              >
                VOLUME BOT
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
                </svg>
              </Link>
            </div>
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