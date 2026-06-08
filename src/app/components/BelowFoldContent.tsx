// src/app/components/BelowFoldContent.tsx
'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { blogPosts } from '../data/blogs';

// Dynamische Imports nur für Below-the-Fold (Client-side)
const DynamicBenefits2 = dynamic(() => import('./Benefits2'), { ssr: false });
const DynamicGuide = dynamic(() => import('./Guide'), { ssr: false });
const DynamicHowItWorks = dynamic(() => import('./HowItWorks'), { ssr: false });
const DynamicTestimonials = dynamic(() => import('./Testimonials'), { ssr: false });
const DynamicFAQs = dynamic(() => import('./FAQs'), { ssr: false });
const DynamicBlogSnippet = dynamic(() => import('./BlogSnippet'), { 
  ssr: false,
  loading: () => <div className="h-96 bg-white/5 rounded-3xl" />
});

export default function BelowFoldContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Während SSR nur einen kleinen Platzhalter rendern
  if (!isMounted) {
    return <div className="h-96" />;
  }

  return (
    <>
      <DynamicBenefits2 />
      <DynamicGuide />
      <DynamicHowItWorks />
      <DynamicTestimonials />
      <DynamicBlogSnippet posts={blogPosts.slice(0, 3)} />   {/* Nur 3 Posts */}
      <DynamicFAQs />
    </>
  );
}