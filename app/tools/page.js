import Link from 'next/link'
import { phaseSummary } from '@/lib/tools-data'
import styles from './page.module.css'

export const metadata = {
  title: 'Tools & Frameworks — SpanForge',
  description:
    'SpanForge is building 100+ tools, frameworks, and standards documents across the five-phase AI lifecycle. Tools are listed here as they go live.',
}

// Breakdown of planned tool types
const TOOL_TYPES = [
  { count: '20+', label: 'CLI tools',                  note: 'Build and Scale phase automation' },
  { count: '20+', label: 'Web applications',           note: 'Interactive tools across Discover and Govern' },
  { count: '40+', label: 'Standards documents',        note: 'RFC-level templates and specifications' },
  { count: '5+',  label: 'Frameworks',                 note: 'Governance, methodology, and build standards' },
  { count: '6',   label: 'CI/CD pipeline templates',  note: 'Six-stage pipeline integrated into your build process' },
  { count: '1',   label: 'AgentOBS platform',         note: 'Production observability for autonomous AI agents' },
]

export default function ToolsPage() {
  const totalPlanned = Object.values(phaseSummary).reduce((sum, p) => sum + p.total, 0)

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Tools &amp; Frameworks</span>
          <h1 className={styles.h1}>
            {totalPlanned}+ tools planned across the lifecycle.
          </h1>
          <p className={styles.heroSub}>
            SpanForge is building a complete toolkit covering every decision, gate, and
            deployment challenge across the five-phase AI lifecycle. Tools are published
            to this page as they go live — check back as the platform ships.
          </p>
        </div>
      </section>

      {/* Phase totals */}
      <section className={styles.counts} aria-label="Planned tools by phase">
        <div className="container">
          <p className={styles.countsIntro}>
            Planned tools per phase
          </p>
          <div className={styles.countsGrid}>
            {Object.entries(phaseSummary).map(([phaseId, info]) => (
              <div key={phaseId} className={styles.countCard}>
                <span
                  className={styles.countPhase}
                  style={{ color: `var(--${phaseId})` }}
                >
                  {info.label}
                </span>
                <div className={styles.countRow}>
                  <span className={styles.countTotal}>{info.total}</span>
                </div>
                <span className={styles.countLabel}>tools planned</span>
                <span className={styles.countTypes}>{info.types}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is being built */}
      <section className={styles.lockedSection} aria-labelledby="breakdown-heading">
        <div className={`container ${styles.lockedInner}`}>
          <h2 id="breakdown-heading" className={styles.lockedH2}>
            What is in the platform.
          </h2>
          <p className={styles.lockedDesc}>
            The SpanForge toolkit spans six categories. Each tool maps to one phase of
            the lifecycle and one dimension of the T.R.U.S.T. Framework.
          </p>
          <div className={styles.lockedFeatures}>
            {TOOL_TYPES.map(t => (
              <div key={t.label} className={styles.lockedFeature}>
                <span className={styles.lockedCheck} aria-hidden="true">{t.count}</span>
                <strong style={{ fontSize: '0.875rem', color: 'var(--light)' }}>{t.label}</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: '1.5' }}>{t.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
