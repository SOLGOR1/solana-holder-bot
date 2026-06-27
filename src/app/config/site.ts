// src/app/config/site.ts
//
// Single source of truth for origin, post base path, and brand for the JSON-LD.

import type { SiteConfig } from "../../lib/structured-data";

export const siteConfig: SiteConfig = {
  origin: "https://solanaholderbot.com",
  basePath: "/blog",
  siteName: "Solana Holder Bot",
  // TODO: set the real absolute URL of your square logo (>= 112x112 px).
  logoUrl: "https://solanaholderbot.com/logo.png",
};