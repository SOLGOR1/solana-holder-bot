import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  date: string;
  slug: string;
  content: string;        // raw content (md oder mdx)
  isMDX: boolean;         // neu: damit wir wissen, wie wir rendern sollen
};

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllBlogPosts(): BlogPost[] {
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

export const blogPosts: BlogPost[] = getAllBlogPosts();