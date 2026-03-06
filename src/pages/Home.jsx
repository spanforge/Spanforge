import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import { caseStudies, trustStats } from '../data/siteCredibility.js'
import styles from './Home.module.css'

const proofBadges = [
  {
    alt: 'AgentOBS GitHub stars',
    href: 'https://github.com/veerarag1973/agentobs',
    src: 'https://img.shields.io/github/stars/veerarag1973/agentobs?style=flat&label=agentobs%20stars&color=0d9f75',
  },
  {
    alt: 'AgentOBS PyPI version',
    href: 'https://pypi.org/project/agentobs/',
    src: 'https://img.shields.io/pypi/v/agentobs?style=flat&label=agentobs%20PyPI&color=0d9f75',
  },
  {
    alt: 'AGENTOBS RFC-0001',
    href: '/standard',
    src: 'https://img.shields.io/badge/standard-AGENTOBS_RFC--0001-3d5af1?style=flat',
  },
  {
    alt: 'License MIT',
    href: '/LICENSE',
    src: 'https://img.shields.io/badge/license-MIT-4b5675?style=flat',
  },
]

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
    body: 'Standardize telemetry contracts with AgentOBS and enforce compatibility checks in CI/CD. Target outcome: cross-team schema consistency by default.',
    cta: '/sdk',
    ctaLabel: 'Explore The SDK',
  },
  {
    title: 'Applied AI Teams',
    body: 'Evaluate quality drift with llm-diff and monitor cost/performance changes across model versions. Target outcome: safe model/prompt updates.',
    cta: '/llm-diff',
    ctaLabel: 'Explore llm-diff',
  },
  {
    title: 'Builders Learning OTEL',
    body: 'Follow practical tutorials focused on agentic systems, not generic distributed systems examples. Target outcome: production-ready telemetry patterns.',
    cta: '/learn/otel-python/part1',
    ctaLabel: 'Start Learning',
  },
]

