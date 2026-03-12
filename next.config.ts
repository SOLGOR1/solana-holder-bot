// next.config.js
import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'foundrlist.com' },
      { protocol: 'https', hostname: 'indiehunt.io' },
      { protocol: 'https', hostname: 'earlyhunt.com' },
      { protocol: 'https', hostname: 'cdn.aidirectori.es' },
    ],
  },
};

export default nextConfig;