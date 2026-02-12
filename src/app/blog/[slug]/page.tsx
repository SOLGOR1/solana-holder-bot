// src/app/blog/[slug]/page.tsx (Server Component)
import { blogPosts, BlogPost } from "../../data/blogs";
import Navbar from "../../components/Navbar";
import BlogPostContent from "../../components/BlogPostContent";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

// Dynamische Metadata pro Post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "Post nicht gefunden | Solana Holder Bot",
      description: "Der gesuchte Blog-Post konnte nicht gefunden werden.",
    };
  }

  const url = `https://solanaholderbot.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Solana Holder Bot Blog`,
    description: post.excerpt,
    keywords: [
      "Solana Holder Bot",
      "Solana Volume Bot",
      "solana holder bot",
      "solana volume bot",
      "permanent holders bot",
      "solana volume booster",
      post.title,
    ],
    openGraph: {
      type: "article",
      url,
      title: `${post.title} | Solana Holder Bot`,
      description: post.excerpt,
      images: [
        {
          url: `https://solanaholderbot.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.title,
        },
      ],
      publishedTime: post.date,
      authors: ["Solana Holder Bot Team"],
      siteName: "Solana Holder Bot",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Solana Holder Bot`,
      description: post.excerpt,
      images: [`https://solanaholderbot.com${post.image}`],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Statische Pfade für Build-Time Generation
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const postIndex = blogPosts.findIndex((p) => p.slug === resolvedParams.slug);

  if (postIndex === -1) {
    notFound();
  }

  const post = blogPosts[postIndex];
  const prevSlug = postIndex > 0 ? blogPosts[postIndex - 1].slug : null;

  // Circular Navigation für nextSlug – immer ein string (wie in deiner Originalversion)
  const nextSlug =
    postIndex < blogPosts.length - 1
      ? blogPosts[postIndex + 1].slug
      : blogPosts[0].slug; // zurück zum ersten Post

  return (
    <div className="flex flex-col min-h-screen pt-16 bg-black overflow-hidden">
      <Navbar />
      <main className="flex-grow py-5 relative z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <BlogPostContent post={post} prevSlug={prevSlug} nextSlug={nextSlug} />
        </div>
      </main>
    </div>
  );
}