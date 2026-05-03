import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'SpanForge Pricing — Free to start, enterprise plans available',
  description:
    'SpanForge is MIT licensed and free to install via PyPI. Enterprise plans add advisory services, evidence walkthroughs, and dedicated compliance support for regulated AI deployments.',
}

const OPEN_SOURCE_FEATURES = [
  'pip install spanforge — available on PyPI',
  'MIT licensed, zero runtime dependencies',
  'Full SDK surface: sf_audit, sf_cec, sf_pii, sf_secrets, sf_observe, and 6 more',
  '6 regulatory frameworks: EU AI Act, GDPR, HIPAA, SOC 2, ISO 42001, NIST AI RMF',
  'HMAC-SHA256 signed audit chains',
  'Evidence bundle export (sf_cec)',
  'PII redaction and secrets scanning',
  'Community support via GitHub',
]

const ENTERPRISE_FEATURES = [
  'Everything in the open-source SDK',
  'Architecture review and deployment planning',
  'Evidence walkthrough with your compliance team',
  'Framework mapping to your specific regulatory obligations',
  'Dedicated advisory calls',
  'Priority support with committed response SLA',
  'Custom evidence bundle templates',
  'Onboarding and integration assistance',
]

const FAQ = [
  {
    q: 'Is SpanForge really free?',
    a: 'Yes. The full SDK — all 11 services — is MIT licensed and available on PyPI at no cost. You can instrument your first AI action, generate a signed evidence bundle, and hand it to your compliance team before you ever speak to us.',
  },
  {
    q: 'What does the Enterprise plan include?',
    a: 'The Enterprise plan layers human expertise on top of the SDK: architecture reviews, evidence walkthroughs, framework mapping to your specific obligations, and a committed support SLA. Contact us for a scoped proposal.',
  },
  {
    q: 'Do I need a contract to start?',
    a: 'No contract is required to use the open-source SDK. Enterprise plans involve a statement of work, but you can evaluate everything before committing.',
  },
  {
    q: 'How does support work on the free tier?',
    a: 'Community support is available on GitHub. Enterprise customers get a dedicated point of contact and priority response.',
  },
]

export default function PricingPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>Pricing</span>
          <h1 className={styles.h1}>Free to start. Built to scale.</h1>
          <p className={styles.heroSub}>
            SpanForge is MIT licensed and available on PyPI. Instrument your first AI action in
            under five minutes at no cost. Enterprise plans add advisory, evidence walkthroughs,
            and dedicated compliance support for regulated deployments.
          </p>
        </div>
      </section>

      <section className={styles.plansSection}>
        <div className="container">
          <div className={styles.plansGrid}>
            <div className={styles.planCard}>
              <div className={styles.planHeader}>
                <span className={styles.planTier}>Open Source</span>
                <p className={styles.planPrice}>Free</p>
                <p className={styles.planPriceSub}>MIT licensed · pip install spanforge</p>
              </div>
              <ul className={styles.planFeatures}>
                {OPEN_SOURCE_FEATURES.map((f) => (
                  <li key={f} className={styles.planFeature}>
                    <span className={styles.planCheck} aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className={styles.planCta}>
                <Link href="/spanforgecore/sdk" className="btn-primary">
                  Get Started Free
                </Link>
                <Link href="/docs" className={styles.planSecondaryLink}>
                  View documentation →
                </Link>
              </div>
            </div>

            <div className={`${styles.planCard} ${styles.planCardEnterprise}`}>
              <div className={styles.planHeader}>
                <span className={styles.planTier}>Enterprise</span>
                <p className={styles.planPrice}>Contact us</p>
                <p className={styles.planPriceSub}>Scoped to your regulatory requirements</p>
              </div>
              <ul className={styles.planFeatures}>
                {ENTERPRISE_FEATURES.map((f) => (
                  <li key={f} className={styles.planFeature}>
                    <span className={styles.planCheck} aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className={styles.planCta}>
                <Link href="/contact" className="btn-primary">
                  Talk to the Team
                </Link>
                <Link href="/advisory" className={styles.planSecondaryLink}>
                  View advisory services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="container">
          <h2 className={styles.faqHeading}>Pricing questions</h2>
          <div className={styles.faqGrid}>
            {FAQ.map((item) => (
              <div key={item.q} className={styles.faqItem}>
                <p className={styles.faqQ}>{item.q}</p>
                <p className={styles.faqA}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBlock}>
            <h2 className={styles.ctaH2}>Start in under five minutes.</h2>
            <p className={styles.ctaSub}>
              Install the SDK, instrument an AI action, and generate a signed evidence bundle —
              no contract, no credit card.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/spanforgecore/sdk" className="btn-primary">
                Get Started Free
              </Link>
              <Link href="/contact" className={styles.ctaSecondary}>
                Talk to the team →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
