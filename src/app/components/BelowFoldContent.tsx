// src/app/components/BelowFoldContent.tsx
'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { blogPosts } from '../data/blogs';

const DynamicBenefits2 = dynamic(() => import('./Benefits2'), { ssr: false });
const DynamicGuide = dynamic(() => import('./Guide'), { ssr: false });
const DynamicHowItWorks = dynamic(() => import('./HowItWorks'), { ssr: false });
const DynamicTestimonials = dynamic(() => import('./Testimonials'), { ssr: false });
const DynamicFAQs = dynamic(() => import('./FAQs'), { ssr: false });

const DynamicBlogSnippet = dynamic(() => import('./BlogSnippet'), { 
  ssr: false,
  loading: () => <div className="py-20 bg-white/5 rounded-3xl" />
});

export default function BelowFoldContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="h-96" />; // Platzhalter während Hydration
  }

  return (
    <>
      <DynamicBenefits2 />
      <DynamicGuide />
      <DynamicHowItWorks />
      <DynamicTestimonials />
      <DynamicBlogSnippet posts={blogPosts.slice(0, 3)} />
      <DynamicFAQs />
    </>
  );
}