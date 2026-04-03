// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'indiehunt.io' },
      { protocol: 'https', hostname: 'earlyhunt.com' },
      { protocol: 'https', hostname: 'cdn.aidirectori.es' },
      { protocol: 'https', hostname: 'www.uneed.best' },
    ],
        // ← NEU: Erlaubte Qualitätsstufen für Next.js 16
    qualities: [75, 80, 82, 85, 90, 95, 100],
    // Optional: Default Quality etwas höher
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

experimental: {
  optimizePackageImports: ["framer-motion", "react-icons"],
  inlineCss: true,
},

  // ← NEU: Das ist der stärkste Hebel gegen Legacy JS
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // SWC-Transpiler aggressiver machen (moderne Browser)
  swcMinify: true,
};

export default nextConfig;