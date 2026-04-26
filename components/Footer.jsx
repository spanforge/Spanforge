import Link from 'next/link'
import NewsletterSignup from './NewsletterSignup'
import styles from './Footer.module.css'

const productLinks = [
  { label: 'SDK quickstart', href: '/spanforgecore/sdk' },
  { label: 'Advisory', href: '/advisory' },
  { label: 'Standard', href: '/standard' },
  { label: 'Documentation', href: '/docs' },
  { label: 'Tools', href: '/tools' },
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.brandMark} aria-label="SpanForge home">
            <span className={styles.brandSpan}>Span</span><span className={styles.brandForge}>Forge</span>
          </Link>
          <p className={styles.brandSub}>AI compliance infrastructure</p>
          <p className={styles.brandLead}>
            AI compliance infrastructure for teams shipping production-grade agentic systems.
          </p>
          <p className={styles.brandMeta}>
            Instrument. Enforce. Prove.
          </p>
          <div className={styles.newsletterWrap}>
            <NewsletterSignup variant="inline" dark />
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.col}>
            <span className={styles.colHead}>Product</span>
            {productLinks.map((link) => (
              <Link key={link.label} href={link.href} className={styles.colLink}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className={styles.col}>
            <span className={styles.colHead}>Company</span>
            {companyLinks.map((link) => (
              <Link key={link.label} href={link.href} className={styles.colLink}>
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.linkedin.com/in/spanforge"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.colLink}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>© SpanForge 2026</p>
        <p className={styles.motto}>Where AI goes to production.</p>
      </div>
    </footer>
  )
}
