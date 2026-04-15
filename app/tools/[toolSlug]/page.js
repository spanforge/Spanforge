import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getToolMeta, getAllToolSlugs } from '@/lib/tool-docs'
import styles from './page.module.css'

export async function generateStaticParams() {
  return getAllToolSlugs().map(toolSlug => ({ toolSlug }))
}

export async function generateMetadata({ params }) {
  const tool = getToolMeta(params.toolSlug)
  if (!tool) return {}
  return {
    title: `${tool.name} — SpanForge Tools`,
    description: tool.tagline,
  }
}

const PHASE_LABEL = {
  discover: 'Discover', design: 'Design', build: 'Build', govern: 'Govern', scale: 'Scale',
}

export default function ToolPage({ params }) {
  const tool = getToolMeta(params.toolSlug)
  if (!tool) notFound()

  const phaseLabel = PHASE_LABEL[tool.phase] ?? tool.phase

  return (
    <>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className="container">
          <Link href="/tools" className={styles.breadcrumbLink}>Tools</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
          <span className={styles.breadcrumbCurrent}>{tool.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroLabel}>
            spanforge · Python CLI · {phaseLabel} Phase
          </span>
          <h1 className={styles.h1}>{tool.name}</h1>
          <p className={styles.heroSub}>{tool.tagline}</p>

          <div className={styles.installBlock}>
            <span className={styles.installPrompt}>$</span>
            <code className={styles.installCmd}>{tool.installCmd}</code>
          </div>

          <div className={styles.heroCtas}>
            <Link
              href={`/tools/${params.toolSlug}/docs/quickstart`}
              className="btn-primary"
            >
              Get Started
            </Link>
            <Link
              href={`/tools/${params.toolSlug}/docs/cli-reference`}
              className="btn-ghost"
            >
              CLI Reference
            </Link>
          </div>
        </div>
      </section>

      {/* Doc navigation */}
      <section className={styles.docsSection}>
        <div className="container">
          <h2 className={styles.docsH2}>Documentation</h2>
          <div className={styles.docsGrid}>
            {tool.docs.map(doc => (
              <Link
                key={doc.slug}
                href={`/tools/${params.toolSlug}/docs/${doc.slug}`}
                className={styles.docCard}
              >
                <span className={styles.docTitle}>{doc.title}</span>
                <span className={styles.docArrow} aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
