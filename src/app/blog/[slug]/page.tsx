// src/app/blog/[slug]/page.tsx
import { blogPosts, BlogPost } from "../../data/blogs";
import BlogNavbar from "../../components/BlogNavbar";
import Image from "next/image";
import Head from "next/head";
import { notFound } from "next/navigation";
import MarkdownRenderer from "../../components/MarkDownRenderer";

// Define the props type for the page component
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post: BlogPost | undefined = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>{`${post.title} - Solana Holder Bot`}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content="Solana Holder Bot, Generate Solana Holders, Boost Solana Project, LEEK Project, Crypto Liquidity" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${post.title} - Solana Holder Bot`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://solanaholderbot.com/blog/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            image: post.image,
            author: {
              "@type": "Organization",
              name: "Solana Holder Bot",
              url: "http://solanaholderbot.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Solana Holder Bot",
              logo: {
                "@type": "ImageObject",
                url: "http://solanaholderbot.com/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://solanaholderbot.com/blog/${post.slug}`,
            },
            keywords: "Solana Holder Bot, Generate Solana Holders, Boost Solana Project, LEEK Project, Crypto Liquidity",
          })}
        </script>
      </Head>
      <div className="flex flex-col min-h-screen pt-16 bg-gradient-to-b from-gray-900 to-black">
        <BlogNavbar />
        <main className="flex-grow py-16">
          <article className="container mx-auto px-4 max-w-4xl">
            <Image
              src={post.image}
              alt={post.imageAlt}
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
            <p className="text-gray-400 mb-6">{post.date}</p>
            <MarkdownRenderer content={post.content} />
          </article>
        </main>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}