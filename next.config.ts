// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // === CORE SETTINGS ===
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // === HEADERS (Security + Cache) ===
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          // Besserer Cache für statische Assets (hilft gegen Redirects)
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // === IMAGES OPTIMIZATION – stark verbessert gegen Redirects ===
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "indiehunt.io" },
      { protocol: "https", hostname: "earlyhunt.com" },
      { protocol: "https", hostname: "cdn.aidirectori.es" },
      { protocol: "https", hostname: "www.uneed.best" },
      { protocol: "https", hostname: "auraplusplus.com" },
      { protocol: "https", hostname: "toolfame.com" },
      { protocol: "https", hostname: "uno.directory" },
      { protocol: "https", hostname: "api.producthunt.com" },
    ],
    qualities: [75, 80, 85, 90],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],

    // === WICHTIGSTE ÄNDERUNGEN GEGEN IMAGE REDIRECTS ===
    minimumCacheTTL: 31536000,   // 1 Jahr Cache → reduziert Image Redirects massiv
    unoptimized: false,
  },

  // === COMPILER ===
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // === EXPERIMENTAL FEATURES ===
  experimental: {
    optimizePackageImports: ["framer-motion", "react-icons", "lucide-react"],
    inlineCss: true,
  },

  // === OTHER OPTIMIZATIONS ===
  trailingSlash: false,
  generateEtags: true,
  output: "standalone",

  // === TURBOPACK + Webpack Alias (Legacy Polyfills) ===
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": "./src/lib/modern-polyfill.js",
      "next/dist/build/polyfills/polyfill-module": "./src/lib/modern-polyfill.js",
    },
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "../build/polyfills/polyfill-module": false,
      "next/dist/build/polyfills/polyfill-module": false,
    };
    return config;
  },
};

export default nextConfig;