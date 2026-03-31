'use client';
// src/app/components/GtagLoader.tsx
import Script from "next/script";

export default function GtagLoader() {
  return (
    <>
      {/* GTAG Script laden */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18035540031"
        strategy="afterInteractive"
      />
      <Script
        id="google-ads"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18035540031');
          `,
        }}
      />
    </>
  );
}