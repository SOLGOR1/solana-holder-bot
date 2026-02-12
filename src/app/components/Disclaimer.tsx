"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Disclaimer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="disclaimer" className="relative bg-black py-5 overflow-hidden">

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
        {/* Kleiner grüner Disclaimer-Tag */}
        <span className="inline-block px-3 py-1 bg-green-600/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30 mb-4">
          [DISCLAIMER]
        </span>

        {/* Haupt-Disclaimer – extrem klein und dezent */}
        <p className="text-gray-600 text-[10px] leading-tight max-w-4xl mx-auto">
          Solana Holder Bot and Solana Volume Bot is an automated trading simulation tool intended solely for testing and development purposes. It must not be used for live projects, public token launches, mainnet deployments, or any use case involving real users, public investors, or financial transactions. Use is permitted only in private liquidity pools for internal development or testing.
          <br /><br />
          Users are solely responsible for disclosing the tool's intended purpose to any collaborators, partners, or third parties, and for ensuring its deployment does not misrepresent functionality or mislead others. Users must comply with all applicable laws and regulations relating to automated trading, financial activity, and cryptocurrency.
          <br /><br />
          All use is at the user's own risk. Solana Holder Bot, its creators, operators, distributors, and affiliates expressly disclaim all liability for any misuse, misrepresentation, damages, losses, penalties, or consequences, whether legal, financial, or reputational, arising from use of the Service.
          <br /><br />
          By using Solana Holder Bot or the Solana Volume Bot, you agree to the{' '}
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-gray-500 underline hover:text-gray-400 transition-colors"
          >
            Terms & Conditions
          </button>{' '}
          and acknowledge full responsibility for your actions.
          <br /><br />
          By using the Solana Holder Bot or the Solana Volume Bot, users agree to the Terms & Conditions and acknowledge that the creators, distributors, and advertisers are not liable for any damages, losses, or penalties arising from the use or misuse of the software.
        </p>
      </div>

      {/* Terms & Conditions Modal – kein Glow, nur Glassmorph */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-10"
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Terms & Conditions
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-gray-400 text-sm mb-8">
              Last Updated: February 9, 2026
            </p>

            <div className="text-gray-300 text-base leading-relaxed space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h3>
                <p>
                  These Terms & Conditions (“Terms”) constitute a legally binding agreement between you (“User”, “you”, or “your”) and SolanaHolderBot (“SolanaHolderBot”, “we”, “us”, or “our”), governing your access to and use of the SolanaHolderBot website, Telegram bot, API, and all related tools, software, and services (collectively, the “Service”).
                  <br /><br />
                  By accessing or using the Service, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree, you must not access or use the Service.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Definitions</h3>
                <p>
                  <strong>Service</strong><br />
                  Refers to the SolanaHolderBot website, Telegram bot, API, software, automation tools, and all related features and functionalities.
                  <br /><br />
                  <strong>User</strong><br />
                  Any individual or entity that accesses or uses the Service.
                  <br /><br />
                  <strong>Token</strong><br />
                  A digital asset deployed on the Solana blockchain.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Eligibility</h3>
                <p>
                  <strong>Age Requirement</strong><br />
                  You must be at least 18 years old to use the Service. By using SolanaHolderBot, you represent and warrant that you meet this requirement and have the legal capacity to enter into these Terms.
                  <br /><br />
                  <strong>Legal Compliance</strong><br />
                  You are solely responsible for ensuring that your use of the Service complies with all applicable laws, regulations, and platform rules in your jurisdiction. The use of VPNs, proxies, or similar methods to bypass legal or geographic restrictions is strictly prohibited.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">4. Nature of the Service</h3>
                <p>
                  SolanaHolderBot provides automated blockchain tools designed to facilitate token holder generation and on-chain transaction activity within the Solana ecosystem.
                  <br /><br />
                  The Service:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Is not a financial service or investment product</li>
                  <li>Does not provide investment, trading, or legal advice</li>
                  <li>Does not guarantee any results, performance, rankings, or outcomes</li>
                  <li>Does not custody funds or execute trades on behalf of users</li>
                </ul>
                <p className="mt-4">
                  All tools are provided for technical, experimental, and informational purposes only. You are solely responsible for how you configure and use the Service and for any consequences arising from such use.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">5. Intended Use & Restrictions</h3>
                <p>
                  <strong>Permitted Use</strong><br />
                  The Service may be used for:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Technical testing and experimentation</li>
                  <li>Evaluating token mechanics and on-chain behavior</li>
                  <li>Development and internal testing purposes</li>
                </ul>
                <p className="mt-4">
                  <strong>Prohibited Use</strong><br />
                  You may not use the Service for:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Market manipulation or deceptive practices</li>
                  <li>Misleading third parties about token activity or demand</li>
                  <li>Public-facing financial products involving real users without disclosure</li>
                  <li>Any unlawful, fraudulent, or unethical activity</li>
                  <li>Reverse engineering, copying, or exploiting the Service</li>
                </ul>
                <p className="mt-4">
                  You are responsible for ensuring transparency and compliance when using the Service in any project.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">6. Payments & Fees</h3>
                <p>
                  Where applicable, payments are made in Solana (SOL) via on-chain transactions. Each payment is final once confirmed on the blockchain. You are responsible for all network fees and transaction confirmation times.
                  <br /><br />
                  SolanaHolderBot does not request wallet connections, private keys, or seed phrases.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">7. No Guarantees</h3>
                <p>
                  SolanaHolderBot makes no guarantees regarding:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Number of token holders</li>
                  <li>Transaction volume</li>
                  <li>Platform rankings or visibility</li>
                  <li>Token price performance or market behavior</li>
                </ul>
                <p className="mt-4">
                  Any examples, estimates, or references to potential outcomes are non-binding and for illustrative purposes only.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">8. Intellectual Property</h3>
                <p>
                  All software, branding, logos, designs, code, and content associated with SolanaHolderBot are the exclusive property of SolanaHolderBot or its licensors.
                  <br /><br />
                  You may not copy, modify, distribute, sell, or create derivative works without prior written permission.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">9. Limitation of Liability</h3>
                <p>
                  The Service is provided “as is” and “as available.” To the maximum extent permitted by law, SolanaHolderBot shall not be liable for any direct, indirect, incidental, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Financial losses</li>
                  <li>Loss of profits or data</li>
                  <li>Token performance or market changes</li>
                  <li>Actions taken by third-party platforms</li>
                  <li>Service interruptions or outages</li>
                </ul>
                <p className="mt-4">
                  Your use of the Service is entirely at your own risk.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">10. Indemnification</h3>
                <p>
                  You agree to indemnify and hold harmless SolanaHolderBot, its owners, operators, and affiliates from any claims, damages, losses, or expenses arising from:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Your use or misuse of the Service</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any applicable laws or third-party rights</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">11. Third-Party Platforms</h3>
                <p>
                  The Service may interact with third-party platforms including, but not limited to, blockchain protocols, DEXs, explorers, and Telegram. SolanaHolderBot is not responsible for the availability, policies, actions, or changes of any third-party services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">12. Termination</h3>
                <p>
                  SolanaHolderBot reserves the right to suspend or terminate access to the Service at any time, with or without notice, if these Terms are violated or if misuse is suspected.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">13. Modifications</h3>
                <p>
                  SolanaHolderBot may update these Terms at any time. Changes become effective upon publication with an updated “Last Updated” date. Continued use of the Service constitutes acceptance of the revised Terms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">14. Contact</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                  <a
                    href="mailto:leek.sol@gmx.de"
                    className="px-6 py-3 bg-white/10 backdrop-blur-md text-white font-medium rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                  >
                    Email Support
                  </a>
                  <a
                    href="https://t.me/+3XCV3c958XwyYjE8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white/10 backdrop-blur-md text-white font-medium rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                  >
                    Join Telegram
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}