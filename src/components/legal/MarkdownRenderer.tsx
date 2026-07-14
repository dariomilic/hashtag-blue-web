import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownRendererProps = {
  content: string;
};

const components: Components = {
  h1: ({ children }) => (
    <h1 className="font-heading mb-10 text-[2.5rem] leading-[1.12] text-charcoal md:text-[2.75rem]">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-heading mt-14 mb-5 text-[1.75rem] leading-[1.2] text-charcoal md:text-[1.875rem]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-heading mt-10 mb-4 text-xl leading-snug text-charcoal md:text-[1.35rem]">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-6 text-[15px] leading-[1.9] text-muted md:text-base">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mb-6 list-disc space-y-3 pl-6 text-[15px] leading-[1.85] text-muted md:text-base">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 list-decimal space-y-3 pl-6 text-[15px] leading-[1.85] text-muted md:text-base">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http") || href?.startsWith("mailto:");

    return (
      <a
        href={href}
        className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors duration-200 hover:decoration-accent"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  },
  strong: ({ children }) => <strong className="font-medium text-charcoal">{children}</strong>,
  hr: () => <hr className="my-12 border-0 border-t border-border-light" aria-hidden="true" />,
};

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="legal-prose">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
