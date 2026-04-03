// src/app/components/GtagLoader.tsx
'use client';
import Script from "next/script";
import { useEffect } from "react";

const GTAG_ID = 'AW-18035540031';

export default function GtagLoader() {
  useEffect(() => {
    // Type-safe Fix für TypeScript (vermeidet TS2339)
    const w = window as any;

    w.dataLayer = w.dataLayer || [];
    
    function gtag(...args: any[]) {
      w.dataLayer.push(arguments);
    }
    
    // gtag global verfügbar machen
    w.gtag = gtag;

    // gtag initialisieren
    gtag('js', new Date());
    gtag('config', GTAG_ID);
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