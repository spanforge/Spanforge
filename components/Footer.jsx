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

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/spanforge/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
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
          </div>
          <div className={styles.col}>
            <span className={styles.colHead}>Connect</span>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>© SpanForge 2024 – 2026 · Founded 2024</p>
        <p className={styles.motto}>Where AI goes to production.</p>
      </div>
    </footer>
  )
}
