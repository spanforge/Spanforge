import Link from 'next/link'
import { RESOURCE_TYPE_THEME } from '@/lib/ui-theme'
import styles from './ResourceCard.module.css'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function ResourceCard({ resource }) {
  const { slug, title, date, excerpt, type = 'guide', author, pageCount, downloadUrl } = resource
  const meta = RESOURCE_TYPE_THEME[type] || RESOURCE_TYPE_THEME.guide

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
            Read online
          </Link>
          {downloadUrl && (
            <a
              href={downloadUrl}
              className={styles.downloadBtn}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download PDF
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