const shippedItems = [
  {
    date: 'Mar 2026',
    title: 'llm-diff aligns with AGENTOBS standard (RFC-0001)',
    body: 'Schema events and docs now reflect AGENTOBS-compliant event contracts and built-in agentobs SDK integration.',
    href: '/llm-diff/docs/schema-events',
    cta: 'Read schema events docs',
  },
  {
    date: 'Mar 2026',
    title: 'AgentOBSDebug tutorial released',
    body: 'Step-by-step debugging workflow for agent traces is now available in the docs.',
    href: '/agentobs-debug/docs/tutorial',
    cta: 'Open tutorial',
  },
  {
    date: 'Mar 2026',
    title: 'OTel in Python learning track is live',
    body: 'Foundational practical guide for AI engineers starting trace-first observability with OpenTelemetry.',
    href: '/learn/otel-python/part1',
    cta: 'Start part 1',
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
          <p className={styles.heroEyebrow}>OPEN SOURCE · OTEL NATIVE · AGENTIC AI</p>
          <img className={styles.heroLogo} src="/logo.png" alt="Spanforge" />
          <h1 className={styles.heroTitle}>Spanforge</h1>
          <p className={styles.heroSub}>
            Where OpenTelemetry meets agentic AI.
          </p>
          <p className={styles.heroClarity}>
            For platform and applied AI teams that need reliable agent behavior in production:
            standardized telemetry contracts, eval gates, and trace-first debugging.
          </p>
          <div className={styles.heroActions}>
            <Link to="/sdk/docs/quickstart" className="btn btn-primary">Start AgentOBS in 10 Minutes</Link>
            <Link to="/sdk" className="btn btn-secondary">Explore AgentOBS SDK</Link>
            <a href="#learn" className={styles.heroTextLink}>Read the guides</a>
          </div>

          <div className={styles.proofStrip} aria-label="Project trust signals">
            {proofBadges.map((badge) => (
              <a
                key={badge.alt}
                href={badge.href}
                target={badge.href.startsWith('http') ? '_blank' : undefined}
                rel={badge.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={styles.proofBadgeLink}
              >
                <img src={badge.src} alt={badge.alt} loading="lazy" />
              </a>
            ))}
          </div>

          <div className={styles.heroBadges}>
            <span className={styles.heroBadge}>Vendor Neutral</span>
            <span className={styles.heroBadge}>AGENTOBS RFC-0001</span>
            <span className={styles.heroBadge}>MIT Licensed</span>
            <span className={styles.heroBadge}>Built In Public</span>
          </div>
        </div>
      </header>

      <hr className="divider" />

      {/* ── MISSION ── */}
      <section id="mission" className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">The Mission</p>
          <h2 className={styles.sectionTitle}>
            Build the OTEL home for agentic AI.
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

      {/* ── ARCHITECTURE ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Architecture</p>
          <h2 className={styles.sectionTitle}>See the architecture in 60 seconds</h2>
          <p className={styles.sectionIntro}>
            Instrument once, keep your telemetry portable: Spanforge tools emit AGENTOBS-standard
            events that map cleanly into OpenTelemetry pipelines and existing backends.
          </p>
          <div className={styles.archRow} role="img" aria-label="Application sends events through AgentOBS into OpenTelemetry collector and observability backends">
            <div className={styles.archNode}>
              <h3>App / Agent Runtime</h3>
              <p>Model calls, tools, evaluators, orchestration.</p>
            </div>
            <div className={styles.archArrow}>→</div>
            <div className={styles.archNode}>
              <h3>AgentOBS SDK</h3>
              <p>Structured envelope, validation, redaction, signing.</p>
            </div>
            <div className={styles.archArrow}>→</div>
            <div className={styles.archNode}>
              <h3>OTEL Pipeline</h3>
              <p>Collector/exporters to your existing observability stack.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── WHY OTEL ── */}
      <section id="why-otel" className={styles.section}>
        <div className="container">
          <p className="section-label">Why OpenTelemetry</p>
          <h2 className={styles.sectionTitle}>Close the documentation-to-production gap</h2>
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

      {/* ── FIT ── */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Fit Check</p>
          <h2 className={styles.sectionTitle}>Confirm fit in under a minute</h2>
          <div className={styles.fitGrid}>
            <article className={styles.fitCard}>
              <h3>Best fit</h3>
              <ul>
                <li>Teams running LLM or multi-agent systems in staging/production</li>
                <li>Platform engineers standardizing telemetry contracts across squads</li>
                <li>Applied AI teams gating prompt/model changes with measurable quality bars</li>
              </ul>
            </article>
            <article className={styles.fitCardMuted}>
              <h3>Not ideal (yet)</h3>
              <ul>
                <li>Single-script demos that only need basic request logging</li>
                <li>Teams unwilling to adopt structured event contracts</li>
                <li>Workflows that do not need traceability, governance, or evaluation gates</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── EDUCATION ── */}
      <section id="learn" className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Education</p>
          <h2 className={styles.sectionTitle}>Learn the production path, not just theory</h2>
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
              <strong>🧪 New tutorial:</strong>{' '}
              <Link to="/agentobs-debug/docs/tutorial">
                AgentOBS Debug Tutorial
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

      {/* ── COMPARE ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Decision Support</p>
          <h2 className={styles.sectionTitle}>Evaluate options with decision-grade clarity</h2>
          <div className={styles.compareTableWrap}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Ad-hoc scripts</th>
                  <th>Generic observability setup</th>
                  <th>Spanforge</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Agent-focused event schema</td>
                  <td>Manual, inconsistent</td>
                  <td>Usually custom work</td>
                  <td>AGENTOBS standard out of the box</td>
                </tr>
                <tr>
                  <td>Regression gating for prompts/models</td>
                  <td>Custom glue code</td>
                  <td>Not native</td>
                  <td>Built into llm-diff workflows</td>
                </tr>
                <tr>
                  <td>Portable OTEL pipeline integration</td>
                  <td>Per-project setup</td>
                  <td>Broad, not AI-opinionated</td>
                  <td>AI/agent-first + OTEL compatible</td>
                </tr>
                <tr>
                  <td>Practical learning path for AI teams</td>
                  <td>Fragmented docs</td>
                  <td>Generic docs</td>
                  <td>Focused tutorials + community support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── SHIPPED ── */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Release Freshness</p>
          <h2 className={styles.sectionTitle}>Track shipping velocity in public</h2>
          <div className={styles.shipGrid}>
            {shippedItems.map((item) => (
              <article key={item.title} className={styles.shipCard}>
                <div className={styles.shipDate}>{item.date}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link to={item.href}>{item.cta} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── IMPACT ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Impact</p>
          <h2 className={styles.sectionTitle}>Measure what changes in production</h2>
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

      {/* ── CASE STUDIES ── */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Case Studies</p>
          <h2 className={styles.sectionTitle}>Review concrete outcomes from real workflows</h2>
          <div className={styles.caseGrid}>
            {caseStudies.map((study) => (
              <article key={study.title} className={styles.caseCard}>
                <div className={styles.caseMetric}>{study.metric}</div>
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── TRUST ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Governance</p>
          <h2 className={styles.sectionTitle}>Adopt with explicit operational guarantees</h2>
          <div className={styles.trustStatGrid}>
            {trustStats.map((s) => (
              <div key={s.label} className={styles.trustStatCard}>
                <span className={styles.trustStatLabel}>{s.label}</span>
                <span className={styles.trustStatValue}>{s.value}</span>
              </div>
            ))}
          </div>
          <div className={styles.trustLinks}>
            <Link to="/security" className="btn btn-secondary">Security</Link>
            <Link to="/reliability" className="btn btn-secondary">Reliability</Link>
            <Link to="/compatibility" className="btn btn-secondary">Compatibility Policy</Link>
            <Link to="/roadmap" className="btn btn-secondary">Roadmap</Link>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── ADOPTION PATHS ── */}
      <section id="tools" className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Start Here</p>
          <h2 className={styles.sectionTitle}>Pick your fastest path to first value</h2>

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
          <h2 className={styles.sectionTitle}>Get answers from OTEL + AI practitioners</h2>
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
          <p className={styles.updateNote}>Last updated: March 2026</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
