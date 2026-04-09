import Link from 'next/link'
import { phaseSummary, needAreas, NEED_TOTAL } from '@/lib/tools-data'
import styles from './page.module.css'

export const metadata = {
  title: 'Tools & Frameworks — SpanForge',
  description:
    'SpanForge is building 100+ tools, frameworks, and standards documents across the five-phase AI lifecycle. Tools are listed here as they go live.',
}

// Breakdown of planned tool types
const TOOL_TYPES = [
  { count: '85',  label: 'CLI utilities',              note: 'Rust-native, single binary, zero dependencies' },
  { count: '20+', label: 'Web applications',           note: 'Interactive tools across Discover and Govern' },
  { count: '40+', label: 'Standards documents',        note: 'RFC-level templates and specifications' },
  { count: '5+',  label: 'Frameworks',                 note: 'Governance, methodology, and build standards' },
  { count: '6',   label: 'CI/CD pipeline templates',  note: 'Six-stage pipeline integrated into your build process' },
  { count: '1',   label: 'SpanForge Platform',       note: 'Production observability for autonomous AI agents — in development' },
  { count: '1',   label: 'CostGuard™',               note: 'Design-time cost intelligence — in development for AWS, GCP, and Azure' },
]

function PriorityPip({ count, label, color }) {
  if (!count) return null
  return (
    <span className={styles.priorityPip} style={{ background: color }}>
      {label}×{count}
    </span>
  )
}

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

      {/* Need areas — 85 CLI utilities by production gap */}
      <section className={styles.needSection} aria-labelledby="need-heading">
        <div className="container">
          <div className={styles.needHeader}>
            <div>
              <span className="eyebrow">CLI utility layer</span>
              <h2 id="need-heading" className={styles.needH2}>
                {NEED_TOTAL} utilities. 10 production gaps closed.
              </h2>
              <p className={styles.needDesc}>
                The ainternals utility layer ships {NEED_TOTAL} Rust CLI tools — single compiled
                binaries, zero dependencies — organised by the exact production gap each one
                closes. Every tool targets a real failure mode in enterprise AI delivery.
              </p>
            </div>
            <div className={styles.needLegend} aria-label="Priority key">
              <span className={styles.needLegendLabel}>Priority key</span>
              <span className={`${styles.legendPip} ${styles.p1}`}>P1 Critical</span>
              <span className={`${styles.legendPip} ${styles.p2}`}>P2 High</span>
              <span className={`${styles.legendPip} ${styles.p3}`}>P3 Medium</span>
              <span className={`${styles.legendPip} ${styles.p4}`}>P4 Low</span>
            </div>
          </div>

          <div className={styles.needGrid}>
            {needAreas.map((area, i) => (
              <div key={area.id} className={styles.needCard}>
                <div className={styles.needCardTop}>
                  <span className={styles.needNum}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.needCount}>{area.count}</span>
                </div>
                <p className={styles.needLabel}>{area.label}</p>
                <p className={styles.needGap}>{area.gap}</p>
                <div className={styles.needPriorities}>
                  <PriorityPip count={area.p1} label="P1" color="var(--red)" />
                  <PriorityPip count={area.p2} label="P2" color="#e07b00" />
                  <PriorityPip count={area.p3} label="P3" color="#6b7280" />
                  <PriorityPip count={area.p4} label="P4" color="#374151" />
                </div>
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
