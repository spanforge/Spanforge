import Link from 'next/link'
import styles from '@/components/agentObsPage.module.css'

export const metadata = {
  title: 'RFC-0001 AGENTOBS Standard — AgentOBS — SpanForge',
  description:
    'The open event-schema standard for observability of agentic AI systems. Defines the event envelope, 10 namespaces, HMAC audit chains, PII redaction, and four conformance profiles.',
}

const NAMESPACES = [
  { key: 'llm.trace.*',    desc: 'Span lifecycle events — agent runs, steps, tool calls, and OpenTelemetry-compatible span trees.' },
  { key: 'llm.cost.*',     desc: 'Token usage and USD cost attribution across models, steps, and sessions.' },
  { key: 'llm.cache.*',    desc: 'Semantic cache hit/miss/write/evict events with cosine-similarity scores.' },
  { key: 'llm.diff.*',     desc: 'Prompt or output diff events for detecting changes between runs.' },
  { key: 'llm.eval.*',     desc: 'Evaluation results — scores, pass/fail status, and evaluator metadata.' },
  { key: 'llm.fence.*',    desc: 'Constraint boundary checks — input/output fenced against defined policies.' },
  { key: 'llm.guard.*',    desc: 'Safety and content-policy checks with provider and outcome metadata.' },
  { key: 'llm.prompt.*',   desc: 'Prompt rendering and template resolution events with variable bindings.' },
  { key: 'llm.redact.*',   desc: 'PII detection and redaction events, including field-level re-identification risk.' },
  { key: 'llm.template.*', desc: 'Template registration, rendering, and version-diff events.' },
]

const ENVELOPE_FIELDS = [
  { field: 'event_id',    type: 'string (ULID)', req: 'Required', desc: 'Globally unique monotonic event identifier.' },
  { field: 'timestamp',  type: 'ISO-8601 UTC',  req: 'Required', desc: 'UTC timestamp with millisecond precision.' },
  { field: 'event_type', type: 'string',        req: 'Required', desc: 'Dot-separated namespace path, e.g. llm.trace.span.' },
  { field: 'source',     type: 'string',        req: 'Required', desc: 'Emitting tool and version, e.g. spanforge@1.0.0.' },
  { field: 'trace_id',   type: 'hex-32',        req: 'Required', desc: 'W3C TraceContext-compatible 128-bit trace identifier.' },
  { field: 'span_id',    type: 'hex-16',        req: 'Required', desc: '64-bit span identifier within the trace.' },
  { field: 'payload',    type: 'object',        req: 'Required', desc: 'Namespace-typed payload object (schema varies by event_type).' },
  { field: 'parent_span_id', type: 'hex-16',   req: 'Optional', desc: 'Parent span_id for nested span trees.' },
  { field: 'tags',       type: 'string[]',      req: 'Optional', desc: 'Arbitrary string tags for filtering and grouping.' },
  { field: 'hmac',       type: 'string',        req: 'Optional', desc: 'HMAC-SHA256 signature for audit chain integrity.' },
]

const CONFORMANCE_PROFILES = [
  {
    name: 'AGENTOBS-Core-1.0',
    desc: 'Structured event envelope with at least llm.trace.* events. The baseline for any compliant implementation.',
  },
  {
    name: 'AGENTOBS-Security-2.0',
    desc: 'Core plus HMAC-SHA256 audit chains. Required for compliance-grade tamper-evident logging.',
  },
  {
    name: 'AGENTOBS-Privacy-2.0',
    desc: 'Core plus PII redaction via llm.redact.* namespace before any event reaches a backend.',
  },
  {
    name: 'AGENTOBS-Enterprise-2.0',
    desc: 'All four profiles combined. Export abstraction, governance primitives, and schema migration tooling included.',
  },
]

