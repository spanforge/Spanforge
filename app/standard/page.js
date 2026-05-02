import Link from 'next/link'
import styles from '@/components/agentObsPage.module.css'

export const metadata = {
  title: 'RFC-0001 SPANFORGE Standard - SpanForge',
  description:
    'The open event-schema standard for compliance and governance of agentic AI systems. Defines the event envelope, 15 namespaces, HMAC audit chains, PII redaction, and four conformance profiles. Vendor-neutral and open. SpanForge is the reference implementation.',
}

const NAMESPACES = [
  { key: 'consent.*', desc: 'Consent recording and verification events for data-use consent, withdrawal, and scope checks.' },
  { key: 'hitl.*', desc: 'Human-in-the-loop review events for approvals, outcomes, and escalation records.' },
  { key: 'model_registry.*', desc: 'Model registration and risk-tier enrichment events for model provenance tracking.' },
  { key: 'explanation.*', desc: 'Explainability records and explanation coverage metrics for regulatory accountability.' },
  { key: 'llm.audit.*', desc: 'HMAC audit chain events for key rotation, verification, and tamper detection.' },
  { key: 'llm.trace.*', desc: 'Span lifecycle events for agent runs, steps, tool calls, and OpenTelemetry-compatible trees.' },
  { key: 'llm.cost.*', desc: 'Token usage and USD cost attribution across models, steps, and sessions.' },
  { key: 'llm.cache.*', desc: 'Semantic cache hit, miss, write, and eviction events with similarity scores.' },
  { key: 'llm.diff.*', desc: 'Prompt or output diff events for detecting changes between runs.' },
  { key: 'llm.eval.*', desc: 'Evaluation results with scores, pass-fail status, and evaluator metadata.' },
  { key: 'llm.fence.*', desc: 'Constraint boundary checks for fenced inputs and outputs against policy.' },
  { key: 'llm.guard.*', desc: 'Safety and content-policy checks with provider and outcome metadata.' },
  { key: 'llm.prompt.*', desc: 'Prompt rendering and template resolution events with variable bindings.' },
  { key: 'llm.redact.*', desc: 'PII detection and redaction events, including field-level re-identification risk.' },
  { key: 'llm.template.*', desc: 'Template registration, rendering, and version-diff events.' },
]

const ENVELOPE_FIELDS = [
  { field: 'event_id', type: 'string (ULID)', req: 'Required', desc: 'Globally unique monotonic event identifier.' },
  { field: 'timestamp', type: 'ISO-8601 UTC', req: 'Required', desc: 'UTC timestamp with millisecond precision.' },
  { field: 'event_type', type: 'string', req: 'Required', desc: 'Dot-separated namespace path, for example llm.trace.span.' },
  { field: 'source', type: 'string', req: 'Required', desc: 'Emitting tool and version, for example spanforge@1.0.0.' },
  { field: 'trace_id', type: 'hex-32', req: 'Required', desc: 'W3C TraceContext-compatible 128-bit trace identifier.' },
  { field: 'span_id', type: 'hex-16', req: 'Required', desc: '64-bit span identifier within the trace.' },
  { field: 'payload', type: 'object', req: 'Required', desc: 'Namespace-typed payload object whose schema depends on event_type.' },
  { field: 'parent_span_id', type: 'hex-16', req: 'Optional', desc: 'Parent span_id for nested span trees.' },
  { field: 'tags', type: 'string[]', req: 'Optional', desc: 'Arbitrary string tags for filtering and grouping.' },
  { field: 'hmac', type: 'string', req: 'Optional', desc: 'HMAC-SHA256 signature for audit chain integrity.' },
]

const CONFORMANCE_PROFILES = [
  {
    name: 'spanforge-Core-1.0',
    desc: 'Structured event envelope with at least llm.trace.* events. The baseline for any compliant implementation.',
  },
  {
    name: 'spanforge-Security-2.0',
    desc: 'Core plus HMAC-SHA256 audit chains for tamper-evident logging.',
  },
  {
    name: 'spanforge-Privacy-2.0',
    desc: 'Core plus PII redaction via llm.redact.* before any event reaches a backend.',
  },
  {
    name: 'spanforge-Full-2.0',
    desc: 'All profiles combined with export abstraction, governance primitives, and schema migration tooling.',
  },
]

