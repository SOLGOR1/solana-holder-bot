"use client";

import { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What’s the Solana Holder Bot?",
      a: "A slick tool to auto-stack permanent holders for your Solana token – no stress, all gains.",
    },
    {
      q: "Is it safe to use?",
      a: "Hell yeah, built with top-tier security standards to keep your project locked down.",
    },
    {
      q: "How long does it take to create holders?",
      a: "One holder pops up every 30 seconds. Here’s the breakdown for our packages:",
      table: (
        <table className="mt-4 w-full text-left border border-gray-700 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800/50">
              <th className="p-3 font-semibold">Package</th>
              <th className="p-3 font-semibold">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-700">
              <td className="p-3">10 Holders</td>
              <td className="p-3">5 minutes</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="p-3">50 Holders</td>
              <td className="p-3">25 minutes</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="p-3">100 Holders</td>
              <td className="p-3">50 minutes</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="p-3">500 Holders</td>
              <td className="p-3">4 hours 10 minutes</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="p-3">1000 Holders</td>
              <td className="p-3">8 hours 20 minutes</td>
            </tr>
          </tbody>
        </table>
      ),
    },
    {
      q: "Can I leave the chat while holders are being created?",
      a: "Yep, no issue at all – just don’t restart the bot until all wallets are fully stacked.",
    },
    {
      q: "Can I run the bot twice at the same time?",
      a: "Nah, hold off until the first distribution’s done – double-starting messes things up.",
    },
    {
      q: "What’s the cost of the packages?",
      a: "Check the pricing for our Solana Holder Bot packages:",
      table: (
        <table className="mt-4 w-full text-left border border-gray-700 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800/50">
              <th className="p-3 font-semibold">Package</th>
              <th className="p-3 font-semibold">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-700">
              <td className="p-3">10 Holders</td>
              <td className="p-3">0.1 SOL</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="p-3">50 Holders</td>
              <td className="p-3">0.15 SOL</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="p-3">100 Holders</td>
              <td className="p-3">0.25 SOL</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="p-3">500 Holders</td>
              <td className="p-3">1.5 SOL</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="p-3">1000 Holders</td>
              <td className="p-3">2.5 SOL</td>
            </tr>
          </tbody>
        </table>
      ),
    },
    {
      q: "Does it work with other chains?",
      a: (
        <>
          Nope, it’s Solana-only right now – but we’re eyeing other chains for the future. Follow us on{' '}
          <a
            href="https://x.com/LeekSol"
            className="text-blue-400 hover:text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{' '}
          to stay in the loop!
        </>
      ),
    },
    {
      q: "How do I get started?",
      a: "Hit 'Start Now' and follow the easy steps in our Telegram bot – you’ll be stacking holders in no time.",
    },
    {
      q: "What happens if I send the wrong amount of SOL?",
      a: "The bot will either stop early or not start at all until the correct amount of SOL has arrived. Please do not restart the bot until the process is complete.",
    },
    {
      q: "Are the holders really permanent?",
      a: "100%. These wallets stick around – no disappearing act, unlike some shady bots out there.",
    },
  ];

  return (
    <section id="faqs" className="py-16 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15)_0%,_rgba(0,0,0,0.9)_80%)] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-2xl border-4 border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/40"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
              >
                <h3 className="text-xl font-semibold text-white hover:text-blue-400 transition-colors">
                  {faq.q}
                </h3>
                <svg
                  className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-200 leading-relaxed">
                  <p>{faq.a}</p>
                  {faq.table && <div className="mt-4">{faq.table}</div>}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Back to Top Button – mittig unter den FAQs */}
        <div className="mt-8 flex justify-center">
          <a
            href="#header"
            className="p-3 hover:text-blue-800 transition-colors"
            aria-label="Back to Top"
          >
            <svg
              className="w-10 h-10 text-blue-500 animate-pulse hover:text-blue-400 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}