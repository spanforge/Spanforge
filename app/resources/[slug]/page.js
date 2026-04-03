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
  whitepaper:       { label: 'Whitepaper',     color: '#1565C0', bg: 'rgba(21,101,192,0.1)'  },
  'research-paper': { label: 'Research Paper', color: '#6A1B9A', bg: 'rgba(106,27,154,0.1)' },
  'mini-book':      { label: 'Mini Book',      color: '#1B5E20', bg: 'rgba(27,94,32,0.1)'   },
  guide:            { label: 'Guide',          color: '#E65100', bg: 'rgba(230,81,0,0.1)'   },
  spec:             { label: 'Spec',           color: '#B71C1C', bg: 'rgba(183,28,28,0.1)'  },
  report:           { label: 'Report',         color: '#37474F', bg: 'rgba(55,71,79,0.1)'   },
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
