// src/components/MarkdownRenderer.tsx
"use client";

import dynamic from "next/dynamic";
import rehypeRaw from "rehype-raw";

// Dynamically import ReactMarkdown with SSR disabled
const ReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false });

type MarkdownRendererProps = {
  content: string;
};

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="text-gray-300">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
    </div>
  );
}