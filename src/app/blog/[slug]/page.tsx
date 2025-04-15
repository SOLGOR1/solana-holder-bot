import { blogPosts, BlogPost } from "../../data/blogs";
import BlogNavbar from "../../components/BlogNavbar";
import Image from "next/image";
import { notFound } from "next/navigation";
import MarkdownRenderer from "../../components/MarkDownRenderer";

// Optional: SEO Metadata Support
import { Metadata } from "next";

interface BlogPostPageProps {
  params: { slug: string };
}

// ✅ Optional: generateMetadata für bessere SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post not found - Solana Holder Bot",
      description: "This blog post could not be found.",
    };
  }

  return {
    title: `${post.title} - Solana Holder Bot`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} - Solana Holder Bot`,
      description: post.excerpt,
      url: `https://solanaholderbot.com/blog/${post.slug}`,
      type: "article",
      images: [{ url: post.image }],
    },
  };
}

// ✅ Fix: Page muss async sein
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post: BlogPost | undefined = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
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
  );
}

// ✅ Static Params (bleibt gleich)
interface StaticParams {
  slug: string;
}

export async function generateStaticParams(): Promise<StaticParams[]> {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
