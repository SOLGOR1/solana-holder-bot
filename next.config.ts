// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // === PERFORMANCE & GRÖßE OPTIMIERUNGEN ===
  compress: true,                    // Gzip + Brotli → kleinere HTML-Datei
  poweredByHeader: false,            // Entfernt unnötigen Header
  reactStrictMode: true,

  // === IMAGES (optimiert für kleinere Dateien) ===
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "indiehunt.io" },
      { protocol: "https", hostname: "earlyhunt.com" },
      { protocol: "https", hostname: "cdn.aidirectori.es" },
      { protocol: "https", hostname: "www.uneed.best" },
    ],
    qualities: [75, 80, 85, 90, 95],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // === COMPILER ===
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // === EXPERIMENTAL (nur noch gültige Optionen) ===
  experimental: {
    optimizePackageImports: ["framer-motion", "react-icons"],
    inlineCss: true,                    // bleibt drin (war schon bei dir)
    // optimizeCss wurde entfernt → nicht mehr nötig / nicht standardmäßig
  },

  // === WEITERE OPTIMIERUNGEN ===
  trailingSlash: false,
  generateEtags: true,
};

export default nextConfig;