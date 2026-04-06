import Image from "next/image";
import Link from "next/link";

const supportedPlatforms = [
  { name: "Jupiter", logo: "/partners/partner1.png" },
  { name: "Raydium", logo: "/partners/partner2.png" },
  { name: "Orca", logo: "/partners/partner3.png" },
  { name: "Meteora", logo: "/partners/partner4.png" },
  { name: "Kamino Finance", logo: "/partners/partner5.png" },
  { name: "Lifinity", logo: "/partners/partner6.png" },
  { name: "Saros", logo: "/partners/partner7.png" },
  { name: "PumpSwap", logo: "/partners/partner8.png" },
  { name: "Crema Finance", logo: "/partners/partner9.png" },
  { name: "Pump.fun", logo: "/partners/partner10.png" },
  { name: "Solanium", logo: "/partners/partner11.png" },
  { name: "Dflow", logo: "/partners/partner12.png" },
  { name: "Bonkfun", logo: "/partners/partner14.png" },
  { name: "PinkSale", logo: "/partners/partner15.png" },
  { name: "Bagsfm", logo: "/partners/partner16.png" },
  { name: "Moonit", logo: "/partners/partner17.png" },
  { name: "Boop", logo: "/partners/partner18.png" },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* H1 + SEO Intro */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Our Partners &amp; Featured On</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our Solana Volume Bot and Solana Holder Bot are fully integrated with the leading platforms and DEXs across the entire Solana ecosystem.
          </p>
        </div>

        {/* SEO Paragraph 1 – more content */}
        <div className="prose prose-invert max-w-3xl mx-auto mb-16 text-lg">
          <p>
            Boost your Solana token&apos;s trading volume and attract real, permanent holders with our Solana Volume Bot and Solana Holder Bot. 
            We are directly connected to all major Solana platforms, so your tokens perform optimally on Jupiter, Raydium, Pump.fun, and many other launchpads and liquidity pools.
          </p>
        </div>

        {/* Featured On Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-8">Featured On</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <a href="https://indiehunt.io/project/solana-volume-bot-boost-sol-stats-holders" target="_blank" rel="noopener">
              <Image src="https://indiehunt.io/badges/indiehunt-badge-dark.svg" alt="Featured on IndieHunt" width={265} height={58} className="h-7 w-auto mx-auto" />
            </a>

            <a href="https://earlyhunt.com/project/solana-volume-bot-boost-sol-stats-holders" target="_blank" rel="noopener">
              <Image src="https://earlyhunt.com/badges/earlyhunt-badge-dark.svg" alt="Featured on EarlyHunt" width={265} height={58} className="h-7 w-auto mx-auto" />
            </a>

            <a href="https://www.aidirectori.es" target="_blank" rel="noopener">
              <Image src="https://cdn.aidirectori.es/ai-tools/badges/no-background.png" alt="Featured on AI Directories" width={265} height={58} className="h-7 w-auto mx-auto" />
            </a>

            <a href="https://toolfame.com/item/solana-holder-volume-bot" target="_blank" rel="noopener noreferrer">
              <Image src="https://toolfame.com/badge-dark.svg" alt="Featured on toolfame.com" width={265} height={58} className="h-7 w-auto mx-auto" />
            </a>

            <a href="https://auraplusplus.com/projects/solana-volume-holder-growth-suite" target="_blank" rel="noopener">
              <Image src="https://auraplusplus.com/images/badges/featured-on-dark.svg" alt="Featured on Aura++" width={265} height={58} className="h-7 w-auto mx-auto" />
            </a>

            <a href="https://uno.directory" target="_blank" rel="noopener">
              <Image src="https://uno.directory/uno-directory.svg" alt="Listed on Uno Directory" width={120} height={30} className="h-7 w-auto mx-auto" />
            </a>

            <a href="https://www.producthunt.com/products/solana-volume-bot?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-solana-volume-bot" target="_blank" rel="noopener noreferrer">
              <Image src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1096594&theme=dark&t=1773327828427" alt="Solana Volume Bot - Unmatched volume and holder generation at the lowest price. | Product Hunt" width={250} height={54} className="h-7 w-auto mx-auto" />
            </a>

            <a href="https://www.aitoolzdir.com" aria-label="Listed on AI Toolz Dir directory" className="text-gray-200 hover:text-white transition-colors flex items-center justify-center">
              AI Toolz Dir
            </a>
          </div>
        </div>

        {/* Supported Platforms – SEO strong */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-4">Supported Platforms</h2>
          <p className="text-center text-gray-400 mb-10 max-w-xl mx-auto">
            Our Solana Volume Bot and Holder Bot are fully compatible with all major DEXs, launchpads, and liquidity pools on Solana.
          </p>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-10">
            {supportedPlatforms.map((platform) => (
              <div key={platform.name} className="flex flex-col items-center text-center">
                <div className="bg-zinc-900 hover:bg-zinc-800 transition-colors p-4 rounded-2xl mb-3 w-24 h-24 flex items-center justify-center">
                  <Image
                    src={platform.logo}
                    alt={`${platform.name} Logo`}
                    width={80}
                    height={80}
                    className="max-h-16 w-auto"
                  />
                </div>
                <p className="text-gray-300 font-medium">{platform.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Paragraph 2 – SPL & Token-2022 compatibility */}
        <div className="prose prose-invert max-w-3xl mx-auto text-lg mb-16">
          <p>
            Our bots work seamlessly with both the <strong>SPL Standard</strong> and the new <strong>Token-2022 Standard</strong>. 
            Whether on classic liquidity pools, modern launchpads like Pump.fun, or any other Solana-based platform – the Solana Volume Bot and Solana Holder Bot deliver maximum performance and real holders.
          </p>
          <p>
            Thanks to direct integrations with Jupiter, Raydium, Orca, Meteora, and many more partners, you can sustainably increase your token volume and build long-term holders – without high costs or complicated setups.
          </p>
        </div>

        {/* Back to Homepage */}
        <div className="text-center">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 text-lg flex items-center gap-2 justify-center">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}