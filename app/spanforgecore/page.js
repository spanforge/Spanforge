import Link from 'next/link'
import TerminalMock from '@/components/TerminalMock'
import styles from './page.module.css'

export const metadata = {
  title: 'SpanForge — Compliance and Governance for Agentic AI',
  description:
    'SpanForge is the compliance and governance platform for agentic AI systems. Structured event schema, HMAC-SHA256 audit chains, PII redaction, and provable regulatory compliance — EU AI Act, GDPR, SOC 2, ISO 42001, and NIST AI RMF.',
}

const FEATURES = [
  {
    num: '01',
    title: 'Structured compliance events',
    desc: 'Every LLM call, tool invocation, decision, and guardrail check is recorded as a typed RFC-0001 event — a structured envelope with required fields, audit metadata, and schema-validated payloads.',
  },
  {
    num: '02',
    title: 'HMAC-SHA256 audit chains',
    desc: 'Every emitted event is cryptographically signed with HMAC-SHA256 and chained to its predecessor via prev_id. Verifying the chain proves the event stream has not been modified, reordered, or truncated.',
  },
  {
    num: '03',
    title: 'PII redaction before export',
    desc: 'First-class PII detection and redaction via the llm.redact.* namespace. Sensitivity levels, custom redaction policies, and field-level re-identification risk — before any event reaches a backend.',
  },
  {
    num: '04',
    title: 'Regulatory framework mapping',
    desc: 'ComplianceMappingEngine maps events to obligations under EU AI Act, GDPR, SOC 2, ISO 42001, and NIST AI RMF. HMAC-signed evidence packages are generated on demand for auditors and regulators.',
  },
  {
    num: '05',
    title: 'Schema governance',
    desc: 'Consumer registry, deprecation tracking, and schema migration tooling. Block or warn on disallowed event types, declare schema dependencies, and ensure every consumer is compatible before you ship.',
  },
  {
    num: '06',
    title: 'Export to any backend',
    desc: 'OTLP, Webhook, JSONL, Datadog, Grafana Loki, and Cloud export backends. EventStream multiplexer with Apache Kafka support for streaming compliance pipelines.',
  },
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Instrument',
    desc: 'pip install spanforge and emit RFC-0001 events from every LLM call, tool invocation, and decision point. Zero required dependencies.',
  },
  {
    step: '02',
    title: 'Sign',
    desc: 'Every event carries an HMAC-SHA256 signature chained to the previous — tamper-evident audit trail by design, not by configuration.',
  },
  {
    step: '03',
    title: 'Validate',
    desc: 'Run spanforge validate in CI. Catch non-compliant events, schema violations, and broken audit chains at build time — not post-incident.',
  },
  {
    step: '04',
    title: 'Prove',
    desc: 'ComplianceMappingEngine generates HMAC-signed evidence packages mapped to EU AI Act, GDPR, SOC 2, ISO 42001, and NIST AI RMF.',
  },
]

