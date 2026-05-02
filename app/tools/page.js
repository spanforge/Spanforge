import Link from 'next/link'
import { showcaseTools } from '@/lib/tools-data'
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
  { count: '91%', label: 'Test coverage',       note: '6,541 tests passing · mypy --strict · zero required dependencies' },
]

export default function ToolsPage() {

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
          <ToolsClient tools={showcaseTools.filter(t => t.hasPage)} />
        </div>
      </section>
    </>
  )
}
