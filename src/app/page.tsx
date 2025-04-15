import Header from './components/Header';
import Benefits from './components/Benefits';
import Guide from './components/Guide';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Navbar from './components/Navbar';
import Script from 'next/script';
import HyperVolumeBanner from './components/HyperVolumeBanner';
import Head from 'next/head';
import Footer from './components/Footer';
import WhySolanaHolderBot from './components/WhySolanaHolderBot';
import BlogSnippet from "./components/BlogSnippet";
import { blogPosts } from "./data/blogs";

export default function Home() {
  return (
    <>
      {/* SEO Meta-Tags und Schema */}
      <Head>
        <title>Solana Holder Bot & Hyper Volume Bot - Boost Solana Token Holders & Volume</title>
        <meta
          name="description"
          content="Boost your Solana token holders and volume with Solana Holder Bot and Hyper Volume Bot. Generate holders and increase volume – the best holder and volume bot in 2025!"
        />
        <meta
          name="keywords"
          content="Solana Holder Bot, Hyper Volume Bot, crypto volume bot, boost Solana token, volume bot Solana, boost holder, how to boost Solana token volume, best volume bot 2025, increase holder, boost your solana project, ETH, SOL, BSC, BASE, TON"
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Solana Holder Bot & Hyper Volume Bot - Boost Your Crypto Project" />
        <meta
          property="og:description"
          content="Skyrocket your token with Solana Holder Bot and Hyper Volume Bot – the ultimate crypto volume bot for Solana, ETH, BSC, BASE, TON."
        />
        <meta property="og:url" content="https://www.solanaholderbot.com" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Solana Holder Bot & Hyper Volume Bot",
            "applicationCategory": "Finance",
            "operatingSystem": "Web",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            "description": "Boost Solana token volume and holders with Solana Holder Bot and Hyper Volume Bot – the best volume bot for ETH, SOL, BSC, BASE, TON in 2025.",
            "url": "https://www.solanaholderbot.com",
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

      {/* Restlicher Inhalt */}
      <div className="flex flex-col min-h-screen pt-16">
        <Navbar />
        <div id="header" className="scroll-mt-16">
          <Header />
        </div>
        <main className="flex-grow">
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
          <div id="hyper-volume" className="scroll-mt-16">
            <HyperVolumeBanner />
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