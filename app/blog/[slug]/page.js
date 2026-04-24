import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostBySlug, getAllSlugs } from '@/lib/blog'
import { PHASE_THEME } from '@/lib/ui-theme'
import styles from './page.module.css'

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ slug }))
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

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  const phase = post.phase || 'general'
  const phaseStyle = PHASE_THEME[phase] || PHASE_THEME.general
  const jsonLd = buildArticleJsonLd(post)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

      <article className={styles.article}>
        <div className={`container ${styles.articleInner}`}>
          <div className={styles.prose}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      <div className={styles.backWrap}>
        <div className="container">
          <Link href="/blog" className={styles.backLink}>Back to blog</Link>
        </div>
      </div>

      <section className={styles.editorialFooter}>
        <div className={`container ${styles.editorialInner}`}>
          <div className={styles.editorialBlock}>
            <span className={styles.editorialEyebrow}>Continue reading</span>
            <p className={styles.editorialTitle}>Explore more SpanForge insights</p>
            <Link href="/blog" className={styles.editorialLink}>See all articles</Link>
          </div>
          <div className={styles.editorialDivider} aria-hidden="true" />
          <div className={styles.editorialBlock}>
            <span className={styles.editorialEyebrow}>The methodology</span>
            <p className={styles.editorialTitle}>Explore the platform and SDK in one place</p>
            <Link href="/spanforgecore" className={styles.editorialLink}>Explore the platform</Link>
          </div>
          <div className={styles.editorialDivider} aria-hidden="true" />
          <div className={styles.editorialBlock}>
            <span className={styles.editorialEyebrow}>Talk to SpanForge</span>
            <p className={styles.editorialTitle}>Request a briefing for your team</p>
            <Link href="/contact" className={styles.editorialLink}>Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
