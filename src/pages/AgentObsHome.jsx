import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import styles from './ProductHome.module.css'

const features = [
  { icon: '📐', title: 'Structured Event Envelopes', body: 'Fixed-structure containers with typed fields, ULID identifiers, and W3C TraceContext-compatible trace/span IDs — uniform across every AI observability event.' },
  { icon: '🌳', title: 'Agent Span Hierarchy', body: 'First-class representation of multi-step agent runs, tool invocations, reasoning steps, and decision points as an OpenTelemetry-compatible span tree.' },
  { icon: '🔐', title: 'HMAC Audit Chains', body: 'Tamper-evident, compliance-grade event integrity using HMAC-SHA256 signing with prev_id linkage — detects modification, deletion, insertion, and reordering.' },
  { icon: '🛡️', title: 'PII Redaction Framework', body: 'Field-level privacy annotations with five sensitivity levels (LOW → PHI) and threshold-based redaction policies enforced before any data reaches a backend.' },
  { icon: '📡', title: 'OTel-Compatible Export', body: 'Vendor-neutral export to OTLP, Datadog, Grafana Loki, webhooks, and JSONL — with direct mapping to OpenTelemetry gen_ai.* semantic conventions.' },
  { icon: '🔗', title: 'Framework Integrations', body: 'First-class adapters for LangChain, LlamaIndex, OpenAI, Anthropic, Groq, Ollama, Together, and CrewAI — plug in with one line of code.' },
  { icon: '🔭', title: 'High-Level Trace API', body: 'start_trace() and the Trace object give you a concise, async-safe entry point — accumulate child spans, inspect the tree, and render a self-contained HTML Gantt timeline with no extra setup.' },
  { icon: '💰', title: 'Cost & Cache Intelligence', body: 'SemanticCache deduplicates redundant LLM calls via cosine-similarity matching; CostTracker and BudgetMonitor alert on spend before it escalates — with full observability events at every step.' },
]

