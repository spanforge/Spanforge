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
  { icon: '🔗', title: 'Framework Integrations', body: 'First-class adapters for LangChain, LlamaIndex, OpenAI, Anthropic, Groq, Ollama, and Together — plug in with one line of code.' },
]

const modules = [
  { name: 'tracium.event', desc: 'The core Event envelope', who: 'Everyone' },
  { name: 'tracium.types', desc: 'All built-in event type strings', who: 'Everyone' },
  { name: 'tracium.config', desc: 'configure() and get_config()', who: 'Everyone' },
  { name: 'tracium._span', desc: 'Span, AgentRun, AgentStep context managers', who: 'App developers' },
  { name: 'tracium._cli', desc: '8 CLI sub-commands', who: 'DevOps / CI' },
  { name: 'tracium.redact', desc: 'PII detection, sensitivity levels, redaction policies', who: 'Data privacy / GDPR' },
  { name: 'tracium.signing', desc: 'HMAC-SHA256 signing and tamper-evident audit chains', who: 'Security / compliance' },
  { name: 'tracium.compliance', desc: 'Programmatic v2.0 compatibility checks', who: 'Platform / DevOps' },
  { name: 'tracium.export', desc: 'JSONL, Webhook, OTLP, Datadog, Grafana Loki', who: 'Infra / observability' },
  { name: 'tracium.stream', desc: 'Fan-out router + Kafka source', who: 'Platform engineers' },
  { name: 'tracium.integrations', desc: 'LangChain, LlamaIndex, OpenAI, Anthropic, Groq, Ollama', who: 'App developers' },
  { name: 'tracium.namespaces', desc: 'Typed payload dataclasses for all 10 namespaces', who: 'Tool authors' },
  { name: 'tracium.governance', desc: 'Policy-based event gating', who: 'Platform / compliance' },
]

const namespaces = [
  { prefix: 'llm.trace.*', cls: 'SpanPayload', desc: 'Model calls, agent runs, reasoning steps (frozen v2)' },
  { prefix: 'llm.cost.*', cls: 'CostPayload', desc: 'Per-call cost in USD with category breakdowns' },
  { prefix: 'llm.cache.*', cls: 'CachePayload', desc: 'Cache hit/miss, backend, TTL, key hash' },
  { prefix: 'llm.eval.*', cls: 'EvalScenarioPayload', desc: 'Quality scores, labels, evaluator identity' },
  { prefix: 'llm.guard.*', cls: 'GuardPayload', desc: 'Safety classifier output, block decisions' },
  { prefix: 'llm.fence.*', cls: 'FencePayload', desc: 'Topic constraints, allow/block lists, retry loops' },
  { prefix: 'llm.prompt.*', cls: 'PromptPayload', desc: 'Prompt template version, rendered text' },
  { prefix: 'llm.redact.*', cls: 'RedactPayload', desc: 'PII audit record — what was found and removed' },
  { prefix: 'llm.diff.*', cls: 'DiffPayload', desc: 'Prompt/response delta between two events' },
  { prefix: 'llm.template.*', cls: 'TemplatePayload', desc: 'Template registry metadata, variable bindings' },
  { prefix: 'llm.audit.*', cls: 'AuditPayload', desc: 'HMAC audit chain events, key rotation' },
]

const profiles = [
  { name: 'Core', label: 'AGENTOBS-Core-2.0', color: '#0d9f75', desc: 'Standardised AI spans, token usage, cost attribution, and agent run telemetry.' },
  { name: 'Security', label: 'AGENTOBS-Security-2.0', color: '#b85c00', desc: 'Tamper-evident HMAC-SHA256 audit chains with key rotation and constant-time verification.' },
  { name: 'Privacy', label: 'AGENTOBS-Privacy-2.0', color: '#7c3aed', desc: 'Field-level PII controls with Redactable types, five sensitivity levels, and threshold policies.' },
  { name: 'Enterprise', label: 'AGENTOBS-Enterprise-2.0', color: '#3d5af1', desc: 'Schema lifecycle governance, deprecation registries, consumer compatibility, CLI compliance checks.' },
]

