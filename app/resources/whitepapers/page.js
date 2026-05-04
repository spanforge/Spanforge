import Link from 'next/link'
import styles from './whitepapers.module.css'

export const metadata = {
  title: 'Whitepapers — SpanForge',
  description:
    'In-depth research and technical whitepapers on AI compliance, cryptographic audit trails, training data governance, and AI risk management from the SpanForge team.',
}

const WHITEPAPERS = [
  {
    id: 'ai-audit-trail-v1',
    title: 'The Tamper-Proof Record: Cryptographically Signed AI Audit Trails',
    subtitle: 'Why screenshots are legally worthless, how HMAC chains work, what regulators now require, and what your implementation must include.',
    date: 'May 2026',
    version: 'v1.0',
    audience: 'Compliance, Legal, Risk, Technology Governance',
    scope: 'EU AI Act · NIST AI RMF · CFPB · FDA · FCA · MAS',
    topics: ['HMAC chains', 'Digital signatures', 'HSMs', 'RFC 3161', 'Merkle logs'],
    blurb: `AI systems are making consequential decisions at scale — in lending, hiring, medical triage, insurance, and content moderation. When those decisions are challenged by regulators or litigants, the organisation must produce a verifiable record of what the AI did, when it did it, and who reviewed or overrode it.

The evidence most organisations currently hold does not meet this standard.

A screenshot of an AI conversation is not evidence. It is a photograph of a screen. Anyone with basic image editing software can alter it in under two minutes — there is no timestamp authority, no chain of custody, and no mathematical proof that what is displayed reflects what actually occurred.

This whitepaper explains what a cryptographically signed AI audit trail is, how HMAC chain construction works, what specific threats it defends against, what it does not cover, and what regulators across the EU, US, UK, and Singapore now require.

The core argument: a signed, chained, externally anchored audit trail is not a luxury feature for mature security programmes. It is the minimum viable evidence mechanism for any organisation operating AI systems in regulated domains.`,
    downloadUrl: 'https://github.com/spanforge/SpanforgeContent/releases/download/1.0-Audit-Trial-Whitepaper/V1.0-ai-audit-trail-whitepaper.pdf',
    pages: 14,
    highlights: [
      'Why logs and screenshots fail regulatory scrutiny',
      'How HMAC chains make record tampering computationally infeasible',
      'The 6-stage architecture from event capture to external anchor',
      'What auditors now demand: completeness, integrity, non-repudiation, timeliness, accessibility',
      'Minimum viable audit record — field-by-field specification',
      'Key management failures that break real deployments',
      'Regulatory deadlines: EU AI Act Art. 12, NIST AI RMF, CFPB, FDA, FCA/MAS',
      'A cautionary case study: bank settles class action because it cannot prove what its model did',
    ],
  },
]

export default function WhitepapersPage() {
  return (
    <main className={styles.main} id="main-content">
      {/* Header */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.breadcrumb}>
            <Link href="/resources">Resources</Link>
            <span aria-hidden="true"> / </span>
            Whitepapers
          </p>
          <h1 className={styles.heroTitle}>Whitepapers</h1>
          <p className={styles.heroLead}>
            In-depth research and technical papers from the SpanForge team — covering AI compliance,
            cryptographic audit trails, training data governance, and the regulatory landscape for
            AI in regulated industries.
          </p>
          <p className={styles.heroComing}>
            This library will grow as SpanForge publishes new research. Each paper is written for
            compliance, legal, risk, and technology governance audiences — with technical depth for
            engineering teams and plain-language summaries for executives and counsel.
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section className={styles.upcoming}>
        <div className={`container ${styles.upcomingInner}`}>
          <h2 className={styles.sectionTitle}>Topics in this library</h2>
          <p className={styles.sectionLead}>
            Papers currently in research or drafting — published as they are ready.
          </p>
          <ul className={styles.topicGrid}>
            {[
              { title: 'Training Data Compliance', desc: 'EU AI Act Article 10 obligations, PII in datasets, and provenance requirements for high-risk AI systems.' },
              { title: 'AI Audit Trails', desc: 'Cryptographic audit chain construction, regulatory requirements, and what "tamper-evident" actually means in practice.' },
              { title: 'Runtime Governance', desc: 'Policy enforcement at inference time, signed governance contracts, and post-market monitoring obligations.' },
              { title: 'Compliance Evidence Packages', desc: 'How to structure, sign, and deliver regulator-ready evidence — for auditors, enterprise buyers, and notified bodies.' },
              { title: 'PII at Scale', desc: 'Detection, redaction, and right-to-erasure in AI pipelines — including the GDPR conflict with immutable audit chains.' },
              { title: 'AI Act Implementation Guides', desc: 'Jurisdiction-specific breakdowns for EU, UK, US, and APAC regulatory requirements for AI operators.' },
            ].map((t) => (
              <li key={t.title} className={styles.topicCard}>
                <h3 className={styles.topicTitle}>{t.title}</h3>
                <p className={styles.topicDesc}>{t.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Published whitepapers */}
      <section className={styles.published}>
        <div className={`container ${styles.publishedInner}`}>
          <h2 className={styles.sectionTitle}>Published</h2>
          {WHITEPAPERS.map((wp) => (
            <article key={wp.id} className={styles.paper}>
              <div className={styles.paperMeta}>
                <span className={styles.paperVersion}>{wp.version}</span>
                <span className={styles.paperDate}>{wp.date}</span>
                <span className={styles.paperPages}>{wp.pages} pages</span>
              </div>

              <h2 className={styles.paperTitle}>{wp.title}</h2>
              <p className={styles.paperSubtitle}>{wp.subtitle}</p>

              <div className={styles.paperTags}>
                <span className={styles.tagLabel}>Audience:</span>
                <span className={styles.tagValue}>{wp.audience}</span>
              </div>
              <div className={styles.paperTags}>
                <span className={styles.tagLabel}>Regulatory scope:</span>
                <span className={styles.tagValue}>{wp.scope}</span>
              </div>
              <div className={styles.paperTags}>
                <span className={styles.tagLabel}>Technical scope:</span>
                <span className={styles.tagValue}>{wp.topics.join(' · ')}</span>
              </div>

              <div className={styles.blurb}>
                {wp.blurb.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className={styles.highlights}>
                <h3 className={styles.highlightsTitle}>What this paper covers</h3>
                <ul className={styles.highlightsList}>
                  {wp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.paperActions}>
                <a
                  href={wp.downloadUrl}
                  className={styles.downloadBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3v13M7 11l5 5 5-5M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Download PDF
                </a>
                <Link href="/docs/guide/signing" className={styles.learnBtn}>
                  See SpanForge audit chain implementation →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stay informed */}
      <section className={styles.notify}>
        <div className={`container ${styles.notifyInner}`}>
          <h2 className={styles.notifyTitle}>Get notified when new papers are published</h2>
          <p className={styles.notifyLead}>
            New whitepapers are announced via the SpanForge newsletter. No marketing — only research.
          </p>
          <Link href="/contact" className={styles.notifyBtn}>Contact us to be notified →</Link>
        </div>
      </section>
    </main>
  )
}
