import Link from 'next/link'
import styles from './Footer.module.css'

const productLinks = [
  { label: 'SDK quickstart', href: '/spanforgecore/sdk' },
  { label: 'Standard', href: '/standard' },
  { label: 'Documentation', href: '/docs' },
  { label: 'Tools', href: '/tools' },
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <p className={styles.brandMark}>SpanForge</p>
          <p className={styles.brandLead}>
            AI compliance infrastructure for teams shipping production-grade agentic systems.
          </p>
          <p className={styles.brandMeta}>
            Instrument. Enforce. Prove.
          </p>
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
