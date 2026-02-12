// src/app/blog/page.tsx (Server Component – sauber & professionell)
import { blogPosts } from "../data/blogs";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";

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

      {/* Dezente pulsierende Blobs – genau wie in der alten Version */}
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

          {/* Hero-Text – kompakt und modern */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-2xl font-light text-gray-200">
              Unlock the secrets of successful Solana volume and holder strategies
            </p>
            <p className="text-base md:text-lg text-gray-400 mt-3">
              Guides, insights, and updates for PumpFun, Raydium, DexScreener, and the best Solana tools in 2026.
            </p>
          </div>

          {/* RSS-Button */}
          <div className="text-center mb-12">
            <a
              href="/blog/rss.xml"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md text-white text-sm font-medium rounded-xl border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-white/40"
            >
              <img src="/rss-icon.png" alt="RSS" className="w-5 h-5" />
              Subscribe to RSS Feed
            </a>
          </div>

          {/* Featured Post – deutlich kompakter, moderner Look */}
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

          {/* Grid mit den restlichen Posts – sehr kompakt und übersichtlich */}
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
        </div>
      </main>
    </div>
  );
}

export const metadata = {
  title: "Blog - Solana Holder Bot",
  description: "Read the latest blog posts about Solana and how to make the most of your holdings with Solana Holder Bot.",
  keywords: "Solana, Solana Holder Bot, Solana Volume Bot, Sol Volume Boost, blog, crypto, blockchain",
  robots: "index, follow",
  alternates: {
    rss: "/blog/rss.xml",
  },
};