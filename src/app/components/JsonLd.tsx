// src/app/components/JsonLd.tsx
//
// Server component. Renders one <script type="application/ld+json"> per schema
// object. Do NOT add "use client" -- this must run on the server so the JSON-LD
// sits in the initial HTML that crawlers and AI bots read.

import {
  buildStructuredData,
  type BlogFrontmatter,
  type SiteConfig,
} from "../lib/structured-data";

// Escape "<" so no value can close the script tag or inject markup. Consumers
// run JSON.parse, which turns \u003c back into "<", so the data is unchanged.
function toSafeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function JsonLd({
  frontmatter,
  site,
}: {
  frontmatter: BlogFrontmatter;
  site: SiteConfig;
}) {
  const schemas = buildStructuredData(frontmatter, site);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toSafeJsonLd(schema) }}
        />
      ))}
    </>
  );
}