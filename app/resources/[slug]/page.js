import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import { getResourceBySlug, getAllResourceSlugs } from '@/lib/resources'
import styles from './page.module.css'

export async function generateStaticParams() {
  const slugs = await getAllResourceSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const resource = await getResourceBySlug(params.slug)
  if (!resource) return {}
  return {
    title: resource.title,
    description: resource.excerpt || resource.title,
    openGraph: {
      title: resource.title,
      description: resource.excerpt || resource.title,
      type: 'article',
      publishedTime: resource.date,
    },
  }
}

const TYPE_META = {
  whitepaper:       { label: 'Whitepaper',      color: '#5DADE2', bg: 'rgba(26,82,118,0.25)' },
  'research-paper': { label: 'Research Paper',  color: '#AF7AC5', bg: 'rgba(74,35,90,0.25)'  },
  'mini-book':      { label: 'Mini Book',        color: '#58D68D', bg: 'rgba(20,90,50,0.25)'  },
  guide:            { label: 'Guide',            color: '#F0A500', bg: 'rgba(120,66,18,0.25)' },
  spec:             { label: 'Spec',             color: '#EC7063', bg: 'rgba(123,34,24,0.25)' },
  report:           { label: 'Report',           color: '#94A3B8', bg: 'rgba(42,49,69,0.5)'   },
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default async function ResourcePage({ params }) {
  const resource = await getResourceBySlug(params.slug)
  if (!resource) notFound()

  const typeMeta = TYPE_META[resource.type] || TYPE_META.guide

  return (
    <>
      {/* Resource header */}
      <header className={styles.header}>
        <div className="container">
          <div className={styles.meta}>
            <span
              className={styles.typeBadge}
              style={{ background: typeMeta.bg, color: typeMeta.color }}
            >
              {typeMeta.label}
            </span>
            {resource.pageCount && (
              <span className={styles.pageCount}>{resource.pageCount}</span>
            )}
            <span className={styles.date}>{formatDate(resource.date)}</span>
          </div>

          <h1 className={styles.h1}>{resource.title}</h1>

          {resource.excerpt && (
            <p className={styles.excerpt}>{resource.excerpt}</p>
          )}

          {resource.author && (
            <p className={styles.author}>By {resource.author}</p>
          )}

          {resource.downloadUrl && (
            <a
              href={resource.downloadUrl}
              className={styles.downloadBtn}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              ↓ Download PDF ({resource.fileSize || 'PDF'})
            </a>
          )}
        </div>
      </header>

      {/* Resource body */}
      <article className={styles.article}>
        <div className={`container ${styles.articleInner}`}>
          <div className={styles.prose}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {resource.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      {/* Back link */}
      <div className={styles.backWrap}>
        <div className="container">
          <Link href="/resources" className={styles.backLink}>← Back to Library</Link>
        </div>
      </div>
    </>
  )
}