const modules = [
  { name: 'agentobs.event', desc: 'The core Event envelope — the one structure all tools share', who: 'Everyone' },
  { name: 'agentobs.types', desc: 'EventType enum and all built-in event type strings', who: 'Everyone' },
  { name: 'agentobs.config', desc: 'configure() and get_config() — global SDK configuration', who: 'Everyone' },
  { name: 'agentobs._span', desc: 'Span, AgentRun, AgentStep context managers — async with, add_event(), set_timeout_deadline(); contextvars-based async/thread safety', who: 'App developers' },
  { name: 'agentobs._trace', desc: 'Trace object and start_trace() — high-level tracing entry point; accumulates all child spans', who: 'App developers' },
  { name: 'agentobs.debug', desc: 'print_tree(), summary(), visualize() — terminal tree, stats dict, and self-contained HTML Gantt timeline', who: 'App developers' },
  { name: 'agentobs.metrics', desc: 'aggregate() and MetricsSummary — compute success rates, latency percentiles, token totals, and cost breakdowns from any Iterable[Event]', who: 'Data / analytics' },
  { name: 'agentobs._store', desc: 'TraceStore — in-memory ring buffer; get_trace(), list_tool_calls(), list_llm_calls()', who: 'Platform / tooling' },
  { name: 'agentobs._hooks', desc: 'HookRegistry / hooks — global span lifecycle hooks: @on_llm_call, @on_tool_call, @on_agent_start, @on_agent_end (sync and async variants)', who: 'App developers' },
  { name: 'agentobs._cli', desc: '9 CLI sub-commands: check, check-compat, validate, audit-chain, inspect, stats, list-deprecated, migration-roadmap, check-consumers', who: 'DevOps / CI' },
  { name: 'agentobs.signing', desc: 'HMAC-SHA256 event signing, AuditStream, and tamper-evident chain verification', who: 'Security / compliance' },
  { name: 'agentobs.redact', desc: 'Redactable types, five sensitivity levels, RedactionPolicy — PII redaction before export', who: 'Data privacy / GDPR' },
  { name: 'agentobs.compliance', desc: 'Programmatic v2.0 compatibility checks — no pytest required', who: 'Platform / DevOps' },
  { name: 'agentobs.export', desc: 'Async export backends: JSONL, Webhook, OTLP, Datadog APM, Grafana Loki', who: 'Infra / observability' },
  { name: 'agentobs.exporters', desc: 'Sync exporters — SyncJSONLExporter and SyncConsoleExporter for non-async code', who: 'App developers' },
  { name: 'agentobs.stream', desc: 'EventStream fan-out router — one drain() reaches multiple backends; Kafka source via from_kafka()', who: 'Platform engineers' },
  { name: 'agentobs.validate', desc: 'JSON Schema validation against the published v2.0 schema', who: 'Everyone' },
  { name: 'agentobs.migrate', desc: 'v1→v2 migration roadmap, SunsetPolicy, DeprecationRecord', who: 'Platform / DevOps' },
  { name: 'agentobs.consumer', desc: 'ConsumerRegistry — declare schema-namespace dependencies and fail fast at startup if version requirements are not met', who: 'Platform / DevOps' },
  { name: 'agentobs.governance', desc: 'Policy-based event gating, GovernanceViolationError', who: 'Platform / compliance' },
  { name: 'agentobs.integrations', desc: 'Adapters for OpenAI, LangChain, LlamaIndex, Anthropic, Groq, Ollama, Together, and CrewAI (AgentOBSCrewAIHandler + patch())', who: 'App developers' },
  { name: 'agentobs.namespaces', desc: 'Typed payload dataclasses for all 11 built-in event namespaces', who: 'Tool authors' },
  { name: 'agentobs.testing', desc: 'MockExporter, capture_events(), assert_event_schema_valid(), trace_store() — unit test helpers without real exporters', who: 'Everyone' },
  { name: 'agentobs.auto', desc: 'Integration auto-discovery: setup() auto-patches every installed LLM integration; teardown() cleanly unpatches all', who: 'App developers' },
  { name: 'agentobs.trace', desc: '@trace() decorator + SpanOTLPBridge — wraps sync/async functions, auto-emits span start/end events with timing and error capture', who: 'App developers' },
  { name: 'agentobs.cost', desc: 'CostTracker, BudgetMonitor, @budget_alert, emit_cost_event(), cost_summary() — track and alert on token spend across a session', who: 'App developers / FinOps' },
  { name: 'agentobs.inspect', desc: 'InspectorSession context manager + inspect_trace() — intercept and record tool call arguments, results, latency and errors within a trace', who: 'Platform / debugging' },
  { name: 'agentobs.toolsmith', desc: '@tool decorator + ToolRegistry — register functions as typed tools; build_openai_schema() / build_anthropic_schema() render JSON schemas', who: 'App developers' },
  { name: 'agentobs.retry', desc: '@retry with exponential back-off, FallbackChain, CircuitBreaker, CostAwareRouter — resilient LLM provider routing with observability events', who: 'App developers / SREs' },
  { name: 'agentobs.cache', desc: 'SemanticCache + @cached decorator — deduplicate LLM calls via cosine-similarity; InMemoryBackend, SQLiteBackend, RedisBackend; emits llm.cache.* events', who: 'App developers / FinOps' },
  { name: 'agentobs.lint', desc: 'run_checks() — AST-based instrumentation linter; five AO-codes (AO001–AO005); flake8 plugin; python -m agentobs.lint CLI', who: 'All teams / CI' },
  { name: 'agentobs.models', desc: 'Optional Pydantic v2 models for teams that prefer validated schemas', who: 'API / backend teams' },
]

