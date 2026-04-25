import Link from 'next/link'
import styles from '@/components/agentObsPage.module.css'

export const metadata = {
  title: 'SpanForge SDK — SpanForge',
  description:
    'The reference implementation of the spanforge standard. pip install spanforge — zero required dependencies, Python 3.9+, all compliance and governance namespaces, CLI, and integrations for OpenAI, Anthropic, Azure OpenAI, LangChain, LangGraph, LlamaIndex, CrewAI, and more.',
}

const EXTRAS = [
  { extra: '[jsonschema]',  desc: 'Enables runtime schema validation of every emitted event against the published JSON Schema.' },
  { extra: '[identity]',    desc: 'SFIdentityClient RS256 JWT support via cryptography; required when connecting to a remote sf-identity service (local mode uses stdlib HS256).' },
  { extra: '[openai]',      desc: 'Auto-instrumentation for the openai Python client — wraps chat completions, embeddings, and responses. Includes unified pricing table covering OpenAI, Anthropic, Groq, and Together AI.' },
  { extra: '[anthropic]',   desc: 'Anthropic Claude SDK integration — instrumented Claude calls with cost normalisation and cross-provider trace context.' },
  { extra: '[gemini]',      desc: 'Google Gemini SDK integration — instrumented Gemini calls with full trace context.' },
  { extra: '[bedrock]',     desc: 'AWS Bedrock integration — instrumented Bedrock model calls.' },
  { extra: '[ollama]',      desc: 'Ollama local model integration — instrumented local inference calls.' },
  { extra: '[groq]',        desc: 'Groq inference integration — high-speed inference tracing with cost normalisation.' },
  { extra: '[together]',    desc: 'Together AI integration — instrumented Together AI model calls.' },
  { extra: '[http]',        desc: 'OTLP/HTTP export and webhook export targets.' },
  { extra: '[pydantic]',    desc: 'Pydantic v2 model support for typed payload validation.' },
  { extra: '[otel]',        desc: 'Full OpenTelemetry SDK integration — exports spans as OTLP proto via gRPC or HTTP.' },
  { extra: '[kafka]',       desc: 'Apache Kafka export backend for streaming event pipelines.' },
  { extra: '[langchain]',   desc: 'LangChain callback handler — instruments chain, tool, and LLM calls automatically.' },
  { extra: '[llamaindex]',  desc: 'LlamaIndex event handler — instruments query, retrieval, and LLM calls.' },
  { extra: '[crewai]',      desc: 'CrewAI task-and-agent lifecycle instrumentation.' },
  { extra: '[presidio]',    desc: 'Presidio NLP PII backend — 15 entity types (SSN, email, phone, AADHAAR, PAN, UK NI, credit card, IBAN, and more) with ≥ 95% true-positive rate and < 0.5% false-positive rate. Requires python -m spacy download en_core_web_lg.' },
  { extra: '[redis]',       desc: 'RedisExporter and RedisBackend for semantic cache.' },
  { extra: '[compliance]',  desc: 'Extended compliance mapping dependencies for framework clause engines.' },
  { extra: '[worm-s3]',     desc: 'Append-only S3 export backend with Object Lock (WORM) for tamper-proof audit storage.' },
  { extra: '[worm-gcs]',    desc: 'Append-only GCS export backend (WORM) for tamper-proof audit storage.' },
  { extra: '[datadog]',     desc: 'Datadog exporter — ships events to DD APM as custom spans.' },
  { extra: '[all]',         desc: 'Installs all optional extras in a single command.' },
]

