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
              key={post.slug} // Changed from post.id to post.slug
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
      </div>
    </section>
  );
}