// src/app/lib/structured-data.ts
//
// Pure, framework-agnostic builder that turns a post into an array of
// schema.org JSON-LD objects (Article + FAQPage + BreadcrumbList). No React and
// no Next.js imports here on purpose, so it stays easy to test and reuse.

export interface BlogFaq {
  question: string;
  answer: string;
}

// The fields JSON-LD needs. They are mapped from your blogPosts objects at the
// call site (excerpt -> description, image -> ogImage, etc.). Fields you do not
// track are optional.
export interface BlogFrontmatter {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  dateModified?: string;
  category?: string;
  schemaType?: string;
  ogImage?: string;
  faqs?: BlogFaq[];
}

export interface SiteConfig {
  // Production origin, no trailing slash, e.g. "https://solanaholderbot.com".
  origin: string;
  // Base path posts live under, e.g. "/blog". Leading slash, no trailing slash.
  basePath: string;
  // Brand name used as the schema publisher, e.g. "Solana Holder Bot".
  siteName: string;
  // Absolute URL to a square logo (>= 112x112 px). Optional but recommended
  // for Article rich results.
  logoUrl?: string;
}

function trimTrailingSlash(value: string): string {
  return value.replace(/\/+$/, "");
}

function normalizeBasePath(value: string): string {
  const withLead = value.startsWith("/") ? value : "/" + value;
  return trimTrailingSlash(withLead);
}

function absoluteUrl(origin: string, maybePath?: string): string | undefined {
  if (!maybePath) return undefined;
  if (/^https?:\/\//i.test(maybePath)) return maybePath;
  const suffix = maybePath.startsWith("/") ? maybePath : "/" + maybePath;
  return origin + suffix;
}

export function buildStructuredData(
  fm: BlogFrontmatter,
  site: SiteConfig
): Record<string, unknown>[] {
  const origin = trimTrailingSlash(site.origin);
  const basePath = normalizeBasePath(site.basePath);
  const blogUrl = origin + basePath;
  const postUrl = blogUrl + "/" + fm.slug;
  const image = absoluteUrl(origin, fm.ogImage);

  const article: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": fm.schemaType || "Article",
    headline: fm.title,
    description: fm.description,
    url: postUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    datePublished: fm.date,
    dateModified: fm.dateModified || fm.date,
    // Switch "Organization" to "Person" if the byline is a single individual.
    author: { "@type": "Organization", name: fm.author, url: origin },
    publisher: {
      "@type": "Organization",
      name: site.siteName,
      ...(site.logoUrl
        ? { logo: { "@type": "ImageObject", url: site.logoUrl } }
        : {}),
    },
    ...(image ? { image } : {}),
  };

  const schemas: Record<string, unknown>[] = [article];

  if (fm.faqs && fm.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: fm.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: origin },
      { "@type": "ListItem", position: 2, name: "Blog", item: blogUrl },
      { "@type": "ListItem", position: 3, name: fm.title, item: postUrl },
    ],
  });

  return schemas;
}