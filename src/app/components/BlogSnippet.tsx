// src/components/BlogSnippet.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "../data/blogs";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type BlogSnippetProps = {
  posts: BlogPost[];
};

export default function BlogSnippet({ posts }: BlogSnippetProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (posts.length === 0) return null;

  const featured = posts[0];
  const secondary = posts.slice(1, 3);

  // Statischer Fallback während SSR
  if (!mounted) {
    return (
      <section id="blog" className="relative bg-black py-5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 tracking-tight text-white">
            Latest Insights
          </h2>
          {/* Platzhalter für Featured Card */}
          <div className="max-w-4xl mx-auto mb-10 h-[520px] bg-white/5 rounded-3xl" />
          {/* Platzhalter für Secondary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map((i) => (
              <div key={i} className="h-[420px] bg-white/5 rounded-3xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="relative bg-black py-5 overflow-hidden">
      {/* Hintergrund Blobs */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl"
          style={{ 
            animation: 'gentlePulse 32s ease-in-out infinite' 
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl"
          style={{ 
            animation: 'gentlePulse 36s ease-in-out infinite reverse' 
          }}
        />
      </div>

      <style jsx>{`
        @keyframes gentlePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-10 tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Latest Insights
        </motion.h2>

        {/* Featured Card */}
        <motion.div
          className="max-w-4xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href={`/blog/${featured.slug}`}>
            <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-cyan-500/30 hover:border-cyan-500/40">
              <div className="relative overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  width={1200}
                  height={500}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 bg-cyan-500/95 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg ring-2 ring-cyan-400/50">
                  Featured
                </div>
                <div className="absolute top-4 left-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                    <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
                  </svg>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-100 text-sm mb-2">
                  {new Date(featured.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {featured.title}
                </h3>
                <p className="text-gray-100 text-base leading-relaxed line-clamp-3">
                  {featured.excerpt}
                </p>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Secondary Cards */}
        {secondary.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
            {secondary.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-emerald-500/30 hover:border-emerald-500/40">
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        width={600}
                        height={300}
                        className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                          <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-5 md:p-6">
                      <p className="text-gray-100 text-sm mb-2">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-100 text-base line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Link href="/blog">
            <motion.button
              className="group relative px-10 py-4 bg-white/10 backdrop-blur-md text-white font-medium rounded-2xl border border-white/20 shadow-lg overflow-hidden transition-all duration-500 hover:bg-white/20 hover:border-white/40 hover:shadow-xl hover:ring-4 hover:ring-cyan-400/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Posts
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}