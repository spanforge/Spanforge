import Link from 'next/link'
import styles from './NewsletterSignup.module.css'

const SUBSTACK_EMBED = 'https://spanforge.substack.com/embed'
const SUBSTACK_URL = 'https://substack.com/@spanforge'

export default function NewsletterSignup({ variant = 'section', dark = false }) {

  if (variant === 'inline') {
    return (
      <div className={`${styles.inline} ${dark ? styles.inlineDark : ''}`}>
        <p className={styles.inlineLabel}>Get the newsletter</p>
        <p className={styles.inlineSub}>
          AI compliance analysis, SDK updates, and practical guidance. No filler.
        </p>
        <div className={`${styles.iframeWrap} ${dark ? styles.iframeWrapDark : ''}`}>
          <iframe
            src={SUBSTACK_EMBED}
            className={styles.embedIframe}
            frameBorder="0"
            scrolling="no"
            title="SpanForge Newsletter"
          />
        </div>
      </div>
    )
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <span className={styles.eyebrow}>SpanForge Newsletter</span>
        <h2 className={styles.heading}>Stay ahead on AI compliance.</h2>
        <p className={styles.sub}>
          Analysis, framework updates, SDK release notes, and practical guidance on
          shipping production AI that meets real regulatory expectations. No filler.
        </p>
        <div className={styles.iframeWrap}>
          <iframe
            src={SUBSTACK_EMBED}
            className={styles.embedIframe}
            frameBorder="0"
            scrolling="no"
            title="SpanForge Newsletter"
          />
        </div>
        <p className={styles.fine}>
          Delivered via{' '}
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.substackLink}
          >
            Substack
          </a>
          . Unsubscribe any time. By subscribing, you agree to our{' '}
          <Link href="/privacy" className={styles.substackLink}>Privacy Policy</Link>.
        </p>
      </div>
    </div>
  )
}
