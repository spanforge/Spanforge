import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import styles from './ProductHome.module.css'

const features = [
  {
    icon: '⚡',
    title: 'Parallel model calls',
    body: 'Calls both models concurrently, produces a word-level diff, and scores results in seconds.',
  },
  {
    icon: '🔤',
    title: 'Word-level diffs',
    body: 'See exactly which words changed between responses — not just a vague similarity score.',
  },
  {
    icon: '🧠',
    title: 'Semantic scoring',
    body: 'Optional sentence-embedding similarity scores powered by sentence-transformers.',
  },
  {
    icon: '⚖️',
    title: 'LLM-as-a-Judge',
    body: 'Use a language model to evaluate response quality — useful when semantic similarity isn\'t enough.',
  },
  {
    icon: '💰',
    title: 'Cost tracking',
    body: 'Per-call USD cost tracking so you know exactly what each model comparison costs.',
  },
  {
    icon: '🔀',
    title: 'Multi-model comparison',
    body: 'Compare 3–4 models side-by-side in a single run.',
  },
  {
    icon: '📦',
    title: 'Batch evaluation',
    body: 'Run against a YAML prompt file. Cache API responses so iterating on thresholds costs nothing.',
  },
  {
    icon: '🚦',
    title: 'CI/CD gate',
    body: 'Use --fail-under to gate pipelines on similarity threshold. Regression failures emit AGENTOBS-standard events for a full audit trail.',
  },
  {
    icon: '📋',
    title: 'HTML reports',
    body: 'Self-contained HTML reports for sharing results with your team.',
  },
  {
    icon: '🔭',
    title: 'AGENTOBS standard',
    body: 'Every model call, diff, cost record, and judge evaluation emits a validated AGENTOBS (RFC-0001) event. The agentobs SDK is bundled — no extra install required.',
  },
]

const providers = [
  { name: 'OpenAI', models: 'gpt-4o, gpt-4o-mini, o1, …' },
  { name: 'Groq', models: 'llama-3.x, mixtral, …' },
  { name: 'Mistral', models: 'mistral-large, codestral, …' },
  { name: 'Anthropic', models: 'claude-3.5-sonnet, …' },
  { name: 'Ollama', models: 'local models' },
  { name: 'LM Studio', models: 'local models' },
]

export default function LlmDiffHome() {
  usePageTitle('llm-diff — LLM Output Evaluation · Spanforge')
  return (
    <div className={styles.page}>
      <Nav />

      {/* ── HERO ── */}
      <header className={styles.hero} style={{ '--hero-accent': '#0d9f75', '--hero-glow': 'rgba(13,159,117,.12)' }}>
        <div className={styles.heroGlow} />
        <div className={styles.heroCrumb}>
          <Link to="/" className={styles.breadcrumb}>Spanforge</Link>
          <span className={styles.sep}>/</span>
          <span className={styles.breadcrumbCurrent}>llm-diff</span>
        </div>
        <h1 className={styles.heroTitle}>
          <span className={styles.titleMono}>llm-diff</span>
        </h1>
        <p className={styles.heroTagline}>The evaluation layer.</p>
        <p className={styles.heroSub}>
          A CLI tool and Python library for comparing LLM outputs — semantically,
          visually, and at scale. Diffs model versions, prompt changes, or time in
          seconds. Adheres to the{' '}
          <a
            href="https://www.getspanforge.com/standard"
            className={styles.heroSubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            AGENTOBS standard (RFC-0001)
          </a>{' '}
          — every operation emits a validated observability event.
        </p>

        <div className={styles.heroStats}>
          <div className={styles.stat}><span>v1.3.0</span>Latest</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><span>Python 3.9+</span>Requirement</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><span>AGENTOBS</span>RFC-0001</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><span>MIT</span>License</div>
        </div>

        <div className={styles.heroActions}>
          <Link to="/llm-diff/docs/getting-started" className="btn btn-primary">
            Get Started →
          </Link>
          <Link to="/llm-diff/docs/cli-reference" className="btn btn-secondary">
            CLI Reference
          </Link>
          <a
            href="https://github.com/veerarag1973/llmdiff"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub ↗
          </a>
        </div>

        <div className={styles.installBox}>
          <span className={styles.installComment}># agentobs SDK included — AGENTOBS RFC-0001 compliant</span>
          <div className={styles.installLine}>
            <span className={styles.installPrompt}>$</span>
            <span className={styles.installCmd}>pip install "llm-diff[semantic]"</span>
          </div>
        </div>
      </header>

      <hr className="divider" />

      {/* ── QUICK EXAMPLE ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Quick Start</p>
          <h2 className={styles.sectionTitle}>Your first comparison in seconds</h2>

          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span className={styles.codeTitle}>bash</span>
              <div className={styles.codeDots}>
                <span /><span /><span />
              </div>
            </div>
            <pre className={styles.codePre}><code>{`# agentobs SDK is bundled — no separate install needed
pip install "llm-diff[semantic]"

# Compare two models on the same prompt
llm-diff "Explain recursion in one sentence." -a gpt-4o -b gpt-4o-mini --semantic

# Save a self-contained HTML report
llm-diff "Explain recursion." -a gpt-4o -b gpt-4o-mini --semantic --out report.html

# Run a batch from a YAML prompt file and gate on similarity
llm-diff --batch prompts.yml -a gpt-4o -b gpt-4o-mini --semantic --fail-under 0.85`}</code></pre>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── FEATURES ── */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Features</p>
          <h2 className={styles.sectionTitle}>Everything you need to evaluate LLMs</h2>
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

      {/* ── PROVIDERS ── */}
      <section className={styles.section}>
        <div className="container">
          <p className="section-label">Providers</p>
          <h2 className={styles.sectionTitle}>Works with every major LLM provider</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem', maxWidth: 560 }}>
            llm-diff connects to any provider that exposes an OpenAI-compatible API,
            plus local models via Ollama and LM Studio.
          </p>
          <div className={styles.providerGrid}>
            {providers.map(p => (
              <div key={p.name} className={styles.providerCard}>
                <div className={styles.providerName}>{p.name}</div>
                <div className={styles.providerModels}>{p.models}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── DOCS NAVIGATION ── */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <p className="section-label">Documentation</p>
          <h2 className={styles.sectionTitle}>Everything you need</h2>
          <div className={styles.docGrid}>
            {[
              { path: 'getting-started', label: 'Getting Started', desc: 'Installation, API keys, first diff' },
              { path: 'cli-reference', label: 'CLI Reference', desc: 'All flags, option groups, exit codes, YAML format' },
              { path: 'api', label: 'Python API', desc: 'All public functions, dataclasses, and field descriptions' },
              { path: 'schema-events', label: 'Schema Events', desc: 'AGENTOBS-standard (RFC-0001) observability events emitted by llm-diff' },
              { path: 'configuration', label: 'Configuration', desc: '.llmdiff TOML schema, env vars, config priority' },
              { path: 'providers', label: 'Provider Setup', desc: 'OpenAI, Groq, Mistral, Ollama, LM Studio, Anthropic' },
              { path: 'html-reports', label: 'HTML Reports', desc: 'Report anatomy, batch reports, judge card, cost table' },
              { path: 'ci-cd', label: 'CI/CD Integration', desc: 'GitHub Actions examples, threshold recommendations' },
              { path: 'tutorials/README', label: 'Tutorials', desc: 'Step-by-step guided learning path — 12 tutorials' },
            ].map(d => (
              <Link key={d.path} to={`/llm-diff/docs/${d.path}`} className={styles.docCard}>
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
