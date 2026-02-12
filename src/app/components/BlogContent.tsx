// src/components/BlogContent.tsx (neue Client-Komponente für Animationen)
"use client";

import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { BlogPost } from "../data/blogs";

type BlogContentProps = {
  posts: BlogPost[];
};

export default function BlogContent({ posts }: BlogContentProps) {
  return (
    <>
      {/* Pulsierende Blobs */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-600/10 rounded-full blur-3xl"
        animate={{ scale: [1.1, 0.95, 1.1] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glass-Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-7xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10 md:p-16"
      >
        {/* Titel */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-center mb-10 tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Blog
        </motion.h1>

        {/* RSS-Link */}
        <div className="text-center mb-12">
          <a
            href="/blog/rss.xml"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg"
          >
            <img src="/rss-icon.png" alt="RSS" className="w-5 h-5" />
            Subscribe to our RSS Feed
          </a>
        </div>

        {/* Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-xl">No posts yet. Stay tuned!</p>
        )}
      </motion.div>
    </>
  );
}