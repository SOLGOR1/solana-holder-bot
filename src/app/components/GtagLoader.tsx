"use client";
import { useEffect } from "react";

export default function GtagLoader() {
  useEffect(() => {
    const loadGtag = () => {
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=AW-18035540031";
      script.async = true;
      document.head.appendChild(script);

      const inline = document.createElement("script");
      inline.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-18035540031');
      `;
      document.head.appendChild(inline);

      window.removeEventListener("scroll", loadGtag);
      window.removeEventListener("mousemove", loadGtag);
      window.removeEventListener("touchstart", loadGtag);
    };

    window.addEventListener("scroll", loadGtag);
    window.addEventListener("mousemove", loadGtag);
    window.addEventListener("touchstart", loadGtag);

    const timeout = setTimeout(loadGtag, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return null; // keine UI
}