const namespaces = [
  { prefix: 'llm.trace.*', cls: 'SpanPayload, AgentRunPayload', desc: 'Model calls, agent runs, reasoning steps (frozen v2 schema)' },
  { prefix: 'llm.cost.*', cls: 'CostPayload', desc: 'Per-call and per-session cost in USD with category breakdowns' },
  { prefix: 'llm.cache.*', cls: 'CachePayload', desc: 'Cache hit/miss, backend, TTL, key hash' },
  { prefix: 'llm.eval.*', cls: 'EvalScenarioPayload', desc: 'Quality scores, labels, evaluator identity' },
  { prefix: 'llm.guard.*', cls: 'GuardPayload', desc: 'Safety classifier output, block decisions' },
  { prefix: 'llm.fence.*', cls: 'FencePayload', desc: 'Topic constraints, allow/block lists, retry loops' },
  { prefix: 'llm.prompt.*', cls: 'PromptPayload', desc: 'Prompt template version, rendered text' },
  { prefix: 'llm.redact.*', cls: 'RedactPayload', desc: 'PII audit record — what was found and removed' },
  { prefix: 'llm.diff.*', cls: 'DiffPayload', desc: 'Prompt/response delta between two events' },
  { prefix: 'llm.template.*', cls: 'TemplatePayload', desc: 'Template registry metadata, variable bindings' },
  { prefix: 'llm.audit.*', cls: 'AuditPayload', desc: 'HMAC audit chain events, key rotation records' },
]

const profiles = [
  { name: 'Core', label: 'AGENTOBS-Core-2.0', color: '#0d9f75', desc: 'Standardised AI spans, token usage, cost attribution, and agent run telemetry.' },
  { name: 'Security', label: 'AGENTOBS-Security-2.0', color: '#b85c00', desc: 'Tamper-evident HMAC-SHA256 audit chains with key rotation and constant-time verification.' },
  { name: 'Privacy', label: 'AGENTOBS-Privacy-2.0', color: '#7c3aed', desc: 'Field-level PII controls with Redactable types, five sensitivity levels, and threshold policies.' },
  { name: 'Enterprise', label: 'AGENTOBS-Enterprise-2.0', color: '#3d5af1', desc: 'Schema lifecycle governance, deprecation registries, consumer compatibility, CLI compliance checks.' },
]

