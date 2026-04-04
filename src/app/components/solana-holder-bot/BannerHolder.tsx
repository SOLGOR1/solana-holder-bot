// src/components/solana-holder-bot/BannerHolder.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const platforms = [
  { name: "Jupiter", link: "https://jup.ag", logo: "/partners/partner1.png" },
  { name: "Raydium", link: "https://raydium.io/swap/", logo: "/partners/partner2.png" },
  { name: "Orca", link: "https://www.orca.so/pools", logo: "/partners/partner3.png" },
  { name: "Meteora", link: "https://www.meteora.ag/?tab=top", logo: "/partners/partner4.png" },
  { name: "Kamino Finance", link: "https://kamino.com/lend", logo: "/partners/partner5.png" },
  { name: "Lifinity", link: "https://lifinity.io", logo: "/partners/partner6.png" },
  { name: "Saros", link: "https://dex.saros.xyz/", logo: "/partners/partner7.png" },
  { name: "PumpSwap", link: "https://swap.pump.fun", logo: "/partners/partner8.png" },
  { name: "Crema Finance", link: "https://www.crema.finance", logo: "/partners/partner9.png" },
  { name: "Pump.fun", link: "https://pump.fun", logo: "/partners/partner10.png" },
  { name: "Solanium", link: "https://www.solanium.io/", logo: "/partners/partner11.png" },
  { name: "Dflow", link: "https://dflow.net", logo: "/partners/partner12.png" },
  { name: "Bonkfun", link: "https://www.bonk.fun/", logo: "/partners/partner14.png" },
  { name: "PinkSale", link: "https://www.pinksale.finance", logo: "/partners/partner15.png" },
  { name: "Bagsfm", link: "https://bags.fm/", logo: "/partners/partner16.png" },
  { name: "Moonit", link: "https://moon.it/", logo: "/partners/partner17.png" },
  { name: "Boop", link: "https://boop.fun/", logo: "/partners/partner18.png" },
];

export default function BannerHolder() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const speed = 32;

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const inner = marquee.querySelector(".marquee-inner") as HTMLDivElement;
    if (!inner) return;

    const originalItems = Array.from(inner.children);
    for (let i = 0; i < 3; i++) {
      originalItems.forEach((item) => inner.appendChild(item.cloneNode(true)));
    }

    let position = 0;
    let lastTime = performance.now();

    const animate = (time: number) => {
      if (isPaused) {
        lastTime = time;
        requestAnimationFrame(animate);
        return;
      }
      const delta = (time - lastTime) / 1000;
      position -= speed * delta;
      lastTime = time;

      if (Math.abs(position) > inner.scrollWidth / 3) position += inner.scrollWidth / 3;

      inner.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isPaused, speed]);

  return (
    <section className="py-2 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-white/60 text-base md:text-lg font-semibold tracking-wider uppercase mb-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Supported Liquidity Pools
        </p>

        <div className="relative overflow-hidden">
          <div
            ref={marqueeRef}
            className="will-change-transform"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="marquee-inner flex whitespace-nowrap gap-14">
              {platforms.map((platform, i) => (
                <a
                  key={i}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 group"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl group-hover:border-emerald-400/40 transition-all">
                    <Image
                      src={platform.logo}
                      alt={`${platform.name} – Solana Holder Bot supported DEX / Launchpad for real permanent holders Raydium Pump.fun Meteora organic holder boost 2026`}
                      width={50}
                      height={50}
                      className="grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .will-change-transform { will-change: transform; backface-visibility: hidden; }
        .marquee-inner { min-width: max-content; }
      `}</style>
    </section>
  );
}