export default function AgentObsHome() {
  usePageTitle('AgentOBS — Reference SDK for AGENTOBS RFC-0001 · Spanforge')
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
          <div className={styles.stat}><span>v1.0.2</span>Latest</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><span>1,837</span>Tests</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><span>96%</span>Coverage</div>
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
          <span className={styles.installComment}># Install from PyPI (import name: tracium)</span>
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
          <h2 className={styles.sectionTitle}>Think of it as a universal receipt for your AI app</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 720, marginBottom: '2rem', lineHeight: 1.8 }}>
            <strong style={{ color: 'var(--text)' }}>AgentOBS</strong> (<code>tracium</code>) is the reference implementation of{' '}
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
          <h2 className={styles.sectionTitle}>Trace your first LLM call in seconds</h2>
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span className={styles.codeTitle}>python</span>
              <div className={styles.codeDots}><span /><span /><span /></div>
            </div>
            <pre className={styles.codePre}><code>{`import tracium

tracium.configure(exporter="console", service_name="my-agent")

with tracium.span("call-llm") as span:
    span.set_model(model="gpt-4o", system="openai")
    result = call_llm(prompt)
    span.set_token_usage(input=512, output=128, total=640)
    span.set_status("ok")`}</code></pre>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── CONFORMANCE PROFILES ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Conformance Profiles</p>
          <h2 className={styles.sectionTitle}>Four profiles for incremental adoption</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 620, marginBottom: '2rem', lineHeight: 1.75 }}>
            Profiles are cumulative — each higher profile includes all requirements of the profiles below it.
            Adopt only what you need today.
          </p>
          <div className={styles.providerGrid} style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
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
          <h2 className={styles.sectionTitle}>What's inside the box</h2>
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
          <h2 className={styles.sectionTitle}>11 built-in namespaces cover the full lifecycle</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 620, marginBottom: '2rem' }}>
            Every event carries a typed payload whose shape is defined by its namespace.
            All standard event types follow <code>llm.&lt;namespace&gt;.&lt;entity&gt;.&lt;action&gt;</code>.
          </p>
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
      </section>

      <hr className="divider" />

      {/* ── DOCS NAV ── */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Documentation</p>
          <h2 className={styles.sectionTitle}>Everything you need</h2>
          <div className={styles.docGrid}>
            {[
              { path: 'quickstart', label: 'Quickstart', desc: 'Create your first event, sign a chain, and export — in 5 minutes' },
              { path: 'installation', label: 'Installation', desc: 'Install from PyPI, optional extras, and dev setup' },
              { path: 'user-guide-events', label: 'User Guide: Events', desc: 'Event envelope, event types, serialisation, validation, ULIDs' },
              { path: 'user-guide-signing', label: 'User Guide: Signing', desc: 'Sign events, build tamper-evident chains, detect tampering' },
              { path: 'user-guide-redaction', label: 'User Guide: Redaction', desc: 'Sensitivity levels, redaction policies, PII detection' },
              { path: 'user-guide-export', label: 'User Guide: Export', desc: 'JSONL, Webhook, OTLP, Datadog, Grafana Loki' },
              { path: 'user-guide-governance', label: 'User Guide: Governance', desc: 'Block/warn event types, consumer registry, deprecations' },
              { path: 'user-guide-migration', label: 'Migration Guide', desc: 'v2 migration roadmap, deprecation records, v1_to_v2() scaffold' },
              { path: 'api-index', label: 'API Reference', desc: 'Full API reference for every module' },
              { path: 'ns-index', label: 'Namespace Catalogue', desc: 'Typed payload dataclasses for all 11 namespaces' },
              { path: 'cli', label: 'CLI Reference', desc: '8 tracium sub-commands — validate, audit, inspect, stats' },
              { path: 'schema', label: 'JSON Schema', desc: 'The canonical AGENTOBS event envelope schema v1.0' },
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
