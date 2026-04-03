import Link from 'next/link'
import styles from './ResourceCard.module.css'

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
