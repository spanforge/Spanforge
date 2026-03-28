import BlogCard from '@/components/BlogCard'
import { getAllPosts } from '@/lib/blog'
import styles from './page.module.css'

export const metadata = {
  title: 'Blog',
  description:
    'Practical writing on enterprise AI — from problem framing and architecture to governance, observability, and production operations.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">The SpanForge Blog</span>
          <h1 className={styles.h1}>
            Enterprise AI, honestly.
          </h1>
          <p className={styles.heroSub}>
            Practical writing on the hard parts of production AI — governance, 
            observability, decision-making under uncertainty, and the real cost
            of cutting corners.
          </p>
        </div>
      </section>

      <section className={styles.posts}>
        <div className="container">
          {posts.length === 0 ? (
            <div className={styles.empty}>
              <p>Articles coming soon. <a href="/platform">Explore the platform</a> while you wait.</p>
            </div>
          ) : (
            <div className={styles.grid}>
              {posts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
