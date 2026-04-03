// src/app/components/GtagLoader.tsx
'use client';
import Script from "next/script";
import { useEffect } from "react";

const GTAG_ID = 'AW-18035540031';

export default function GtagLoader() {
  useEffect(() => {
    // Type-safe ohne "any" – erfüllt alle ESLint-Regeln
    const w = window as Window & {
      dataLayer?: unknown[];
      gtag?: (...args: unknown[]) => void;
    };

    // dataLayer initialisieren
    w.dataLayer = w.dataLayer || [];

    // gtag Funktion (rest parameters + korrektes push)
    const gtagFn = (...args: unknown[]) => {
      if (w.dataLayer) {
        w.dataLayer.push(args);
      }
    };

    w.gtag = gtagFn;

    // gtag initialisieren
    gtagFn('js', new Date());
    gtagFn('config', GTAG_ID);
  }, []);

  return (
    <>
      {/* Google gtag.js laden */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}