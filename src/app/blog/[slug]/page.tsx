// src/app/blog/[slug]/page.tsx
import { blogPosts } from "../../data/blogs";
import BlogNavbar from "../../components/BlogNavbar";
import Head from "next/head";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return <div className="text-white">Post not found</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title} - Solana Holder Bot</title>
        <meta name="description" content={post.description} />
      </Head>
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
    </>
  );
}
