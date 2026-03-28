import styles from './page.module.css'

export const metadata = {
  title: 'Privacy Policy',
  description: 'SpanForge privacy policy — how we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  return (
    <section className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <span className="eyebrow">Legal</span>
          <h1 className={styles.h1}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: March 2026</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Who we are</h2>
            <p>
              SpanForge (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the
              website at <a href="https://www.getspanforge.com">getspanforge.com</a>.
              This privacy policy explains how we collect and use information when you
              visit our site.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. What we collect</h2>
            <p>
              <strong>Contact forms and enquiries:</strong> If you submit an enquiry
              via any contact form on this site, we collect your email address and any
              details you provide. We use this solely to respond to your enquiry.
            </p>
            <p>
              <strong>Analytics:</strong> We use Plausible Analytics, a privacy-first
              analytics tool that does not use cookies, does not collect personal data,
              and is GDPR, CCPA, and PECR compliant. Plausible collects aggregate,
              anonymised page view data only. No personal information is tracked.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Cookies</h2>
            <p>
              This website does not use cookies for tracking or analytics. Plausible
              Analytics operates without cookies. If in future we use cookies for
              functional purposes (e.g., remembering your preferences), we will update
              this policy and obtain your consent where required.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Your rights</h2>
            <p>
              If you have submitted your email address and wish to have it removed, or
              if you have any questions about how we handle your data, please email us
              at <a href="mailto:privacy@getspanforge.com">privacy@getspanforge.com</a>.
              We will respond within 48 hours and honour all deletion requests promptly.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Data retention</h2>
            <p>
              We do not retain personal data beyond the period necessary to fulfil the
              purpose for which it was collected. Enquiry data is deleted once a response
              has been provided and no ongoing relationship is established. We do not sell,
              rent, or share personal data with third parties for commercial purposes.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Third-party services</h2>
            <p>
              We use the following third-party services in the operation of this site:
            </p>
            <ul>
              <li>
                <strong>Vercel</strong> — Hosting and edge delivery. Vercel may log
                request metadata (IP address, headers) for security and performance
                purposes per their own privacy policy.
              </li>
              <li>
                <strong>Plausible Analytics</strong> — Privacy-first, cookieless
                analytics. No personal data collected. Data processed in the EU.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>7. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. When we do, we will update
              the &ldquo;last updated&rdquo; date at the top of this page. Continued use
              of the site after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Contact</h2>
            <p>
              For any privacy-related questions or requests, contact us at{' '}
              <a href="mailto:privacy@getspanforge.com">privacy@getspanforge.com</a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
