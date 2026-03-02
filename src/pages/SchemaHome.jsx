import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import styles from './ProductHome.module.css'

const modules = [
  { name: 'llm_toolkit_schema.event', desc: 'Core Event envelope — the one structure all tools share', who: 'Everyone' },
  { name: 'llm_toolkit_schema.types', desc: 'All built-in event type strings (trace, cost, cache, eval, guard…)', who: 'Everyone' },
  { name: 'llm_toolkit_schema.redact', desc: 'PII detection, sensitivity levels, redaction policies', who: 'Data privacy / GDPR teams' },
  { name: 'llm_toolkit_schema.signing', desc: 'HMAC-SHA256 event signing and tamper-evident audit chains', who: 'Security / compliance teams' },
  { name: 'llm_toolkit_schema.compliance', desc: 'Programmatic v1.0 compatibility checks — no pytest required', who: 'Platform / DevOps teams' },
  { name: 'llm_toolkit_schema.export', desc: 'Ship events to JSONL, HTTP webhooks, OTLP collectors, Datadog, Grafana Loki', who: 'Infra / observability teams' },
  { name: 'llm_toolkit_schema.stream', desc: 'Fan-out router — one drain() call reaches multiple backends; Kafka source', who: 'Platform engineers' },
  { name: 'llm_toolkit_schema.integrations', desc: 'Plug-in adapters for LangChain and LlamaIndex', who: 'App developers' },
]

const namespaces = [
  { prefix: 'llm.trace.*', cls: 'TracePayload', desc: 'Model call — tokens, latency, finish reason (frozen v1)' },
  { prefix: 'llm.cost.*', cls: 'CostPayload', desc: 'Per-call cost in USD' },
  { prefix: 'llm.cache.*', cls: 'CachePayload', desc: 'Cache hit/miss, backend, TTL' },
  { prefix: 'llm.eval.*', cls: 'EvalScenarioPayload', desc: 'Scores, labels, evaluator identity' },
  { prefix: 'llm.guard.*', cls: 'GuardPayload', desc: 'Safety classifier output, block decisions' },
  { prefix: 'llm.fence.*', cls: 'FencePayload', desc: 'Topic constraints, allow/block lists' },
  { prefix: 'llm.prompt.*', cls: 'PromptPayload', desc: 'Prompt template version, rendered text' },
  { prefix: 'llm.redact.*', cls: 'RedactPayload', desc: 'PII audit record — what was found and removed' },
  { prefix: 'llm.diff.*', cls: 'DiffPayload', desc: 'Prompt/response delta between two events' },
  { prefix: 'llm.template.*', cls: 'TemplatePayload', desc: 'Template registry metadata' },
]

const qualities = [
  { icon: '🧪', stat: '1302', label: 'Tests', desc: 'Unit, integration, property-based (Hypothesis), and performance benchmarks.' },
  { icon: '✅', stat: '100%', label: 'Coverage', desc: 'Line and branch coverage — no dead code ships.' },
  { icon: '📦', stat: 'Zero', label: 'Dependencies', desc: 'The entire core runs on Python\'s standard library alone.' },
  { icon: '🏷️', stat: 'Typed', label: 'Type Safety', desc: 'Full py.typed marker — works with mypy and pyright out of the box.' },
]

