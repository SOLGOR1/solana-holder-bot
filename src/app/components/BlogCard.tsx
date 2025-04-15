// src/components/BlogCard.tsx
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "../data/blogs";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
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
  );
}