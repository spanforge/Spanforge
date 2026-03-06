import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import styles from './ProductHome.module.css'

const features = [
  {
    icon: '🔁',
    title: 'Trace Replay',
    body: 'Replay an agent run step-by-step from JSONL traces — model, tokens, and duration for every step.',
  },
  {
    icon: '🌳',
    title: 'Span Tree',
    body: 'Print the full span hierarchy as an ASCII tree so parent/child flow across run, steps, and model calls is obvious.',
  },
  {
    icon: '📈',
    title: 'Execution Timeline',
    body: 'Lay out every span start and end on a millisecond ruler to see exactly where time was spent.',
  },
  {
    icon: '🧰',
    title: 'Tool + Decision Views',
    body: 'List every tool call with its arguments and every recorded decision point with the chosen option.',
  },
  {
    icon: '💰',
    title: 'Cost Attribution',
    body: 'Per-step cost and latency breakdown with p50/p90/p99 percentile summaries — pinpoint the expensive steps.',
  },
  {
    icon: '🧪',
    title: 'Batch Reports + Diff',
    body: 'Summarise every trace in a JSONL file at once, or compare two traces side by side with diff_traces.',
  },
]

const views = [
  { cmd: 'replay',      desc: 'Each step in order — model, tokens, duration' },
  { cmd: 'inspect',     desc: 'One-page summary — span count, tokens, cost, status' },
  { cmd: 'tree',        desc: 'Full span hierarchy as an ASCII tree' },
  { cmd: 'timeline',    desc: 'Every span start/end on a millisecond ruler' },
  { cmd: 'tools',       desc: 'Every tool call with its arguments' },
  { cmd: 'decisions',   desc: 'Every decision point and the option chosen' },
  { cmd: 'cost',        desc: 'Aggregated input/output tokens and USD cost' },
  { cmd: 'attribution', desc: 'Per-step cost/latency table with p50/p90/p99' },
  { cmd: 'report',      desc: 'Batch summary across all traces in a file' },
  { cmd: 'diff',        desc: 'Side-by-side comparison of two traces' },
]

