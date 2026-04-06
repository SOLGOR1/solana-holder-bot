// src/app/components/GtagLoader.tsx
'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const GA_ID = 'G-8FMSTEXF0Z';      // Google Analytics
const ADS_ID = 'AW-18035540031';  // Google Ads

export default function GtagLoader() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Sofort nach 2,5 Sekunden laden (konservativ)
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 2500);

    // Oder früher laden, sobald der User interagiert (besser für UX + Speed)
    const handleUserInteraction = () => {
      setShouldLoad(true);
      window.removeEventListener('scroll', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };

    window.addEventListener('scroll', handleUserInteraction, { once: true, passive: true });
    window.addEventListener('click', handleUserInteraction, { once: true });
    window.addEventListener('touchstart', handleUserInteraction, { once: true, passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  // Nichts rendern, bis wir wirklich laden wollen
  if (!shouldLoad) return null;

  return (
    <>
      {/* Google Analytics + Ads */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
        async
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
        strategy="afterInteractive"
        async
      />

      {/* gtag Initialisierung */}
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { 
            page_path: window.location.pathname 
          });
          gtag('config', '${ADS_ID}');
        `}
      </Script>
    </>
  );
}