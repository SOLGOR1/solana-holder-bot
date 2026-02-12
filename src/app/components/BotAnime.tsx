// src/components/BotAnime.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const animations = [
  // Animation 1: hbot1 → hbot2 → hbot1 → fade out
  {
    sequence: [
      { src: "/hbot/hbot1.png", duration: 3000 }, // Initial show (länger sichtbar)
      { src: "/hbot/hbot2.png", duration: 800 },
      { src: "/hbot/hbot1.png", duration: 800 },
    ],
  },
  // Animation 2: hbot1 → hbot3 → hbot1 → fade out
  {
    sequence: [
      { src: "/hbot/hbot1.png", duration: 3000 },
      { src: "/hbot/hbot3.png", duration: 800 },
      { src: "/hbot/hbot1.png", duration: 800 },
    ],
  },
    // Animation 3:
  {
    sequence: [
      { src: "/hbot/hbot1.png", duration: 3000 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot5.png", duration: 800 },
      { src: "/hbot/hbot6.png", duration: 800 },
      { src: "/hbot/hbot7.png", duration: 800 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot1.png", duration: 800 },
    ],
  },
      // Animation 4:
  {
    sequence: [
      { src: "/hbot/hbot1.png", duration: 3000 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot8.png", duration: 1000 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot1.png", duration: 800 },
    ],
  },
        // Animation 5:
  {
    sequence: [
      { src: "/hbot/hbot1.png", duration: 3000 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot8.png", duration: 1000 },
      { src: "/hbot/hbot4.png", duration: 400 },
      { src: "/hbot/hbot9.png", duration: 800 },
      { src: "/hbot/hbot4.png", duration: 400 },
      { src: "/hbot/hbot10.png", duration: 800 },
      { src: "/hbot/hbot1.png", duration: 800 },
    ],
  },
        // Animation 6:
  {
    sequence: [
      { src: "/hbot/hbot1.png", duration: 3000 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot11.png", duration: 1200 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot1.png", duration: 800 },
    ],
  },
          // Animation 7:
  {
    sequence: [
      { src: "/hbot/hbot1.png", duration: 3000 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot12.png", duration: 1200 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot1.png", duration: 800 },
    ],
  },
          // Animation 6:
  {
    sequence: [
      { src: "/hbot/hbot1.png", duration: 3000 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot13.png", duration: 1200 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot1.png", duration: 800 },
    ],
  },
          // Animation 6:
  {
    sequence: [
      { src: "/hbot/hbot1.png", duration: 3000 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot14.png", duration: 1200 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot1.png", duration: 800 },
    ],
  },
            // Animation X:
  {
    sequence: [
      { src: "/hbot/hbot1.png", duration: 3000 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot15.png", duration: 1200 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot1.png", duration: 800 },
    ],
  },
              // Animation X:
  {
    sequence: [
      { src: "/hbot/hbot1.png", duration: 3000 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot16.png", duration: 1200 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot1.png", duration: 800 },
    ],
  },
              // Animation X:
  {
    sequence: [
      { src: "/hbot/hbot1.png", duration: 3000 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot17.png", duration: 1200 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot1.png", duration: 800 },
    ],
  },
              // Animation X:
  {
    sequence: [
      { src: "/hbot/hbot1.png", duration: 3000 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot18.png", duration: 1200 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot1.png", duration: 800 },
    ],
  },
              // Animation X:
  {
    sequence: [
      { src: "/hbot/hbot1.png", duration: 3000 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot19.png", duration: 1200 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot1.png", duration: 800 },
    ],
  },
              // Animation X:
  {
    sequence: [
      { src: "/hbot/hbot1.png", duration: 3000 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot20.png", duration: 1200 },
      { src: "/hbot/hbot4.png", duration: 800 },
      { src: "/hbot/hbot1.png", duration: 800 },
    ],
  },
  // Weitere Animationen hier einfach hinzufügen – Beispiel:
  // { sequence: [ { src: "/hbot/hbot1.png", duration: 3000 }, { src: "/hbot/hbot4.png", duration: 1000 }, { src: "/hbot/hbot1.png", duration: 800 } ] },
  // Du kannst beliebig viele Gesichter, Hüte, Effekte etc. einbauen
];

export default function BotAnime() {
  const [currentImage, setCurrentImage] = useState("/hbot/hbot1.png");
  const [isVisible, setIsVisible] = useState(false);

  const chooseRandomAnimation = () => Math.floor(Math.random() * animations.length);

  useEffect(() => {
    let animIndex = chooseRandomAnimation();
    setIsVisible(true);

    const runAnimation = () => {
      const seq = animations[animIndex].sequence;
      let step = 0;

      const nextStep = () => {
        if (step < seq.length) {
          setCurrentImage(seq[step].src);
          step++;
          setTimeout(nextStep, seq[step - 1].duration);
        } else {
          // Fade out
          setIsVisible(false);

          // Random Pause 10–25 Sekunden
          const nextDelay = 10000 + Math.random() * 15000;
          setTimeout(() => {
            animIndex = chooseRandomAnimation();
            setCurrentImage("/hbot/hbot1.png");
            setIsVisible(true);
            runAnimation();
          }, nextDelay);
        }
      };

      nextStep();
    };

    runAnimation();
  }, []);

  // Nur auf Desktop (lg und größer) sichtbar – auf Tablet/Mobile komplett versteckt
  if (!isVisible) return null;

  return (
    <motion.div
      className="absolute left-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none hidden xl:block" // <-- Nur Desktop!
      initial={{ x: "-10%" }} // Startposition → HIER X-ACHSE FEINJUSTIEREN
      animate={{ x: "0%" }}   // Endposition (Hände auf Kante) → HIER X-ACHSE FEINJUSTIEREN
      transition={{ duration: 0.8, ease: "easeOut" }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      style={{ width: "400px" }} // Breite anpassen (oder max-w-[40vw] für Responsiveness auf großen Screens)
    >
      {/* Y-Position feinjustieren */}
      {/* HIER Y-ACHSE ANPASSEN: z. B. top-1/2 → top-[45%] oder translateY(-10%) hinzufügen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        exit={{ opacity: 0 }}
      >
        <Image
          src={currentImage}
          alt="Solana Holder Bot Mascot"
          width={400}
          height={400}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </motion.div>
    </motion.div>
  );
}