const CLI_COMMANDS = [
  { cmd: 'check',               desc: 'End-to-end health check: config, event creation, schema validation, export pipeline, trace store.' },
  { cmd: 'check-compat',        desc: 'Validate a batch of events against the v1.0 compatibility checklist (CHK-1 through CHK-5).' },
  { cmd: 'validate',            desc: 'Validate every event in a JSONL file against the published JSON Schema.' },
  { cmd: 'audit-chain',         desc: 'Verify HMAC-SHA256 signing chain integrity of events in a JSONL file.' },
  { cmd: 'compliance',          desc: 'Generate HMAC-signed compliance evidence packages mapped to EU AI Act, GDPR, SOC 2, HIPAA, ISO 42001, and NIST AI RMF.' },
  { cmd: 'compliance readiness',desc: 'Scored pre-production readiness checklist for any supported framework — exits 0 (all pass), 1 (failures), or 2 (unknown framework).' },
  { cmd: 'compliance report',   desc: 'Generate a compliance gap report in JSON, Markdown, or both formats, including remediation steps for every open clause.' },
  { cmd: 'operator inspect',    desc: 'Inspect a trace: review the policy decision, explanation, grounding, scope, RBAC, and lineage evidence.' },
  { cmd: 'operator export',     desc: 'Export a signed operator evidence package from a trace for auditor hand-off.' },
  { cmd: 'audit',               desc: 'Audit chain management: erase, rotate-key, check-health, verify.' },
  { cmd: 'scan',                desc: 'Scan a JSONL file for PII using built-in regex detectors.' },
  { cmd: 'doctor',              desc: 'Health check including live compliance posture: EU AI Act clause pass/total count and gap summary.' },
  { cmd: 'inspect',             desc: 'Pretty-print a single event by event_id from a JSONL file.' },
  { cmd: 'stats',               desc: 'Print event-type counts, trace count, and time range for a JSONL file.' },
  { cmd: 'report',              desc: 'Generate a static HTML trace report from a JSONL events file.' },
  { cmd: 'serve',               desc: 'Start a local HTTP trace viewer at /traces (default port 8888).' },
  { cmd: 'check-consumers',     desc: 'Assert all registered consumers are compatible with the installed schema.' },
]

const INTEGRATIONS = [
  {
    label: 'OpenAI',
    extra: '[openai]',
    desc: 'One-line auto-instrumentation for the openai Python client. Wraps chat completions, embeddings, and the Responses API. Emits llm.trace.span and llm.cost.* events automatically.',
  },
  {
    label: 'Anthropic',
    extra: '[anthropic]',
    desc: 'Anthropic Claude SDK integration with cross-provider cost normalisation and full trace context propagation.',
  },
  {
    label: 'Azure OpenAI',
    extra: '[openai]',
    desc: 'Instance-level instrumentation for Azure-hosted OpenAI clients via spanforge.integrations.azure_openai — token, model, and cost telemetry attached automatically to active spans.',
  },
  {
    label: 'LangChain',
    extra: '[langchain]',
    desc: 'Drop-in callback handler. Instruments chain invocations, tool calls, and LLM calls. Compatible with LangChain v0.1 and v0.2.',
  },
  {
    label: 'LangGraph',
    extra: '[langchain]',
    desc: 'Governance-aware agent graph instrumentation — node-level scope, RBAC, and lineage coverage for agentic workflow tracing.',
  },
  {
    label: 'LlamaIndex',
    extra: '[llamaindex]',
    desc: 'Event handler for the LlamaIndex instrumentation API. Captures query, retrieval, embedding, and LLM events with full trace context.',
  },
  {
    label: 'CrewAI',
    extra: '[crewai]',
    desc: 'Task and agent lifecycle instrumentation for CrewAI. Captures agent run start/end, task assignment, and tool delegation events.',
  },
  {
    label: 'Datadog',
    extra: '[datadog]',
    desc: 'Export spanforge span events as custom Datadog APM spans. Compatible with the Datadog Agent and the dd-trace-py client.',
  },
  {
    label: 'OpenTelemetry',
    extra: '[otel]',
    desc: 'Full OTLP bridge. Converts spanforge span events to OpenTelemetry proto-compatible dicts and exports via gRPC or HTTP. Works with any OTEL-compatible backend.',
  },
]

