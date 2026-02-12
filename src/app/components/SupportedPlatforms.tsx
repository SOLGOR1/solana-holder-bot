"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const platforms = [
  // DEXs
  { name: "Jupiter", link: "https://jup.ag", logo: "/partners/partner1.png" },
  { name: "Raydium", link: "https://raydium.io", logo: "/partners/partner2.png" },
  { name: "Orca", link: "https://www.orca.so", logo: "/partners/partner3.png" },
  { name: "Meteora", link: "https://meteora.ag", logo: "/partners/partner4.png" },
  { name: "Kamino Finance", link: "https://kamino.finance", logo: "/partners/partner5.png" },
  { name: "Lifinity", link: "https://lifinity.io", logo: "/partners/partner6.png" },
  { name: "Saros", link: "https://saros.finance", logo: "/partners/partner7.png" },
  { name: "PumpSwap", link: "https://swap.pump.fun", logo: "/partners/partner8.png" },
  { name: "Crema Finance", link: "https://crema.finance", logo: "/partners/partner9.png" },
  // Launchpads
  { name: "Pump.fun", link: "https://pump.fun", logo: "/partners/partner10.png" },
  { name: "Solanium", link: "https://solanium.io", logo: "/partners/partner11.png" },
  { name: "Dflow", link: "https://dflow.net", logo: "/partners/partner12.png" },
  { name: "StarLaunch", link: "https://starlaunch.com", logo: "/partners/partner13.png" },
  { name: "Bonkfun", link: "https://bonk.fun/", logo: "/partners/partner14.png" },
  { name: "PinkSale", link: "https://www.pinksale.finance", logo: "/partners/partner15.png" },
  { name: "Bagsfm", link: "https://bags.fm/", logo: "/partners/partner16.png" },
  { name: "Moonit", link: "https://moon.it/", logo: "/partners/partner17.png" },
  { name: "Boop", link: "https://boop.fun/", logo: "/partners/partner18.png" },
];

export default function SupportedPlatforms() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>(0);
  const speed = 50; // Pixels pro Sekunde – anpassen für Geschwindigkeit (niedriger = langsamer)

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Duplizieren der Items für nahtlosen Loop
    const inner = marquee.querySelector(".marquee-inner") as HTMLDivElement;
    const originalItems = Array.from(inner.children);
    let contentWidth = inner.getBoundingClientRect().width;

    // Duplizieren (2x für Sicherheit, falls Breite knapp ist)
    for (let i = 0; i < 2; i++) {
      originalItems.forEach((item) => {
        const clone = item.cloneNode(true) as HTMLElement;
        inner.appendChild(clone);
      });
    }

    contentWidth = inner.getBoundingClientRect().width / 3; // Breite eines originalen Sets (da 3x total)

    let position = 0;
    let lastTime = performance.now();

    const animate = (time: number) => {
      if (isPaused) {
        lastTime = time;
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const deltaTime = (time - lastTime) / 1000; // Sekunden seit letztem Frame
      position -= speed * deltaTime; // Korrekte Geschwindigkeitsberechnung für konstante px/s
      lastTime = time;

      if (Math.abs(position) >= contentWidth) {
        position += contentWidth; // Nahtloser Reset ( += da negativ)
      }

      inner.style.transform = `translateX(${position}px)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, speed]);

  return (
    <section className="bg-black py-5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Marquee – oben */}
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
                <a
                  key={i}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-all duration-300 hover:scale-110 flex-shrink-0"
                >
                  <div className="w-[50px] h-[50px] flex items-center justify-center bg-white/5 rounded-2xl">
                    <Image
                      src={platform.logo}
                      alt={`${platform.name} logo`}
                      width={50}
                      height={50}
                      className="max-w-full max-h-full object-contain"
                      loading="eager"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Text – darunter */}
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-5 mt-10">
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
          min-width: max-content; // Sicherstellen, dass keine Überlappung durch Shrink entsteht
        }
      `}</style>
    </section>
  );
}