// src/components/BlogSnippet.tsx
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "../data/blogs";

type BlogSnippetProps = {
  posts: BlogPost[];
};

export default function BlogSnippet({ posts }: BlogSnippetProps) {
  return (
    <section id="blog" className="scroll-mt-16 py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.slice(0, 2).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-blue-500/50 transition-all cursor-pointer"
            >
              <Image
                src={post.image}
                alt={post.imageAlt}
                width={800}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{post.date}</p>
                <p className="text-gray-300">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        {posts.length > 2 && (
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">More Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {posts.slice(2).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative block py-3 px-4 bg-gray-800/50 rounded-md border border-gray-700/50 hover:bg-gray-700/80 hover:border-blue-500/50 transition-all duration-300"
                >
                  <span className="text-gray-200 group-hover:text-blue-400 font-medium text-base transition-colors">
                    {post.title}
                  </span>
                  <span className="absolute inset-y-0 left-0 w-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:shadow-blue-500/50 transition-all duration-300"
              >
                Explore All Posts
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}