export default function AgentObsDebugHome() {
  usePageTitle('AgentOBSDebug · Agent Trace Debugging Toolkit · Spanforge')

  return (
    <div className={styles.page}>
      <Nav />

      <header className={styles.hero} style={{ '--hero-accent': '#3d5af1', '--hero-glow': 'rgba(61,90,241,.12)' }}>
        <div className={styles.heroGlow} />
        <div className={styles.heroCrumb}>
          <Link to="/" className={styles.breadcrumb}>Spanforge</Link>
          <span className={styles.sep}>/</span>
          <Link to="/tools/core" className={styles.breadcrumb}>The Tools</Link>
          <span className={styles.sep}>/</span>
          <span className={styles.breadcrumbCurrent}>AgentOBSDebug</span>
        </div>

        <h1 className={styles.heroTitle}><span className={styles.titleMono}>AgentOBSDebug</span></h1>
        <p className={styles.heroTagline}>Debugging and inspection tools for AgentOBS traces.</p>
        <p className={styles.heroSub}>
          Developer tools for inspecting, replaying, and visualising AgentOBS traces. Use the CLI
          or Python API to replay runs, inspect span hierarchy, analyze decisions, attribute cost,
          and compare traces.
        </p>

        <div className={styles.heroStats}>
          <div className={styles.stat}><span>1.0.1</span>Latest</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><span>Python 3.10+</span>Requirement</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><span>agentobs &gt;= 1.0.5</span>Dependency</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><span>10 Views</span>CLI + API</div>
        </div>

        <div className={styles.heroActions}>
          <Link to="/agentobs-debug/docs/tutorial" className="btn btn-primary">Tutorial →</Link>
          <Link to="/agentobs-debug/docs/python-api" className="btn btn-secondary">Python API</Link>
          <Link to="/agentobs-debug/docs/overview" className="btn btn-secondary">Overview</Link>
          <a href="https://github.com/veerarag1973/agentobsdebug" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub ↗</a>
        </div>

        <div className={styles.installBox}>
          <span className={styles.installComment}># Install from PyPI (requires agentobs &gt;= 1.0.5)</span>
          <div className={styles.installLine}>
            <span className={styles.installPrompt}>$</span>
            <span className={styles.installCmd}>pip install agentobs-debug</span>
          </div>
        </div>
      </header>

      <hr className="divider" />

      {/* ── OVERVIEW ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Overview</p>
          <h2 className={styles.sectionTitle}>What is AgentOBSDebug?</h2>
          <div className={styles.providerGrid}>
            <article className={styles.providerCard}>
              <div className={styles.providerName}>What It Is</div>
              <div className={styles.providerModels} style={{ fontFamily: 'inherit', lineHeight: 1.7 }}>
                AgentOBSDebug is a trace-debugging toolkit for AgentOBS event streams. It turns
                raw JSONL telemetry into ten focused, human-readable views — all available as a Python API and CLI.
              </div>
            </article>
            <article className={styles.providerCard}>
              <div className={styles.providerName}>What Problem It Solves</div>
              <div className={styles.providerModels} style={{ fontFamily: 'inherit', lineHeight: 1.7 }}>
                When agents fail, produce wrong tool calls, or run slowly, raw trace lines are
                hard to reason about. AgentOBSDebug makes those traces actionable so teams can
                quickly pinpoint where and why a run regressed.
              </div>
            </article>
            <article className={styles.providerCard}>
              <div className={styles.providerName}>Start Here</div>
              <div className={styles.providerModels} style={{ fontFamily: 'inherit', lineHeight: 1.7 }}>
                Follow the tutorial for a guided debugging workflow, or jump straight to the Python API reference.
                <br /><br />
                <Link to="/agentobs-debug/docs/tutorial" style={{ color: 'var(--accent2)', fontWeight: 700, textDecoration: 'none' }}>
                  Open Tutorial →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── QUICK START ── */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Quick Start</p>
          <h2 className={styles.sectionTitle}>Debug your first trace in seconds</h2>
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span className={styles.codeTitle}>python</span>
              <div className={styles.codeDots}><span /><span /><span /></div>
            </div>
            <pre className={styles.codePre}><code>{`import agentobs_debug as aod

stream = aod.load_events("events.jsonl")
trace  = "4bf92f3577b34da6a3ce929d0e0e4736"

aod.replay(trace, stream=stream)            # step-by-step replay
aod.inspect_trace(trace, stream=stream)     # trace summary
aod.print_trace_tree(trace, stream=stream)  # span hierarchy
aod.timeline(trace, stream=stream)          # execution timeline
aod.show_tools(trace, stream=stream)        # tool calls
aod.show_decisions(trace, stream=stream)    # decision points
aod.cost_summary(trace, stream=stream)      # token usage + cost
aod.cost_attribution(trace, stream=stream)  # per-step cost/latency

# Multi-trace
aod.batch_report("events.jsonl")            # summarise all traces
aod.diff_traces(trace_a, trace_b, stream=stream)  # compare two traces`}</code></pre>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── CAPABILITIES ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Capabilities</p>
          <h2 className={styles.sectionTitle}>Inspect traces from every angle</h2>
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

      {/* ── VIEWS TABLE ── */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">10 Views</p>
          <h2 className={styles.sectionTitle}>One command per view — CLI and Python API</h2>
          <div className={styles.moduleGrid} style={{ marginTop: '2rem' }}>
            <div className={`${styles.moduleRow} ${styles.moduleRowHeader}`}>
              <div className={styles.moduleCell}>Command / function</div>
              <div className={styles.moduleCell}>What it shows</div>
            </div>
            {views.map(v => (
              <div key={v.cmd} className={styles.moduleRow}>
                <div className={styles.moduleCell}><span className={styles.moduleName}>{v.cmd}</span></div>
                <div className={`${styles.moduleCell} ${styles.moduleDesc}`}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── DOCS NAV ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Documentation</p>
          <h2 className={styles.sectionTitle}>Everything you need</h2>
          <div className={styles.docGrid}>
            {[
              { path: 'overview', label: 'Overview', desc: 'Installation, quickstart snippets, and full public API summary' },
              { path: 'tutorial', label: 'Tutorial', desc: 'Guided debugging workflow — from loading a trace to full cost analysis' },
              { path: 'python-api', label: 'API Reference', desc: 'Complete function signatures, parameters, output formats, and exception hierarchy' },
            ].map(d => (
              <Link key={d.path} to={`/agentobs-debug/docs/${d.path}`} className={styles.docCard}>
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
