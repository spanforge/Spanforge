import Link from 'next/link'
import styles from './ResourceCard.module.css'

const TYPE_META = {
  whitepaper:     { label: 'Whitepaper',      color: '#5DADE2', bg: 'rgba(26,82,118,0.25)' },
  'research-paper': { label: 'Research Paper', color: '#AF7AC5', bg: 'rgba(74,35,90,0.25)'  },
  'mini-book':    { label: 'Mini Book',        color: '#58D68D', bg: 'rgba(20,90,50,0.25)'  },
  guide:          { label: 'Guide',            color: '#F0A500', bg: 'rgba(120,66,18,0.25)' },
  spec:           { label: 'Spec',             color: '#EC7063', bg: 'rgba(123,34,24,0.25)' },
  report:         { label: 'Report',           color: '#94A3B8', bg: 'rgba(42,49,69,0.5)'   },
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default function ResourceCard({ resource }) {
  const { slug, title, date, excerpt, type = 'guide', author, pageCount, downloadUrl } = resource
  const meta = TYPE_META[type] || TYPE_META.guide

  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.meta}>
          <span
            className={styles.typeBadge}
            style={{ background: meta.bg, color: meta.color }}
          >
            {meta.label}
          </span>
          {pageCount && <span className={styles.pageCount}>{pageCount}</span>}
          <span className={styles.date}>{formatDate(date)}</span>
        </div>

        <h3 className={styles.title}>{title}</h3>

        {excerpt && <p className={styles.excerpt}>{excerpt}</p>}

        {author && <p className={styles.author}>By {author}</p>}

        <div className={styles.actions}>
          <Link href={`/resources/${slug}`} className={styles.readBtn}>
            Read online →
          </Link>
          {downloadUrl && (
            <a
              href={downloadUrl}
              className={styles.downloadBtn}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              ↓ Download PDF
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
