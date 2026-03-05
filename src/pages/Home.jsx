import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import styles from './Home.module.css'

const outcomes = [
  {
    metric: '40-70%',
    title: 'Faster Incident Triage',
    body: 'Move from raw logs to trace-first debugging so teams isolate failure steps in minutes instead of hours.',
  },
  {
    metric: 'Lower $/Run',
    title: 'Cost Visibility by Step',
    body: 'Track token and latency hotspots across model calls and tool usage, then optimize the expensive path first.',
  },
  {
    metric: 'Release Safety',
    title: 'Regression Gates in CI',
    body: 'Use evaluation thresholds and structured events to block low-quality prompt/model changes before deployment.',
  },
]

const adoptionPaths = [
  {
    title: 'Platform Teams',
    body: 'Standardize telemetry contracts with AgentOBS and enforce compatibility checks in CI/CD.',
    cta: '/sdk',
    ctaLabel: 'Explore The SDK',
  },
  {
    title: 'Applied AI Teams',
    body: 'Evaluate quality drift with llm-diff and monitor cost/performance changes across model versions.',
    cta: '/llm-diff',
    ctaLabel: 'Explore llm-diff',
  },
  {
    title: 'Builders Learning OTEL',
    body: 'Follow practical tutorials focused on agentic systems, not generic distributed systems examples.',
    cta: '/learn/otel-python/part1',
    ctaLabel: 'Start Learning',
  },
]

const layers = [
  { icon: '🔧', title: 'Tools', body: 'Open source, composable tools for tracing, evaluating, and governing LLM and agentic AI systems — from single calls to full multi-agent pipelines.' },
  { icon: '📚', title: 'Education', body: 'Guides, tutorials, and explainers built for AI engineers. From OTEL fundamentals to tracing your first LangChain agent — we explain what the official docs skip.' },
  { icon: '💬', title: 'Community', body: 'The place where OTEL + AI questions get answered. Join engineers building at the frontier of observable, trustworthy agentic AI.' },
  { icon: '🗂️', title: 'Reference', body: 'Spanforge.dev is built to be the canonical resource people bookmark and share — the way css-tricks.com owned CSS for a decade.' },
]



