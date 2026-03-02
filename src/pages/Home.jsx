import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import styles from './Home.module.css'

const tools = [
  {
    id: 'llm-diff',
    name: 'llm-diff',
    tagline: 'The evaluation layer.',
    description:
      'Diffs LLM outputs across model versions, prompt changes, or time — so you can see exactly how your outputs shifted and whether quality improved or regressed.',
    features: [
      'Side-by-side output comparison with word-level diffs',
      'Regression detection across prompt versions',
      'Per-call USD cost tracking',
      'LLM-as-a-Judge scoring',
      'Multi-model (3–4 model) parallel comparison',
      'CI/CD gate via --fail-under with structured events',
    ],
    badge: 'done',
    badgeText: '✅ Available',
    pkg: 'pip install llm-diff',
    link: '/llm-diff',
    docsLink: '/llm-diff/docs/getting-started',
    ghLink: 'https://github.com/veerarag1973/llmdiff',
    accentColor: '#0d9f75',
    accentBg: '#f0fdf8',
  },
  {
    id: 'llm-toolkit-schema',
    name: 'llm-toolkit-schema',
    tagline: 'The shared event schema.',
    description:
      'Defines the OpenTelemetry-compatible JSON/OTLP event schema that all Spanforge tools emit and consume — the glue that makes the ecosystem composable without custom integration.',
    features: [
      'OpenTelemetry-compatible JSON/OTLP format',
      'HMAC-SHA256 tamper-proof event signing & audit chains',
      'First-class PII redaction before data leaves your app',
      'Ships to Grafana, Datadog, OTLP, Kafka, webhooks',
      '1302 tests · 100% coverage · zero required dependencies',
      'LangChain & LlamaIndex adapters built in',
    ],
    badge: 'done',
    badgeText: '✅ Available',
    pkg: 'pip install llm-toolkit-schema',
    link: '/llm-toolkit-schema',
    docsLink: '/llm-toolkit-schema/docs/quickstart',
    ghLink: 'https://github.com/veerarag1973/llm-toolkit-schema',
    accentColor: '#3d5af1',
    accentBg: '#f0f3ff',
  },
  {
    id: 'promptlock',
    name: 'promptlock',
    tagline: 'The prompt governance layer.',
    description:
      'Version control and enterprise governance for prompts — so every prompt change is tracked, auditable, and reversible. Designed for teams managing prompts at scale.',
    features: [
      'Full version history for every prompt',
      'Diff and rollback across prompt versions',
      'Approval workflows and access controls for enterprise teams',
      'Integrates with llm-diff to surface quality regressions',
      'Emits llm-toolkit-schema events for full audit trail',
    ],
    badge: 'dev',
    badgeText: '🔧 Under Development',
    link: null,
    ghLink: 'https://github.com/veerarag1973/promptlock',
    accentColor: '#3d5af1',
    accentBg: '#f0f3ff',
  },
]

const philosophyItems = [
  { icon: '🎯', title: 'One tool, one job', body: 'Sharp identity over sprawling features. Every tool does one thing exceptionally well.' },
  { icon: '🧩', title: 'Composable over bundled', body: 'Adopt one tool or all four — at your own pace, with zero forced dependencies.' },
  { icon: '📊', title: 'Structured data over dashboards', body: 'Emit clean, portable data. Let your existing ecosystem — Grafana, Datadog, etc. — visualize it.' },
  { icon: '🔓', title: 'Open source first', body: 'Every tool lives on PyPI and GitHub with its own docs, community, and entry point.' },
]

const problemCards = [
  { icon: '📉', title: 'Silent quality degradation', desc: 'A prompt changes subtly — and model output quality silently degrades with no alert, no signal.' },
  { icon: '🔗', title: 'Tool call failures mid-chain', desc: 'A tool call fails mid-chain — and the agent hallucinates a recovery that looks plausible but is wrong.' },
  { icon: '💰', title: 'Invisible cost explosion', desc: 'Costs balloon across thousands of LLM calls with no visibility into which step, prompt, or agent caused it.' },
  { icon: '🐛', title: 'Unreplayable failures', desc: 'A multi-step agent run produces a wrong answer — and you have no trace, no replay, no way to debug it.' },
]

