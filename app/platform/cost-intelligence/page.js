import Link from 'next/link'
import styles from '@/components/phasePage.module.css'

export const metadata = {
  title: 'Cost Intelligence Layer — SpanForge',
  description:
    'The SpanForge Cost Intelligence Layer unifies design-time infrastructure cost estimation with runtime token cost tracking across all LLM providers via the SpanForge llm.cost.* namespace — so cost is governed at every stage.',
}

const capabilities = [
  {
    num: '01',
    label: 'Design-time infrastructure cost estimation',
    desc: 'Infrastructure configuration or model selection produces a cost estimate before any resource is created. Cost is known at the decision point — not discovered on the first bill. Includes scenario comparison across cheapest, balanced, and performance profiles.',
  },
  {
    num: '02',
    label: 'Runtime token cost tracking (SpanForge)',
    desc: 'Every LLM call emits a structured cost event via the SpanForge llm.cost.* namespace — input tokens, output tokens, cached tokens, and reasoning tokens tracked per-call and aggregated across sessions. All included in the HMAC-signed audit trail.',
  },
  {
    num: '03',
    label: 'Cross-provider unified cost model',
    desc: 'A single pricing surface across OpenAI, Anthropic, Google Gemini, AWS Bedrock, Groq, and Together AI. Pricing snapshots are recorded in every CostBreakdown event for auditability. One cost model regardless of which providers your architecture uses.',
  },
  {
    num: '04',
    label: 'Cost attribution by user, team, and dimension',
    desc: 'Costs are attributed to org_id, team_id, and actor_id fields on every SpanForge event — enabling chargeback, budget enforcement, and per-initiative cost accountability across complex multi-agent workflows.',
  },
  {
    num: '05',
    label: 'Multi-agent cost rollup',
    desc: 'Child agent run costs propagate automatically to the parent AgentRunPayload.total_cost, including all nested child costs. Hierarchical cost accountability across orchestrated agent workflows — no manual aggregation required.',
  },
  {
    num: '06',
    label: 'Gate Readiness Score™ — Cost Readiness',
    desc: 'Cost intelligence evidence feeds directly into the sixth dimension of the Gate Readiness Score™. A Design Exit Gate evidence package is not complete without a documented infrastructure cost estimate and scenario comparison.',
  },
]

const namespaceEvents = [
  {
    event: 'llm.cost.token_recorded',
    payload: 'CostTokenRecordedPayload',
    desc: 'Per-LLM-call cost record: input_cost, output_cost, cached_input_cost, reasoning_cost, total_cost, currency, provider, model, pricing_snapshot_date.',
  },
  {
    event: 'llm.cost.session_recorded',
    payload: 'CostSessionRecordedPayload',
    desc: 'Session-aggregate cost: cumulative cost across all LLM calls in an agent run or user session, with session_id grouping.',
  },
  {
    event: 'llm.cost.attributed',
    payload: 'CostAttributedPayload',
    desc: 'Cost attribution record: cost allocated to org_id, team_id, or actor_id for chargeback and budget accountability.',
  },
]

const providers = [
  { name: 'OpenAI', models: 'gpt-4o, gpt-4-turbo, gpt-3.5, o1 reasoning models', status: 'Live' },
  { name: 'Anthropic', models: 'Claude 3 Opus, Sonnet, Haiku; Claude 2.1', status: 'Live' },
  { name: 'Google Gemini', models: 'gemini-2.0-flash, gemini-1.5-pro, gemini-1.5-flash', status: 'Live (2.1.0+)' },
  { name: 'AWS Bedrock', models: 'Claude 3 series, Llama, Mistral, Titan, Cohere', status: 'Live (2.1.0+)' },
  { name: 'Groq', models: 'Mixtral, Llama series', status: 'Live' },
  { name: 'Together AI', models: 'Open-source model portfolio', status: 'Live' },
  { name: 'LLM inference cost estimation', models: 'Full API cost projection at Design time', status: 'Roadmap 2027' },
]

