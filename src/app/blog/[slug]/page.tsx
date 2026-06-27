// src/app/blog/[slug]/page.tsx
import { blogPosts, getBlogPostBySlug } from "../../data/blogs";
import Navbar from "../../components/Navbar";
import BlogPostContent from "../../components/BlogPostContent";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { compileMDX } from 'next-mdx-remote/rsc';

// MDX Components direkt importieren (ohne Hook in async Function)
import * as mdxComponents from '../../../../mdx-components';

// JSON-LD structured data (Article + FAQPage + BreadcrumbList)
import { JsonLd } from "../../components/JsonLd";
import { siteConfig } from "../../config/site";
import { blogFaqs } from "../../data/blog-faqs";

type Props = {
  params: Promise<{ slug: string }>;
};

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
      "Solana Holder Bot", "Solana Volume Bot", "solana holder bot",
      "solana volume bot", "permanent holders bot", "solana volume booster",
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
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const postIndex = blogPosts.findIndex((p) => p.slug === resolvedParams.slug);

  if (postIndex === -1) notFound();

  // Lade nur Content wenn noetig
  const fullPost = getBlogPostBySlug(resolvedParams.slug);
  if (!fullPost) notFound();

  // MDX kompilieren
  let compiledContent: React.ReactNode = null;

  if (fullPost.isMDX) {
    const result = await compileMDX({
      source: fullPost.content,
      options: {
        // Strip YAML frontmatter from the MDX body before rendering. Safe for
        // posts without frontmatter (it is simply a no-op for them).
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      },
      components: mdxComponents,        // direkt das Objekt uebergeben
    });
    compiledContent = result.content;
  }

  const prevSlug = postIndex > 0 ? blogPosts[postIndex - 1].slug : null;
  const nextSlug =
    postIndex < blogPosts.length - 1
      ? blogPosts[postIndex + 1].slug
      : blogPosts[0].slug;

  return (
    <div className="flex flex-col min-h-screen pt-16 bg-black overflow-hidden">
      {/* JSON-LD: emits Article + FAQPage + BreadcrumbList script tags. */}
      <JsonLd
        frontmatter={{
          title: fullPost.title,
          description: fullPost.excerpt,
          slug: fullPost.slug,
          date: fullPost.date,
          author: "Solana Holder Bot Team",
          ogImage: fullPost.image,
          faqs: blogFaqs[fullPost.slug],
        }}
        site={siteConfig}
      />

      <Navbar />
      <main className="grow py-5 relative z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <BlogPostContent
            post={fullPost}
            compiledContent={compiledContent}
            prevSlug={prevSlug}
            nextSlug={nextSlug}
          />
        </div>
      </main>
    </div>
  );
}