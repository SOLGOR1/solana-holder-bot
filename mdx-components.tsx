import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Markdown-Elemente überschreiben
    img: (props) => (
      <Image
        {...props}
        sizes="(max-width: 768px) 100vw, 700px"
        className="rounded-lg"
      />
    ),
    // Weitere eigene Components hier hinzufügen, z.B.:
    // YouTube: (props) => <YouTubePlayer {...props} />,
    ...components,
  };
}