'use client';

import { useEffect } from 'react';

const GA_ID = 'G-8FMSTEXF0Z';

function loadGtag() {
  // Bereits geladen? Abbrechen.
  if (document.getElementById('gtag-script')) return;

  // 1. Haupt-Script dynamisch injizieren
  const script = document.createElement('script');
  script.id  = 'gtag-script';
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // 2. Inline-Init – so minimal wie möglich
  window.dataLayer = window.dataLayer || [];
  function gtag(..._args: unknown[]) {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });
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

// ─── TypeScript globals ───────────────────────────────────────────────────────
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}