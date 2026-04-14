import Link from 'next/link'
import styles from '@/components/agentObsPage.module.css'

export const metadata = {
  title: 'SpanForge SDK — SpanForge',
  description:
    'The reference implementation of the spanforge standard. pip install spanforge — zero required dependencies, Python 3.9+, all 15 compliance and governance namespaces, CLI, and integrations for OpenAI, LangChain, LlamaIndex, CrewAI, and Datadog.',
}

const EXTRAS = [
  { extra: '[jsonschema]',  desc: 'Enables runtime schema validation of every emitted event against the published JSON Schema.' },
  { extra: '[openai]',      desc: 'Auto-instrumentation for the openai Python client — wraps chat completions, embeddings, and responses.' },
  { extra: '[http]',        desc: 'OTLP/HTTP export and webhook export targets.' },
  { extra: '[pydantic]',    desc: 'Pydantic v2 model support for typed payload validation.' },
  { extra: '[otel]',        desc: 'Full OpenTelemetry SDK integration — exports spans as OTLP proto via grpc or http.' },
  { extra: '[kafka]',       desc: 'Apache Kafka export backend for streaming event pipelines.' },
  { extra: '[langchain]',   desc: 'LangChain callback handler — instruments chain, tool, and LLM calls automatically.' },
  { extra: '[llamaindex]',  desc: 'LlamaIndex event handler — instruments query, retrieval, and LLM calls.' },
  { extra: '[crewai]',      desc: 'CrewAI task-and-agent lifecycle instrumentation.' },
  { extra: '[datadog]',     desc: 'Datadog exporter — ships events to DD APM as custom spans.' },
  { extra: '[all]',         desc: 'Installs all optional extras in a single command.' },
]

const CLI_COMMANDS = [
  { cmd: 'check',           desc: 'End-to-end health check: config, event creation, schema validation, export pipeline, trace store.' },
  { cmd: 'check-compat',    desc: 'Validate a batch of events against the v1.0 compatibility checklist (CHK-1 through CHK-5).' },
  { cmd: 'validate',        desc: 'Validate every event in a JSONL file against the published JSON Schema.' },
  { cmd: 'audit-chain',     desc: 'Verify HMAC-SHA256 signing chain integrity of events in a JSONL file.' },
  { cmd: 'compliance',      desc: 'Generate HMAC-signed compliance evidence packages mapped to EU AI Act, GDPR, SOC 2, ISO 42001, and NIST AI RMF.' },
  { cmd: 'audit',           desc: 'Audit chain management: erase, rotate-key, check-health, verify.' },
  { cmd: 'scan',            desc: 'Scan a JSONL file for PII using built-in regex detectors.' },
  { cmd: 'inspect',         desc: 'Pretty-print a single event by event_id from a JSONL file.' },
  { cmd: 'stats',           desc: 'Print event-type counts, trace count, and time range for a JSONL file.' },
  { cmd: 'report',          desc: 'Generate a static HTML trace report from a JSONL events file.' },
  { cmd: 'serve',           desc: 'Start a local HTTP trace viewer at /traces (default port 8888).' },
  { cmd: 'check-consumers', desc: 'Assert all registered consumers are compatible with the installed schema.' },
]

const INTEGRATIONS = [
  {
    label: 'OpenAI',
    extra: '[openai]',
    desc: 'One-line auto-instrumentation for the openai Python client. Wraps chat completions, embeddings, and the Responses API. Emits llm.trace.span and llm.cost.* events automatically.',
  },
  {
    label: 'LangChain',
    extra: '[langchain]',
    desc: 'Drop-in callback handler. Instruments chain invocations, tool calls, and LLM calls. Compatible with LangChain v0.1 and v0.2.',
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
          <Link href="/agentobs" className={styles.breadcrumbLink}>SpanForge Platform</Link>
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
            <Link href="/agentobs/debug" className="btn-primary">Debug tooling →</Link>
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
            <Link href="/agentobs/debug" className="btn-primary">SpanForge Debug →</Link>
            <Link href="/agentobs/validate" className="btn-ghost">SpanForge Validate →</Link>
          </div>
        </div>
      </section>

      {/* Page nav */}
      <div className={styles.pageNav}>
        <div className={`container ${styles.pageNavInner}`}>
          <Link href="/standard" className={styles.pageNavLink}>← RFC-0001 Standard</Link>
          <Link href="/agentobs/debug" className={styles.pageNavLink}>SpanForge Debug →</Link>
        </div>
      </div>
    </>
  )
}