const domainCards = [
  { icon: '🗂️', title: 'Versioning & Management', desc: 'Manage the full lifecycle of prompts and configurations with the rigor your production systems demand.' },
  { icon: '🔭', title: 'Observability & Tracing', desc: 'Gain full visibility into every LLM call, agent decision, and model interaction across your stack.' },
  { icon: '🧪', title: 'Evaluation & Testing', desc: 'Measure, validate, and improve output quality through structured testing across all your AI workflows.' },
  { icon: '🔒', title: 'Security & Safety', desc: 'Protect your pipelines from adversarial inputs, data leakage, and unsafe model outputs.' },
  { icon: '⚙️', title: 'Infrastructure & Runtime', desc: 'Operate AI workloads reliably at scale — with the performance and cost controls teams need.' },
  { icon: '🧱', title: 'Shared Foundation', desc: 'A unified, interoperable base that every tool in the ecosystem builds on — no glue code required.' },
]

export default function Home() {
  usePageTitle('Spanforge — LLM & Agentic AI Observability')
  return (
    <div className={styles.page}>
      <Nav />

      {/* ── HERO ── */}
      <header className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <img className={styles.heroLogo} src="/logo.png" alt="Spanforge" />
          <h1 className={styles.heroTitle}>Spanforge</h1>
          <p className={styles.heroSub}>
            A composable open-source toolkit for LLM and agentic AI observability.
          </p>
          <div className={styles.heroActions}>
            <a href="#tools" className="btn btn-primary">Explore the Tools</a>
            <a
              href="https://github.com/veerarag1973"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View on GitHub ↗
            </a>
          </div>
          <div className={styles.heroBadges}>
            <span className={styles.heroBadge}>Open Source</span>
            <span className={styles.heroBadge}>OpenTelemetry Compatible</span>
            <span className={styles.heroBadge}>Python</span>
          </div>
        </div>
      </header>

      <hr className="divider" />

      {/* ── THE PROBLEM ── */}
      <section id="observability" className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">The Problem</p>
          <h2 className={styles.sectionTitle}>
            Agentic AI is eating the world.<br />But can you actually see what it's doing?
          </h2>
          <p className={styles.sectionIntro}>
            We're in the middle of a shift. AI applications aren't just chatbots anymore —
            they're autonomous agents: planning, calling tools, chaining decisions, spawning sub-agents,
            and taking real actions in the world. <strong>And most teams are flying blind.</strong>
          </p>

          <div className={styles.problemGrid}>
            {problemCards.map(c => (
              <div key={c.title} className={styles.problemCard}>
                <div className={styles.problemIcon}>{c.icon}</div>
                <div>
                  <div className={styles.problemTitle}>{c.title}</div>
                  <div className={styles.problemDesc}>{c.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.obsDefinition}>
            <p>
              In traditional software, observability means logs, metrics, and traces — you know
              what happened, when, and why. In agentic AI, the problem is an order of magnitude harder.
              <br /><br />
              Observability in agentic AI means being able to answer:<br />
              <strong>What did the model receive? What did it produce? Did it regress? Why?</strong><br />
              — at every step, across every run, over time.
            </p>
          </div>

          <div className={styles.callout}>
            <div className={styles.calloutText}>
              <strong>Without this, you're not running AI in production.</strong>
              <span>
                Observability for agentic AI isn't optional. It's the foundation every
                serious LLM application needs — and it's exactly what Spanforge is built to provide.
              </span>
            </div>
            <div className={styles.calloutBadge}>
              <span className={styles.calloutNum}>17+</span>
              tools in planning
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── ABOUT ── */}
      <section id="what" className={styles.section}>
        <div className="container">
          <p className="section-label">Overview</p>
          <h2 className={styles.sectionTitle}>What is Spanforge?</h2>
          <p className={styles.sectionIntro} style={{ maxWidth: 680 }}>
            Spanforge is a suite of focused, independent tools that together form a complete
            observability ecosystem for LLM applications and agentic AI systems.
          </p>

          <div className={styles.whatGrid}>
            <div className={styles.whatCard}>
              <div className={styles.whatCardTitle}>Composable by design</div>
              <p>
                Each tool solves one problem sharply and is installable on its own. Together,
                they share a common OpenTelemetry-compatible event schema — so outputs compose
                freely without custom integration.
              </p>
            </div>
            <div className={styles.whatCard}>
              <div className={styles.whatCardTitle}>Drop-in compatibility</div>
              <p>
                Route data into existing stacks like Grafana or Datadog without friction.
                Built for individual developers, DevOps teams, and enterprise ML engineers —
                at whatever layer they need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── OBJECTIVE ── */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Objective</p>
          <h2 className={styles.sectionTitle}>Full-stack observability for the agentic AI era</h2>
          <p className={styles.sectionIntro} style={{ maxWidth: 680 }}>
            Spanforge's mission is to give every team building with LLMs and agents the same
            observability primitives that mature software engineering takes for granted —
            across every layer of the stack.
          </p>
          <div className={styles.domainGrid}>
            {domainCards.map(c => (
              <div key={c.title} className={styles.domainCard}>
                <div className={styles.domainIcon}>{c.icon}</div>
                <div className={styles.domainTitle}>{c.title}</div>
                <div className={styles.domainDesc}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── TOOLKIT TABLE ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">The Toolkit</p>
          <h2 className={styles.sectionTitle}>Tools at a glance</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Tool</th>
                  <th>Purpose</th>
                  <th>Status</th>
                  <th>Package</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Link to="/llm-diff" className={styles.toolLink}>llm-diff</Link></td>
                  <td className={styles.tdMuted}>LLM output quality comparison and evaluation</td>
                  <td><span className="badge badge-done">✅ Available</span></td>
                  <td><span className="pkg">pip install llm-diff</span></td>
                </tr>
                <tr>
                  <td><Link to="/llm-toolkit-schema" className={styles.toolLink}>llm-toolkit-schema</Link></td>
                  <td className={styles.tdMuted}>Shared OpenTelemetry-compatible event schema</td>
                  <td><span className="badge badge-done">✅ Available</span></td>
                  <td><span className="pkg">pip install llm-toolkit-schema</span></td>
                </tr>
                <tr>
                  <td>
                    <a href="https://github.com/veerarag1973/promptlock" target="_blank" rel="noopener" className={styles.toolLink}>
                      promptlock
                    </a>
                  </td>
                  <td className={styles.tdMuted}>Prompt version control and enterprise governance</td>
                  <td><span className="badge badge-dev">🔧 Under Development</span></td>
                  <td><span style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>—</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── TOOLS DEEP DIVE ── */}
      <section id="tools" className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Tools</p>
          <h2 className={styles.sectionTitle}>Deep dive</h2>

          <div className={styles.toolCards}>
            {tools.map(tool => (
              <div key={tool.id} className={styles.toolCard}>
                <div
                  className={styles.toolCardTop}
                  style={{ background: `linear-gradient(90deg, ${tool.accentColor}, transparent)` }}
                />
                <div className={styles.toolCardInner}>
                  <div className={styles.toolCardHeader}>
                    <div>
                      <h3 className={styles.toolName}>{tool.name}</h3>
                      <p className={styles.toolTagline}>{tool.tagline}</p>
                    </div>
                    <span className={`badge badge-${tool.badge}`}>{tool.badgeText}</span>
                  </div>

                  <p className={styles.toolDesc}>{tool.description}</p>

                  <ul className={styles.toolFeatures}>
                    {tool.features.map(f => <li key={f}>{f}</li>)}
                  </ul>

                  {tool.badge === 'dev' && (
                    <div className={styles.wipNote}>
                      Under development. Follow along or contribute on GitHub.
                    </div>
                  )}

                  <div className={styles.toolActions}>
                    {tool.link ? (
                      <>
                        <Link to={tool.link} className="btn btn-primary">
                          Learn more →
                        </Link>
                        <Link to={tool.docsLink} className="btn btn-secondary">
                          View Docs
                        </Link>
                      </>
                    ) : (
                      <a
                        href={tool.ghLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        Follow on GitHub ↗
                      </a>
                    )}
                    {tool.pkg && (
                      <span className="pkg">
                        <span style={{ userSelect: 'none', color: 'var(--muted)' }}>$</span>
                        {tool.pkg}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── PHILOSOPHY ── */}
      <section id="philosophy" className={styles.section}>
        <div className="container">
          <p className="section-label">Philosophy</p>
          <h2 className={styles.sectionTitle}>Principles that guide every tool</h2>

          <div className={styles.philoGrid}>
            {philosophyItems.map(item => (
              <div key={item.title} className={styles.philoCard}>
                <div className={styles.philoIcon}>{item.icon}</div>
                <h4 className={styles.philoTitle}>{item.title}</h4>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
