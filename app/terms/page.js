import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Terms of Service — SpanForge',
  description:
    'Terms of Service for SpanForge — the AI lifecycle platform for enterprise teams.',
}

const LAST_UPDATED = 'April 2026'

export default function TermsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1 className={styles.h1}>Terms of Service</h1>
          <p className={styles.meta}>Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <article className={styles.article}>
        <div className={`container ${styles.articleInner}`}>

          <section className={styles.section}>
            <h2 className={styles.h2}>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the SpanForge website at{' '}
              <a href="https://www.getspanforge.com">www.getspanforge.com</a> (the
              &ldquo;Service&rdquo;), you agree to be bound by these Terms of Service. If
              you do not agree to these terms, please do not use the Service.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>2. Description of Service</h2>
            <p>
              SpanForge provides an AI lifecycle platform including standards, frameworks,
              CLI tools, and the SpanForge compliance product for enterprise teams. The
              Service is provided &ldquo;as is&rdquo; during the current build phase and
              specific features, tools, and availability are subject to change.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>3. Intellectual Property</h2>
            <p>
              All content on this website — including text, standards documents, frameworks,
              specifications, code examples, and branding — is the property of SpanForge
              unless otherwise stated. The T.R.U.S.T. Framework, the SpanForge Standard
              RFC series are proprietary to SpanForge.
            </p>
            <p>
              Certain resources in the Library are published for reference. You may read
              and link to them freely, but you may not reproduce or distribute them in
              whole without written permission.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>4. User Accounts</h2>
            <p>
              Some features of the Service require you to sign in using a Google account
              via OAuth. You are responsible for maintaining the confidentiality of your
              account. SpanForge does not store your Google credentials.
            </p>
            <p>
              We use your email address only to identify your account and, where you have
              explicitly consented, to send product updates. We do not share your personal
              data with third parties for marketing purposes.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className={styles.list}>
              <li>Use the Service to distribute malware or conduct automated attacks</li>
              <li>Attempt to circumvent authentication or security controls</li>
              <li>Scrape the Service at a rate that disrupts availability</li>
              <li>Represent SpanForge standards or frameworks as your own work</li>
              <li>Use SpanForge branding in a way that implies an unauthorised endorsement</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>6. Limitation of Liability</h2>
            <p>
              SpanForge provides the Service for informational and tooling purposes. To the
              maximum extent permitted by applicable law, SpanForge is not liable for any
              indirect, incidental, or consequential damages arising from your use of the
              Service or reliance on any content within it.
            </p>
            <p>
              SpanForge standards and frameworks are guidance documents. They do not
              constitute legal or compliance advice. Enterprises remain responsible for
              their own regulatory obligations.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>7. Analytics and Privacy</h2>
            <p>
              The Service uses Plausible Analytics, a privacy-first analytics tool. No
              personal data is collected, no cookies are set, and no cross-site tracking
              occurs. See our{' '}
              <Link href="/privacy">Privacy Policy</Link> for full details.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>8. Changes to These Terms</h2>
            <p>
              SpanForge reserves the right to update these Terms of Service. Material
              changes will be indicated by an updated &ldquo;Last updated&rdquo; date at
              the top of this page. Continued use of the Service after changes constitutes
              acceptance.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>9. Contact</h2>
            <p>
              Questions about these terms? Reach us at{' '}
              <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a>.
            </p>
          </section>

        </div>
      </article>

      <div className={styles.backWrap}>
        <div className="container">
          <Link href="/" className={styles.backLink}>← Back to home</Link>
          <Link href="/privacy" className={styles.backLink} style={{ marginLeft: '2rem' }}>Privacy Policy →</Link>
        </div>
      </div>
    </>
  )
}
