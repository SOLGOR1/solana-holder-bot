"use client";

import Image from 'next/image';

export default function HyperVolumeBanner() {
  return (
    <section id="hyper-volume" className="py-16 bg-black text-white relative overflow-hidden">
      {/* Radialer Gradient-Hintergrund */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15)_0%,_rgba(0,0,0,0.9)_80%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        {/* Banner Container mit pulsierendem Border */}
        <div className="bg-gray-800/20 backdrop-blur-lg border-4 border-gray-700 rounded-2xl p-8 animate-pulse-border shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Logo links */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/turbo2.jpg"
                alt="Hyper Volume Bot Logo"
                width={600} // Skaliert von 640, passt besser
                height={600} // Skaliert von 360 (Seitenverhältnis 16:9)
                className="rounded-lg"
                unoptimized // Für GIFs, um Animation zu erhalten
              />
            </div>

            {/* Text rechts */}
            <div className="md:col-span-2 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-blue-400 mb-2 tracking-tight">
                Ready to skyrocket your token’s volume?
              </h3>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">
                Boost Your Project with Hyper Volume Bot
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed mb-6">
                Meet the <strong>Hyper Volume Bot</strong> – crafted by our partners, it’s the ultimate add-on to our Solana Holder Bot. 
                Power up your project across <strong>ETH, SOL, BSC, BASE, TON</strong> with the market’s <em>best-priced volume bot</em>. 
                Fast, reliable, and insanely effective – your community will love it!
              </p>
              <div className="flex justify-center md:justify-start">
                <a
                  href="https://t.me/MellowHyperVolumeBot?start=ref_xSR5v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 hover:shadow-blue-700/50 transition-all duration-300 animate-pulse"
                >
                  Try Hyper Volume Bot Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS für pulsierenden Border */}
      <style jsx>{`
        @keyframes pulseBorder {
          0% {
            border-color: rgba(59, 130, 246, 0.5);
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
          }
          50% {
            border-color: rgba(59, 130, 246, 1);
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
          }
          100% {
            border-color: rgba(59, 130, 246, 0.5);
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
          }
        }
        .animate-pulse-border {
          animation: pulseBorder 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}