export default function AgentObsPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">SpanForge Platform by SpanForge</span>
          <h1 className={styles.h1}>
            You can&rsquo;t govern what<br />
            <span className={styles.redAccent}>you can&rsquo;t see.</span>
          </h1>
          <p className={styles.heroSub}>
            SpanForge is the compliance and governance platform for agentic AI systems.
            Structured RFC-0001 events, HMAC-signed audit chains, PII redaction, and regulatory
            evidence packages — provable compliance before auditors or incidents find the problem first.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/tools" className="btn-primary">
              Explore the Tools →
            </Link>
            <Link href="#how-it-works" className="btn-ghost">
              How it works →
            </Link>
          </div>
        </div>
      </section>

      {/* Terminal demo */}
      <section className={styles.terminalSection} aria-label="SpanForge platform live demo">
        <div className={`container ${styles.terminalInner}`}>
          <div className={styles.terminalLeft}>
            <h2 className={styles.terminalH2}>
              See it in action.
            </h2>
            <p className={styles.terminalCopy}>
              Three scenarios. Three ways SpanForge generates compliance evidence that
              your dashboards miss. Switch between tabs to explore — consent records,
              audit chain verification, and PII redaction events.
            </p>
            <p className={styles.terminalNote}>
              These are representative examples. Real output varies by agent configuration
              and playbook definitions.
            </p>
          </div>
          <div className={styles.terminalRight}>
            <TerminalMock />
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className={styles.features} aria-labelledby="features-heading">
        <div className="container">
          <span className="eyebrow">Capabilities</span>
          <h2 id="features-heading" className={styles.featuresH2}>
            Everything production AI needs.
          </h2>
          <div className={styles.featuresGrid}>
            {FEATURES.map(f => (
              <div key={f.num} className={styles.featureCard}>
                <span className={styles.featureNum}>{f.num}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className={styles.howItWorks}
        aria-labelledby="hiw-heading"
      >
        <div className="container">
          <span className="eyebrow">Integration</span>
          <h2 id="hiw-heading" className={styles.hiwH2}>
            Up and running in an afternoon.
          </h2>
          <div className={styles.hiwSteps}>
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className={styles.hiwStep}>
                <div className={styles.hiwStepNum}>{step.step}</div>
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className={styles.hiwConnector} aria-hidden="true" />
                )}
                <h3 className={styles.hiwStepTitle}>{step.title}</h3>
                <p className={styles.hiwStepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className={styles.useCases} aria-labelledby="usecases-heading">
        <div className="container">
          <span className="eyebrow">Who it&rsquo;s for</span>
          <h2 id="usecases-heading" className={styles.useCasesH2}>
            Built for regulated, high-stakes AI.
          </h2>
          <div className={styles.useCasesGrid}>
            {[
              { label: 'Financial services', desc: 'Credit decisions, fraud detection, customer communication agents, AML monitoring.' },
              { label: 'Healthcare', desc: 'Clinical decision support, triage routing, patient-facing assistants, prior authorisation agents.' },
              { label: 'Legal & compliance', desc: 'Contract analysis, regulatory monitoring, compliance automation, document review agents.' },
              { label: 'Operations & Automation', desc: 'Procurement automation, HR decision support, internal knowledge agents, IT service automation.' },
            ].map(uc => (
              <div key={uc.label} className={styles.useCaseCard}>
                <h3 className={styles.useCaseLabel}>{uc.label}</h3>
                <p className={styles.useCaseDesc}>{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className={styles.ecosystem} aria-labelledby="ecosystem-heading">
        <div className="container">
          <span className="eyebrow">Ecosystem</span>
          <h2 id="ecosystem-heading" className={styles.ecosystemH2}>
            The complete SpanForge stack.
          </h2>
          <p className={styles.ecosystemSub}>
            From the open standard to the production SDK and developer tooling —
            every layer of the compliance stack is documented and ready to use.
          </p>
          <div className={styles.ecosystemGrid}>
            {[
              {
                label: 'Open Standard',
                title: 'RFC-0001 SPANFORGE',
                desc: 'The schema specification at the core of the ecosystem. Defines the event envelope, 15 compliance & governance namespaces, HMAC audit chains, and four conformance profiles. Open and vendor-neutral.',
                href: '/standard',
                cta: 'Read the standard →',
              },
              {
                label: 'SpanForge SDK',
                title: 'pip install spanforge',
                desc: 'The reference implementation. pip-installable, zero required dependencies, covers all 15 namespaces with quickstart, integrations, and a full CLI.',
                href: '/spanforgecore/sdk',
                cta: 'Explore the SDK →',
              },
              {
                label: 'Developer Tool',
                title: 'SpanForge Debug',
                desc: 'Inspect, replay, and visualise SpanForge traces. Timeline views, span trees, tool-call analysis, cost attribution, and trace diffing for debugging production behaviour.',
                href: '/spanforgecore/debug',
                cta: 'Explore SpanForge Debug →',
              },
              {
                label: 'Compliance Tool',
                title: 'SpanForge Validate',
                desc: 'Reference validation CLI and Python SDK. Validate JSON/JSONL event streams against the SPANFORGE schema, verify HMAC chains, and integrate into CI pipelines for compliance gating.',
                href: '/spanforgecore/validate',
                cta: 'Explore SpanForge Validate →',
              },
            ].map(item => (
              <Link key={item.href} href={item.href} className={styles.ecoCard}>
                <span className={styles.ecoLabel}>{item.label}</span>
                <h3 className={styles.ecoTitle}>{item.title}</h3>
                <p className={styles.ecoDesc}>{item.desc}</p>
                <span className={styles.ecoCta}>{item.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta} aria-labelledby="cta-heading">
        <div className={`container ${styles.ctaInner}`}>
          <span className="eyebrow">SpanForge Platform</span>
          <h2 id="cta-heading" className={styles.ctaH2}>
            Know what your AI is doing. Always.
          </h2>
          <p className={styles.ctaSub}>
            SpanForge is the compliance and governance platform for agentic AI systems.
            Instrument, sign, validate, and prove compliance from day one.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link href="/spanforgecore/sdk" className="btn-primary">Get started with the SDK →</Link>
            <Link href="/standard" className="btn-ghost">Read the standard →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
