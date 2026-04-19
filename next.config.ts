// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // === CORE SETTINGS ===
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // === HEADERS ===
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },

  // === IMAGES OPTIMIZATION ===
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

  // === TURBOPACK (bleibt für andere Sachen) ===
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": "./src/lib/modern-polyfill.js",
      "next/dist/build/polyfills/polyfill-module": "./src/lib/modern-polyfill.js",
    },
  },

  // === NEU: Webpack-Alias – entfernt die Legacy-Polyfills zuverlässig ===
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