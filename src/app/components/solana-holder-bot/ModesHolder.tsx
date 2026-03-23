import Link from "next/link";

// src/components/solana-holder-bot/ModesHolder.tsx
export default function ModesHolder() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* Kleines, professionelles Label */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex px-5 py-1.5 bg-white/90 rounded-full shadow-sm">
            <span className="text-black text-xs font-medium uppercase tracking-widest">
              ONE-CLICK • REAL HOLDERS
            </span>
          </div>
        </div>

        {/* Hauptüberschrift */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
          HOLDERS IN 30 SECONDS
        </h2>

        {/* Kurzer, starker Erklärtext */}
        <p className="text-center text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          No setup. No complicated settings.
          Just 3 clicks and you get real, permanent holders on Raydium, Pump.fun &amp; DexScreener.
        </p>

        {/* Drei Step-Karten – clean, professionell, mit Cyan-Highlights */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">

          {/* STEP 1 */}
          <div className="group relative bg-zinc-900/70 backdrop-blur-xl border border-cyan-900/30 rounded-3xl p-8 transition-all duration-300 hover:border-cyan-600/50 hover:shadow-xl hover:shadow-cyan-950/40">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-9 h-9 flex items-center justify-center bg-cyan-500/10 text-cyan-400 font-bold text-xl rounded-2xl">01</div>
              <h3 className="text-2xl font-bold text-cyan-400">Send Token CA</h3>
            </div>

            <p className="text-gray-300 text-base leading-relaxed">
              Copy &amp; paste the token CA you want to boost.
            </p>

            {/* Highlight-Block */}
            <div className="mt-10 pt-6 border-t border-cyan-900/40">
              <div className="relative rounded-2xl bg-gradient-to-br from-cyan-950/60 via-cyan-900/40 to-cyan-950/60 backdrop-blur-lg p-5 border border-cyan-700/30 group-hover:border-cyan-500/50 transition-all">
                <div className="absolute inset-0 bg-cyan-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-sm text-cyan-300/80 font-medium">Setup Time</div>
                <div className="text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_12px_rgba(34,211,238,0.5)]">
                  10 seconds
                </div>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="group relative bg-zinc-900/70 backdrop-blur-xl border border-cyan-900/30 rounded-3xl p-8 transition-all duration-300 hover:border-cyan-600/50 hover:shadow-xl hover:shadow-cyan-950/40">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-9 h-9 flex items-center justify-center bg-cyan-500/10 text-cyan-400 font-bold text-xl rounded-2xl">02</div>
              <h3 className="text-2xl font-bold text-cyan-400">Fund the Bot</h3>
            </div>

            <p className="text-gray-300 text-base leading-relaxed">
              Send 0.1 SOL + your tokens to the bot wallet.
            </p>

            {/* Highlight-Block */}
            <div className="mt-10 pt-6 border-t border-cyan-900/40">
              <div className="relative rounded-2xl bg-gradient-to-br from-cyan-950/60 via-cyan-900/40 to-cyan-950/60 backdrop-blur-lg p-5 border border-cyan-700/30 group-hover:border-cyan-500/50 transition-all">
                <div className="absolute inset-0 bg-cyan-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-sm text-cyan-300/80 font-medium">Minimum</div>
                <div className="text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_12px_rgba(34,211,238,0.5)]">
                  0.1 SOL
                </div>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="group relative bg-zinc-900/70 backdrop-blur-xl border border-cyan-900/30 rounded-3xl p-8 transition-all duration-300 hover:border-cyan-600/50 hover:shadow-xl hover:shadow-cyan-950/40">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-9 h-9 flex items-center justify-center bg-cyan-500/10 text-cyan-400 font-bold text-xl rounded-2xl">03</div>
              <h3 className="text-2xl font-bold text-cyan-400">Press Start</h3>
            </div>

            <p className="text-gray-300 text-base leading-relaxed">
              Watch real holders appear instantly on DexScreener.
            </p>

            {/* Highlight-Block */}
            <div className="mt-10 pt-6 border-t border-cyan-900/40">
              <div className="relative rounded-2xl bg-gradient-to-br from-cyan-950/60 via-cyan-900/40 to-cyan-950/60 backdrop-blur-lg p-5 border border-cyan-700/30 group-hover:border-cyan-500/50 transition-all">
                <div className="absolute inset-0 bg-cyan-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-sm text-cyan-300/80 font-medium">Result</div>
                <div className="text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_12px_rgba(34,211,238,0.5)]">
                  Permanent Holders
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <p className="text-center text-cyan-400 mt-8">
        Combine with the other bot for maximum results
        <Link href="/solana-volume-bot" className="underline">→ Solana Volume Bot</Link> | 
      </p>
    </section>
  );
}