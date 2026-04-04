// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'indiehunt.io' },
      { protocol: 'https', hostname: 'earlyhunt.com' },
      { protocol: 'https', hostname: 'cdn.aidirectori.es' },
      { protocol: 'https', hostname: 'www.uneed.best' },
    ],
    qualities: [75, 80, 82, 85, 90, 95, 100],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  experimental: {
    optimizePackageImports: ["framer-motion", "react-icons"],
    inlineCss: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // === Saubere 301-Redirects für www + http ===
  async redirects() {
    return [
      // www → ohne www (Permanent 301)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            key: 'host',
            value: 'www.solanaholderbot.com',
          },
        ],
        destination: 'https://solanaholderbot.com/:path*',
        permanent: true,
      },
      // http → https (Permanent 301)
      {
        source: '/:path*',
        has: [
          {
            type: 'scheme',
            key: 'scheme',
            value: 'http',
          },
        ],
        destination: 'https://solanaholderbot.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;