export default function AgentObsHome() {
  usePageTitle('AgentOBS 1.0.8 — Reference SDK for AGENTOBS RFC-0001 · Spanforge')
  return (
    <div className={styles.page}>
      <Nav />

      {/* ── HERO ── */}
      <header className={styles.hero} style={{ background: 'linear-gradient(180deg, #f0fdf8 0%, #ffffff 100%)' }}>
        <div className={styles.heroGlow} style={{ background: 'radial-gradient(ellipse, rgba(13,159,117,.12) 0%, transparent 70%)' }} />
        <div className={styles.heroCrumb}>
          <Link to="/" className={styles.breadcrumb}>Spanforge</Link>
          <span className={styles.sep}>/</span>
          <span className={styles.breadcrumbCurrent}>AgentOBS</span>
        </div>
        <h1 className={styles.heroTitle}>
          <span className={styles.titleMono}>AgentOBS</span>
        </h1>
        <p className={styles.heroTagline}>The reference implementation of the AGENTOBS Standard.</p>
        <p className={styles.heroSub}>
          A lightweight Python SDK that gives your AI applications a common, structured way to
          record, sign, redact, and export events — with zero mandatory dependencies.
        </p>

        <div className={styles.heroStats}>
          <div className={styles.stat}><span>1.0.8</span>Latest</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><span>3,032</span>Tests</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><span>93%</span>Coverage</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><span>Zero</span>Dependencies</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><span>Python 3.9+</span>Requirement</div>
        </div>

        <div className={styles.heroActions}>
          <Link to="/sdk/docs/quickstart" className="btn btn-primary">Quick Start →</Link>
          <Link to="/sdk/docs/installation" className="btn btn-secondary">Installation</Link>
          <Link to="/sdk/docs/api-index" className="btn btn-secondary">API Reference</Link>
          <a href="https://github.com/veerarag1973/agentobs" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub ↗</a>
        </div>

        <div className={styles.installBox}>
          <span className={styles.installComment}># Install from PyPI (distribution: agentobs, import: agentobs)</span>
          <div className={styles.installLine}>
            <span className={styles.installPrompt}>$</span>
            <span className={styles.installCmd}>pip install agentobs</span>
          </div>
        </div>
      </header>

      <hr className="divider" />

      {/* ── WHAT IS IT ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">What is AgentOBS?</p>
          <h2 className={styles.sectionTitle}>Understand the standard in one page</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 720, marginBottom: '2rem', lineHeight: 1.8 }}>
            <strong style={{ color: 'var(--text)' }}>AgentOBS</strong> (<code>agentobs</code>) is the reference implementation of{' '}
            <Link to="/standard" style={{ color: 'var(--accent)', fontWeight: 600 }}>RFC-0001 AGENTOBS</Link> — the open event-schema standard for
            observability of agentic AI systems. Every time your app calls a language model, makes a decision,
            redacts private data, or checks a guardrail, this library gives that action a consistent,
            structured record that any tool in your stack can read.
          </p>

          <div className={styles.featGrid}>
            {features.map(f => (
              <div key={f.title} className={styles.featCard}>
                <div className={styles.featIcon}>{f.icon}</div>
                <h4 className={styles.featTitle}>{f.title}</h4>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── QUICK EXAMPLE ── */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Quick Start</p>
          <h2 className={styles.sectionTitle}>Trace your first agent run in minutes</h2>
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span className={styles.codeTitle}>python</span>
              <div className={styles.codeDots}><span /><span /><span /></div>
            </div>
            <pre className={styles.codePre}><code>{`import agentobs

agentobs.configure(exporter="console", service_name="my-agent")

with agentobs.start_trace("research-agent") as trace:
    with trace.llm_call("gpt-4o", temperature=0.7) as span:
        result = call_llm(prompt)
        span.set_token_usage(input=512, output=200, total=712)
        span.set_status("ok")
        span.add_event("tool_selected", {"name": "web_search"})

    with trace.tool_call("web_search") as span:
        output = run_search(query)
        span.set_status("ok")

# Print an ASCII span tree
trace.print_tree()
# ─ Agent Run: research-agent  [1.2s]
#  ├─ LLM Call: gpt-4o  [0.8s]  in=512 out=200 tokens  $0.0034
#  └─ Tool Call: web_search  [0.4s]  ok

print(trace.summary())
# {'trace_id': '...', 'agent_name': 'research-agent', 'span_count': 3, ...}`}</code></pre>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── CONFORMANCE PROFILES ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Conformance Profiles</p>
          <h2 className={styles.sectionTitle}>Adopt by profile, scale by requirement</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 620, marginBottom: '2rem', lineHeight: 1.75 }}>
            Profiles are cumulative — each higher profile includes all requirements of the profiles below it.
            Adopt only what you need today.
          </p>
          <div className={styles.profilesGrid}>
            {profiles.map(p => (
              <div key={p.name} className={styles.providerCard} style={{ padding: '1.5rem', borderTop: `3px solid ${p.color}` }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', fontWeight: 700, color: p.color, background: `${p.color}18`, border: `1px solid ${p.color}44`, padding: '0.2rem 0.5rem', borderRadius: 4, display: 'inline-block', marginBottom: '0.6rem' }}>{p.label}</div>
                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text)', marginBottom: '0.5rem' }}>{p.name}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── MODULES ── */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Modules</p>
          <h2 className={styles.sectionTitle}>Use focused modules without platform lock-in</h2>
          <div className={styles.moduleGrid} style={{ marginTop: '2rem' }}>
            <div className={`${styles.moduleRow} ${styles.moduleRowHeader}`}>
              <div className={styles.moduleCell}>Module</div>
              <div className={styles.moduleCell}>What it does</div>
              <div className={styles.moduleCell}>For whom</div>
            </div>
            {modules.map(m => (
              <div key={m.name} className={styles.moduleRow}>
                <div className={styles.moduleCell}><span className={styles.moduleName}>{m.name}</span></div>
                <div className={`${styles.moduleCell} ${styles.moduleDesc}`}>{m.desc}</div>
                <div className={`${styles.moduleCell} ${styles.moduleFor}`}>{m.who}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── NAMESPACES ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Event Namespaces</p>
          <h2 className={styles.sectionTitle}>Cover the full AI lifecycle with typed payloads</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 620, marginBottom: '2rem' }}>
            Every event carries a typed payload whose shape is defined by its namespace.
            All standard event types follow <code>llm.&lt;namespace&gt;.&lt;entity&gt;.&lt;action&gt;</code>.
          </p>
          <div className={styles.tableWrapper}>
          <table className={styles.nsTable}>
            <thead>
              <tr>
                <th>Namespace prefix</th>
                <th>Dataclass</th>
                <th>What it records</th>
              </tr>
            </thead>
            <tbody>
              {namespaces.map(n => (
                <tr key={n.prefix}>
                  <td><span className={styles.nsName}>{n.prefix}</span></td>
                  <td><span className={styles.nsClass}>{n.cls}</span></td>
                  <td style={{ color: 'var(--muted)', fontSize: '0.86rem' }}>{n.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── DOCS NAV ── */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Documentation</p>
          <h2 className={styles.sectionTitle}>Go from quickstart to governance without context switching</h2>
          <div className={styles.docGrid}>
            {[
              { path: 'quickstart', label: 'Quickstart', desc: 'Trace your first agent run, sign a chain, and export — in 5 minutes' },
              { path: 'installation', label: 'Installation', desc: 'Install from PyPI, optional extras, and dev setup' },
              { path: 'user-guide-events', label: 'User Guide: Events', desc: 'Event envelope, event types, serialisation, validation, ULIDs' },
              { path: 'user-guide-tracing', label: 'User Guide: Tracing', desc: 'Span API, Trace object, start_trace(), async context propagation' },
              { path: 'user-guide-debugging', label: 'User Guide: Debugging', desc: 'print_tree(), visualize(), self-contained HTML Gantt timeline' },
              { path: 'user-guide-metrics', label: 'User Guide: Metrics', desc: 'aggregate(), MetricsSummary, latency percentiles, cost breakdowns' },
              { path: 'user-guide-signing', label: 'User Guide: Signing', desc: 'Sign events, build tamper-evident chains, detect tampering' },
              { path: 'user-guide-redaction', label: 'User Guide: Redaction', desc: 'Sensitivity levels, redaction policies, PII detection' },
              { path: 'user-guide-export', label: 'User Guide: Export', desc: 'JSONL, Webhook, OTLP, Datadog, Grafana Loki' },
              { path: 'user-guide-governance', label: 'User Guide: Governance', desc: 'Block/warn event types, consumer registry, deprecations' },
              { path: 'user-guide-compliance', label: 'User Guide: Compliance', desc: 'Programmatic v2.0 compatibility checks and chain integrity' },
              { path: 'user-guide-migration', label: 'Migration Guide', desc: 'v2 migration roadmap, deprecation records, v1_to_v2() scaffold' },
              { path: 'user-guide-custom-exporters', label: 'Custom Exporters', desc: 'SyncExporter protocol, HTTP exporter, testing patterns' },
              { path: 'api-index', label: 'API Reference', desc: 'Full API reference for every module' },
              { path: 'ns-index', label: 'Namespace Catalogue', desc: 'Typed payload dataclasses for all 11 namespaces' },
              { path: 'cli', label: 'CLI Reference', desc: '9 agentobs sub-commands — validate, audit-chain, inspect, stats, check' },
              { path: 'schema', label: 'JSON Schema', desc: 'The canonical AGENTOBS event envelope schema v2.0' },
              { path: 'changelog', label: 'Changelog', desc: 'Full version history — 1.0.5 through 1.0.8 and 2.0.0' },
            ].map(d => (
              <Link key={d.path} to={`/sdk/docs/${d.path}`} className={styles.docCard}>
                <div className={styles.docCardLabel}>{d.label} →</div>
                <div className={styles.docCardDesc}>{d.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
