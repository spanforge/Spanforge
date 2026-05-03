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
    href: 'https://www.linkedin.com/company/spanforge',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/spanforge',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
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
