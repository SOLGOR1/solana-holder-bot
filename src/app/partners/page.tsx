import Image from "next/image";
import Link from "next/link";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Our Partners &amp; Featured On</h1>
          <p className="text-gray-400">All platforms and directories we work with</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <a href="https://indiehunt.io/project/solana-volume-bot-boost-sol-stats-holders" target="_blank" rel="noopener">
          <Image
            src="https://indiehunt.io/badges/indiehunt-badge-dark.svg"
            alt="Featured on IndieHunt"
            width={265}
            height={58}
            className="h-7 w-auto"
          />
        </a>

        <a href="https://earlyhunt.com/project/solana-volume-bot-boost-sol-stats-holders" target="_blank" rel="noopener">
          <Image
            src="https://earlyhunt.com/badges/earlyhunt-badge-dark.svg"
            alt="Featured on EarlyHunt"
            width={265}
            height={58}
            className="h-7 w-auto"
          />
        </a>

        <a href="https://www.aidirectori.es" target="_blank" rel="noopener">
          <Image
            src="https://cdn.aidirectori.es/ai-tools/badges/no-background.png"
            alt="Featured on AI Directories"
            width={265}
            height={58}
            className="h-7 w-auto"
          />
        </a>

        <a href="https://toolfame.com/item/solana-holder-volume-bot" target="_blank" rel="noopener noreferrer">
          <Image
            src="https://toolfame.com/badge-dark.svg"
            alt="Featured on toolfame.com"
            width={265}
            height={58}
            className="h-7 w-auto"
          />
        </a>

        <a href="https://auraplusplus.com/projects/solana-volume-holder-growth-suite" target="_blank" rel="noopener">
          <Image
            src="https://auraplusplus.com/images/badges/featured-on-dark.svg"
            alt="Featured on Aura++"
            width={265}
            height={58}
            className="h-7 w-auto"
          />
        </a>

        <a href="https://uno.directory" target="_blank" rel="noopener">
          <Image
            src="https://uno.directory/uno-directory.svg"
            alt="Listed on Uno Directory"
            width={120}
            height={30}
            className="h-7 w-auto"
          />
        </a>

        <a
          href="https://www.producthunt.com/products/solana-volume-bot?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-solana-volume-bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1096594&theme=dark&t=1773327828427"
            alt="Solana Volume Bot - Unmatched volume and holder generation at the lowest price. | Product Hunt"
            width={250}
            height={54}
            className="h-7 w-auto"
          />
        </a>

        <a
          href="https://www.aitoolzdir.com"
          aria-label="Listed on AI Toolz Dir directory"
          className="text-gray-200 hover:text-white transition-colors"
        >
          AI Toolz Dir
        </a>
    </div>

        <div className="text-center mt-16">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 text-lg flex items-center gap-2 justify-center">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}