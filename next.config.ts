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
    // ← NEU: Framer Motion & Icons optimieren (spart zusätzlich JS)
    optimizePackageImports: ["framer-motion", "react-icons"],
  },
};

export default nextConfig;