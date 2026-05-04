import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import { getDocContent, getAllDocSlugs, mdLinkToDocsRoute } from '@/lib/docs'
import styles from '@/app/docs/docs.module.css'

export async function generateStaticParams() {
  return getAllDocSlugs()
}

export async function generateMetadata({ params }) {
  const slug = params?.slug || []
  const content = getDocContent(slug)
  if (!content) return { title: 'Not Found — spanforge docs' }

  // Pull the first H1 from the markdown as the page title
  const h1Match = content.match(/^#\s+(.+)$/m)
  const title = h1Match ? h1Match[1].replace(/[*_`]/g, '') : 'Documentation'
  return {
    title: `${title} — spanforge docs`,
  }
}

// Custom link component: rewrites .md links to /docs/ routes
function DocLink({ href, children, ...props }) {
  const resolved = mdLinkToDocsRoute(href)
  const isExternal = resolved && (resolved.startsWith('http') || resolved.startsWith('//'))

  if (isExternal) {
    return (
      <a href={resolved} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }
  if (resolved && resolved.startsWith('/')) {
    return <Link href={resolved}>{children}</Link>
  }
  return <a href={href} {...props}>{children}</a>
}

export default function DocsPage({ params }) {
  const slug = params?.slug || []
  const content = getDocContent(slug)

  if (!content) notFound()

  return (
    <article className={styles.mdContent}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          a: DocLink,
        }}
      >
        {content}
      </ReactMarkdown>

      <div className={styles.pageCTA}>
        <p className={styles.pageCTAHeading}>Ready to instrument your AI pipeline?</p>
        <div className={styles.pageCTAActions}>
          <Link href="/docs/quickstart" className={styles.pageCTAPrimary}>
            Try the 30-second quickstart
          </Link>
          <Link href="/docs/learn/ai-compliance-checklist" className={styles.pageCTASecondary}>
            See the compliance checklist
          </Link>
          <a
            href="https://github.com/spanforge/spanforge"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pageCTASecondary}
          >
            View on GitHub
          </a>
        </div>
      </div>
    </article>
  )
}
