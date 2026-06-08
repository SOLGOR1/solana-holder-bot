import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // Wichtig für MD/MDX
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  // === HEADERS ===
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

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
    minimumCacheTTL: 31536000,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  experimental: {
    optimizePackageImports: ["framer-motion", "react-icons", "lucide-react"],
    inlineCss: true,
  },

  output: "standalone",
  trailingSlash: false,
  generateEtags: true,

  // Turbopack Config (vereinfacht)
  turbopack: {
    resolveExtensions: [
      '.md', '.mdx', '.tsx', '.ts', '.jsx', '.js', '.json'
    ],
    // rules nur wenn wirklich nötig (z.B. für SVGs etc.)
  },

  // Dein alter Webpack-Alias bleibt erhalten
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "../build/polyfills/polyfill-module": false,
      "next/dist/build/polyfills/polyfill-module": false,
    };
    return config;
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);