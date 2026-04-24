import Link from 'next/link'
import { PHASE_THEME } from '@/lib/ui-theme'
import styles from './BlogCard.module.css'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogCard({ post, featured = false }) {
  const { slug, title, date, excerpt, phase = 'general', readingTime } = post
  const phaseStyle = PHASE_THEME[phase] || PHASE_THEME.general

  return (
    <Link
      href={`/blog/${slug}`}
      className={`${styles.card} ${featured ? styles.cardFeatured : ''}`}
    >
      <div className={`${styles.inner} ${featured ? styles.innerFeatured : ''}`}>
        <div className={styles.meta}>
          <span
            className={styles.tag}
            style={{
              background: phaseStyle.bg,
              color: phaseStyle.text,
            }}
          >
            {phaseStyle.label}
          </span>
          <span className={styles.date}>{formatDate(date)}</span>
          {readingTime && (
            <span className={styles.readingTime}>{readingTime}</span>
          )}
        </div>

        <h3 className={`${styles.title} ${featured ? styles.titleFeatured : ''}`}>
          {title}
        </h3>

        {excerpt && (
          <p className={`${styles.excerpt} ${featured ? styles.excerptFeatured : ''}`}>
            {excerpt}
          </p>
        )}

        <span className={styles.readMore} aria-hidden="true">
          Read article
        </span>
      </div>
    </Link>
  )
}
