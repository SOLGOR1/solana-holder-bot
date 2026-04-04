// src/app/components/GtagLoader.tsx
'use client';
import { useEffect } from "react";

const GA_ID = 'G-8FMSTEXF0Z';        // Google Analytics
const ADS_ID = 'AW-18035540031';    // Google Ads Conversion

export default function GtagLoader() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Type-safe Window Extension
      const w = window as Window & {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
      };

      w.dataLayer = w.dataLayer || [];

      const gtagFn = (...args: unknown[]) => {
        if (w.dataLayer) {
          w.dataLayer.push(args);
        }
      };

      w.gtag = gtagFn;

      // gtag initialisieren
      gtagFn('js', new Date());
      gtagFn('config', GA_ID);   // Analytics
      gtagFn('config', ADS_ID);  // Ads

      // Scripts dynamisch und async laden
      const loadScript = (id: string) => {
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
        script.async = true;
        document.head.appendChild(script);
      };

      loadScript(GA_ID);
      loadScript(ADS_ID);
    }, 1800); // 1.8 Sekunden Verzögerung

    return () => clearTimeout(timer);
  }, []);

  return null;
}