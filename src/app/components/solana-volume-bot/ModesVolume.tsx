// src/components/solana-volume-bot/ModesVolume.tsx
export default function ModesVolume() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* Sehr kleines, zentriertes Label */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex px-5 py-1.5 bg-white/90 rounded-full shadow-sm">
            <span className="text-black text-xs font-medium uppercase tracking-widest">
              BOT ENGINEERED TO DOMINATE THE MARKET
            </span>
          </div>
        </div>

        {/* Hauptüberschrift */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
          SELECT YOUR SPEED
        </h2>

        {/* Ausgewogener, kürzerer Erklärtext */}
        <p className="text-center text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          Solana Volume Bot is engineered for consistent performance in any market environment.
          Choose fast, medium or slow mode to match your strategy and accelerate Dex visibility.
        </p>

        {/* Drei Karten – einheitlich, mit verbessertem Runtime/Volume Highlight */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">

          {/* FAST */}
          <div className="group relative bg-zinc-900/70 backdrop-blur-xl border border-emerald-900/30 rounded-3xl p-8 transition-all duration-300 hover:border-emerald-600/50 hover:shadow-xl hover:shadow-emerald-950/40">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Fast</h3>
            <ul className="space-y-3 text-gray-300 text-base">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3 mt-1.5">•</span>
                Maximum speed
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3 mt-1.5">•</span>
                Perfect for volume spikes
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3 mt-1.5">•</span>
                Healthy buy/sell ratio
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3 mt-1.5">•</span>
                Generates very strong market interest
              </li>
            </ul>

            {/* Hervorgehobener Runtime/Volume Block */}
            <div className="mt-10 pt-6 border-t border-emerald-900/40 space-y-7">
              <div className="relative rounded-2xl bg-gradient-to-br from-emerald-950/60 via-emerald-900/40 to-emerald-950/60 backdrop-blur-lg p-5 border border-emerald-700/30 group-hover:border-emerald-500/50 transition-all">
                <div className="absolute inset-0 bg-emerald-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-sm text-emerald-300/80 font-medium mb-1.5">Runtime</div>
                <div className="text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_12px_rgba(16,185,129,0.5)]">
                  30 min – 1 hr
                </div>
                <div className="text-sm text-emerald-400/60 mt-1">
                  0.1 SOL (pool fees may vary)
                </div>
              </div>

              <div className="relative rounded-2xl bg-gradient-to-br from-emerald-950/60 via-emerald-900/40 to-emerald-950/60 backdrop-blur-lg p-5 border border-emerald-700/30 group-hover:border-emerald-500/50 transition-all">
                <div className="absolute inset-0 bg-emerald-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-sm text-emerald-300/80 font-medium mb-1.5">Volume Generated</div>
                <div className="text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_12px_rgba(16,185,129,0.5)]">
                  up to 30 SOL
                </div>
                <div className="text-sm text-emerald-400/60 mt-1">
                  0.1 SOL (pool fees may vary)
                </div>
              </div>
            </div>
          </div>

          {/* MEDIUM – gleiches Muster */}
          <div className="group relative bg-zinc-900/70 backdrop-blur-xl border border-emerald-900/30 rounded-3xl p-8 transition-all duration-300 hover:border-emerald-600/50 hover:shadow-xl hover:shadow-emerald-950/40">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Medium</h3>
            <ul className="space-y-3 text-gray-300 text-base">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3 mt-1.5">•</span>
                Steady increase
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3 mt-1.5">•</span>
                Perfect to maintain Dex Ranking
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3 mt-1.5">•</span>
                Healthy buy/sell ratio
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3 mt-1.5">•</span>
                Generates consistent market interest
              </li>
            </ul>

            <div className="mt-10 pt-6 border-t border-emerald-900/40 space-y-7">
              <div className="relative rounded-2xl bg-gradient-to-br from-emerald-950/60 via-emerald-900/40 to-emerald-950/60 backdrop-blur-lg p-5 border border-emerald-700/30 group-hover:border-emerald-500/50 transition-all">
                <div className="absolute inset-0 bg-emerald-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-sm text-emerald-300/80 font-medium mb-1.5">Runtime</div>
                <div className="text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_12px_rgba(16,185,129,0.5)]">
                  3 hr – 6 hr
                </div>
                <div className="text-sm text-emerald-400/60 mt-1">
                  0.1 SOL (pool fees may vary)
                </div>
              </div>

              <div className="relative rounded-2xl bg-gradient-to-br from-emerald-950/60 via-emerald-900/40 to-emerald-950/60 backdrop-blur-lg p-5 border border-emerald-700/30 group-hover:border-emerald-500/50 transition-all">
                <div className="absolute inset-0 bg-emerald-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-sm text-emerald-300/80 font-medium mb-1.5">Volume Generated</div>
                <div className="text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_12px_rgba(16,185,129,0.5)]">
                  up to 30 SOL
                </div>
                <div className="text-sm text-emerald-400/60 mt-1">
                  0.1 SOL (pool fees may vary)
                </div>
              </div>
            </div>
          </div>

          {/* SLOW – gleiches Muster */}
          <div className="group relative bg-zinc-900/70 backdrop-blur-xl border border-emerald-900/30 rounded-3xl p-8 transition-all duration-300 hover:border-emerald-600/50 hover:shadow-xl hover:shadow-emerald-950/40">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Slow</h3>
            <ul className="space-y-3 text-gray-300 text-base">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3 mt-1.5">•</span>
                Spreaded volume
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3 mt-1.5">•</span>
                Perfect for keeping tokens active
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3 mt-1.5">•</span>
                Healthy buy/sell ratio
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3 mt-1.5">•</span>
                Generates sustained market interest
              </li>
            </ul>

            <div className="mt-10 pt-6 border-t border-emerald-900/40 space-y-7">
              <div className="relative rounded-2xl bg-gradient-to-br from-emerald-950/60 via-emerald-900/40 to-emerald-950/60 backdrop-blur-lg p-5 border border-emerald-700/30 group-hover:border-emerald-500/50 transition-all">
                <div className="absolute inset-0 bg-emerald-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-sm text-emerald-300/80 font-medium mb-1.5">Runtime</div>
                <div className="text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_12px_rgba(16,185,129,0.5)]">
                  8 hr – 14 hr
                </div>
                <div className="text-sm text-emerald-400/60 mt-1">
                  0.1 SOL (pool fees may vary)
                </div>
              </div>

              <div className="relative rounded-2xl bg-gradient-to-br from-emerald-950/60 via-emerald-900/40 to-emerald-950/60 backdrop-blur-lg p-5 border border-emerald-700/30 group-hover:border-emerald-500/50 transition-all">
                <div className="absolute inset-0 bg-emerald-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-sm text-emerald-300/80 font-medium mb-1.5">Volume Generated</div>
                <div className="text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_12px_rgba(16,185,129,0.5)]">
                  up to 30 SOL
                </div>
                <div className="text-sm text-emerald-400/60 mt-1">
                  0.1 SOL (pool fees may vary)
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}