export default function StandardPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className="container">
          <Link href="/agentobs" className={styles.breadcrumbLink}>AgentOBS</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
          <span className={styles.breadcrumbCurrent}>RFC-0001 Standard</span>
        </div>
      </div>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroLabel}>Open Standard · Public Review</span>
          <h1 className={styles.h1}>
            RFC-0001 AGENTOBS
          </h1>
          <p className={styles.heroSub}>
            An open event-schema standard for observability of agentic AI systems.
            Defines a structured event envelope, 10 observability namespaces, HMAC
            audit chains, PII redaction, and four conformance profiles — from basic
            AI spans to enterprise compliance.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/agentobs/sdk" className="btn-primary">Python SDK implementation →</Link>
            <Link href="/agentobs/validate" className="btn-ghost">Validate events →</Link>
          </div>
        </div>
      </section>

      {/* What is AGENTOBS */}
      <section className={styles.sectionCharcoal}>
        <div className="container">
          <div className={styles.sectionInner}>
            <span className="eyebrow">Background</span>
            <h2 className={styles.sectionH2}>Why a standard for AI observability?</h2>
            <p className={styles.sectionBody}>
              Agentic AI systems produce observability data that is fundamentally different
              from traditional distributed-systems telemetry. A single agent run can span
              dozens of LLM calls, tool invocations, sub-agent delegations, and reasoning
              steps — each with its own cost, latency, and risk profile.
            </p>
            <p className={styles.sectionBody}>
              Yet today there is no broadly adopted cross-vendor standard for what an
              &ldquo;AI observability event&rdquo; looks like: what fields it carries,
              how it identifies its place in a multi-agent trace tree, how cost is
              attributed across nested steps, how PII is handled before data reaches a
              backend, or how the integrity of an audit trail is guaranteed.
            </p>
            <p className={styles.sectionBody}>
              AGENTOBS fills this gap. It is a community-driven specification (RFC process
              operated by the llm-toolkit community) designed for incremental adoption and
              vendor-neutral integration.
            </p>
          </div>
        </div>
      </section>

      {/* Event Envelope */}
      <section className={styles.sectionDark}>
        <div className="container">
          <span className="eyebrow">Specification</span>
          <h2 className={styles.sectionH2}>The Event Envelope</h2>
          <p className={styles.sectionBody} style={{ maxWidth: '700px' }}>
            Every AGENTOBS event is wrapped in a typed envelope with six required fields
            and four optional fields. The envelope is serialised as JSON and is designed
            to be compatible with OpenTelemetry span context.
          </p>

          <div className={styles.codeBlock}>
            <div className={styles.codeBlockHeader}>
              <span className={styles.codeBlockLang}>python</span>
            </div>
            <pre className={styles.codeBlockBody}>{`from agentobs import Event
from agentobs.namespaces.trace import SpanPayload, TokenUsage, ModelInfo

event = Event(
    event_type="llm.trace.span",
    source="spanforge@1.0.0",
    payload=SpanPayload(
        span_name="summarise_document",
        span_kind="LLM",
        status="ok",
        duration_ms=830,
        token_usage=TokenUsage(prompt=411, completion=128, total=539),
        model_info=ModelInfo(provider="openai", model="gpt-4o"),
    ),
    tags=["prod", "summarisation"],
)`}</pre>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Type</th>
                  <th>Required</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {ENVELOPE_FIELDS.map(f => (
                  <tr key={f.field}>
                    <td>{f.field}</td>
                    <td style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.78rem', color: 'var(--muted)', whiteSpace: 'nowrap' }}>{f.type}</td>
                    <td style={{ fontSize: '0.78rem', color: f.req === 'Required' ? 'var(--red)' : 'var(--mid)' }}>{f.req}</td>
                    <td>{f.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Namespaces */}
      <section className={styles.sectionCharcoal}>
        <div className="container">
          <span className="eyebrow">Namespace Taxonomy</span>
          <h2 className={styles.sectionH2}>10 observability domains.</h2>
          <p className={styles.sectionBody} style={{ maxWidth: '700px' }}>
            AGENTOBS defines 36 event types across 10 namespaces (plus one security domain
            — audit). Every event type is dot-separated, typed, and has a versioned JSON
            Schema payload definition.
          </p>
          <div className={styles.namespaceList}>
            {NAMESPACES.map(ns => (
              <div key={ns.key} className={styles.namespaceRow}>
                <span className={styles.namespaceKey}>{ns.key}</span>
                <span className={styles.namespaceDesc}>{ns.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HMAC Audit Chains */}
      <section className={styles.sectionDark}>
        <div className="container">
          <div className={styles.sectionInner}>
            <span className="eyebrow">Security</span>
            <h2 className={styles.sectionH2}>HMAC-SHA256 audit chains.</h2>
            <p className={styles.sectionBody}>
              AGENTOBS includes a tamper-evident audit logging mechanism. Each event can
              carry an HMAC-SHA256 signature that chains it to the preceding event in a
              session. Verifying the chain proves that the event stream has not been
              modified, re-ordered, or truncated after the fact.
            </p>
            <p className={styles.sectionBody}>
              Audit chain integrity can be verified programmatically via the Python SDK
              or on the command line with{' '}
              <code className={styles.inlineCode}>agentobs audit-chain events.jsonl</code>.
            </p>
            <div className={styles.codeBlock}>
              <div className={styles.codeBlockHeader}>
                <span className={styles.codeBlockLang}>bash</span>
              </div>
              <pre className={styles.codeBlockBody}>{`# Verify HMAC signing chain integrity
agentobs audit-chain production-events.jsonl

# Expected output:
# [OK] Chain verified: 1,204 events, no breaks detected.`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Conformance Profiles */}
      <section className={styles.sectionCharcoal}>
        <div className="container">
          <span className="eyebrow">Adoption</span>
          <h2 className={styles.sectionH2}>Four conformance profiles.</h2>
          <p className={styles.sectionBody} style={{ maxWidth: '680px' }}>
            AGENTOBS is designed for incremental adoption. Start with the Core profile and
            layer in Security, Privacy, and Enterprise capabilities as your requirements grow.
          </p>
          <div className={styles.cardsGrid}>
            {CONFORMANCE_PROFILES.map(p => (
              <div key={p.name} className={styles.card}>
                <span className={styles.cardLabel}>Conformance Profile</span>
                <h3 className={styles.cardTitle}>{p.name}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schema versions */}
      <section className={styles.sectionDark}>
        <div className="container">
          <div className={styles.sectionInner}>
            <span className="eyebrow">Versioning</span>
            <h2 className={styles.sectionH2}>Schema versions.</h2>
            <p className={styles.sectionBody}>
              The AGENTOBS schema is versioned using semantic versioning. The v1.0 schema
              is the stable baseline; v2.0 extends it with additional namespace event types
              and governance primitives. Both schemas are published as JSON Schema Draft 2020-12
              and can be exported via the validation CLI.
            </p>
            <div className={styles.codeBlock}>
              <div className={styles.codeBlockHeader}>
                <span className={styles.codeBlockLang}>bash</span>
              </div>
              <pre className={styles.codeBlockBody}>{`# Export the current schema (v2.0 by default)
agentobs-validate --export-schema > agentobs-schema.json

# Pin validation to a specific schema version
agentobs-validate events.jsonl --schema-version 1.0`}</pre>
            </div>

            <div className={styles.tableWrap} style={{ marginTop: '2rem' }}>
              <table className={styles.table}>
                <thead>
                  <tr><th>Version</th><th>Status</th><th>Notes</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>v1.0</td>
                    <td style={{ color: 'var(--muted)' }}>Stable</td>
                    <td>Original envelope + trace, cost, cache, eval, guard namespaces.</td>
                  </tr>
                  <tr>
                    <td>v2.0</td>
                    <td style={{ color: 'var(--red)' }}>Current</td>
                    <td>Full 10-namespace taxonomy, HMAC chains, PII redaction, governance primitives.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <span className="eyebrow">Get started</span>
          <h2 className={styles.ctaH2}>Implement the standard.</h2>
          <p className={styles.ctaSub}>
            The Python SDK is the reference implementation. Zero required dependencies,
            pip-installable, covers all 10 namespaces.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/agentobs/sdk" className="btn-primary">Python SDK →</Link>
            <Link href="/agentobs/validate" className="btn-ghost">Validate your events →</Link>
          </div>
        </div>
      </section>

      {/* Page nav */}
      <div className={styles.pageNav}>
        <div className={`container ${styles.pageNavInner}`}>
          <Link href="/agentobs" className={styles.pageNavLink}>← AgentOBS overview</Link>
          <Link href="/agentobs/sdk" className={styles.pageNavLink}>Python SDK →</Link>
        </div>
      </div>
    </>
  )
}
