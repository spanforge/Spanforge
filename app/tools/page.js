import Link from 'next/link'
import { needAreas, NEED_TOTAL, showcaseTools } from '@/lib/tools-data'
import ToolsClient from './ToolsClient'
import styles from './page.module.css'

export const metadata = {
  title: 'Tools & SDK Services — SpanForge',
  description:
    'SpanForge ships 11 SDK services, 33 CLI commands, and a growing suite of standalone tools covering security, compliance, observability, and governance for AI systems.',
}

// SDK reality breakdown
const SDK_CATEGORIES = [
  { count: '11',  label: 'SDK services',       note: 'sf_identity · sf_pii · sf_secrets · sf_audit · sf_observe · sf_alert · sf_gate · sf_cec · sf_trust · sf_rag · sf_feedback' },
  { count: '33',  label: 'CLI commands',        note: 'scan · gate · trust · audit · secrets · compliance · doctor · security · enterprise · and 24 more' },
  { count: '6',   label: 'Compliance frameworks', note: 'EU AI Act · GDPR · HIPAA · SOC 2 · ISO 42001 · NIST AI RMF — article-level mapping' },
  { count: '91%', label: 'Test coverage',       note: '5,863 tests passing · mypy --strict · zero required dependencies' },
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
  const sdkCount = showcaseTools.filter(t => t.type === 'sdk').length
  const publishedCount = showcaseTools.filter(t => t.hasPage).length

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Tools &amp; SDK Services</span>
          <h1 className={styles.h1}>
            11 SDK services. 33 CLI commands.<br />Shipped.
          </h1>
          <p className={styles.heroSub}>
            spanforge ships a complete toolkit for AI compliance — from PII redaction and
            secrets scanning at CI time, to HMAC audit chains and regulatory evidence bundles
            in production. Every service is available today via <code>pip install spanforge</code>.
          </p>
        </div>
      </section>

      {/* SDK stats */}
      <section className={styles.counts} aria-label="SDK stats">
        <div className="container">
          <div className={styles.countsGrid}>
            {SDK_CATEGORIES.map((cat) => (
              <div key={cat.label} className={styles.countCard}>
                <span className={styles.countTotal}>{cat.count}</span>
                <span className={styles.countLabel}>{cat.label}</span>
                <span className={styles.countTypes}>{cat.note}</span>
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
                The ainternals utility layer ships {NEED_TOTAL} Python CLI tools — zero external
                dependencies — organised by the exact production gap each one
                closes. Every tool targets a real failure mode in AI delivery.
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

      {/* Published tools */}
      <section className={styles.publishedSection} aria-labelledby="published-heading">
        <div className="container">
          <span className="eyebrow">Available now</span>
          <h2 id="published-heading" className={styles.publishedH2}>
            Published tools &amp; SDK services
          </h2>
          <p className={styles.publishedDesc}>
            Browse every SDK service and CLI tool that ships with spanforge. Use the filters to narrow by type or lifecycle phase.
          </p>
          <ToolsClient tools={[
            ...showcaseTools.filter(t => t.type === 'sdk'),
            ...showcaseTools.filter(t => t.hasPage),
          ]} />
        </div>
      </section>
    </>
  )
}