export default function CostIntelligencePage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className="container">
          <Link href="/platform" className={styles.breadcrumbLink}>← Platform</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>Cost Intelligence Layer</span>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">SpanForge Platform — Cost Intelligence</span>
          <h1 className={styles.frameworkHeroH1}>Cost Intelligence Layer</h1>
          <p className={styles.frameworkHeroSub}>
            Cost governance unified across two dimensions: design-time infrastructure cost
            estimation before any resource is committed, and runtime token cost tracking in
            production via the RFC-0001 SpanForge standard. Cost is not a report — it is a
            governed signal at every stage of the AI lifecycle.
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className={styles.contentSection} aria-labelledby="what-heading">
        <div className={`container ${styles.contentInner}`}>
          <span className="eyebrow">The problem it solves</span>
          <h2 id="what-heading" className={styles.sectionH2}>
            Cost governed at both ends of the lifecycle
          </h2>
          <p className={styles.summaryPara}>
            Enterprise AI cost overruns happen at two distinct points. At Design time:
            infrastructure and model spend is committed without a cost estimate, and the first
            bill arrives after architecture decisions have already locked in. At production scale:
            token consumption accumulates across thousands of agent runs with no per-call
            attribution, no budget enforcement, and no audit trail regulators can verify.
          </p>
          <p className={styles.summaryPara}>
            The SpanForge Cost Intelligence Layer closes both gaps. Design-time cost estimation
            uses infrastructure configuration inputs to produce scenario-compared estimates before
            any resource is provisioned. Runtime cost tracking uses the SpanForge{' '}
            <code>llm.cost.*</code> namespace to record every token, every call, and every
            session cost — as a cryptographically signed, HMAC-chained event — alongside the
            rest of the compliance audit trail.
          </p>
          <div className={styles.insightBox}>
            <p className={styles.insightText}>
              &ldquo;Cost is a compliance signal, not a finance report. Every token consumed
              is evidence of a decision made — and the Cost Intelligence Layer ensures it is
              recorded, attributed, and auditable.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Core capabilities */}
      <section
        className={styles.gateSection}
        style={{ background: 'var(--charcoal)' }}
        aria-labelledby="capabilities-heading"
      >
        <div className={`container ${styles.gateInner}`}>
          <span className="eyebrow">Core capabilities</span>
          <h2 id="capabilities-heading" className={styles.sectionH2}>
            Six capabilities across the full lifecycle
          </h2>
          <p className={styles.sectionSub}>
            From Design-time infrastructure estimates through production token attribution —
            cost intelligence embedded as a first-class compliance signal.
          </p>
          <div className={styles.dimGrid}>
            {capabilities.map((c) => (
              <div key={c.num} className={styles.dimCard}>
                <p className={styles.dimCardNum}>{c.num}</p>
                <p className={styles.dimCardLabel}>{c.label}</p>
                <p className={styles.dimCardDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SpanForge cost namespace */}
      <section className={styles.contentSection} aria-labelledby="namespace-heading">
        <div className={`container ${styles.contentInner}`} style={{ maxWidth: '960px' }}>
          <span className="eyebrow">RFC-0001 SpanForge — llm.cost.* namespace</span>
          <h2 id="namespace-heading" className={styles.sectionH2}>
            Cost as a compliance event
          </h2>
          <p className={styles.summaryPara}>
            Under the RFC-0001 SpanForge standard, every cost record is structured as a typed
            event with a schema-versioned payload, ULID event ID, UTC timestamp, HMAC signature,
            and audit chain linkage via{' '}
            <code>prev_id</code>. Cost events are emitted automatically when using SpanForge
            auto-instrumentation for OpenAI, Gemini, and Bedrock — or explicitly via the
            SpanForge tracing API.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Event Type</th>
                  <th>Payload</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {namespaceEvents.map((row) => (
                  <tr key={row.event}>
                    <td><code>{row.event}</code></td>
                    <td><code>{row.payload}</code></td>
                    <td>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.sourceNote}>
            All cost events include a <code>pricing_snapshot_date</code> field for auditability.
            Pricing tables are updated continuously and versioned. Events emitted with stale
            pricing are flagged by the SpanForge linter (AO004).
          </p>
        </div>
      </section>

      {/* Provider support */}
      <section
        className={styles.gateSection}
        style={{ background: 'var(--charcoal)' }}
        aria-labelledby="providers-heading"
      >
        <div className={`container ${styles.gateInner}`} style={{ maxWidth: '900px' }}>
          <span className="eyebrow">Provider coverage</span>
          <h2 id="providers-heading" className={styles.sectionH2}>
            Unified pricing across all major providers
          </h2>
          <p className={styles.sectionSub}>
            The <code>spanforge.integrations._pricing</code> module searches all provider
            tables automatically via <code>get_pricing(model_id)</code>. One call returns
            input, output, cached-input, and reasoning token rates for any supported model.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Provider</th>
                  <th>Models</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {providers.map((row) => (
                  <tr key={row.name}>
                    <td><strong>{row.name}</strong></td>
                    <td>{row.models}</td>
                    <td style={{ color: row.status.startsWith('Live') ? 'var(--brand-green, #4ade80)' : 'inherit' }}>
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* T.R.U.S.T. Responsibility connection */}
      <section className={styles.contentSection} aria-labelledby="trust-heading">
        <div className={`container ${styles.contentInner}`}>
          <span className="eyebrow">T.R.U.S.T. Framework — Responsibility</span>
          <h2 id="trust-heading" className={styles.sectionH2}>
            Cost accountability is a governance obligation
          </h2>
          <p className={styles.summaryPara}>
            The T.R.U.S.T. Framework&apos;s Responsibility dimension requires that named,
            accountable owners understand the financial implications of their AI systems before
            committing to them. The Cost Intelligence Layer is the technical mechanism that
            makes this possible — at Design time via infrastructure cost estimation, and in
            production via continuous token cost attribution against the responsible owner&apos;s
            identity in every SpanForge event.
          </p>
          <div className={styles.accelList}>
            <div className={styles.accelItem}>
              <div>
                <p className={styles.accelTitle}>Design phase — Gate Readiness Score™ Cost Readiness</p>
                <p className={styles.accelDesc}>
                  The Cost Intelligence Layer is the required evidence source for the sixth
                  Gate Readiness Score™ dimension. No Design Exit Gate evidence package is
                  complete without a documented infrastructure cost estimate with scenario
                  comparison — demonstrating that the architecture decision was made with
                  cost visibility, not cost blindness.
                </p>
              </div>
            </div>
            <div className={styles.accelItem}>
              <div>
                <p className={styles.accelTitle}>Scale phase — continuous cost audit trail</p>
                <p className={styles.accelDesc}>
                  In production, every token consumed is recorded as a cost event with
                  actor_id attribution, session aggregation, and HMAC chain linkage. The
                  cost audit trail is inseparable from the compliance audit trail — both
                  live in the same RFC-0001 event stream, cryptographically sealed together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.trustCta}>
        <div className={`container ${styles.trustCtaInner}`}>
          <h2 className={styles.trustCtaH2}>Cost-aware from Design. Accountable in production.</h2>
          <p className={styles.trustCtaSub}>
            Start with the Design phase to get your infrastructure cost estimate — or connect
            to the Scale phase for runtime cost tracking via SpanForge.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/platform/design" className="btn-primary">
              Design Phase →
            </Link>
            <Link href="/platform/scale" className="btn-ghost">
              Scale Phase →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
