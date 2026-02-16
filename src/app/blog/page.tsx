// src/app/blog/page.tsx (Server Component – sauber & professionell)
import { blogPosts } from "../data/blogs";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import { FaTelegramPlane } from "react-icons/fa";

export default function BlogOverview() {
  // Sortiere nach Datum (neueste zuerst)
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featured = sortedPosts[0];
  const otherPosts = sortedPosts.slice(1);

  return (
    <div className="flex flex-col min-h-screen pt-5 bg-black overflow-hidden">
      <Navbar />

      {/* Dezente pulsierende Blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-cyan-600/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/5 rounded-full blur-3xl animate-pulse-slow-delay" />
      </div>

      <main className="flex-grow py-20 relative z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          {/* Titel */}
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 tracking-tight text-white">
            Our Blog
          </h1>

          {/* Kurzes, fokussiertes Intro – leicht erweitert für Word Count, aber nicht dominant */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xl md:text-2xl font-light text-gray-200">
              Unlock the secrets of successful Solana volume and holder strategies
            </p>
            <p className="text-base md:text-lg text-gray-400 mt-3">
              In-depth guides, expert insights, and proven tactics for PumpFun, Raydium, DexScreener, and the best Solana tools in 2026.
            </p>
          </div>

          {/* RSS-Button */}
          <div className="text-center mb-12">
            <a
              href="/blog/rss.xml"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md text-white text-sm font-medium rounded-xl border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-white/40"
            >
              <img src="/rss-icon.png" alt="RSS Icon" className="w-5 h-5" />
              Subscribe to RSS Feed
            </a>
          </div>

          {/* Featured Post */}
          {featured && (
            <div className="max-w-4xl mx-auto mb-12">
              <Link href={`/blog/${featured.slug}`}>
                <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-500/30">
                  <div className="relative overflow-hidden">
                    <Image
                      src={featured.image}
                      alt={featured.imageAlt}
                      width={1200}
                      height={600}
                      className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute top-4 right-4 bg-cyan-500/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="text-gray-400 text-sm mb-2">
                      {new Date(featured.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {featured.title}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed line-clamp-2">
                      {featured.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Grid mit den restlichen Posts */}
          {otherPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {otherPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-emerald-500/20 hover:border-emerald-500/30 h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        width={600}
                        height={400}
                        className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <div className="p-4 md:p-5 flex flex-col flex-grow">
                      <p className="text-gray-400 text-xs mb-2">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 flex-grow">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400 text-lg">No additional posts yet. Stay tuned!</p>
          )}

          {/* Erweiterte CTA unten – längerer Text, coole Buttons mit Shine-Effekt-Stil */}
          <div className="mt-24 text-center max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Launch Your Solana Project?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              Our blog is your go-to resource for mastering Solana memecoin launches in 2026 – from generating permanent holders to authentic volume boosting on Pump.fun, PumpSwap, Raydium, and DexScreener.
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              Explore our powerful Telegram bots and detailed documentation to give your token the edge it needs. Whether you're pushing bonding curves, building holder distribution, or trending on major platforms, we have the tools trusted by over 2,100 projects.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-8">
              {/* Holder Bot Button */}
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


              {/* Docs Button */}
              <a
                href="https://solana-holder-bot.gitbook.io/solana-holder-bot-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-5 bg-white/10 backdrop-blur-md text-white font-semibold rounded-2xl border border-white/20 shadow-xl overflow-hidden transition-all duration-500 hover:bg-white/20 hover:border-white/40 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                  </svg>
                  View Documentation & Guides
                </span>
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const metadata = {
  title: "Blog | Solana Holder Bot – Guides for Volume & Holders in 2026",
  description: "Expert guides and strategies for Solana holder bot and volume bot tools. Learn how to dominate Pump.fun, DexScreener, and Raydium launches with authentic growth.",
  keywords: "solana holder bot, solana volume bot, pumpfun volume bot, dexscreener boost, permanent holders bot, solana memecoin marketing",
  robots: "index, follow",
  alternates: {
    rss: "/blog/rss.xml",
  },
};