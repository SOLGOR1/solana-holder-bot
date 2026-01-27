// src/app/page.tsx
import Header from './components/Header';
import Benefits from './components/Benefits';
import Guide from './components/Guide';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Navbar from './components/Navbar';
import Script from 'next/script';
import Head from 'next/head';
import Footer from './components/Footer';
import WhySolanaHolderBot from './components/WhySolanaHolderBot';
import BlogSnippet from './components/BlogSnippet';
import { blogPosts } from './data/blogs';

export default function Home() {
  const canonicalUrl = 'https://www.solanaholderbot.com';
  const ogImageUrl = '/og-image.jpg'; // Points to public/og-image.jpg
  const logoUrl = '/logo.png'; // Points to public/logo.png

  return (
    <>
      {/* SEO Meta Tags and Schema */}
      <Head>
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
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Head>

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

      {/* Bing Webmaster Tools Verification */}
      <Script id="bing-verification" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX'); // Replace with your Bing verification ID
        `}
      </Script>

      {/* Content */}
      <div className="flex flex-col min-h-screen pt-16">
        <Navbar />
        <div id="header" className="scroll-mt-16">
          <Header />
        </div>
        <main className="flex-grow" role="main">
          <div id="why-solana-holder-bot" className="scroll-mt-16">
            <WhySolanaHolderBot />
          </div>
          <div id="benefits" className="scroll-mt-16">
            <Benefits />
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
          <div id="faqs" className="scroll-mt-16">
            <FAQs />
          </div>
          <BlogSnippet posts={blogPosts} />
        </main>
        <Footer />
      </div>
    </>
  );
}

// Export metadata for Next.js 13+ App Router
export const metadata = {
  title: 'Solana Volume Bot - Boost SOL Stats & Holders',
  description: 'Maximize your Solana token with Solana Volume Bot, the top SOL volume booster. Drive organic holders and stats with our moonshot volume bot in 2025.',
};