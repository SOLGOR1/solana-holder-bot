// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'foundrlist.com' },
      { protocol: 'https', hostname: 'indiehunt.io' },
      { protocol: 'https', hostname: 'earlyhunt.com' },
      { protocol: 'https', hostname: 'cdn.aidirectori.es' },
      { protocol: 'https', hostname: 'www.uneed.best' },
    ],
  },

  experimental: {
    inlineCss: true,
    optimizePackageImports: ["framer-motion", "react-icons"], // wichtig!
  },

  // ← NEU: Das ist der stärkste Hebel gegen Legacy JS
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // SWC-Transpiler aggressiver machen (moderne Browser)
  swcMinify: true,
};

export default nextConfig;