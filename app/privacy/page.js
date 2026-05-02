import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Privacy Policy — SpanForge',
  description: 'SpanForge Privacy Policy v1.0.2 — how we collect, use, and protect your personal data. GDPR, CCPA, and DPDP compliant.',
}

export default function PrivacyPage() {
  return (
    <section className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <span className="eyebrow">Legal</span>
          <h1 className={styles.h1}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Version 1.0.2 — Last updated: May 2, 2026 · Effective: May 2, 2026</p>
        </div>

        <div className={styles.content}>

          <section className={styles.section}>
            <h2>⚠ Shared Responsibility</h2>
            <p>Spanforge is a <strong>governance platform that helps you manage AI decision-making</strong>. This means:</p>
            <ul>
              <li><strong>You control governance data</strong> — You decide what data goes into audit events, policies, and approval workflows. We&apos;re the processor; you&apos;re the controller.</li>
              <li><strong>We&apos;re transparent about our own data collection</strong> — We collect account info, usage data, and cookies. This policy explains what and why.</li>
              <li><strong>You remain responsible</strong> for ensuring audit events don&apos;t contain unnecessary personal data, complying with privacy laws when using Spanforge, notifying your end-users if you process their data, and implementing appropriate privacy practices in your AI systems.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>1. Introduction</h2>
            <p>
              Spanforge Technologies Private Limited (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;, &ldquo;Company&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and process personal data in accordance with the GDPR, CCPA, and India&apos;s Digital Personal Data Protection Act (DPDP).
            </p>
            <p>This policy applies to:</p>
            <ul>
              <li><strong>Spanforge SDK</strong> — <code>pip install spanforge</code></li>
              <li><strong>Spanforge Platform</strong> — getspanforge.com, platform.getspanforge.com</li>
              <li><strong>Spanforge Products</strong> — All SaaS products (GitHub App, Cloud, Managed SaaS, etc.)</li>
              <li><strong>Spanforge Website</strong> — Marketing and documentation site</li>
            </ul>
            <p>Questions? Email <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a>.</p>
          </section>

          <section className={styles.section}>
            <h2>2. Personal Data We Collect &amp; Our Roles</h2>
            <p><strong>Spanforge as a Data Processor:</strong> For audit events and compliance data you submit via the platform, we process data on your instructions. You (the organization/customer) are the &ldquo;data controller.&rdquo; See our <a href="https://getspanforge.com/dpa" target="_blank" rel="noopener noreferrer">Data Processing Addendum</a>.</p>
            <p><strong>Spanforge as a Data Controller:</strong> For data we collect independently — your account information, login activity, API usage, website analytics, support tickets, payment records, and marketing communications — we are solely responsible.</p>
            <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Data we collect:</h3>
            <ul>
              <li><strong>Account information:</strong> Full name, email address, phone number (optional), organization name, billing address. Legal basis: Contractual necessity.</li>
              <li><strong>Audit event metadata:</strong> Event IDs, timestamps, actor IDs, model IDs, action types, resource IDs, decision outcomes. We do not collect your actual business data, model inputs/outputs, or customer PII. Legal basis: Contractual necessity.</li>
              <li><strong>Authentication data:</strong> Login events, hashed API keys/tokens (never stored in plaintext), role assignments, MFA data. Legal basis: Contractual necessity + Security.</li>
              <li><strong>Website analytics:</strong> Page views, time on page, click events, download events (with consent). Legal basis: Consent — opt out at any time.</li>
              <li><strong>Support data:</strong> Email messages, chat transcripts, attachments you send for debugging. Legal basis: Contractual necessity.</li>
              <li><strong>Payment data:</strong> Billing name and address. Credit card details are <strong>not stored by us</strong> — handled by <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe</a>. Legal basis: Contractual necessity.</li>
              <li><strong>Device &amp; network data:</strong> IP address, browser type, OS, device identifiers, log data. Legal basis: Legitimate interest.</li>
              <li><strong>Cookies:</strong> Session, security, analytics, and marketing cookies (see Section 8).</li>
            </ul>
            <p><strong>We are designed NOT to collect:</strong> your actual business data, end-user PII, model weights, complete API responses, unencrypted passwords, or children&apos;s data.</p>
          </section>

          <section className={styles.section}>
            <h2>3. How We Use Personal Data</h2>
            <ul>
              <li><strong>Service delivery:</strong> Create and manage accounts, deliver the platform, send service notifications, provide support, process payments. Legal basis: Contractual necessity (GDPR Article 6(1)(b)).</li>
              <li><strong>Compliance &amp; legal obligations:</strong> Maintain audit trails, generate compliance reports, respond to legal requests, detect fraud, enforce Terms of Service. Legal basis: Legal obligation + Legitimate interest.</li>
              <li><strong>Security &amp; fraud prevention:</strong> Detect suspicious activity, prevent unauthorized access, secure communications, audit access logs. Legal basis: Legitimate interest (GDPR Article 6(1)(f)).</li>
              <li><strong>Product improvement:</strong> Aggregated, anonymized usage analytics. Legal basis: Consent (opt-out available) + Legitimate interest for essential analytics.</li>
              <li><strong>Marketing:</strong> Newsletters, feature announcements, event invitations, surveys. Case studies only with written consent. Legal basis: Consent — unsubscribe at any time.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. How We Share Personal Data</h2>
            <p>We share data only with trusted service providers (processors) who have signed Data Processing Agreements per GDPR Article 28:</p>
            <ul>
              <li><a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe</a> — Payment processing</li>
              <li><a href="https://aws.amazon.com/privacy" target="_blank" rel="noopener noreferrer">AWS</a> — Cloud infrastructure</li>
              <li><a href="https://www.datadoghq.com/privacy" target="_blank" rel="noopener noreferrer">Datadog</a> — Application monitoring</li>
              <li><a href="https://www.mailgun.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Mailgun</a> — Email delivery</li>
              <li>Okta (if enabled) — Single sign-on</li>
              <li>GitHub (P2 product) — GitHub App integration</li>
            </ul>
            <p><strong>We do NOT share data with:</strong> advertisers, data brokers, marketing partners, or business partners for commercial purposes without your permission.</p>
            <p><strong>Legally required disclosures:</strong> We may disclose when required by law (subpoenas, GDPR DSARs, CCPA/DPDP requests). We assess validity, notify you where permitted, and provide only the minimum data required.</p>
            <p><strong>International transfers:</strong> For EU/UK/Swiss users, we rely on EU-US Data Privacy Framework (DPF), Standard Contractual Clauses (SCCs), and UK/Swiss adequacy decisions. For India DPDP, we prioritize AWS ap-south-1 where feasible. Contact <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a> for details.</p>
            <p><strong>Business transfers:</strong> If Spanforge is acquired or merges, we will notify you at least 30 days before transfer. You may opt out by deleting your account.</p>
          </section>

          <section className={styles.section}>
            <h2>5. Your Rights</h2>
            <h3 style={{ marginBottom: '0.4rem', fontSize: '0.9rem', fontWeight: 600 }}>GDPR Rights (EU / UK / Switzerland):</h3>
            <ul>
              <li><strong>Article 15 — Access:</strong> Request a copy of all personal data. Response within 30 days.</li>
              <li><strong>Article 16 — Rectification:</strong> Correct inaccurate data. Response without undue delay.</li>
              <li><strong>Article 17 — Erasure:</strong> Request deletion. Exception: audit events retained up to 7 years per regulatory requirements. Response within 30 days.</li>
              <li><strong>Article 18 — Restriction:</strong> Freeze processing without deletion. Response within 30 days.</li>
              <li><strong>Article 20 — Portability:</strong> Receive your data in CSV or JSON. Response within 30 days.</li>
              <li><strong>Article 21 — Object:</strong> Object to processing based on legitimate interest (marketing, analytics). Response without undue delay.</li>
              <li><strong>Article 22 — Automated decisions:</strong> We do not make automated decisions about your account. All decisions (disputes, access issues) are made by humans.</li>
            </ul>
            <p>Email for GDPR requests: <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a> (subject: &ldquo;[GDPR] [TYPE]&rdquo;)</p>
            <h3 style={{ marginTop: '1rem', marginBottom: '0.4rem', fontSize: '0.9rem', fontWeight: 600 }}>CCPA Rights (California Residents):</h3>
            <ul>
              <li><strong>Right to Know:</strong> What personal data we collect, use, and share. Response within 45 days.</li>
              <li><strong>Right to Delete:</strong> Request deletion of personal data. Exceptions: legally required retention. Response within 45 days.</li>
              <li><strong>Right to Opt-Out of Sales:</strong> We do not sell personal data. This right does not apply.</li>
              <li><strong>Right to Correct:</strong> Correct inaccurate personal data. Response within 45 days.</li>
              <li><strong>Non-discrimination:</strong> We will not charge higher prices, deny service, or provide worse service for exercising your rights.</li>
            </ul>
            <p>Email for CCPA requests: <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a></p>
            <h3 style={{ marginTop: '1rem', marginBottom: '0.4rem', fontSize: '0.9rem', fontWeight: 600 }}>DPDP Rights (India):</h3>
            <ul>
              <li><strong>Access, Correction, Erasure (§8, §10):</strong> Response within 30 days.</li>
              <li><strong>Grievance Redressal (§5):</strong> If we don&apos;t respond within 30 days, contact our Grievance Officer: <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a>.</li>
              <li><strong>Withdraw Consent (§6):</strong> For optional data (analytics), use the unsubscribe link in emails or email us.</li>
            </ul>
            <p>Email for DPDP requests: <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a></p>
          </section>

          <section className={styles.section}>
            <h2>6. Data Retention</h2>
            <ul>
              <li><strong>Account profile</strong> (name, email, phone): Until deletion + 30 days</li>
              <li><strong>Login / authentication logs:</strong> 90 days</li>
              <li><strong>Audit events &amp; compliance evidence:</strong> Up to 7 years (EU AI Act Article 28, regulatory/tax requirements)</li>
              <li><strong>Support tickets &amp; correspondence:</strong> 2 years</li>
              <li><strong>Payment &amp; billing records:</strong> 7 years (tax/accounting requirements)</li>
              <li><strong>Website analytics:</strong> 14 months (anonymized)</li>
              <li><strong>Deleted account data:</strong> Purged within 90 days (unless legal hold applies)</li>
            </ul>
            <p>To request early deletion of audit trails, email <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a> with &ldquo;EARLY DELETION REQUEST.&rdquo; We evaluate based on applicable legal requirements (no active legal proceedings, no regulatory investigations, no active contracts requiring retention).</p>
          </section>

          <section className={styles.section}>
            <h2>7. Data Security</h2>
            <p>We implement industry-standard security measures:</p>
            <ul>
              <li><strong>Encryption:</strong> AES-256 at rest, TLS 1.3 in transit; sensitive data cleared from memory after use</li>
              <li><strong>Access control:</strong> OAuth2, SAML 2.0, JWT; MFA available; RBAC with 10 standard roles; API keys hashed and never stored in plaintext</li>
              <li><strong>Audit logging:</strong> API calls logged with actor, resource, and timestamp; HMAC-SHA256 signing detects tampering; logs retained 90 days minimum</li>
              <li><strong>Vulnerability management:</strong> Automated Dependabot/Snyk scanning; critical patches typically within 24 hours; quarterly penetration testing; bug bounty via <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a></li>
              <li><strong>Infrastructure:</strong> AWS with SOC 2, ISO 27001, and HIPAA certifications; VPC isolation, WAF, DDoS mitigation; daily backups with geographically separate storage</li>
            </ul>
            <p><strong>Data breach notification:</strong> If we discover a breach, we notify you within 72 hours via email (GDPR Article 33) with details of what was affected, containment steps, and recommended actions. We report to applicable regulatory authorities as required.</p>
          </section>

          <section className={styles.section}>
            <h2>8. Cookies &amp; Tracking</h2>
            <p><strong>Required cookies (no opt-out):</strong> <code>session_id</code> (keeps you logged in), <code>csrf_token</code> (prevents cross-site attacks), <code>device_fingerprint</code> (detects account takeover).</p>
            <p><strong>Optional cookies (opt-out available):</strong> Analytics cookies (<code>_ga</code>, <code>_gat</code>, <code>utm_source</code>) and marketing retargeting cookies. You can opt out via browser settings or by emailing <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a>.</p>
            <p><strong>Third-party cookies:</strong> Google Analytics 4, Datadog RUM (performance monitoring), Stripe (payment processing), GitHub (GitHub App integration).</p>
            <p><strong>We do NOT use cookies for:</strong> selling your data to advertisers, cross-site behavioral tracking, or building shadow profiles.</p>
          </section>

          <section className={styles.section}>
            <h2>9. Children&apos;s Privacy (COPPA)</h2>
            <p>The Spanforge platform is not directed to children under 13. We do not knowingly collect personal data from children. If you believe a child under 13 has created an account, contact us immediately at <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a> to request deletion. We comply with COPPA (US Children&apos;s Online Privacy Protection Act).</p>
          </section>

          <section className={styles.section}>
            <h2>10. Third-Party Links</h2>
            <p>Our website may link to third-party sites (GitHub, AWS, Stripe, etc.). This Privacy Policy does not apply to those sites. We recommend reviewing their privacy policies: <a href="https://github.com/privacy" target="_blank" rel="noopener noreferrer">GitHub</a>, <a href="https://aws.amazon.com/privacy" target="_blank" rel="noopener noreferrer">AWS</a>, <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe</a>, <a href="https://www.datadoghq.com/privacy" target="_blank" rel="noopener noreferrer">Datadog</a>.</p>
          </section>

          <section className={styles.section}>
            <h2>11. Automated Decision-Making &amp; Profiling</h2>
            <p>We do <strong>not</strong> use automated decision-making to make eligibility, access, or legal decisions about you. All account decisions are handled by humans on our team.</p>
            <p>We do not build behavioral profiles, sell profiles to third parties, or use profiling for discrimination. Product analytics are aggregated, anonymized, and opt-out is available.</p>
            <p>For AI systems you configure in Spanforge (automated policy enforcement, gates, alerts) — those are your responsibility. You must provide notice to affected parties, offer human review/appeal processes, and comply with GDPR Article 22 and applicable regulations.</p>
          </section>

          <section className={styles.section}>
            <h2>12. Contact Us</h2>
            <ul>
              <li><strong>General privacy questions:</strong> <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a> — Response within 3 business days</li>
              <li><strong>Data subject requests (GDPR/CCPA/DPDP):</strong> <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a> — Response within 30–45 days depending on jurisdiction</li>
              <li><strong>Data Protection Officer (GDPR):</strong> <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a></li>
              <li><strong>DPDP Grievance Officer (India):</strong> <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a></li>
              <li><strong>Security disclosure:</strong> <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a></li>
            </ul>
            <p>If we don&apos;t respond satisfactorily, you can escalate to your local data protection authority: <a href="https://edpb.europa.eu" target="_blank" rel="noopener noreferrer">EDPB (EU)</a>, <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ICO (UK)</a>, <a href="https://oag.ca.gov" target="_blank" rel="noopener noreferrer">California AG (CCPA)</a>, or the Data Protection Board of India (DPDP).</p>
          </section>

          <section className={styles.section}>
            <h2>13. Policy Updates</h2>
            <p>We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email to your registered address at least 14 days before they take effect. We will update the version number and &ldquo;last updated&rdquo; date at the top of this page. Continued use of the Service after changes take effect constitutes acceptance of the updated policy.</p>
            <p>See our <Link href="/terms">Terms of Service</Link> for the full usage agreement.</p>
          </section>

        </div>
      </div>
    </section>
  )
}
