import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getToolMeta, getAllToolSlugs } from '@/lib/tool-docs'
import styles from './page.module.css'

export async function generateStaticParams() {
  return getAllToolSlugs().map((toolSlug) => ({ toolSlug }))
}

export async function generateMetadata({ params }) {
  const tool = getToolMeta(params.toolSlug)
  if (!tool) return {}
  return {
    title: `${tool.name} - SpanForge Tools`,
    description: tool.tagline,
  }
}

const PHASE_LABEL = {
  discover: 'Discover',
  design: 'Design',
  build: 'Build',
  govern: 'Govern',
  scale: 'Scale',
}

export default function ToolPage({ params }) {
  const tool = getToolMeta(params.toolSlug)
  if (!tool) notFound()

  const phaseLabel = PHASE_LABEL[tool.phase] ?? tool.phase

  return (
    <>
      <div className={styles.breadcrumb}>
        <div className="container">
          <Link href="/tools" className={styles.breadcrumbLink}>Tools</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
          <span className={styles.breadcrumbCurrent}>{tool.name}</span>
        </div>
      </div>

      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>SpanForge / Python CLI / {phaseLabel} phase</span>
            <h1 className={styles.h1}>{tool.name}</h1>
            <p className={styles.heroSub}>{tool.tagline}</p>

            <div className={styles.installBlock} aria-label={`${tool.name} installation command`}>
              <span className={styles.installPrompt} aria-hidden="true">$</span>
              <code className={styles.installCmd}>{tool.installCmd}</code>
            </div>

            <div className={styles.heroCtas}>
              <Link
                href={`/tools/${params.toolSlug}/docs/${tool.getStartedSlug ?? 'quickstart'}`}
                className="btn-primary"
              >
                Get started
              </Link>
              <Link href={`/tools/${params.toolSlug}/docs/cli-reference`} className="btn-ghost">
                CLI reference
              </Link>
            </div>
          </div>

          <div className={styles.heroCard}>
            <span className={styles.heroCardLabel}>What you get</span>
            <ul className={styles.heroList}>
              <li>Installable CLI workflow with guided docs for every command surface.</li>
              <li>Phase-aware positioning so the tool sits clearly inside the SpanForge system.</li>
              <li>Direct entry points into reference docs, operational usage, and adoption guidance.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.docsSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow">Documentation</span>
              <h2 className={styles.docsH2}>Everything needed to adopt {tool.name}.</h2>
            </div>
            <p className={styles.docsSub}>
              The structure mirrors the rest of the site: fast scan first, reference depth second, and clear next
              actions on every page.
            </p>
          </div>

          <div className={styles.docsGrid}>
            {tool.docs.map((doc) => (
              <Link
                key={doc.slug}
                href={`/tools/${params.toolSlug}/docs/${doc.slug}`}
                className={styles.docCard}
              >
                <span className={styles.docTitle}>{doc.title}</span>
                <span className={styles.docArrow} aria-hidden="true">{'->'}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
