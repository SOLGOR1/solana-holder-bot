// app/sitemap.js
import { blogPosts } from "./data/blogs";

export default function sitemap() {
  const baseUrl = "https://www.solanaholderbot.com";

  const homepageEntry = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  };

  // ← NEU: Die beiden Landingpages (wichtigster Teil!)
  const landingPages = [
    {
      url: `${baseUrl}/solana-volume-bot`,
      lastModified: new Date("2026-03-23"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/solana-holder-bot`,
      lastModified: new Date("2026-03-23"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
  ];

  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [homepageEntry, ...landingPages, ...blogEntries];
}