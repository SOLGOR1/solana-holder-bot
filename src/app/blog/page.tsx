// src/app/blog/page.tsx
import { blogPosts } from "../data/blogs";
import BlogNavbar from "../components/BlogNavbar";
import BlogCard from "../components/BlogCard";
import Head from "next/head";

export default function BlogOverview() {
  return (
    <>
      <Head>
        <title>Blog - Solana Holder Bot</title>
        <meta name="description" content="Read the latest blog posts about Solana and how to make the most of your holdings with Solana Holder Bot." />
        <meta name="keywords" content="Solana, Solana Holder Bot, Solana Volume Bot, Sol Volume Boost, blog, crypto, blockchain" />
        <meta name="robots" content="index, follow" />
        <link rel="alternate" type="application/rss+xml" title="Solana Holder Bot Blog RSS Feed" href="/blog/rss.xml" />
      </Head>
      <div className="flex flex-col min-h-screen pt-16 bg-gradient-to-b from-gray-900 to-black">
        <BlogNavbar />
        <main className="flex-grow py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">Our Blog</h1>
            <p className="text-white text-center mb-4">
              <a href="/blog/rss.xml" className="flex items-center justify-center text-blue-400 hover:underline">
                <img src="/rss-icon.png" alt="RSS" className="w-4 h-4 mr-2" />
                Subscribe to our RSS Feed
              </a>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}