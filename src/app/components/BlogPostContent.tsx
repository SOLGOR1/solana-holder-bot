// src/components/BlogPostContent.tsx (Client Component für Animationen & Style)
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MarkdownRenderer from "./MarkDownRenderer";
import { BlogPost } from "../data/blogs";
import { FaTelegramPlane } from "react-icons/fa";

type BlogPostContentProps = {
  post: BlogPost;
  prevSlug: string | null;
  nextSlug: string;
};

export default function BlogPostContent({ post, prevSlug, nextSlug }: BlogPostContentProps) {
  return (
    <>
      {/* Dezente pulsierende Blobs */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-600/5 rounded-full blur-3xl"
        animate={{ scale: [1.1, 0.95, 1.1] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glas-Container für den Post-Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12"
      >
        {/* Featured Image mit Logo-Overlay */}
        <div className="relative mb-10 overflow-hidden rounded-3xl">
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          {/* SolanaHolderBot Logo – top-left */}
          <div className="absolute top-6 left-6 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
              <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
            </svg>
          </div>
        </div>

        {/* Titel & Datum */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {post.title}
        </motion.h1>
        <p className="text-gray-400 text-lg text-center mb-12">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {/* Markdown Content */}
        <motion.div
          className="prose prose-invert prose-headings:text-white prose-a:text-cyan-400 prose-a:hover:text-cyan-300 prose-p:text-gray-300 prose-li:text-gray-300 prose-code:text-pink-400 prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-pre:shadow-lg max-w-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MarkdownRenderer content={post.content} />
        </motion.div>

        {/* CTA am Ende */}
        <motion.div
          className="mt-16 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready To Start Trending?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <a
              href="https://t.me/Degen_wg_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-cyan-600/20 backdrop-blur-md text-white font-medium rounded-2xl border border-cyan-500/30 shadow-lg overflow-hidden transition-all duration-500 hover:bg-cyan-600/30 hover:border-cyan-500/50 hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <FaTelegramPlane className="w-6 h-6" />
                Solana Holder Bot
              </span>
            </a>

            <a
              href="https://t.me/leektradingbot"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-emerald-600/20 backdrop-blur-md text-white font-medium rounded-2xl border border-emerald-500/30 shadow-lg overflow-hidden transition-all duration-500 hover:bg-emerald-600/30 hover:border-emerald-500/50 hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <FaTelegramPlane className="w-6 h-6" />
                Solana Volume Bot
              </span>
            </a>
          </div>

          {/* Previous/Next Navigation */}
          <div className="flex justify-between gap-4">
            {prevSlug && (
              <Link href={`/blog/${prevSlug}`}>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-medium rounded-2xl border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-white/40 flex-1 text-left">
                  <span className="text-lg">← Previous Article</span>
                </button>
              </Link>
            )}
            <Link href={`/blog/${nextSlug}`}>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-medium rounded-2xl border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-white/40 flex-1 text-right">
                <span className="text-lg">Next Article →</span>
              </button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}