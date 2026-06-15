// src/app/page.tsx
import Header from './components/Header';
import Header1 from './components/Header1';
import Widget1 from './components/Widget1';
import Navbar from './components/Navbar';
import Script from 'next/script';
import Footer from './components/Footer';
import SupportedPlatforms from './components/SupportedPlatforms';
import Customer from './components/Customer';
import Disclaimer from './components/Disclaimer';
import type { Metadata } from "next";
import FloatingSocialWidget from './components/FloatingSocialWidget';
import dynamic from 'next/dynamic';
import BelowFoldContent from './components/BelowFoldContent';
import React, { memo } from 'react';
import { blogPosts } from './data/blogs';  
import Link from 'next/link';

// Nur Above-the-Fold Komponenten (SSR erlaubt)
const DynamicAllInOneBooster = dynamic(() => import('./components/AllInOneBooster'), { 
  ssr: true 
});

export const metadata: Metadata = {
  title: "Solana Volume Bot – Boost SOL Volume, Stats & Holders",
  description:
    "Maximize your Solana token with Solana Volume Bot, the top SOL volume booster. Drive organic holders and stats with our moonshot volume bot in 2026.",
  keywords: [
    "solana volume bot",
    "sol volume bot",
    "solana volume booster",
    "volume bot solana",
    "moonshot volume bot",
    "volume solana",
    "sol volume booster",
    "solana stats boost",
    "sol stats boost",
    "solana holder boost",
    "sol holder boost",
  ],
  openGraph: {
    title: "Solana Volume Bot – Boost SOL Volume, Stats & Holders",
    description:
      "Skyrocket your Solana token with Solana Volume Bot, the ultimate SOL volume booster for organic holders and volume in 2026.",
    url: "https://solanaholderbot.com",
    type: "website",
    images: [
      {
        url: "https://solanaholderbot.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Solana Volume Bot dashboard boosting token stats",
      },
    ],
    siteName: "Solana Volume Bot",
  },
  twitter: {
    card: "summary_large_image",
    site: "@solanaholderbot",
    title: "Solana Volume Bot – Boost SOL Volume, Stats & Holders",
    description:
      "Drive organic holders and volume with Solana Volume Bot, the top SOL volume booster in 2026.",
    images: "https://solanaholderbot.com/og-image.jpg",
  },
  alternates: {
    canonical: "https://solanaholderbot.com",
  },
  robots: "index, follow",
};


const Home = memo(function Home() {
  const canonicalUrl = "https://solanaholderbot.com";
  const logoUrl = "/logo.png";

  return (
    <>
      {/* Schema Markup */}
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Solana Volume Bot",
            "url": canonicalUrl,
            "description": "Maximize your Solana token with Solana Volume Bot, the leading SOL volume booster for 2026.",
            "publisher": {
              "@type": "Organization",
              "name": "$LEEK Team",
              "logo": {
                "@type": "ImageObject",
                "url": `${canonicalUrl}${logoUrl}`,
              },
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${canonicalUrl}/search?q={search_term_string}`,
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": canonicalUrl,
              },
            ],
          }),
        }}
      />
      {/* Content: flatten structure, remove unnecessary wrappers */}
      <div className="flex flex-col min-h-screen pt-16">
        <Navbar />
        <Header1 />
        <SupportedPlatforms />
        <Customer />
        <Header />
        <DynamicAllInOneBooster />
        <main className="grow" role="main">
          {/* Alles schwere kommt hier rein und wird client-seitig geladen */}
          <BelowFoldContent blogPosts={blogPosts} />
        </main>
        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4"
          >
            View all frequently asked questions →
          </Link>
        </div>
        <Disclaimer />
        <Footer />
        <Widget1 />
        <FloatingSocialWidget />
      </div>
    </>
  );
});

export default Home;