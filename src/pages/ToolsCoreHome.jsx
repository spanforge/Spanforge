import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import styles from './ToolsCoreHome.module.css'

import llmDiffReadme from '../../llmdiff/README.md?raw'
import agentObsDebugReadme from '../../AgentOBSDebug/README.md?raw'

function markdownToText(markdown) {
  return markdown
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/#+\s/g, '')
    .trim()
}

function extractBlurb(markdown, fallback) {
  const paragraphs = markdown
    .split(/\n\s*\n/g)
    .map(p => p.trim())
    .filter(Boolean)

  for (const paragraph of paragraphs) {
    if (paragraph.startsWith('#')) continue
    if (paragraph.startsWith('---')) continue
    if (paragraph.startsWith('```')) continue
    if (paragraph.startsWith('[![')) continue

    const plain = markdownToText(paragraph).replace(/\s+/g, ' ').trim()
    if (plain.length >= 40) return plain
  }

  return fallback
}

const tools = [
  {
    name: 'llm-diff',
    kind: 'Core Tool',
    blurb: extractBlurb(
      llmDiffReadme,
      'A CLI tool and Python library for comparing LLM outputs semantically, visually, and at scale.'
    ),
    to: '/llm-diff',
    docsTo: '/llm-diff/docs/getting-started',
  },
  {
    name: 'AgentOBSDebug',
    kind: 'Core Tool',
    blurb: extractBlurb(
      agentObsDebugReadme,
      'Developer tools for inspecting, replaying, and visualising AgentOBS traces.'
    ),
    to: '/agentobs-debug',
    docsTo: '/agentobs-debug/docs/python-api',
  },
]

export default function ToolsCoreHome() {
  usePageTitle('The Tools · Core · Spanforge')

  return (
    <div className={styles.page}>
      <Nav />

      <header className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className="container">
          <p className={styles.kicker}>The Tools / Core</p>
          <h1 className={styles.title}>Core Tooling for Observable AI Systems</h1>
          <p className={styles.sub}>
            Production-ready tools that plug into the Spanforge ecosystem. Pick one and go deep,
            or compose both in your workflow.
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {tools.map(tool => (
              <article key={tool.name} className={styles.card}>
                <div className={styles.cardTop} />
                <div className={styles.cardBody}>
                  <p className={styles.kind}>{tool.kind}</p>
                  <h2 className={styles.name}>{tool.name}</h2>
                  <p className={styles.blurb}>{tool.blurb}</p>
                  <div className={styles.actions}>
                    <Link to={tool.to} className="btn btn-primary">Open Home →</Link>
                    <Link to={tool.docsTo} className="btn btn-secondary">View Docs</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
