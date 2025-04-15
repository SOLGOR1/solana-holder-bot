// app/sitemap.js
import { blogPosts } from "@/data/blogs";

export default function sitemap() {
  // Base URL of your site
  const baseUrl = "https://www.solanaholderbot.com";

  // Homepage entry
  const homepageEntry = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  };

  // Blog post entries
  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date, // Use the blog post's date
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Combine homepage and blog entries
  return [homepageEntry, ...blogEntries];
}