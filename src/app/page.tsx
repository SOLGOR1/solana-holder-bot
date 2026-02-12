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

export default function Home() {
  const canonicalUrl = 'https://www.solanaholderbot.com';
  const ogImageUrl = '/og-image.jpg'; // Points to public/og-image.jpg
  const logoUrl = '/logo.png'; // Points to public/logo.png

  return (
    <>
      {/* SEO Meta Tags – im App Router besser über metadata, aber Head funktioniert noch */}
      <head>
        <title>Solana Volume Bot - Boost SOL Stats & Holders</title>
        <meta
          name="description"
          content="Maximize your Solana token with Solana Volume Bot, the top SOL volume booster. Drive organic holders and stats with our moonshot volume bot in 2025."
        />
        <meta
          name="keywords"
          content="solana volume bot, sol volume bot, solana volume booster, volume bot solana, moonshot volume bot, volume solana, sol volume booster, solana stats boost, sol stats boost, solana holder boost, sol holder boost"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="$LEEK Team" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={canonicalUrl} />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Solana Volume Bot - Boost SOL Stats & Holders" />
        <meta
          property="og:description"
          content="Skyrocket your Solana token with Solana Volume Bot, the ultimate SOL volume booster for organic holders and volume in 2025."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${canonicalUrl}${ogImageUrl}`} />
        <meta property="og:image:alt" content="Solana Volume Bot dashboard boosting token stats" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:site_name" content="Solana Volume Bot" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@solanaholderbot" />
        <meta name="twitter:title" content="Solana Volume Bot - Boost SOL Stats & Holders" />
        <meta
          name="twitter:description"
          content="Drive organic holders and volume with Solana Volume Bot, the top SOL volume booster in 2025."
        />
        <meta name="twitter:image" content={`${canonicalUrl}${ogImageUrl}`} />
        <meta name="twitter:image:alt" content="Solana Volume Bot dashboard boosting token stats" />
        {/* Telegram/Discord Compatibility */}
        <meta name="telegram:image" content={`${canonicalUrl}${ogImageUrl}`} />
        <meta name="discord:image" content={`${canonicalUrl}${ogImageUrl}`} />
      </head>

      {/* Schema Markup direkt im Body (Next.js erlaubt script tags) */}
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
            "description": "Maximize your Solana token with Solana Volume Bot, the leading SOL volume booster for 2025.",
            "publisher": {
              "@type": "Organization",
              "name": "$LEEK Team",
              "logo": {
                "@type": "ImageObject",
                "url": `${canonicalUrl}${logoUrl}`
              }
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${canonicalUrl}/search?q={search_term_string}`
              },
              "query-input": "required name=search_term_string"
            }
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
                "item": canonicalUrl
              }
            ]
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

      {/* Bing Webmaster Tools Verification – Placeholder */}
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
