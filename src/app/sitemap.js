// app/sitemap.js
import { blogPosts } from "./data/blogs";

export default function sitemap() {
  const baseUrl = "https://solanaholderbot.com";

  const homepageEntry = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  };

  // ← NEU: Die beiden Landingpages (wichtigster Teil!)
const landingPages = [
  "/solana-volume-bot",
  "/solana-holder-bot",
  "/solana-all-in-one-booster",
  "/blog",
  "/partners",
].map((path) => ({
  url: `${baseUrl}${path}`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.95,
}));

  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [homepageEntry, ...landingPages, ...blogEntries];
}