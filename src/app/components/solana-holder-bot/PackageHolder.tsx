// src/components/solana-holder-bot/PackageHolder.tsx
export default function PackageHolder() {
  const packages = [
    {
      sol: "0.1",
      tokens: "100",
      holders: "10",
      title: "Test Drive",
      subtitle: "Perfect to test the bot",
      popular: false,
    },
    {
      sol: "0.15",
      tokens: "500",
      holders: "50",
      title: "Start Boost",
      subtitle: "Your first real holders",
      popular: false,
    },
    {
      sol: "0.25",
      tokens: "1000",
      holders: "100",
      title: "Super Boost",
      subtitle: "The sweet spot for most projects",
      popular: true,
    },
    {
      sol: "1.5",
      tokens: "5000",
      holders: "500",
      title: "Massive Growth",
      subtitle: "Own the charts",
      popular: false,
    },
  ];

  const features = [
    "Creates Permanent Holders",
    "Supports SPL and Token 2022 Standard",
    "Authentic Wallet Diversity for Natural Growth",
    "Real Holder Addition to Mimic Organic Interest",
  ];

  return (
    <section className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        {/* Badge */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex px-4 py-1.5 bg-white/92 rounded-full shadow-sm">
            <span className="text-black text-[11px] md:text-xs font-semibold uppercase tracking-[0.12em]">
              HOLDER PACKAGES
            </span>
          </div>
        </div>

        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
          Choose Your Holder Tier
        </h2>

        <p className="text-center text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
          Real wallets. Instant results.<br className="hidden sm:inline" />
          From test to trending in minutes.
        </p>

        {/* Kompakte 4-Karten-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.sol}
              className={`
                group relative bg-zinc-900/75 backdrop-blur-xl 
                border ${pkg.popular 
                  ? 'border-cyan-500/70 shadow-[0_0_35px_#22d3ee40]' 
                  : 'border-cyan-900/30 hover:border-cyan-600/50'} 
                rounded-3xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_#22d3ee25]
                flex flex-col h-full
              `}
            >
              {/* MOST POPULAR – jetzt kleiner & garantiert eine Zeile */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black px-4 py-0.5 rounded-full text-[10px] font-bold tracking-wider shadow-[0_0_15px_#22d3ee80]">
                  MOST POPULAR
                </div>
              )}

              {/* Kompakter Preis-Block – perfekt ausgerichtet, keine Zeilenbrüche */}
              <div className="relative text-center mb-5">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/30 via-cyan-600/20 to-cyan-700/30 rounded-2xl blur-xl opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-cyan-950/90 via-zinc-950/90 to-cyan-950/90 backdrop-blur-2xl border border-cyan-600/60 rounded-3xl py-5 px-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-black text-cyan-200 tracking-[-1.5px]">
                      {pkg.sol}
                    </span>
                    <span className="text-2xl font-medium text-cyan-400/90 mt-1">SOL</span>
                  </div>
                  <div className="mt-1 text-xs text-cyan-400/70 font-medium">
                    + {pkg.tokens} tokens from your project
                  </div>
                </div>
              </div>

              {/* Holder Count – kompakter Kreis */}
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center bg-cyan-500/10 text-cyan-400 font-bold text-3xl w-14 h-14 rounded-2xl border border-cyan-500/30 mx-auto">
                  {pkg.holders}
                </div>
                <div className="text-[10px] text-cyan-400/70 tracking-widest mt-1">REAL HOLDERS</div>
              </div>

              {/* Titel + Subtitle – kürzer & sauber */}
              <h3 className="text-2xl font-bold text-white text-center mb-1">{pkg.title}</h3>
              <p className="text-gray-400 text-sm text-center mb-6">{pkg.subtitle}</p>

              {/* Features – kompakter Abstand */}
              <ul className="space-y-2.5 text-gray-300 text-sm mb-8 flex-grow">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1 text-base">•</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Button – kompakt & premium */}
              <a
                href="https://t.me/Degen_wg_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block w-full py-3.5 
                  bg-zinc-800/90 border border-cyan-700/50 text-white font-semibold text-base rounded-2xl text-center
                  transition-all duration-300
                  hover:bg-cyan-600/20 hover:border-cyan-500/70 hover:shadow-[0_0_25px_#22d3ee60]
                  active:scale-[0.985]
                "
              >
                Launch Package Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}