export default function StandardPage() {
  return (
    <>
      <div className={styles.breadcrumb}>
        <div className="container">
          <Link href="/standards" className={styles.breadcrumbLink}>Standards</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
          <span className={styles.breadcrumbCurrent}>RFC-0001 SPANFORGE</span>
        </div>
      </div>

      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroLabel}>Open standard / vendor-neutral / in development</span>
          <h1 className={styles.h1}>RFC-0001 SPANFORGE</h1>
          <p className={styles.heroSub}>
            An open event-schema standard for observability of agentic AI systems. It defines a structured event
            envelope, 15 compliance and telemetry namespaces, HMAC audit chains, PII redaction, and four
            conformance profiles, from baseline AI spans to full compliance-grade evidence.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/spanforgecore/sdk" className="btn-primary">SpanForge SDK</Link>
            <Link href="/spanforgecore/validate" className="btn-ghost">Validate events</Link>
          </div>
        </div>
      </section>

      <section className={styles.sectionCharcoal}>
        <div className="container">
          <div className={styles.sectionInner}>
            <span className="eyebrow">Background</span>
            <h2 className={styles.sectionH2}>Why a standard for AI compliance?</h2>
            <p className={styles.sectionBody}>
              Agentic AI systems produce compliance evidence that differs materially from traditional distributed
              systems telemetry. A single run can span dozens of LLM calls, tool invocations, sub-agent delegations,
              and reasoning steps, each carrying cost, latency, and regulatory risk.
            </p>
            <p className={styles.sectionBody}>
              There is still no broadly adopted cross-vendor standard for what an AI compliance event should contain,
              how it fits into a multi-agent trace tree, how cost should be attributed across nested steps, how PII
              should be handled before export, or how audit trail integrity is guaranteed.
            </p>
            <p className={styles.sectionBody}>
              RFC-0001 SPANFORGE fills that gap. It is an open specification for compliance and governance of
              agentic AI systems, designed for incremental adoption and vendor-neutral integration across AI
              frameworks and observability backends.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionDark}>
        <div className="container">
          <span className="eyebrow">Specification</span>
          <h2 className={styles.sectionH2}>The event envelope</h2>
          <p className={styles.sectionBody} style={{ maxWidth: '700px' }}>
            Every SPANFORGE event is wrapped in a typed envelope with six required fields and four optional
            fields. The envelope is serialized as JSON and designed to align with OpenTelemetry span context.
          </p>

          <div className={styles.codeBlock}>
            <div className={styles.codeBlockHeader}>
              <span className={styles.codeBlockLang}>python</span>
            </div>
            <pre className={styles.codeBlockBody}>{`from spanforge import Event, EventType
from spanforge.namespaces.trace import SpanPayload, TokenUsage, ModelInfo, GenAISystem

event = Event(
    event_type=EventType.TRACE_SPAN_COMPLETED,
    source="spanforge@1.0.0",
    payload=SpanPayload(
        span_name="summarise_document",
        span_kind="LLM",
        status="ok",
        duration_ms=830,
        token_usage=TokenUsage(input_tokens=411, output_tokens=128, total_tokens=539),
        model_info=ModelInfo(system=GenAISystem.OPENAI, name="gpt-4o"),
    ).to_dict(),
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
                {ENVELOPE_FIELDS.map((field) => (
                  <tr key={field.field}>
                    <td>{field.field}</td>
                    <td style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.78rem', color: 'var(--muted)', whiteSpace: 'nowrap' }}>{field.type}</td>
                    <td style={{ fontSize: '0.78rem', color: field.req === 'Required' ? 'var(--red)' : 'var(--mid)' }}>{field.req}</td>
                    <td>{field.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={styles.sectionCharcoal}>
        <div className="container">
          <span className="eyebrow">Namespace taxonomy</span>
          <h2 className={styles.sectionH2}>15 compliance and governance namespaces.</h2>
          <p className={styles.sectionBody} style={{ maxWidth: '700px' }}>
            RFC-0001 SPANFORGE defines 15 namespaces across two categories: five compliance and governance
            namespaces and ten instrumentation and telemetry namespaces. Every event type is dot-separated,
            typed, and backed by a versioned JSON Schema payload definition.
          </p>
          <div className={styles.namespaceList}>
            {NAMESPACES.map((namespace) => (
              <div key={namespace.key} className={styles.namespaceRow}>
                <span className={styles.namespaceKey}>{namespace.key}</span>
                <span className={styles.namespaceDesc}>{namespace.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionDark}>
        <div className="container">
          <div className={styles.sectionInner}>
            <span className="eyebrow">Security</span>
            <h2 className={styles.sectionH2}>HMAC-SHA256 audit chains.</h2>
            <p className={styles.sectionBody}>
              SPANFORGE includes a tamper-evident audit logging mechanism. Each event can carry an HMAC-SHA256
              signature that chains it to the preceding event in a session. Verifying the chain proves that the
              stream has not been modified, reordered, or truncated after the fact.
            </p>
            <p className={styles.sectionBody}>
              Audit chain integrity can be verified programmatically through the Python SDK or on the command
              line with <code className={styles.inlineCode}>spanforge audit-chain events.jsonl</code>.
            </p>
            <div className={styles.codeBlock}>
              <div className={styles.codeBlockHeader}>
                <span className={styles.codeBlockLang}>bash</span>
              </div>
              <pre className={styles.codeBlockBody}>{`# Verify HMAC signing chain integrity
spanforge audit-chain production-events.jsonl

# Expected output:
# [OK] Chain verified: 1,204 events, no breaks detected.`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionCharcoal}>
        <div className="container">
          <span className="eyebrow">Adoption</span>
          <h2 className={styles.sectionH2}>Four conformance profiles.</h2>
          <p className={styles.sectionBody} style={{ maxWidth: '680px' }}>
            SPANFORGE is designed for incremental adoption. Start with the Core profile and layer in Security,
            Privacy, and Full-Suite capabilities as requirements mature.
          </p>
          <div className={styles.cardsGrid}>
            {CONFORMANCE_PROFILES.map((profile) => (
              <div key={profile.name} className={styles.card}>
                <span className={styles.cardLabel}>Conformance profile</span>
                <h3 className={styles.cardTitle}>{profile.name}</h3>
                <p className={styles.cardDesc}>{profile.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionDark}>
        <div className="container">
          <div className={styles.sectionInner}>
            <span className="eyebrow">Versioning</span>
            <h2 className={styles.sectionH2}>Schema versions.</h2>
            <p className={styles.sectionBody}>
              The SPANFORGE schema uses semantic versioning. Version 1.0 is the stable baseline. Version 2.0
              extends it with additional namespace event types and governance primitives. Both are published
              as JSON Schema Draft 2020-12 and can be exported through the validation CLI.
            </p>
            <div className={styles.codeBlock}>
              <div className={styles.codeBlockHeader}>
                <span className={styles.codeBlockLang}>bash</span>
              </div>
              <pre className={styles.codeBlockBody}>{`# Export the current schema (v2.0 by default)
spanforge validate --export-schema > spanforge-schema.json

# Pin validation to a specific schema version
spanforge validate events.jsonl --schema-version 1.0`}</pre>
            </div>

            <div className={styles.tableWrap} style={{ marginTop: '2rem' }}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Version</th>
                    <th>Status</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>v1.0</td>
                    <td style={{ color: 'var(--muted)' }}>Stable</td>
                    <td>Original envelope plus trace, cost, cache, eval, and guard namespaces.</td>
                  </tr>
                  <tr>
                    <td>v2.0</td>
                    <td style={{ color: 'var(--red)' }}>Current</td>
                    <td>Full 15-namespace taxonomy, HMAC chains, PII redaction, and governance primitives.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <span className="eyebrow">Get started</span>
          <h2 className={styles.ctaH2}>Implement the standard.</h2>
          <p className={styles.ctaSub}>
            The Python SDK is the reference implementation. It is pip-installable, keeps dependencies light,
            and covers all 15 namespaces.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/spanforgecore/sdk" className="btn-primary">Python SDK</Link>
            <Link href="/spanforgecore/validate" className="btn-ghost">Validate your events</Link>
          </div>
        </div>
      </section>

      <div className={styles.pageNav}>
        <div className={`container ${styles.pageNavInner}`}>
          <Link href="/spanforgecore" className={styles.pageNavLink}>Back to SpanForge Platform</Link>
          <Link href="/spanforgecore/sdk" className={styles.pageNavLink}>Continue to Python SDK</Link>
        </div>
      </div>
    </>
  )
}