export default function SchemaHome() {
  usePageTitle('llm-toolkit-schema — LLM Event Schema · Spanforge')
  return (
    <div className={styles.page}>
      <Nav />

      {/* ── HERO ── */}
      <header className={styles.hero} style={{ background: 'linear-gradient(180deg, #f0f3ff 0%, #ffffff 100%)' }}>
        <div className={styles.heroGlow} style={{ background: 'radial-gradient(ellipse, rgba(61,90,241,.1) 0%, transparent 70%)' }} />
        <div className={styles.heroCrumb}>
          <Link to="/" className={styles.breadcrumb}>Spanforge</Link>
          <span className={styles.sep}>/</span>
          <span className={styles.breadcrumbCurrent}>llm-toolkit-schema</span>
        </div>
        <h1 className={styles.heroTitle}>
          <span className={styles.titleMono} style={{ color: 'var(--accent2)' }}>llm-toolkit-schema</span>
        </h1>
        <p className={styles.heroTagline}>The shared language every LLM tool speaks.</p>
        <p className={styles.heroSub}>
          A lightweight Python library that gives your AI applications a common, structured way to
          record, sign, redact, and export events — with zero mandatory dependencies.
        </p>

        <div className={styles.heroStats}>
          <div className={styles.stat}><span>v1.1.0</span>Latest</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><span>1302</span>Tests</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><span>100%</span>Coverage</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><span>Zero</span>Dependencies</div>
        </div>

        <div className={styles.heroActions}>
          <Link to="/llm-toolkit-schema/docs/quickstart" className="btn btn-primary blue">
            Quick Start →
          </Link>
          <Link to="/llm-toolkit-schema/docs/installation" className="btn btn-secondary">
            Installation
          </Link>
          <a
            href="https://github.com/veerarag1973/llm-toolkit-schema"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub ↗
          </a>
        </div>

        <div className={styles.installBox}>
          <span className={styles.installComment}># No configuration needed</span>
          <div className={styles.installLine}>
            <span className={styles.installPrompt} style={{ color: 'var(--accent2)' }}>$</span>
            <span className={styles.installCmd}>pip install llm-toolkit-schema</span>
          </div>
        </div>
      </header>

      <hr className="divider" />

      {/* ── WHY ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label blue">Why</p>
          <h2 className={styles.sectionTitle}>Think of it as a universal receipt for your AI app</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 680, marginBottom: '2rem', lineHeight: 1.75 }}>
            Every time your app calls a language model, makes a decision, redacts private data,
            or checks a guardrail — this library gives that action a consistent, structured record
            that any tool in your stack can read.
          </p>

          <div className={styles.featGrid}>
            {[
              { icon: '📋', title: 'Consistent structure', body: 'Every service logs events the same way — no more custom log formats per microservice.' },
              { icon: '🔐', title: 'Tamper-proof audit trail', body: 'Built-in HMAC signing creates a tamper-proof audit chain — any gap or modification is immediately detectable.' },
              { icon: '🛡️', title: 'PII redaction first', body: 'First-class PII redaction before data leaves your app — mark fields as sensitive at creation time.' },
              { icon: '📡', title: 'OpenTelemetry compatible', body: 'Works with any monitoring stack — Grafana, Datadog, OTLP collectors, and more.' },
              { icon: '✔️', title: 'Compliance checks in CI', body: 'CLI + programmatic compliance checks — catch schema drift before it reaches production.' },
              { icon: '⚡', title: 'Zero required dependencies', body: 'The entire core runs on Python\'s standard library alone. Just pip install and go.' },
            ].map(f => (
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

      {/* ── QUALITY ── */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label blue">Quality Standards</p>
          <h2 className={styles.sectionTitle}>Built to be relied on</h2>
          <div className={styles.providerGrid} style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '2rem' }}>
            {qualities.map(q => (
              <div key={q.label} className={styles.providerCard} style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{q.icon}</div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--accent2)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '0.2rem' }}>{q.stat}</div>
                <div style={{ fontWeight: 700, marginBottom: '0.3rem', fontSize: '0.875rem' }}>{q.label}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.5 }}>{q.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── MODULES ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label blue">Modules</p>
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
      <section className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label blue">Event Namespaces</p>
          <h2 className={styles.sectionTitle}>10 built-in namespaces cover everything</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 600, marginBottom: '2rem' }}>
            Every event carries a payload whose shape is defined by its namespace.
            Ten built-in namespaces cover everything from raw model traces to safety guardrails.
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
      <section className={styles.section}>
        <div className="container">
          <p className="section-label blue">Documentation</p>
          <h2 className={styles.sectionTitle}>Comprehensive docs for every use case</h2>
          <div className={styles.docGrid}>
            {[
              { path: 'quickstart', label: 'Quick Start', desc: 'Create your first event, sign a chain, and export — in 5 minutes' },
              { path: 'installation', label: 'Installation', desc: 'Install from PyPI, optional extras, and dev setup' },
              { path: 'user-guide-events', label: 'User Guide: Events', desc: 'Event envelope, event types, serialisation, validation, ULIDs' },
              { path: 'user-guide-signing', label: 'User Guide: Signing', desc: 'Sign events, build tamper-evident chains, detect tampering' },
              { path: 'user-guide-redaction', label: 'User Guide: Redaction', desc: 'Sensitivity levels, redaction policies, PII detection' },
              { path: 'user-guide-export', label: 'User Guide: Export', desc: 'JSONL, Webhook, OTLP, Datadog, Grafana Loki exporters' },
              { path: 'api-index', label: 'API Reference', desc: 'Full API reference for every module' },
              { path: 'changelog', label: 'Changelog', desc: 'Version history and release notes' },
            ].map(d => (
              <Link key={d.path} to={`/llm-toolkit-schema/docs/${d.path}`} className={styles.docCard}>
                <div className={styles.docCardLabel} style={{ color: 'var(--accent2)' }}>{d.label} →</div>
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
