// app/sitemap.ts
import { MetadataRoute } from 'next';
import { blogPosts } from './data/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://solanaholderbot.com';

  // Statische wichtige Seiten (hohe Priorität)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/solana-holder-bot`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/solana-volume-bot`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/solana-all-in-one-booster`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Blog-Beiträge aus deiner data/blogs
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date), // verwendet das echte Datum aus deinen Blog-Daten
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...blogEntries];
}