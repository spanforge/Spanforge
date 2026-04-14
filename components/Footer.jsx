import Link from 'next/link'
import styles from './Footer.module.css'

const platformLinks = [
  { label: 'Platform Overview',   href: '/platform' },
  { label: 'Discover',            href: '/platform/discover' },
  { label: 'Design',              href: '/platform/design' },
  { label: 'Build',               href: '/platform/build' },
  { label: 'Govern',              href: '/platform/govern' },
  { label: 'Scale',               href: '/platform/scale' },
  { label: 'T.R.U.S.T. Framework', href: '/platform/trust' },
]
const productLinks = [
  { label: 'SpanForge Platform', href: '/agentobs' },
  { label: 'Tools & Artifacts', href: '/tools' },
]
const companyLinks = [
  { label: 'About',          href: '/about' },
  { label: 'Blog',           href: '/blog' },
  { label: 'Library',        href: '/resources' },
  { label: 'Contact',        href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms',          href: '/terms' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>

        {/* Brand column */}
        <div className={styles.brand}>
          <Link href="/" className={styles.brandLogo} aria-label="SpanForge home">
            <span className={styles.brandSpan}>Span</span>
            <span className={styles.brandForge}>Forge</span>
            <span className={styles.brandSub}>AI Lifecycle Platform</span>
          </Link>
          <p className={styles.brandTagline}>Where AI Goes to Production.</p>
          <p className={styles.brandUrl}>getspanforge.com</p>
          <Link href="/contact" className={styles.brandContact}>
            Request a briefing →
          </Link>
        </div>

        {/* Platform column */}
        <div className={styles.col}>
          <span className={styles.colHead}>Platform</span>
          {platformLinks.map((l) => (
            <Link key={l.href} href={l.href} className={styles.colLink}>{l.label}</Link>
          ))}
        </div>

        {/* Products column */}
        <div className={styles.col}>
          <span className={styles.colHead}>Products</span>
          {productLinks.map((l) => (
            <Link key={l.href} href={l.href} className={styles.colLink}>{l.label}</Link>
          ))}
        </div>

        {/* Company column */}
        <div className={styles.col}>
          <span className={styles.colHead}>Company</span>
          {companyLinks.map((l) => (
            <Link key={l.href} href={l.href} className={styles.colLink}>{l.label}</Link>
          ))}
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>© SpanForge 2026 — getspanforge.com</p>
        <p className={styles.built}>
          Built in public.{' '}
          <a
            href="https://www.linkedin.com/in/spanforge"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedIn}
          >
            Follow on LinkedIn ↗
          </a>
        </p>
      </div>
    </footer>
  )
}
