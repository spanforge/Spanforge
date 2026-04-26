import BlogCard from '@/components/BlogCard'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import NewsletterSignup from '@/components/NewsletterSignup'
import styles from './page.module.css'

export const metadata = {
  title: 'Blog - SpanForge',
  description:
    'Research and analysis on AI delivery, governance, observability, production operations, and the real cost of cutting corners.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()
  const featured = posts[0] || null
  const rest = posts.slice(1)

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">SpanForge Insights</span>
          <h1 className={styles.h1}>
            Production AI, honestly.
          </h1>
          <p className={styles.heroSub}>
            Research-grounded writing on the hard parts of production AI: governance,
            observability, decision-making under uncertainty, and the real cost
            of cutting corners. No hype. No inflated benchmarks.
          </p>
        </div>
      </section>

      {featured && (
        <section className={styles.featuredWrap}>
          <div className="container">
            <p className={styles.featuredLabel}>Featured insight</p>
            <BlogCard key={featured.slug} post={featured} featured />
          </div>
        </section>
      )}

      <section className={styles.posts}>
        <div className="container">
          {rest.length === 0 && !featured ? (
            <div className={styles.empty}>
              <p>Articles coming soon. <Link href="/spanforgecore">Explore the platform</Link> while you wait.</p>
            </div>
          ) : rest.length > 0 ? (
            <>
              <p className={styles.sectionLabel}>All articles</p>
              <div className={styles.grid}>
                {rest.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>

      <section className={styles.newsletterWrap}>
        <div className="container">
          <NewsletterSignup />
        </div>
      </section>

      <section className={styles.editorialCta}>
        <div className={`container ${styles.editorialCtaInner}`}>
          <div>
            <span className={styles.editorialCtaEyebrow}>Talk to SpanForge</span>
            <p className={styles.editorialCtaTitle}>Bring the methodology to your team.</p>
          </div>
          <Link href="/contact" className="btn-primary">Request a briefing</Link>
        </div>
      </section>
    </>
  )
}
