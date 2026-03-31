// src/components/solana-all-in-one-booster/PackageAllInOne.tsx
export default function PackageAllInOne() {
  const packages = [
    { price: "0.15 SOL", title: "Starter", subtitle: "Test the power", popular: false,
      features: ["Volume + Holders simultaneously", "Up to 40 SOL impact", "MEV Protection", "Wallet rotation"] },
    { price: "0.5 SOL", title: "Launch Boost", subtitle: "Get immediate visibility", popular: false,
      features: ["Volume + Holders simultaneously", "Up to 150 SOL impact", "MEV Protection", "Wallet rotation"] },
    { price: "1 SOL", title: "Breakout", subtitle: "Dominate trending", popular: true,
      features: ["Volume + Holders simultaneously", "Up to 300 SOL impact", "MEV Protection", "Wallet rotation"] },
    { price: "5 SOL", title: "Dominance", subtitle: "Rule the charts", popular: false,
      features: ["Volume + Holders simultaneously", "Up to 1500 SOL impact", "MEV Protection", "Wallet rotation"] },
    { price: "25 SOL", title: "Legendary", subtitle: "Massive long-term growth", popular: false,
      features: ["Volume + Holders simultaneously", "Up to 7500 SOL impact", "MEV Protection", "Wallet rotation"] },
  ];

  return (
    <section className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        <div className="flex justify-center mb-5">
          <div className="inline-flex px-4 py-1.5 bg-white/92 rounded-full shadow-sm">
            <span className="text-black text-[11px] md:text-xs font-semibold uppercase tracking-[0.12em]">
              PACKAGE OVERVIEW
            </span>
          </div>
        </div>

        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
          Choose Your Boost Tier
        </h2>

        <p className="text-center text-gray-100 text-base md:text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
          Real volume and permanent holders in every package.<br className="hidden sm:inline" />
          Pay-as-you-go – the more you send, the bigger the impact.
        </p>

        {/* Erste Reihe: 3 Karten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mb-8 lg:mb-10">
          {packages.slice(0, 3).map((pkg) => (
            <div
              key={pkg.price}
              className={`
                group relative bg-zinc-900/75 backdrop-blur-xl 
                border ${pkg.popular ? 'border-amber-500/70 shadow-[0_0_35px_#fcd34d40]' : 'border-amber-900/30 hover:border-amber-500/60'} 
                rounded-3xl p-5 md:p-6 transition-all duration-400 hover:shadow-[0_0_30px_#fcd34d30]
                flex flex-col aspect-[4/4.6] sm:aspect-[4/5]
              `}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-yellow-300 text-black px-4 py-1 rounded-full text-xs font-bold shadow-[0_0_15px_#fcd34d80]">
                  MOST POPULAR
                </div>
              )}

              <div className="relative text-center mb-5 mt-2">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-700/30 via-yellow-300/20 to-amber-700/30 rounded-xl blur-xl opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-amber-950/85 via-zinc-950/90 to-amber-950/85 backdrop-blur-lg border border-amber-500/50 rounded-2xl py-4 px-6 shadow-inner shadow-amber-900/40">
                  <div className="text-4xl md:text-5xl font-black text-amber-300 tracking-tight drop-shadow-[0_4px_20px_rgba(251,191,36,0.8)]">
                    {pkg.price}
                  </div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-1">{pkg.title}</h3>
              <p className="text-gray-100 text-xs md:text-sm text-center mb-4">{pkg.subtitle}</p>

              <ul className="space-y-2 text-gray-100 text-sm mb-6 flex-grow">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-amber-400 mr-2 text-base">•</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://t.me/sol_volume_holder_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 md:py-3.5 bg-zinc-800/80 border border-amber-700/40 text-white font-medium text-sm md:text-base rounded-2xl text-center transition-all duration-400 hover:bg-amber-600/20 hover:border-amber-500/60 hover:text-amber-100 hover:shadow-[0_0_25px_#fcd34d60] active:scale-98"
              >
                Launch Package Now →
              </a>
            </div>
          ))}
        </div>

        {/* Zweite Reihe: 2 Karten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-7 max-w-3xl mx-auto">
          {packages.slice(3).map((pkg) => (
            <div
              key={pkg.price}
              className="group relative bg-zinc-900/75 backdrop-blur-xl border border-amber-900/30 rounded-3xl p-5 md:p-6 transition-all duration-400 hover:border-amber-500/60 hover:shadow-[0_0_30px_#fcd34d30] flex flex-col aspect-[4/4.6] sm:aspect-[4/5]"
            >
              <div className="relative text-center mb-5 mt-2">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-700/30 via-yellow-300/20 to-amber-700/30 rounded-xl blur-xl opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-amber-950/85 via-zinc-950/90 to-amber-950/85 backdrop-blur-lg border border-amber-500/50 rounded-2xl py-4 px-6 shadow-inner shadow-amber-900/40">
                  <div className="text-4xl md:text-5xl font-black text-amber-300 tracking-tight drop-shadow-[0_4px_20px_rgba(251,191,36,0.8)]">
                    {pkg.price}
                  </div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-1">{pkg.title}</h3>
              <p className="text-gray-100 text-xs md:text-sm text-center mb-4">{pkg.subtitle}</p>

              <ul className="space-y-2 text-gray-100 text-sm mb-6 flex-grow">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-amber-400 mr-2 text-base">•</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://t.me/sol_volume_holder_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 md:py-3.5 bg-zinc-800/80 border border-amber-700/40 text-white font-medium text-sm md:text-base rounded-2xl text-center transition-all duration-400 hover:bg-amber-600/20 hover:border-amber-500/60 hover:text-amber-100 hover:shadow-[0_0_25px_#fcd34d60] active:scale-98"
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