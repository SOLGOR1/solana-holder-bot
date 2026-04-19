'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const GA_ID = 'G-8FMSTEXF0Z';   // Nur noch Analytics – Ads komplett entfernt

export default function GtagLoader() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Nach 2,5 Sekunden laden (konservativ, aber sicher)
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 2500);

    // Oder sofort bei erster User-Interaktion (beste UX + Speed-Kombi)
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

  if (!shouldLoad) return null;

  return (
    <>
      {/* 1. Nur ein einziges gtag.js Script (GA4) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="lazyOnload"
        async
      />

      {/* 2. Minimal Init-Script */}
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { 
            page_path: window.location.pathname 
          });
        `}
      </Script>
    </>
  );
}