export default function Home() {
  usePageTitle('Spanforge — OpenTelemetry for Agentic AI')
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
            Where OpenTelemetry meets agentic AI. Tools, education, and community for engineers who need to trust their agents.
          </p>
          <div className={styles.heroActions}>
            <Link to="/tools/core" className="btn btn-primary">Explore the Toolkit</Link>
            <a href="#learn" className="btn btn-secondary">Read the Guides ↓</a>
          </div>
          <div className={styles.heroBadges}>
            <span className={styles.heroBadge}>Open Source</span>
            <span className={styles.heroBadge}>OpenTelemetry Native</span>
            <span className={styles.heroBadge}>OTEL for Agentic AI</span>
            <span className={styles.heroBadge}>Python</span>
          </div>
        </div>
      </header>

      <hr className="divider" />

      {/* ── MISSION ── */}
      <section id="mission" className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">The Mission</p>
          <h2 className={styles.sectionTitle}>
            This is more than a toolkit.<br />It's a destination.
          </h2>
          <p className={styles.sectionIntro}>
            OpenTelemetry is the standard for observability — but its documentation is notoriously
            hard to navigate, and most tutorials stop at distributed systems and never touch AI or
            agents. <strong>Spanforge is built to change that.</strong>
          </p>

          <div className={styles.missionQuote}>
            <blockquote>
              "Spanforge — where OpenTelemetry meets agentic AI. Tools, education, and community
              for engineers who need to trust their agents."
            </blockquote>
          </div>

          <div className={styles.layerGrid}>
            {layers.map(item => (
              <div key={item.title} className={styles.layerCard}>
                <div className={styles.layerIcon}>{item.icon}</div>
                <h4 className={styles.layerTitle}>{item.title}</h4>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── WHY OTEL ── */}
      <section id="why-otel" className={styles.section}>
        <div className="container">
          <p className="section-label">Why OpenTelemetry</p>
          <h2 className={styles.sectionTitle}>The gap no one was filling</h2>
          <p className={styles.sectionIntro} style={{ maxWidth: 680 }}>
            OTEL documentation is hard for newcomers. Most tutorials stop at distributed systems
            and never reach agentic AI. No independent, vendor-neutral home exists yet for engineers
            who want to apply OTEL to AI systems — that's what Spanforge is building.
          </p>

          <div className={styles.whatGrid}>
            <div className={styles.whatCard}>
              <div className={styles.whatCardTitle}>Own the narrative first</div>
              <p>
                Spanforge owns the "OTEL for agentic AI" story before anyone else gets there.
                Education builds community faster than tools alone — people share tutorials,
                not changelogs.
              </p>
            </div>
            <div className={styles.whatCard}>
              <div className={styles.whatCardTitle}>A composable toolkit underneath</div>
              <p>
                Each Spanforge tool solves one problem sharply, shares a common
                OTel-compatible event schema, and composes freely — whether you adopt
                one or all of them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── EDUCATION ── */}
      <section id="learn" className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Education</p>
          <h2 className={styles.sectionTitle}>Learn OTEL for agentic AI</h2>
          <p className={styles.sectionIntro} style={{ maxWidth: 680 }}>
            Guides and tutorials written for AI engineers — not networking veterans. From first
            spans to full multi-agent observability, we explain what the official docs skip.
          </p>
          <div className={styles.guideComingSoon}>
            <p>
              <strong>🎉 Part 1 is live:</strong>{' '}
              <Link to="/learn/otel-python/part1">
                OpenTelemetry in Python — Introduction to Observability &amp; OpenTelemetry
              </Link>
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              More parts covering distributed tracing, metrics, structured logging, the Collector,
              and end-to-end agentic AI observability are coming soon.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── IMPACT ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Impact</p>
          <h2 className={styles.sectionTitle}>What changes when teams adopt Spanforge</h2>
          <div className={styles.impactGrid}>
            {outcomes.map(item => (
              <article key={item.title} className={styles.impactCard}>
                <div className={styles.impactMetric}>{item.metric}</div>
                <h3 className={styles.impactTitle}>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── ADOPTION PATHS ── */}
      <section id="tools" className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Start Here</p>
          <h2 className={styles.sectionTitle}>Choose your fastest path to value</h2>

          <div className={styles.journeyGrid}>
            {adoptionPaths.map(path => (
              <article key={path.title} className={styles.journeyCard}>
                <h3 className={styles.journeyTitle}>{path.title}</h3>
                <p>{path.body}</p>
                <Link to={path.cta} className="btn btn-secondary">{path.ctaLabel} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── COMMUNITY ── */}
      <section id="community" className={styles.section}>
        <div className="container">
          <p className="section-label">Community</p>
          <h2 className={styles.sectionTitle}>The place where OTEL + AI questions get answered</h2>
          <p className={styles.sectionIntro} style={{ maxWidth: 640 }}>
            Discord is where engineers at the frontier of agentic AI come to ask hard questions,
            share patterns, and debug traces together.
          </p>
          <div className={styles.communityGrid}>
            <div className={styles.communityCard}>
              <div className={styles.communityIcon}>💬</div>
              <h4>Ask anything about OTEL + AI</h4>
              <p>No question is too basic. We're building the handbook as we go.</p>
            </div>
            <div className={styles.communityCard}>
              <div className={styles.communityIcon}>🧩</div>
              <h4>Share patterns and integrations</h4>
              <p>LangChain, LlamaIndex, CrewAI, AutoGen — bring your stack.</p>
            </div>
            <div className={styles.communityCard}>
              <div className={styles.communityIcon}>🚀</div>
              <h4>Shape what gets built next</h4>
              <p>Every tool on the roadmap started as a conversation in the community.</p>
            </div>
          </div>
          <div className={styles.communityActions}>
            <a
              href="https://discord.gg/sv3UzmvR"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Join on Discord ↗
            </a>
            <a
              href="https://github.com/veerarag1973"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
