import Link from 'next/link'
import styles from '@/components/phasePage.module.css'

export default function PhasePageLayout({ phase, prev, next, children }) {
  return (
    <>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className="container">
          <Link href="/platform" className={styles.breadcrumbLink}>← Platform</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>{phase.label}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">{phase.tag}</span>
          <div className={styles.phaseRow}>
            <span
              className={styles.phaseNum}
              style={{ color: `var(${phase.colorVar})` }}
            >
              {phase.num}
            </span>
            <span
              className={styles.phaseLabel}
              style={{ color: `var(${phase.colorVar})` }}
            >
              {phase.label}
            </span>
          </div>
          <h1 className={styles.h1}>{phase.tagline}</h1>
        </div>
      </section>

      {/* Summary */}
      <section className={styles.contentSection} aria-label="Phase overview">
        <div className={`container ${styles.contentInner}`}>
          {phase.summary.map((para, i) => (
            <p key={i} className={styles.summaryPara}>{para}</p>
          ))}
        </div>
      </section>

      {/* Phase-specific extra content (pipeline, AgentOBS callout, etc.) */}
      {children}

      {/* Exit gate */}
      <section className={styles.gateSection} aria-labelledby={`gate-${phase.id}`}>
        <div className={`container ${styles.gateInner}`}>
          <span className="eyebrow">Exit gate</span>
          <div className={styles.gateBox}>
            <span className={styles.gateEyebrow}>Nothing progresses without passing</span>
            <p className={styles.gateText}>{phase.gate}</p>
          </div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      <nav className={styles.phaseNav} aria-label="Phase navigation">
        <div className={`container ${styles.phaseNavInner}`}>
          {prev ? (
            <Link href={`/platform/${prev.id}`} className={styles.phaseNavLink}>
              <span className={styles.phaseNavDir}>← Previous phase</span>
              <span className={styles.phaseNavLabel}>{prev.num} {prev.label}</span>
              <span className={styles.phaseNavTag}>{prev.tag}</span>
            </Link>
          ) : <div />}

          {next ? (
            <Link href={`/platform/${next.id}`} className={`${styles.phaseNavLink} ${styles.phaseNavRight}`}>
              <span className={styles.phaseNavDir}>Next phase →</span>
              <span className={styles.phaseNavLabel}>{next.num} {next.label}</span>
              <span className={styles.phaseNavTag}>{next.tag}</span>
            </Link>
          ) : (
            <Link href="/platform/trust" className={`${styles.phaseNavLink} ${styles.phaseNavRight}`}>
              <span className={styles.phaseNavDir}>Governance layer →</span>
              <span className={styles.phaseNavLabel}>T.R.U.S.T. Framework</span>
              <span className={styles.phaseNavTag}>Make AI accountable.</span>
            </Link>
          )}
        </div>
      </nav>
    </>
  )
}
