import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'About SpanForge',
  description:
    'spanforge is the AI compliance platform for agentic systems. Ship AI applications that are auditable, regulator-ready, and privacy-safe &mdash; from day one.',
}

const VALUES = [
  {
    title: 'Build in the open.',
    desc: 'The standard is public. The schema is public. The SDK is MIT-licensed. AI needs more transparency, not less.',
  },
  {
    title: 'Opinionated by design.',
    desc: 'spanforge has a clear position on how AI should be governed. We would rather be useful and direct than vague and universally palatable.',
  },
  {
    title: 'Production is the point.',
    desc: 'A model in a notebook is not AI. We build for teams shipping to real users in regulated environments &mdash; not for the demo.',
  },
  {
    title: 'Standards before shortcuts.',
    desc: 'Every SDK service exists because we have seen what happens when it is absent. Compliance infrastructure is not overhead &mdash; it is the foundation.',
  },
]

const SDK_PILLARS = [
  {
    count: '01',
    label: 'Compliance by default.',
    detail: 'Every event your app emits is HMAC-signed, PII-redacted, and stored &mdash; with zero per-call boilerplate. spanforge.configure() and you are compliant.',
  },
  {
    count: '02',
    label: 'Regulator-ready evidence.',
    detail: 'sf_cec generates HMAC-signed ZIP bundles mapping telemetry to EU AI Act, GDPR, SOC 2, HIPAA, ISO 42001, and NIST AI RMF at the article level &mdash; ready for auditor hand-off.',
  },
  {
    count: '03',
    label: 'Zero required dependencies.',
    detail: 'Pure Python 3.9+ stdlib. Local fallback mode. Sandbox mode. mock_all_services() for testing. Works in air-gapped environments with no egress.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">About SpanForge</span>
          <h1 className={styles.h1}>
            The AI compliance platform<br />for agentic systems.
          </h1>
          <p className={styles.heroSub}>
            spanforge is compliance infrastructure &mdash; not a monitoring add-on. It gives
            every AI action in your stack a cryptographically signed, privacy-safe,
            regulator-ready record. Built on RFC-0001, the open event-schema standard
            for AI governance.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.mission} aria-labelledby="mission-heading">
        <div className={`container ${styles.missionInner}`}>
          <h2 id="mission-heading" className={styles.missionH2}>
            The problem we are solving.
          </h2>
          <div className={styles.missionGrid}>
            <div>
              <p className={styles.missionCopy}>
                You are building AI applications in a world where regulators are
                catching up fast. The EU AI Act is in force. GDPR applies to every LLM
                that touches personal data. SOC 2 auditors want evidence that your AI
                systems are governed. And your team is stitching together ad-hoc logs,
                hoping they will hold up in an audit.
              </p>
              <p className={styles.missionCopy}>
                spanforge solves this. It is a compliance-first platform that gives
                every AI action a cryptographically signed, tamper-evident record &mdash;
                from the first pip install to the auditor hand-off.
              </p>
            </div>
            <div>
              <p className={styles.missionCopy}>
                We build for teams that have shipped a working model and are now
                asking the hard questions: How do we prove compliance? How do we audit
                this? How do we detect drift? What happens when it fails?
              </p>
              <p className={styles.missionCopy}>
                spanforge answers those questions with 11 SDK services, 33 CLI commands,
                and article-level mapping to 6 regulatory frameworks &mdash; all available
                today via <code>pip install spanforge</code>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What SpanForge IS and IS NOT */}
      <section className={styles.isIsNot} aria-labelledby="isnot-heading">
        <div className="container">
          <span className="eyebrow">Clarity of purpose</span>
          <h2 id="isnot-heading" className={styles.missionH2}>
            What spanforge is &mdash; and is not.
          </h2>
          <div className={styles.isNotGrid}>
            <div className={styles.isNotCol}>
              <p className={styles.isNotColHead}>spanforge IS</p>
              {[
                'A compliance-first SDK for agentic AI systems',
                'HMAC-signed audit chain infrastructure (sf_audit)',
                'PII redaction and privacy enforcement (sf_pii)',
                'Secrets scanning with SARIF output (sf_secrets)',
                'Regulatory evidence bundles for auditors (sf_cec)',
                'A 6-gate CI/CD compliance pipeline (sf_gate)',
                'A T.R.U.S.T. scorecard with SVG badge + trend API (sf_trust)',
                'Observability to any OTLP-compatible backend (sf_observe)',
                'RAG tracing with LlamaIndex and LangChain auto-instrumentation (sf_rag)',
                'An open standard &mdash; RFC-0001, MIT-licensed, zero call-home',
              ].map(item => (
                <p key={item} className={styles.isNotItem}>
                  <span className={styles.isNotCheck} aria-hidden="true">&#10003;</span> {item}
                </p>
              ))}
            </div>
            <div className={styles.isNotCol}>
              <p className={styles.isNotColHead}>spanforge IS NOT</p>
              {[
                'An MLOps platform (no model serving infrastructure)',
                'A model provider or AI model builder',
                'A cloud infrastructure platform',
                'An agent framework or orchestration engine',
                'A replacement for legal or compliance teams',
                'A replacement for cloud billing or FinOps tools',
                'A detached consulting business that sits outside the product',
                'A replacement for existing CI/CD tooling &mdash; sf_gate extends it',
              ].map(item => (
                <p key={item} className={styles.isNotItem}>
                  <span className={styles.isNotCross} aria-hidden="true">&#10005;</span> {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SDK pillars */}
      <section className={styles.building} aria-labelledby="sdk-heading">
        <div className="container">
          <span className="eyebrow">How it works</span>
          <h2 id="sdk-heading" className={styles.buildingH2}>
            Three things spanforge guarantees.
          </h2>
          <div className={styles.buildingGrid}>
            {SDK_PILLARS.map(item => (
              <div key={item.label} className={styles.buildingCard}>
                <span className={styles.buildingCount}>{item.count}</span>
                <h3 className={styles.buildingLabel}>{item.label}</h3>
                <p className={styles.buildingDetail}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values} aria-labelledby="values-heading">
        <div className="container">
          <span className="eyebrow">How we work</span>
          <h2 id="values-heading" className={styles.valuesH2}>
            Four principles. Non-negotiable.
          </h2>
          <div className={styles.valuesGrid}>
            {VALUES.map(v => (
              <div key={v.title} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta} aria-labelledby="cta-heading">
        <div className={`container ${styles.ctaInner}`}>
          <span className="eyebrow">Get started</span>
          <h2 id="cta-heading" className={styles.ctaH2}>
            Ready to make your AI production-ready?
          </h2>
          <p className={styles.ctaSub}>
            One pip install. Zero required dependencies. Start instrumenting your AI
            for compliance in under five minutes.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/spanforgecore/sdk" className="btn-primary">
              Read the docs &rarr;
            </Link>
            <Link href="/contact" className="btn-ghost">
              Get in touch &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

