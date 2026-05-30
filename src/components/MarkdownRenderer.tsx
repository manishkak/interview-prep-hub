import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <article className="markdown-body prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 dark:prose-invert dark:prose-headings:text-slate-100 dark:prose-p:text-slate-300">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>{content}</ReactMarkdown>
    </article>
  )
}
