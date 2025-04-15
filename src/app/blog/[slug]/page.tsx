// src/app/blog/[slug]/page.tsx
import { blogPosts } from "../../data/blogs";
import BlogNavbar from "../../components/BlogNavbar";
import { notFound } from "next/navigation";

// Define the props for the dynamic page
interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for pre-rendering
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Export metadata (SEO) for each post
export async function generateMetadata({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} - Solana Holder Bot`,
    description: post.excerpt, // using excerpt here instead of undefined `description`
  };
}

// The main page component
export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <div className="flex flex-col min-h-screen pt-16 bg-gradient-to-b from-gray-900 to-black">
      <BlogNavbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 text-white">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="mb-6">{post.date}</p>
          <div>{post.content}</div>
        </div>
      </main>
    </div>
  );
}
