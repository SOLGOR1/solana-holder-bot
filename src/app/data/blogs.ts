import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ✅ Metadaten OHNE content (für Homepage)
export type BlogPostMetadata = {
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  date: string;
  slug: string;
  isMDX: boolean;
};

// ✅ Vollständiger Post mit Content (nur bei Bedarf laden)
export type BlogPost = BlogPostMetadata & {
  content: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

function getAllPostsWithContent(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory).filter((file) =>
    file.endsWith(".md") || file.endsWith(".mdx")
  );

  const blogPosts: BlogPost[] = fileNames
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      if (!data.slug || typeof data.slug !== "string") {
        console.warn(`Warning: Missing slug in ${fileName}`);
        return null;
      }

      return {
        title: data.title || "Untitled",
        excerpt: data.excerpt || "",
        image: data.image || "/default-image.jpg",
        imageAlt: data.imageAlt || "Blog Post",
        date: data.date || "1970-01-01",
        slug: data.slug,
        content,
        isMDX: fileName.endsWith(".mdx"),
      };
    })
    .filter((post): post is BlogPost => post !== null);

  return blogPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// ✅ WICHTIG: Exportiere NUR Metadaten für Homepage
export function getBlogPostsMetadata(): BlogPostMetadata[] {
  return getAllPostsWithContent().map(({ content, ...metadata }) => metadata); // eslint-disable-line @typescript-eslint/no-unused-vars
}

// ✅ Exportiere Metadaten als default
export const blogPosts: BlogPostMetadata[] = getBlogPostsMetadata();

// ✅ Einzelnen Post mit Content laden (für Blog-Seite)
export function getBlogPostBySlug(slug: string): BlogPost | null {
  const allPosts = getAllPostsWithContent();
  return allPosts.find(post => post.slug === slug) || null;
}