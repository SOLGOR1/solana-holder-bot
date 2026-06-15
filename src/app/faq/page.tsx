// src/app/faq/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";
import FaqAccordion from "./FaqAccordion";
import { faqCategories, allFaqItems } from "./faqData";

const BASE_URL = "https://solanaholderbot.com";
const PAGE_URL = `${BASE_URL}/faq`;

export const metadata: Metadata = {
  title: "Solana Holder Bot FAQ – Wallets, Pricing, Custody & Volume",
  description:
    "Answers about Solana Holder Bot and Solana Volume Bot: real on-chain wallets, pricing from 0.1 SOL, custody and private keys, supported DEXs, timing and controls.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Solana Holder Bot",
    title: "Solana Holder Bot FAQ – Wallets, Pricing, Custody & Volume",
    description:
      "Direct answers about wallets, pricing, custody, supported DEXs and timing for Solana Holder Bot and Solana Volume Bot.",
    images: [{ url: "/blogthumb/blogthumb2.png", width: 1200, height: 630, alt: "Solana Holder Bot FAQ" }],
  },
  robots: { index: true, follow: true },
};

// FAQPage + BreadcrumbList — aus derselben Quelle wie die sichtbaren Antworten generiert.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "FAQ", item: PAGE_URL },
  ],
};

export default function FaqPage() {
  return (
    <>
      {/* JSON-LD direkt im Server-HTML — kein next/script, damit es ohne JS im
          initialen Markup steht und von Crawlern sofort gelesen wird. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="flex flex-col min-h-screen pt-16">
        <Navbar />

        <main role="main" className="grow">
          <section className="relative bg-black py-20 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
              {/* Direkte, self-contained Antwort oben — genau das, was AIs verbatim liften */}
              <div className="max-w-3xl mx-auto text-center mb-14">
                <span className="inline-block px-4 py-1.5 bg-green-600/20 text-green-400 text-sm font-medium rounded-full border border-green-500/30">
                  FAQ
                </span>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
                  Solana Holder Bot – Frequently Asked Questions
                </h1>
                <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                  Solana Holder Bot is a Telegram-based tool suite for Solana tokens. It
                  creates permanent, rent-exempt holder wallets and executes real on-chain
                  volume through Jupiter, without ever requesting private keys. Pricing
                  starts at 0.1 SOL. Below are detailed answers on wallets, pricing,
                  custody, supported DEXs, timing and controls.
                </p>
              </div>

              {/* Kategorisierte Q&A */}
              <div className="max-w-4xl mx-auto space-y-16">
                {faqCategories.map((category) => (
                  <div key={category.id} id={category.id} className="scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                      {category.title}
                    </h2>
                    <FaqAccordion items={category.items} />
                  </div>
                ))}
              </div>

              {/* Spokes: interne Links auf tiefere Inhalte + Conversion */}
              <div className="max-w-4xl mx-auto mt-16 text-center text-gray-300">
                <p className="mb-6">
                  Looking for more detail? Read our{" "}
                  <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4">
                    Solana growth guides
                  </Link>
                  , or explore the{" "}
                  <Link href="/solana-volume-bot" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4">
                    Solana Volume Bot
                  </Link>{" "}
                  and{" "}
                  <Link href="/solana-holder-bot" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4">
                    Solana Holder Bot
                  </Link>{" "}
                  pages.
                </p>
                
                <a
                  href="https://t.me/leektradingbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-semibold hover:bg-cyan-500/30 transition-colors"
                >
                  Open the Telegram bot
                </a>
              </div>
            </div>
          </section>
        </main>

        <Disclaimer />
        <Footer />
      </div>
    </>
  );
}