// src/components/MarkdownRenderer.tsx
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type MarkdownRendererProps = {
  content: string;
};

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="text-gray-100">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
    </div>
  );
}