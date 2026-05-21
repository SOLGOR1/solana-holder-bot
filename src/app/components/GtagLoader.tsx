'use client';

import { useEffect } from 'react';

const GA_ID = 'G-8FMSTEXF0Z';

function loadGtag() {
  if (document.getElementById('gtag-script')) return;

  const script = document.createElement('script');
  script.id    = 'gtag-script';
  script.src   = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  // Arrow function statt arguments-Objekt → kein TypeScript/ESLint Konflikt
  window.gtag = (...args: unknown[]) => window.dataLayer.push(args);
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { anonymize_ip: true });
}

export default function GtagLoader() {
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(loadGtag, { timeout: 5000 });
      return () => cancelIdleCallback(id);
    } else {
      const id = setTimeout(loadGtag, 5000);
      return () => clearTimeout(id);
    }
  }, []);

  return null;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}