import Link from 'next/link'
import styles from './ToolCard.module.css'

const badgeClass = {
  webapp: 'badge-webapp',
  python: 'badge-python',
  doc: 'badge-doc',
  fw: 'badge-fw',
  product: 'badge-product',
  sdk: 'badge-python',
}

const badgeLabel = {
  webapp: 'Web App',
  python: 'Python CLI',
  doc: 'Document',
  fw: 'Framework',
  product: 'Product',
  sdk: 'SDK Service',
}

function CardInner({ tool, hideName }) {
  return (
    <>
      <div className={styles.cardTopRow}>
        <span className={`badge ${badgeClass[tool.type] || 'badge-doc'} ${styles.badge}`}>
          {badgeLabel[tool.type] || tool.type}
        </span>
        {tool.hasPage ? (
          <span className={styles.availableBadge}>Docs Available</span>
        ) : tool.type === 'sdk' ? (
          <span className={styles.availableBadge}>Shipped</span>
        ) : (
          <span className={styles.inBuildBadge}>In Build</span>
        )}
      </div>
      {!hideName && (
        <h3 className={styles.name}>
          {tool.type === 'python' || tool.type === 'sdk' ? <code>{tool.name}</code> : tool.name}
        </h3>
      )}
      <p className={styles.desc}>{tool.description}</p>
      {tool.hasPage && (
        <span className={styles.viewDocs} aria-hidden="true">View docs -&gt;</span>
      )}
    </>
  )
}

export default function ToolCard({ tool, locked = false, hideName = false }) {
  if (locked) {
    return (
      <div className={`${styles.card} ${styles.locked}`} aria-hidden="true">
        <div className={styles.lockIcon}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <div className={styles.lockedText}>Locked</div>
        <div className={styles.lockedSub}>Coming soon</div>
      </div>
    )
  }

  if (tool.hasPage) {
    return (
      <Link href={`/tools/${tool.id}`} className={`${styles.card} ${styles.cardLink}`}>
        <CardInner tool={tool} hideName={hideName} />
      </Link>
    )
  }

  return (
    <div className={styles.card}>
      <CardInner tool={tool} hideName={hideName} />
    </div>
  )
}
