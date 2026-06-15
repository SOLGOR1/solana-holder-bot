// src/app/components/BelowFoldContent.tsx
import Benefits2 from './Benefits2';
import Guide from './Guide';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import BlogSnippet from './BlogSnippet';
import FAQs from './FAQs';
import { BlogPostMetadata } from '../data/blogs';

type BelowFoldContentProps = {
  blogPosts: BlogPostMetadata[];
};

export default function BelowFoldContent({ blogPosts }: BelowFoldContentProps) {
  return (
    <>
      <Benefits2 />
      <Guide />
      <HowItWorks />
      <Testimonials />
      <BlogSnippet posts={blogPosts.slice(0, 3)} />
      <FAQs />
    </>
  );
}