export default function SdkPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className="container">
          <Link href="/spanforgecore" className={styles.breadcrumbLink}>SpanForge Platform</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
          <span className={styles.breadcrumbCurrent}>SpanForge SDK</span>
        </div>
      </div>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroLabel}>spanforge · Python 3.9+ · In Development</span>
          <h1 className={styles.h1}>
            The reference implementation.
          </h1>
          <p className={styles.heroSub}>
            <code className={styles.inlineCode}>pip install spanforge</code> — zero required
            dependencies, all 15 spanforge namespaces, a full CLI, and integrations for
            OpenAI, LangChain, LlamaIndex, CrewAI, and Datadog.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/spanforgecore/debug" className="btn-primary">Debug tooling →</Link>
            <Link href="/standard" className="btn-ghost">Read the standard →</Link>
          </div>
        </div>
      </section>

      {/* Install */}
      <section className={styles.sectionCharcoal}>
        <div className="container">
          <div className={styles.sectionInner}>
            <span className="eyebrow">Installation</span>
            <h2 className={styles.sectionH2}>Get started in one command.</h2>
            <p className={styles.sectionBody}>
              Install the base SDK with no required dependencies. Add optional extras
              for the integrations and export targets you need.
            </p>

            <div className={styles.installBlock}>
              <span className={styles.installCmd}>
                <span>pip install</span> spanforge
              </span>
            </div>

            <p className={styles.sectionBody} style={{ marginTop: '2rem' }}>
              Verify the installation:
            </p>
            <div className={styles.codeBlock}>
              <div className={styles.codeBlockHeader}>
                <span className={styles.codeBlockLang}>bash</span>
              </div>
              <pre className={styles.codeBlockBody}>{`spanforge --version
# spanforge 1.0.8 [spanforge-Full-2.0]`}</pre>
            </div>

            <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--light)', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
              Optional extras
            </h3>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr><th>Extra</th><th>What it adds</th></tr>
                </thead>
                <tbody>
                  {EXTRAS.map(e => (
                    <tr key={e.extra}>
                      <td>spanforge{e.extra}</td>
                      <td>{e.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Quickstart */}
      <section className={styles.sectionDark}>
        <div className="container">
          <div className={styles.sectionInner}>
            <span className="eyebrow">Quickstart</span>
            <h2 className={styles.sectionH2}>Your first event.</h2>
            <p className={styles.sectionBody}>
              Every event in the spanforge standard is an{' '}
              <code className={styles.inlineCode}>Event</code> object with three required
              arguments: <code className={styles.inlineCode}>event_type</code>,{' '}
              <code className={styles.inlineCode}>source</code>, and{' '}
              <code className={styles.inlineCode}>payload</code>.
            </p>

            <div className={styles.codeBlock}>
              <div className={styles.codeBlockHeader}>
                <span className={styles.codeBlockLang}>python</span>
              </div>
              <pre className={styles.codeBlockBody}>{`from spanforge import Event, EventType

# Minimal event
event = Event(
    event_type=EventType.TRACE_SPAN_COMPLETED,
    source="my-service@0.1.0",
    payload={"span_name": "summarise", "status": "ok"},
)

# Event is ready to emit or inspect
print(event.event_id)    # ULID e.g. 01HZQSN7PQVR2K4M0BXJD3GSTA
print(event.timestamp)   # ISO-8601 UTC
print(event.trace_id)    # W3C-compatible 128-bit hex`}</pre>
            </div>

            <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--light)', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
              Typed namespace payloads
            </h3>
            <p className={styles.sectionBody}>
              Use the typed payload classes from each namespace for full schema validation
              and IDE autocompletion. The classes map 1-to-1 to the published JSON Schema.
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
)

# Export to OTLP
from spanforge.export import OTLPExporter
exporter = OTLPExporter(endpoint="http://localhost:4317")
exporter.export(event)`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className={styles.sectionCharcoal}>
        <div className="container">
          <span className="eyebrow">Integrations</span>
          <h2 className={styles.sectionH2}>Works with your existing stack.</h2>
          <p className={styles.sectionBody} style={{ maxWidth: '680px' }}>
            Install the relevant extra and add one line of code. spanforge events are
            emitted automatically — you retain full compliance instrumentation without rewriting your
            existing code.
          </p>
          <div className={styles.cardsGrid}>
            {INTEGRATIONS.map(i => (
              <div key={i.label} className={styles.card}>
                <span className={styles.cardLabel}>{i.label} · spanforge{i.extra}</span>
                <h3 className={styles.cardTitle}>{i.label}</h3>
                <p className={styles.cardDesc}>{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLI */}
      <section className={styles.sectionDark}>
        <div className="container">
          <span className="eyebrow">Command-line interface</span>
          <h2 className={styles.sectionH2}>Operational tooling included.</h2>
          <p className={styles.sectionBody} style={{ maxWidth: '680px' }}>
            The <code className={styles.inlineCode}>spanforge</code> CLI is installed
            automatically with the SDK. Use it for health checks, schema validation,
            audit-chain verification, compliance evidence generation, and PII scanning.
          </p>
          <div className={styles.cliList}>
            {CLI_COMMANDS.map(c => (
              <div key={c.cmd} className={styles.cliRow}>
                <span className={styles.cliCmd}>spanforge {c.cmd}</span>
                <span className={styles.cliCmdDesc}>{c.desc}</span>
              </div>
            ))}
          </div>

          <div className={styles.codeBlock} style={{ marginTop: '2rem' }}>
            <div className={styles.codeBlockHeader}>
              <span className={styles.codeBlockLang}>bash</span>
            </div>
            <pre className={styles.codeBlockBody}>{`# End-to-end health check
spanforge check
# [1/5] Config ............. OK
# [2/5] Event creation ..... OK
# [3/5] Schema validation .. OK
# [4/5] Export pipeline .... OK
# [5/5] Trace store ........ OK
# All checks passed.

# Validate a JSONL event stream
spanforge validate production-events.jsonl

# Scan for PII before export
spanforge scan production-events.jsonl

# Generate compliance evidence package
spanforge compliance production-events.jsonl --framework eu-ai-act`}</pre>
          </div>
        </div>
      </section>

      {/* Linting */}
      <section className={styles.sectionCharcoal}>
        <div className="container">
          <div className={styles.sectionInner}>
            <span className="eyebrow">Code quality</span>
            <h2 className={styles.sectionH2}>SDK instrumentation linter.</h2>
            <p className={styles.sectionBody}>
              The built-in linter parses your Python source with{' '}
              <code className={styles.inlineCode}>ast</code> and runs five checks to
              catch common instrumentation mistakes before they reach production.
              Integrates natively with flake8 and ruff.
            </p>
            <div className={styles.namespaceList}>
              {[
                { key: 'AO001', desc: 'Event() missing one of event_type, source, or payload.' },
                { key: 'AO002', desc: 'Bare str literal passed to actor_id, session_id, or user_id — wrap in Redactable().' },
                { key: 'AO003', desc: 'event_type= string not present in registered EventType values.' },
                { key: 'AO004', desc: 'LLM provider API call outside a tracer.span() / agent_run() context.' },
                { key: 'AO005', desc: 'emit_span / emit_agent_* called outside agent_run() / agent_step() context.' },
              ].map(l => (
                <div key={l.key} className={styles.namespaceRow}>
                  <span className={styles.namespaceKey}>{l.key}</span>
                  <span className={styles.namespaceDesc}>{l.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <span className="eyebrow">Next steps</span>
          <h2 className={styles.ctaH2}>Inspect. Validate. Ship.</h2>
          <p className={styles.ctaSub}>
            Use SpanForge Debug to inspect and replay compliance traces, and SpanForge Validate to
            enforce schema compliance in your CI pipeline.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/spanforgecore/debug" className="btn-primary">SpanForge Debug →</Link>
            <Link href="/spanforgecore/validate" className="btn-ghost">SpanForge Validate →</Link>
          </div>
        </div>
      </section>

      {/* Page nav */}
      <div className={styles.pageNav}>
        <div className={`container ${styles.pageNavInner}`}>
          <Link href="/standard" className={styles.pageNavLink}>← RFC-0001 Standard</Link>
          <Link href="/spanforgecore/debug" className={styles.pageNavLink}>SpanForge Debug →</Link>
        </div>
      </div>
    </>
  )
}
