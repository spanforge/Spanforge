import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github.css'
import styles from './MarkdownRenderer.module.css'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
      onClick={() => {
        navigator.clipboard.writeText(text || '')
        setCopied(true)
        setTimeout(() => setCopied(false), 1800)
      }}
      aria-label="Copy code"
    >
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  )
}

function PreWithCopy({ children, ...props }) {
  const codeText = typeof children?.props?.children === 'string'
    ? children.props.children
    : ''
  return (
    <div className={styles.codeWrapper}>
      <CopyButton text={codeText} />
      <pre {...props}>{children}</pre>
    </div>
  )
}

export default function MarkdownRenderer({ content }) {
  return (
    <div className={styles.markdown}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          pre: PreWithCopy,
          a: ({ href, children, ...props }) => {
            const isExternal = href && (href.startsWith('http') || href.startsWith('//'))
            if (isExternal) {
              return (
                <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                  {children}
                </a>
              )
            }
            return <a href={href} {...props}>{children}</a>
          },
          img: ({ src, alt, ...props }) => (
            <img src={src} alt={alt} className={styles.img} {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
