// src/app/components/GtagLoader.tsx
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function GtagLoader() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // GTAG Script hinzufügen
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=AW-18035540031";
      script.async = true;
      document.head.appendChild(script);

      // dataLayer initialisieren
      window.dataLayer = window.dataLayer || [];
      window.gtag = function (...args: any[]) {
        window.dataLayer.push(args);
      };

      window.gtag("js", new Date());
      window.gtag("config", "AW-18035540031");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}