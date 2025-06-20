// src/app/blog/rss.xml/route.ts
import { blogPosts } from "../../data/blogs";

// Funktion zum Escapen von XML-Sonderzeichen
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const siteUrl = "https://www.solanaholderbot.com";
  const feedUrl = `${siteUrl}/blog/rss.xml`;

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Solana Holder Bot Blog</title>
    <link>${siteUrl}/blog</link>
    <description>News and tips for Solana token growth with Solana Holder Bot.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    ${blogPosts
      .map((post) => {
        // Emojis entfernen
        const cleanTitle = post.title.replace(/[\u{1F600}-\u{1F6FF}]/gu, "");
        return `
    <item>
      <title>${escapeXml(cleanTitle)}</title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <description>${escapeXml(`Read more about ${cleanTitle.toLowerCase()} on our blog.`)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>${siteUrl}/blog/${post.slug}</guid>
    </item>
    `;
      })
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}