"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const platforms = [
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

export default function SupportedPlatforms() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>(0);
  const speed = 45;

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const inner = marquee.querySelector(".marquee-inner") as HTMLDivElement;
    if (!inner) return;

    const originalItems = Array.from(inner.children);
    let contentWidth = inner.getBoundingClientRect().width;

    for (let i = 0; i < 2; i++) {
      originalItems.forEach((item) => {
        const clone = item.cloneNode(true) as HTMLElement;
        inner.appendChild(clone);
      });
    }

    contentWidth = inner.getBoundingClientRect().width / 3;

    let position = 0;
    let lastTime = performance.now();

    const animate = (time: number) => {
      if (isPaused) {
        lastTime = time;
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const deltaTime = (time - lastTime) / 1000;
      position -= speed * deltaTime;
      lastTime = time;

      if (Math.abs(position) >= contentWidth) position += contentWidth;

      inner.style.transform = `translateX(${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused, speed]);

  return (
    <section className="bg-black py-5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          <div
            ref={marqueeRef}
            className="will-change-transform"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="marquee-inner flex whitespace-nowrap gap-20">
              {platforms.map((platform, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center transition-all duration-300 hover:scale-110 flex-shrink-0"
                >
                  <div className="w-[50px] h-[50px] flex items-center justify-center bg-white/5 rounded-2xl">
                    <Image
                      src={platform.logo}
                      alt={`${platform.name} Logo`}
                      title={`${platform.name} Logo`}
                      width={50}
                      height={50}
                      className="max-w-full max-h-full object-contain"
                      quality={75}
                      sizes="50px"
                      loading={i < 6 ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-5 mt-10">
          Works with SLP & Token2022 Standard on every Solana DEX and Launchpad.
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-white mt-10">
          The Only Bots You’ll Ever Need
        </h2>
      </div>

      <style jsx>{`
        .will-change-transform {
          will-change: transform;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        .marquee-inner {
          min-width: max-content;
        }
      `}</style>
    </section>
  );
}