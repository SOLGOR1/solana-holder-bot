// app/solana-all-in-one-booster/page.tsx
"use client"; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import HeroAllInOne from '../components/solana-all-in-one-booster/HeroAllInOne';
import BannerAllInOne from '../components/solana-all-in-one-booster/BannerAllInOne';
import ModesAllInOne from '../components/solana-all-in-one-booster/ModesAllInOne';
import PackageAllInOne from '../components/solana-all-in-one-booster/PackageAllInOne';
import FaqAllInOne from '../components/solana-all-in-one-booster/FaqAllInOne';
import CtaAllInOne from '../components/solana-all-in-one-booster/CtaAllInOne';

import Script from 'next/script';

export default function SolanaAllInOneBooster() {
  return (
    <>
      {/* Google tag (gtag.js) event - delayed navigation helper */}
      <Script
        id="gtag-send-event"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function gtagSendEvent(url) {
              var callback = function () {
                if (typeof url === 'string') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion_event_purchase', {
                'event_callback': callback,
                'event_timeout': 2000
              });
              return false;
            }
          `
        }}
      />

      {/* === FULL SoftwareApplication Schema (Rich Snippets + EEAT) === */}
      <Script
        id="schema-allinone-app"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Solana All-in-One Booster",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Telegram",
            "url": "https://www.solanaholderbot.com/solana-all-in-one-booster",
            "description": "Real trading volume and permanent holders at the same time – the most powerful Solana booster of 2026",
            "offers": {
              "@type": "Offer",
              "price": "0.15",
              "priceCurrency": "SOL",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "1240"
            },
            "author": {
              "@type": "Organization",
              "name": "Solana Holder Bot",
              "url": "https://www.solanaholderbot.com"
            },
            "screenshot": "https://www.solanaholderbot.com/blogthumb/bestsolanaallinonebooster2026.png",
            "featureList": [
              "Volume + Holders simultaneously",
              "8-11 buys per cycle",
              "Permanent rent-exempt holders",
              "MEV protection & wallet rotation",
              "Live Telegram dashboard"
            ]
          }),
        }}
      />

      {/* === COMPLETE FAQPage Schema === */}
      <Script
        id="schema-faq-allinone"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the Solana All-in-One Booster?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The first bot that generates real trading volume and permanent holders at the same time – all in one simple Telegram bot."
                }
              },
              {
                "@type": "Question",
                "name": "How much does the All-in-One Booster cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Starting at only 0.15 SOL. The more you send, the more volume and holders you receive."
                }
              },
              {
                "@type": "Question",
                "name": "Is the booster safe and undetectable?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes – 100% on-chain with natural randomization, wallet rotation, MEV protection and partial sells for authentic holders."
                }
              },
              {
                "@type": "Question",
                "name": "Can I pause or withdraw funds?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes – full control at any time: pause, change speed or withdraw remaining SOL instantly via Telegram."
                }
              },
              {
                "@type": "Question",
                "name": "Does it work with Pump.fun, Raydium and Meteora?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, seamlessly across all major Solana platforms and launchpads."
                }
              }
            ]
          }),
        }}
      />

      <div className="flex flex-col min-h-screen pt-16 relative overflow-hidden">
        <Navbar />

        {/* === PREMIUM GOLD TSUNAMI SMOKE BACKGROUND === */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
          {/* Layer 1 */}
          <div className="absolute -bottom-40 -left-40 w-[140%] h-[140%] bg-gradient-to-br from-amber-400/20 via-yellow-300/10 to-transparent blur-[140px] rounded-[60%] animate-[riseSlow_65s_linear_infinite]" />
          
          {/* Layer 2 */}
          <div className="absolute -bottom-20 left-10 w-[110%] h-[110%] bg-gradient-to-tr from-amber-400/15 via-transparent to-yellow-300/10 blur-[120px] rounded-[50%] animate-[riseMedium_48s_linear_infinite_4s] rotate-6" />
          
          {/* Layer 3 */}
          <div className="absolute bottom-10 right-20 w-[80%] h-[80%] bg-gradient-to-tl from-yellow-400/18 to-amber-500/12 blur-[90px] rounded-[70%] animate-[riseFast_35s_linear_infinite_9s]" />
          
          {/* Fine gold particles */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,#fcd34d_0.6px,transparent_1.5px)] bg-[length:3px_3px] opacity-30" />
          
          {/* Top fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/70" />
        </div>

        <HeroAllInOne />
        <BannerAllInOne />
        <ModesAllInOne />
        <PackageAllInOne />
        <FaqAllInOne />
        <CtaAllInOne />

        <Footer />
      </div>
    </>
  );
}