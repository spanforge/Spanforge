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
    title: `${doc.title} - ${tool.name} - SpanForge`,
    description: `${tool.name} documentation: ${doc.title}`,
  }
}

function DocLink({ href, children, toolSlug, docSlug }) {
  if (!href) return <a>{children}</a>
  if (/^https?:\/\//.test(href)) {
    return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  }
  if (href.startsWith('#')) {
    return <a href={`/tools/${toolSlug}/docs/${docSlug}${href}`}>{children}</a>
  }
  const [file, hash] = href.split(/\.md#|(?<!\.md)#/, 2)
  const slug = file.replace(/\.md$/, '')
  return <Link href={`/tools/${toolSlug}/docs/${slug}${hash ? `#${hash}` : ''}`}>{children}</Link>
}

export default function DocPage({ params }) {
  const tool = getToolMeta(params.toolSlug)
  if (!tool) notFound()

  const doc = getDoc(params.toolSlug, params.docSlug)
  if (!doc) notFound()

  const currentIndex = tool.docs.findIndex((entry) => entry.slug === params.docSlug)
  const prev = currentIndex > 0 ? tool.docs[currentIndex - 1] : null
  const next = currentIndex < tool.docs.length - 1 ? tool.docs[currentIndex + 1] : null

  const mdComponents = {
    a: ({ href, children }) => (
      <DocLink href={href} toolSlug={params.toolSlug} docSlug={params.docSlug}>
        {children}
      </DocLink>
    ),
  }

  return (
    <div className={styles.pageLayout}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarInner}>
          <Link href={`/tools/${params.toolSlug}`} className={styles.sidebarBack}>
            Back to {tool.name}
          </Link>
          <nav className={styles.docNav} aria-label={`${tool.name} documentation`}>
            {tool.docs.map((entry) => {
              const active = entry.slug === params.docSlug
              return (
                <Link
                  key={entry.slug}
                  href={`/tools/${params.toolSlug}/docs/${entry.slug}`}
                  aria-current={active ? 'page' : undefined}
                  className={`${styles.navItem} ${active ? styles.navItemActive : ''}`}
                >
                  {entry.title}
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>

      <main className={styles.main}>
        <div className={styles.breadcrumb}>
          <Link href="/tools" className={styles.breadcrumbLink}>Tools</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
          <Link href={`/tools/${params.toolSlug}`} className={styles.breadcrumbLink}>
            {tool.name}
          </Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
          <span className={styles.breadcrumbCurrent}>{doc.title}</span>
        </div>

        <article className={styles.article}>
          <div className={styles.articleHeader}>
            <span className={styles.articleLabel}>Tool documentation</span>
            <h1 className={styles.articleTitle}>{doc.title}</h1>
            <p className={styles.articleIntro}>
              Guidance for {tool.name}, aligned with the same reading rhythm, navigation model, and contrast system
              used across the rest of the site.
            </p>
          </div>

          <div className={styles.prose}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={mdComponents}
            >
              {doc.content}
            </ReactMarkdown>
          </div>
        </article>

        {(prev || next) && (
          <div className={styles.pagination}>
            {prev ? (
              <Link href={`/tools/${params.toolSlug}/docs/${prev.slug}`} className={styles.prevLink}>
                Previous: {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={`/tools/${params.toolSlug}/docs/${next.slug}`} className={styles.nextLink}>
                Next: {next.title}
              </Link>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
