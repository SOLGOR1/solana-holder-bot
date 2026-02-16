// src/app/page.tsx
import Header from './components/Header';
import Header1 from './components/Header1';
import Widget1 from './components/Widget1';
import Benefits2 from './components/Benefits2';
import Guide from './components/Guide';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Navbar from './components/Navbar';
import Script from 'next/script';
import Footer from './components/Footer';
import BlogSnippet from './components/BlogSnippet';
import { blogPosts } from './data/blogs';
import SupportedPlatforms from './components/SupportedPlatforms';
import Customer from './components/Customer';
import Disclaimer from './components/Disclaimer';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solana Volume Bot - Boost SOL Stats & Holders",
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
    title: "Solana Volume Bot - Boost SOL Stats & Holders",
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
    title: "Solana Volume Bot - Boost SOL Stats & Holders",
    description:
      "Drive organic holders and volume with Solana Volume Bot, the top SOL volume booster in 2026.",
    images: "https://solanaholderbot.com/og-image.jpg",
  },
  alternates: {
    canonical: "https://solanaholderbot.com",
  },
  robots: "index, follow",
};

export default function Home() {
  const canonicalUrl = "https://www.solanaholderbot.com";
  const logoUrl = "/logo.png";

  return (
    <>
      {/* Schema Markup & Google Analytics */}
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

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8FMSTEXF0Z"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8FMSTEXF0Z');
        `}
      </Script>

      {/* Bing Verification Placeholder */}
      <Script id="bing-verification" strategy="afterInteractive">
        {`
          // Replace with your actual Bing/GTM code if needed
        `}
      </Script>

      {/* Content */}
      <div className="flex flex-col min-h-screen pt-16">
        <Navbar />
        <div id="header1" className="scroll-mt-5">
          <Header1 />
        </div>
        <div id="sup" className="scroll-mt-5">
          <SupportedPlatforms />
        </div>
        <div id="cust" className="scroll-mt-5">
          <Customer />
        </div>
        <div id="header" className="scroll-mt-16">
          <Header />
        </div>
        <main className="flex-grow" role="main">
          <div id="benefits" className="scroll-mt-16">
            <Benefits2 />
          </div>
          <div id="guide" className="scroll-mt-16">
            <Guide />
          </div>
          <div id="how-it-works" className="scroll-mt-16">
            <HowItWorks />
          </div>
          <div id="testimonials" className="scroll-mt-16">
            <Testimonials />
          </div>
          <BlogSnippet posts={blogPosts} />
          <div id="faqs" className="scroll-mt-16">
            <FAQs />
          </div>
        </main>
        <Disclaimer />
        <Footer />
        <Widget1 />
      </div>
    </>
  );
}