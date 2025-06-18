// src/components/BlogSnippet.tsx
"use client"; // Mark as Client Component

import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "../data/blogs";

type BlogSnippetProps = {
  posts: BlogPost[];
};

export default function BlogSnippet({ posts }: BlogSnippetProps) {
  return (
    <section
      id="blog"
      className="scroll-mt-16 py-16 bg-gradient-to-b from-gray-900 via-blue-950 to-black relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] opacity-10 animate-pulse-slow" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Latest Blog Posts
          </span>
        </h2>
        {/* Featured Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {posts.slice(0, 2).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-blue-600/50 transition-all duration-300"
            >
              <div className="relative">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  width={800}
                  height={400}
                  className="w-full h-56 object-cover rounded-t-xl"
                />
                <div className="absolute top-2 right-2 bg-blue-600/80 text-white text-xs font-semibold px-2 py-1 rounded-md">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-gray-300 text-base line-clamp-3">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        {/* More Posts */}
        {posts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8 text-center">
              More Insights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative block py-4 px-5 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:bg-gray-700/80 hover:border-blue-500/50 transition-all duration-300"
                >
                  <span className="text-gray-200 text-base font-medium group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </span>
                  <span className="absolute inset-y-0 left-0 w-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="text-gray-400 text-sm mt-2 block">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-full hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 hover:shadow-blue-500/50 transition-all duration-300"
              >
                Discover All Posts
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}