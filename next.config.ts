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

  // ← NEU: Render-blocking CSS fix (Next.js 15)
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;