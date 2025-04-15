// src/data/blogs.ts
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
  content: string;
};

// Path to the posts directory
const postsDirectory = path.join(process.cwd(), "posts");

// Function to get all blog posts
export function getAllBlogPosts(): BlogPost[] {
  // Get all .md files in the posts directory
  const fileNames = fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));

  // Map each file to a blog post
  const blogPosts: BlogPost[] = fileNames
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      // Validate required fields
      if (!data.slug || typeof data.slug !== "string") {
        console.warn(`Warning: Missing or invalid 'slug' in ${fileName}. Skipping this post.`);
        return null;
      }

      return {
        title: data.title || "Untitled",
        excerpt: data.excerpt || "",
        image: data.image || "/default-image.jpg",
        imageAlt: data.imageAlt || "Default image for blog post",
        date: data.date || "1970-01-01",
        slug: data.slug,
        content,
      };
    })
    .filter((post): post is BlogPost => post !== null); // Remove null entries

  // Sort posts by date (newest first)
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Export the sorted blog posts
export const blogPosts: BlogPost[] = getAllBlogPosts();