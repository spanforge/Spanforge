import Link from 'next/link'
import styles from './BlogCard.module.css'

const PHASE_COLORS = {
  discover: { bg: 'rgba(26,82,118,0.25)', text: '#5DADE2', label: 'Discover' },
  design:   { bg: 'rgba(20,90,50,0.25)',  text: '#58D68D', label: 'Design'   },
  build:    { bg: 'rgba(120,66,18,0.25)', text: '#F0A500', label: 'Build'    },
  govern:   { bg: 'rgba(74,35,90,0.25)',  text: '#AF7AC5', label: 'Govern'   },
  scale:    { bg: 'rgba(123,34,24,0.25)', text: '#EC7063', label: 'Scale'    },
  general:  { bg: 'rgba(42,49,69,0.5)',   text: '#94A3B8', label: 'SpanForge'},
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogCard({ post }) {
  const { slug, title, date, excerpt, phase = 'general', readingTime } = post
  const phaseStyle = PHASE_COLORS[phase] || PHASE_COLORS.general

  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      <div className={styles.inner}>
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

        <h3 className={styles.title}>{title}</h3>

        {excerpt && (
          <p className={styles.excerpt}>{excerpt}</p>
        )}

        <span className={styles.readMore} aria-hidden="true">
          Read article →
        </span>
      </div>
    </Link>
  )
}
