import Link from 'next/link'
import styles from '@/components/agentObsPage.module.css'

export const metadata = {
  title: 'Standards — SpanForge',
  description:
    'Open standards from SpanForge for compliant and trustworthy AI. Covering event-schema observability, training data compliance, PII redaction, and data governance for regulated AI systems.',
}

const STANDARDS = [
  {
    id: 'RFC-0001',
    label: 'Event Schema Standard',
    title: 'RFC-0001 SPANFORGE',
    version: '1.0',
    status: 'Open Standard · RFC-pending',
    effective: 'In Development',
    summary:
      'An open event-schema standard for observability of agentic AI systems. Defines a structured event envelope, 15 compliance and telemetry namespaces, HMAC audit chains, PII redaction, and four conformance profiles — from baseline AI spans to full compliance-grade evidence.',
    regulations: ['OpenTelemetry-compatible', 'HMAC audit chains', '15 namespaces'],
    href: '/standard',
  },
  {
    id: 'TDCS-1.0',
    label: 'Training Data Standard',
    title: 'Training Data Compliance Standard',
    version: '1.0',
    status: 'Open Standard · RFC-pending',
    effective: 'May 2, 2026',
    summary:
      'Defines what constitutes compliant training data for AI systems under EU AI Act, GDPR, DPDP Act, and CCPA. Includes a 30+ PII detection framework, redaction standards, data lineage requirements, compliance audit checklists, and Spanforge CLI integration.',
    regulations: ['EU AI Act Art. 10', 'GDPR Art. 5/6/13/30', 'DPDP 2023', 'CCPA'],
    href: '/standards/training-data-compliance',
  },
]

const PILLARS = [
  {
    icon: '⚖️',
    title: 'Regulatory coverage',
    body: 'Each standard maps directly to enforceable articles in EU AI Act, GDPR, DPDP, and CCPA — not aspirational guidelines.',
  },
  {
    icon: '🔓',
    title: 'Open & vendor-neutral',
    body: 'Standards are published as open specifications. Any toolchain or framework can implement them without a SpanForge dependency.',
  },
  {
    icon: '🛠️',
    title: 'Tool-assisted compliance',
    body: 'SpanForge CLI provides reference implementations so teams can move from standard to working compliance pipeline in hours.',
  },
  {
    icon: '📋',
    title: 'Audit-ready evidence',
    body: 'Every standard includes sign-off templates, audit checklists, and evidence formats that satisfy regulator expectations.',
  },
]

export default function StandardsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroLabel}>Open standards / vendor-neutral / in development</span>
          <h1 className={styles.h1}>SpanForge Standards</h1>
          <p className={styles.heroSub}>
            Open, regulator-facing specifications for compliant and trustworthy AI. Each standard maps
            directly to enforceable obligations — EU AI Act, GDPR, DPDP, CCPA — and ships with
            audit-ready checklists and CLI tooling.
          </p>
        </div>
      </section>

      {/* ── Standards catalog ────────────────────────────── */}
      <section className={styles.sectionDark}>
        <div className="container">
          <span className="eyebrow">Published standards</span>
          <h2 className={styles.sectionH2}>Standards catalog</h2>
          <p className={styles.sectionBody} style={{ maxWidth: '680px', marginBottom: '2.5rem' }}>
            All standards are open specifications. Conformance profiles and audit checklists are
            included in each document.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {STANDARDS.map((s) => (
              <Link key={s.id} href={s.href} style={{ textDecoration: 'none' }}>
                <div className={styles.hubCard} style={{ display: 'block' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div>
                      <span className={styles.hubCardLabel}>{s.id} · {s.label}</span>
                      <h3 className={styles.hubCardTitle} style={{ marginTop: '0.4rem', fontSize: '1.35rem' }}>{s.title}</h3>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-dm-mono)', color: 'var(--mid)', background: 'rgba(18,102,241,0.08)', border: '1px solid rgba(18,102,241,0.2)', borderRadius: '4px', padding: '0.2rem 0.55rem' }}>v{s.version}</span>
                      <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-dm-mono)', color: 'var(--accent)', background: 'var(--accent-soft)', border: '1px solid rgba(18,102,241,0.25)', borderRadius: '4px', padding: '0.2rem 0.55rem' }}>{s.status}</span>
                    </div>
                  </div>

                  <p className={styles.hubCardDesc} style={{ marginBottom: '1rem' }}>{s.summary}</p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--mid)', fontFamily: 'var(--font-dm-mono)' }}>Effective: {s.effective}</span>
                    <span style={{ color: 'var(--rule)', fontSize: '0.8rem' }}>|</span>
                    {s.regulations.map((r) => (
                      <span key={r} style={{ fontSize: '0.7rem', fontFamily: 'var(--font-dm-mono)', color: 'var(--muted)', background: 'var(--surface-2)', border: '1px solid var(--rule)', borderRadius: '4px', padding: '0.15rem 0.45rem' }}>{r}</span>
                    ))}
                    <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--accent)', fontFamily: 'var(--font-dm-mono)' }}>View standard →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Design pillars ───────────────────────────────── */}
      <section className={styles.sectionCharcoal}>
        <div className="container">
          <span className="eyebrow">Design principles</span>
          <h2 className={styles.sectionH2}>Built for regulators, practitioners, and auditors</h2>
          <div className={styles.hubGrid} style={{ marginTop: '2rem' }}>
            {PILLARS.map((p) => (
              <div key={p.title} className={styles.hubCard}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{p.icon}</div>
                <h3 className={styles.hubCardTitle} style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p className={styles.hubCardDesc}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RFC process ──────────────────────────────────── */}
      <section className={styles.sectionDark}>
        <div className="container">
          <div className={styles.sectionInner}>
            <span className="eyebrow">RFC process</span>
            <h2 className={styles.sectionH2}>How standards are developed</h2>
            <p className={styles.sectionBody}>
              SpanForge standards follow an open RFC (Request for Comments) process. Draft standards
              are published in the SpanForge repository, open for community feedback, and ratified
              after a review period. Any practitioner, legal professional, or regulator can submit
              feedback or propose new standards.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <Link href="/docs" className="btn-ghost">View documentation</Link>
              <Link href="/contact" className="btn-primary">Propose a standard</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
