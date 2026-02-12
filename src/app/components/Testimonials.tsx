"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      avatar: "/avatar/1.png",
      name: "CryptoShark",
      handle: "@CryptoShark_sol",
      text: "Finally found a holder bot that actually keeps the holders permanently. Old ones were dumping after a few days and killing the chart. Big W 🔥",
      replies: 38,
      retweets: 124,
      likes: 612,
      views: "42.1K",
    },
    {
      avatar: "/avatar/2.png",
      name: "LunaHodler",
      handle: "@LunaHodler_69",
      text: "Stacked holders with this bot and we just got verified on Jupiter 😂 Was stuck forever before. Team delivered fast, no issues. If you're launching, don't sleep on this",
      replies: 51,
      retweets: 89,
      likes: 937,
      views: "68.3K",
    },
    {
      avatar: "/avatar/3.png",
      name: "SolSniper",
      handle: "@SolSniper420",
      text: "been using the holder bot for two projects now. setup is stupid easy, holders stick around, chart looks way healthier. paired it with volume bot and it's cooking 👀",
      replies: 23,
      retweets: 67,
      likes: 451,
      views: "31.7K",
    },
    {
      avatar: "/avatar/4.png",
      name: "NFTMaverick",
      handle: "@NFTMaverick_sol",
      text: "yo this holder bot is cracked. added 500 holders overnight and they're still here weeks later. no more fake pump and dump vibes. dev actually cares too, quick support",
      replies: 72,
      retweets: 203,
      likes: 1.2,
      views: "89.4K",
    },
  ];

  return (
    <section id="testimonials" className="relative bg-black py-20">
      {/* Keine starken Blobs mehr – nur sehr dezenter Gradient für Tiefe */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black opacity-70" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our Community Says on X
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="group bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-800/60 overflow-hidden shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* Header – authentisches X-Layout */}
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="rounded-full ring-2 ring-gray-800 group-hover:ring-cyan-500/60 transition-all duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-white truncate text-base">{t.name}</p>
                      <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" fill="currentColor" viewBox="0 0 22 22">
                        <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.148-1.897-.121-.634-.481-1.216-1.012-1.643-.531-.427-1.18-.643-1.862-.643-.68 0-1.332.216-1.863.643-.531.427-.891 1.009-1.012 1.643-.121.633-.075 1.29.148 1.897-.586.274-1.084.706-1.438 1.246-.355.541-.552 1.17-.57 1.816-.018.647.155 1.276.509 1.816.354.54.852.972 1.438 1.246-.223.607-.27 1.264-.148 1.897.121.634.481 1.216 1.012 1.643.531.427 1.18.643 1.862.643.68 0 1.332-.216 1.863-.643.531-.427.891-1.009 1.012-1.643.121-.633.075-1.29-.148-1.897.586-.274 1.084-.706 1.438-1.246.355-.541.552-1.17.57-1.816z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm truncate">{t.handle}</p>
                  </div>
                </div>
              </div>

              {/* Post Text – natürlicher, ohne Anführungszeichen */}
              <div className="px-4 pb-3">
                <p className="text-gray-200 leading-relaxed text-base">
                  {t.text}
                </p>
              </div>

              {/* Engagement Bar – realistisch mit randomisierten Zahlen + Retweet */}
              <div className="px-4 py-3 border-t border-gray-800/50 flex items-center justify-between text-gray-500 text-sm">
                <span className="flex items-center gap-1.5 hover:text-cyan-500 transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {t.replies}
                </span>

                <span className="flex items-center gap-1.5 hover:text-green-500 transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v16l3-3h10l3 3V4H4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h8M8 14h5" />
                  </svg>
                  {t.retweets}
                </span>

                <span className="flex items-center gap-1.5 hover:text-red-500 transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {t.likes > 1000 ? `${(t.likes / 1000).toFixed(1)}K` : t.likes}
                </span>

                <span className="text-gray-500">
                  {t.views}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}