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
  const isSDK = tool.type === 'sdk'

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
            <span className={styles.heroLabel}>
              SpanForge / {isSDK ? 'SDK Service' : 'Python CLI'} / {phaseLabel} phase
            </span>
            <h1 className={styles.h1}>{tool.name}</h1>
            <p className={styles.heroSub}>{tool.tagline}</p>

            <div
              className={styles.installBlock}
              aria-label={isSDK ? `${tool.name} import statement` : `${tool.name} installation command`}
            >
              <span className={styles.installPrompt} aria-hidden="true">
                {isSDK ? '>>>' : '$'}
              </span>
              <code className={styles.installCmd}>
                {isSDK ? tool.importCmd : tool.installCmd}
              </code>
            </div>

            <div className={styles.heroCtas}>
              {isSDK ? (
                <Link href={tool.docsHref} className="btn-primary">
                  API reference
                </Link>
              ) : (
                <>
                  <Link
                    href={`/tools/${params.toolSlug}/docs/${tool.getStartedSlug ?? 'quickstart'}`}
                    className="btn-primary"
                  >
                    Get started
                  </Link>
                  <Link href={`/tools/${params.toolSlug}/docs/cli-reference`} className="btn-ghost">
                    CLI reference
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className={styles.heroCard}>
            <span className={styles.heroCardLabel}>
              {isSDK ? 'What it covers' : 'What you get'}
            </span>
            <ul className={styles.heroList}>
              {isSDK ? (
                tool.features.map((f) => <li key={f}>{f}</li>)
              ) : (
                <>
                  <li>Installable CLI workflow with guided docs for every command surface.</li>
                  <li>Phase-aware positioning so the tool sits clearly inside the SpanForge system.</li>
                  <li>Direct entry points into reference docs, operational usage, and adoption guidance.</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </section>

      {isSDK ? (
        <section className={styles.sdkSection}>
          <div className="container">
            <div className={styles.sectionHead}>
              <div>
                <span className="eyebrow">Get started</span>
                <h2 className={styles.docsH2}>Install once. Import per service.</h2>
              </div>
              <p className={styles.docsSub}>
                All SDK services ship inside a single package. Install spanforge once and import only what you need.
              </p>
            </div>

            <div className={styles.sdkGrid}>
              <div className={styles.sdkCodeCol}>
                <div className={styles.sdkCodeBlock}>
                  <span className={styles.sdkCodeLabel}>Install</span>
                  <div className={styles.sdkCodeLine}>
                    <span className={styles.sdkCodePrompt} aria-hidden="true">$</span>
                    <code className={styles.sdkCode}>pip install spanforge</code>
                  </div>
                </div>
                <div className={styles.sdkCodeBlock}>
                  <span className={styles.sdkCodeLabel}>Import</span>
                  <div className={styles.sdkCodeLine}>
                    <span className={styles.sdkCodePrompt} aria-hidden="true">&gt;&gt;&gt;</span>
                    <code className={styles.sdkCode}>{tool.importCmd}</code>
                  </div>
                </div>
              </div>

              <div className={styles.sdkLinksCol}>
                <Link href={tool.docsHref} className={styles.sdkLinkCard}>
                  <div>
                    <span className={styles.sdkLinkTitle}>API Reference</span>
                    <span className={styles.sdkLinkDesc}>
                      Complete method signatures, parameters, return types, and usage examples for {tool.name}.
                    </span>
                  </div>
                  <span className={styles.sdkLinkArrow} aria-hidden="true">{'->'}</span>
                </Link>
                <Link href="/docs" className={styles.sdkLinkCard}>
                  <div>
                    <span className={styles.sdkLinkTitle}>SpanForge Core Docs</span>
                    <span className={styles.sdkLinkDesc}>
                      Architecture overview, configuration reference, and integration guides for the full platform.
                    </span>
                  </div>
                  <span className={styles.sdkLinkArrow} aria-hidden="true">{'->'}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
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
      )}
    </>
  )
}
