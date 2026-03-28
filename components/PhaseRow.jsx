import Link from 'next/link'
import styles from './PhaseRow.module.css'

export default function PhaseRow({ phase }) {
  const { num, id, label, colorVar, tag, tagline, summary, gate } = phase

  return (
    <Link
      href={`/platform/${id}`}
      className={styles.row}
      aria-label={`Phase ${num}: ${label} — ${tagline}`}
    >
      <div className={styles.left} style={{ '--phase-color': `var(${colorVar})` }}>
        <span className={styles.num}>{num}</span>
        <span className={styles.label}>{label}</span>
        {tag && <span className={styles.tag}>{tag}</span>}
      </div>

      <div className={styles.right}>
        <p className={styles.tagline}>{tagline}</p>
        <p className={styles.summary}>{summary}</p>
        {gate && (
          <p className={styles.gate}>
            <span className={styles.gateLabel}>Exit gate:</span> {gate}
          </p>
        )}
      </div>

      <svg
        className={styles.arrow}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 10H16M11 5l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  )
}
