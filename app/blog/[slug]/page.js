import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostBySlug, getAllSlugs } from '@/lib/blog'
import styles from './page.module.css'

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'SpanForge'],
      siteName: 'SpanForge',
    },
  }
}

function buildArticleJsonLd(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt || post.title,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: post.author || 'SpanForge',
      url: 'https://www.getspanforge.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SpanForge',
      url: 'https://www.getspanforge.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.getspanforge.com/blog/${post.slug}`,
    },
  }
}

const PHASE_COLORS = {
  discover: { bg: 'rgba(26,82,118,0.25)', text: '#5DADE2', label: 'Discover' },
  design:   { bg: 'rgba(20,90,50,0.25)',  text: '#58D68D', label: 'Design'   },
  build:    { bg: 'rgba(120,66,18,0.25)', text: '#F0A500', label: 'Build'    },
  govern:   { bg: 'rgba(74,35,90,0.25)',  text: '#AF7AC5', label: 'Govern'   },
  scale:    { bg: 'rgba(123,34,24,0.25)', text: '#EC7063', label: 'Scale'    },
  general:  { bg: 'rgba(42,49,69,0.5)',   text: '#94A3B8', label: 'SpanForge'},
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  const phase = post.phase || 'general'
  const phaseStyle = PHASE_COLORS[phase] || PHASE_COLORS.general
  const jsonLd = buildArticleJsonLd(post)

  return (
    <>
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Article header */}
      <header className={styles.header}>
        <div className="container">
          <div className={styles.meta}>
            <span
              className={styles.phaseTag}
              style={{ background: phaseStyle.bg, color: phaseStyle.text }}
            >
              {phaseStyle.label}
            </span>
            <span className={styles.date}>{formatDate(post.date)}</span>
            {post.readingTime && (
              <span className={styles.readingTime}>{post.readingTime}</span>
            )}
          </div>
          <h1 className={styles.h1}>{post.title}</h1>
          {post.excerpt && (
            <p className={styles.excerpt}>{post.excerpt}</p>
          )}
          {post.author && (
            <p className={styles.author}>By {post.author}</p>
          )}
        </div>
      </header>

      {/* Article body */}
      <article className={styles.article}>
        <div className={`container ${styles.articleInner}`}>
          <div className={styles.prose}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      {/* Back link */}
      <div className={styles.backWrap}>
        <div className="container">
          <a href="/blog" className={styles.backLink}>← Back to blog</a>
        </div>
      </div>

      {/* Editorial footer — next steps */}
      <section className={styles.editorialFooter}>
        <div className={`container ${styles.editorialInner}`}>
          <div className={styles.editorialBlock}>
            <span className={styles.editorialEyebrow}>Continue reading</span>
            <p className={styles.editorialTitle}>Explore more SpanForge insights</p>
            <a href="/blog" className={styles.editorialLink}>See all articles →</a>
          </div>
          <div className={styles.editorialDivider} aria-hidden="true" />
          <div className={styles.editorialBlock}>
            <span className={styles.editorialEyebrow}>The methodology</span>
            <p className={styles.editorialTitle}>See the five-phase lifecycle in full</p>
            <a href="/platform" className={styles.editorialLink}>Explore the platform →</a>
          </div>
          <div className={styles.editorialDivider} aria-hidden="true" />
          <div className={styles.editorialBlock}>
            <span className={styles.editorialEyebrow}>Talk to SpanForge</span>
            <p className={styles.editorialTitle}>Request a briefing for your team</p>
            <a href="/contact" className={styles.editorialLink}>Get in touch →</a>
          </div>
        </div>
      </section>
    </>
  )
}
