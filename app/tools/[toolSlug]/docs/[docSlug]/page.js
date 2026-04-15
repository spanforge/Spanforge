import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { getToolMeta, getDoc, getAllToolDocParams } from '@/lib/tool-docs'
import styles from './page.module.css'

export async function generateStaticParams() {
  return getAllToolDocParams()
}

export async function generateMetadata({ params }) {
  const tool = getToolMeta(params.toolSlug)
  const doc = getDoc(params.toolSlug, params.docSlug)
  if (!tool || !doc) return {}
  return {
    title: `${doc.title} — ${tool.name} — SpanForge`,
    description: `${tool.name} documentation: ${doc.title}`,
  }
}

export default function DocPage({ params }) {
  const tool = getToolMeta(params.toolSlug)
  if (!tool) notFound()

  const doc = getDoc(params.toolSlug, params.docSlug)
  if (!doc) notFound()

  const currentIndex = tool.docs.findIndex(d => d.slug === params.docSlug)
  const prev = currentIndex > 0 ? tool.docs[currentIndex - 1] : null
  const next = currentIndex < tool.docs.length - 1 ? tool.docs[currentIndex + 1] : null

  return (
    <div className={styles.pageLayout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarInner}>
          <Link href={`/tools/${params.toolSlug}`} className={styles.sidebarBack}>
            ← {tool.name}
          </Link>
          <nav className={styles.docNav} aria-label={`${tool.name} documentation`}>
            {tool.docs.map(d => (
              <Link
                key={d.slug}
                href={`/tools/${params.toolSlug}/docs/${d.slug}`}
                className={`${styles.navItem} ${d.slug === params.docSlug ? styles.navItemActive : ''}`}
              >
                {d.title}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main */}
      <main className={styles.main}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/tools" className={styles.breadcrumbLink}>Tools</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
          <Link href={`/tools/${params.toolSlug}`} className={styles.breadcrumbLink}>
            {tool.name}
          </Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
          <span className={styles.breadcrumbCurrent}>{doc.title}</span>
        </div>

        {/* Content */}
        <article className={styles.article}>
          <div className={styles.prose}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {doc.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Prev / Next */}
        {(prev || next) && (
          <div className={styles.pagination}>
            {prev ? (
              <Link
                href={`/tools/${params.toolSlug}/docs/${prev.slug}`}
                className={styles.prevLink}
              >
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                href={`/tools/${params.toolSlug}/docs/${next.slug}`}
                className={styles.nextLink}
              >
                {next.title} →
              </Link>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
