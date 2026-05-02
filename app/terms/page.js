import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Terms of Service — SpanForge',
  description:
    'Terms of Service for SpanForge — the AI compliance and governance platform for agentic systems.',
}

export default function TermsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1 className={styles.h1}>Terms of Service</h1>
          <p className={styles.meta}>Version 1.0 — Last updated: May 2, 2026 · Effective: May 2, 2026</p>
        </div>
      </section>

      <article className={styles.article}>
        <div className={`container ${styles.articleInner}`}>

          <section className={styles.section}>
            <h2 className={styles.h2}>⚠ Important Notice</h2>
            <p>
              These Terms of Service govern your use of Spanforge (the &ldquo;Service&rdquo;). By accessing or using Spanforge, you agree to be bound by these terms. If you do not agree, do not use the Service.
            </p>
            <p><strong>Read carefully:</strong> Sections 6 (Limitation of Liability), 7 (Indemnification), and 8 (Termination) contain important legal limitations.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>1. Definitions</h2>
            <ul className={styles.list}>
              <li><strong>Account</strong> — Your user profile on the Spanforge platform, including login credentials and workspace configuration.</li>
              <li><strong>Data</strong> — All information submitted to or processed by the Service, including audit events, policies, approval workflows, and configuration files.</li>
              <li><strong>Documentation</strong> — Spanforge&apos;s user guides, API documentation, and best practices at docs.getspanforge.com.</li>
              <li><strong>Fees</strong> — Subscription charges for the Service, as specified in your Order Form or pricing page.</li>
              <li><strong>Service</strong> — Spanforge&apos;s platform, including the SDK, web apps, CLI tools, APIs, and hosted platform.</li>
              <li><strong>User</strong> — Any person accessing the Service on your behalf (employee, contractor, customer).</li>
              <li><strong>You / Customer</strong> — The organization that has entered into these Terms.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>2. Service Description</h2>
            <p>Spanforge is a <strong>governance and compliance platform</strong> that helps you log AI decisions, define and enforce policies, audit regulatory compliance (GDPR, EU AI Act, DPDP, etc.), generate compliance evidence bundles, manage approval workflows, and detect policy violations.</p>
            <p><strong>Spanforge is NOT:</strong> a replacement for your own security, risk, or compliance programs; a guarantee of regulatory compliance; a replacement for legal counsel; responsible for preventing your AI model from making bad decisions; or liable for decisions made by your AI systems.</p>
            <p><strong>You remain responsible</strong> for your AI system&apos;s outputs and decisions, compliance with applicable laws, appropriateness of policies you define, and notifying your users that their data may be logged.</p>
            <p><strong>Service Availability:</strong> We aim to maintain 99.5% monthly uptime. Up to 3.6 hours of unplanned downtime per month is acceptable. Planned maintenance (announced 7 days in advance) does not count as downtime.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>3. Service Level Agreement (SLA)</h2>
            <p><strong>Standard SLA (all customers):</strong></p>
            <ul className={styles.list}>
              <li>99.5% uptime → up to 3.6 hours downtime → 10% monthly fee credit</li>
              <li>99.0% uptime → up to 7.2 hours downtime → 25% monthly fee credit</li>
              <li>95.0% uptime → up to 36 hours downtime → 50% monthly fee credit</li>
              <li>&lt;95.0% uptime → &gt;36 hours downtime → 100% credit (full month refund)</li>
            </ul>
            <p>To claim SLA credits: email <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a> within 30 days of incident with timestamps and impact details. Credits apply to next invoice (not cash refunds). SLA does not apply to outages caused by your systems, third-party services, DDoS attacks, your misconfiguration, scheduled maintenance, or force majeure events.</p>
            <p>Enterprise customers may negotiate higher uptime targets. Contact <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a>.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>4. Your Rights, Responsibilities &amp; Prohibited Uses</h2>
            <p><strong>Your rights:</strong> Access the Service 24/7 (subject to maintenance); store audit events and compliance data; export data in standard formats (JSON, CSV); request account deletion; receive technical support during business hours.</p>
            <p><strong>Your responsibilities:</strong> Comply with applicable laws; protect login credentials and API keys; properly configure policies and gates; inform your users that their data may be logged by Spanforge; ensure you don&apos;t submit unnecessary personal data.</p>
            <p><strong>Prohibited uses</strong> — You may not use Spanforge to:</p>
            <ul className={styles.list}>
              <li>Monitor employees without proper legal notice, or track individuals without consent</li>
              <li>Violate laws or regulations; facilitate fraud, money laundering, or terrorism financing</li>
              <li>Implement deceptive AI systems (deepfakes, impersonation); deploy surveillance without disclosure</li>
              <li>Reverse-engineer the hosted Service; attempt unauthorized access; probe for security vulnerabilities (use <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a> bug bounty instead)</li>
              <li>Sell or resell the Service without permission</li>
            </ul>
            <p><strong>Enforcement:</strong> First violation: written warning, 30 days to cure. Second: account suspension. Third: account termination. Immediate action for illegal activity, threatening behavior, active DDoS attacks, or data exfiltration.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>5. Payment and Fees</h2>
            <p><strong>Free Tier:</strong> Up to 500 events/month, single user, basic docs access, community support. No credit card required.</p>
            <p><strong>Paid Tiers:</strong> See <a href="https://getspanforge.com/pricing">getspanforge.com/pricing</a> for current rates. Monthly or annual billing (10% discount for annual). Volume discounts for 10+ teams: <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a>.</p>
            <p><strong>Payment terms:</strong> Invoices due within 30 days. Late fees: 1.5% per month. Failure to pay results in account suspension (data preserved); 60+ days may result in data deletion.</p>
            <p><strong>Free trial:</strong> 14 days, full features, no automatic charge at end.</p>
            <p><strong>Refund policy:</strong> Monthly plans — no refunds (cancel anytime). Annual plans — full refund within 30 days if unused; no refund after 30 days. SLA violations → service credit only (not cash). If we terminate without cause → pro-rated refund of unused fees.</p>
            <p><strong>Taxes:</strong> You are responsible for all applicable taxes (VAT, GST, sales tax). Provide tax exemption certificate before billing if applicable.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>6. Limitation of Liability</h2>
            <p><strong>Our total liability</strong> for any claims is limited to the greater of: amounts you paid in the past 12 months, or $100 USD. This applies to breach of contract, negligence, security breaches, SLA violations, and any other legal theory.</p>
            <p><strong>We are NOT liable for:</strong> indirect damages, lost revenue, lost profits, lost data, business interruption, consequential or punitive damages, or third-party claims.</p>
            <p><strong>Exception to data loss exclusion:</strong> If data loss results from our gross negligence or willful misconduct, we remain liable for direct damages.</p>
            <p><strong>Our liability cap does NOT apply to:</strong> indemnification obligations, intellectual property infringement, gross negligence or willful misconduct, or violations of applicable law.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>7. Indemnification</h2>
            <p><strong>You agree to indemnify Spanforge</strong> from claims arising from: your use of the Service (configurations, policies, workflows); your violation of these Terms; your data and content (IP infringement, policy violations, employee/customer claims).</p>
            <p><strong>Spanforge agrees to indemnify you</strong> from claims arising from: our infringement of third-party IP (unless you modified the Service); our violation of applicable law; our gross negligence or willful misconduct.</p>
            <p><strong>Process:</strong> The indemnified party notifies the indemnifying party within 10 days; the indemnifying party controls the defense; both parties cooperate; consent required before settlement.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>8. Termination</h2>
            <p><strong>You can cancel anytime:</strong> Online via Settings → Account, or email <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a> with &ldquo;ACCOUNT DELETION REQUEST.&rdquo; Effective immediately (you pay through end of billing period).</p>
            <p><strong>We can terminate</strong> if: payment failure (10 days&apos; notice); prohibited use (30 days&apos; notice except illegal activity); material breach (30 days&apos; notice); inactivity 12+ months (60 days&apos; notice).</p>
            <p><strong>Effect of termination:</strong> Account deactivated immediately; data preserved for 90 days; after 90 days all data deleted (unless legally required); pro-rated refund if terminated by us without cause.</p>
            <p><strong>Early data deletion:</strong> Email <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a> with &ldquo;DATA DELETION REQUEST.&rdquo; Deletion within 5 business days unless legally required to retain. Deleted data cannot be recovered.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>9. Intellectual Property</h2>
            <p><strong>We own all IP in:</strong> the Service code and algorithms, Documentation, the T.R.U.S.T. Framework and RFC standards, and the &ldquo;Spanforge&rdquo; trademark and logos.</p>
            <p><strong>You may NOT:</strong> reverse-engineer the hosted Service; copy or modify our IP; create competing products based on our IP.</p>
            <p><strong>The open-source SDK</strong> is subject to its own license terms (MIT or Apache 2.0), which permit reverse-engineering. See the SDK license for details.</p>
            <p><strong>You retain ownership of:</strong> your data (audit events, policies, configurations) and your content (documents, code, workflows). You grant us a limited license to use your data only to provide and improve the Service.</p>
            <p><strong>License grant to you:</strong> A limited, non-exclusive, non-transferable, revocable license to access and use the Service. The open-source SDK is licensed separately under its own license (typically MIT or Apache 2.0).</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>10. Warranties and Disclaimers</h2>
            <p><strong>We warrant that:</strong> the Service will be available 99.5% of the time (per SLA); the Service will function as described in Documentation; we have the right to grant the license.</p>
            <p><strong>THE SERVICE IS PROVIDED &ldquo;AS IS.&rdquo;</strong> We do NOT warrant that the Service will meet your specific needs, will be error-free, is &ldquo;compliant&rdquo; with any regulation, will prevent your AI from making bad decisions, or is free from viruses or malware.</p>
            <p><strong>You are responsible for:</strong> evaluating the Service before use; determining if it meets your needs; backing up your data; compliance with applicable laws.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>11. Confidentiality</h2>
            <p>Each party agrees to keep the other&apos;s Confidential Information confidential, including source code, algorithms, pricing, customer data, policies, and business practices.</p>
            <p><strong>Exceptions:</strong> Disclosure is permitted if required by law, information is in the public domain, independently developed, or received from a third party without confidentiality obligation.</p>
            <p><strong>Duration:</strong> Standard confidential information — 3 years after termination. Trade secrets — indefinitely (for as long as they qualify under applicable law).</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>12. Dispute Resolution &amp; Governing Law</h2>
            <p><strong>Governing law:</strong> These Terms are governed by applicable law in the jurisdiction where Spanforge Technologies Private Limited is incorporated, without regard to conflicts of law principles. GDPR applies to EU users; CCPA to California users; DPDP to India users — regardless of choice of law.</p>
            <p><strong>Dispute resolution process:</strong> (1) Good faith negotiation — 30 days written notice; (2) Escalation to senior management — 14 days; (3) Optional mediation — 30 days; (4) Litigation as a last resort.</p>
            <p><strong>Statute of limitations:</strong> Any claim must be filed within 2 years of when you first discovered (or should have discovered) the problem. Exceptions: IP infringement claims (governed by applicable IP law) and data breach claims (governed by privacy law timelines).</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>13. Entire Agreement &amp; Modifications</h2>
            <p>These Terms, together with the <Link href="/privacy">Privacy Policy</Link>, Data Processing Addendum (getspanforge.com/dpa), your Order Form (if any), and Documentation (docs.getspanforge.com), constitute the entire agreement between us and supersede all previous agreements.</p>
            <p><strong>Modifications:</strong> We may update these Terms with 30 days&apos; notice by email. Changes apply to new subscriptions immediately and to existing subscriptions at renewal. For security or legal requirements, changes may be effective immediately. Continued use after changes take effect constitutes acceptance.</p>
            <p><strong>Order of precedence (conflicts):</strong> Order Form &gt; Data Processing Addendum &gt; These Terms &gt; Privacy Policy.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>14. General Provisions</h2>
            <ul className={styles.list}>
              <li><strong>Severability:</strong> If any provision is invalid, it is modified to the minimum extent necessary; remaining Terms remain in full effect.</li>
              <li><strong>Waiver:</strong> Not enforcing a right once does not waive that right for the future.</li>
              <li><strong>Force majeure:</strong> Neither party is liable for failures due to natural disasters, war, pandemics, government actions, utility outages, or major third-party outages. Payment obligations are not excused.</li>
              <li><strong>Assignment:</strong> You cannot assign these Terms without our written permission. We can assign to a successor company (with notice and 30-day opt-out for you).</li>
              <li><strong>Relationship:</strong> You and Spanforge are independent entities. No partnership, joint venture, agency, or employment relationship is created.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>15. GDPR, CCPA &amp; DPDP Special Terms</h2>
            <ul className={styles.list}>
              <li><strong>EU users (GDPR):</strong> You are the &ldquo;controller&rdquo;; we are the &ldquo;processor.&rdquo; Sign our DPA at getspanforge.com/dpa. Standard Contractual Clauses (SCCs) govern data transfers outside the EU.</li>
              <li><strong>California users (CCPA):</strong> You have rights under CCPA. See our <Link href="/privacy">Privacy Policy</Link>. We do not sell personal data.</li>
              <li><strong>India users (DPDP):</strong> Personal data is stored in India (AWS ap-south-1) where feasible. Contact <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a> for DPDP issues.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>16. Contact</h2>
            <ul className={styles.list}>
              <li><strong>Legal notices:</strong> <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a> (subject: &ldquo;LEGAL NOTICE&rdquo;)</li>
              <li><strong>Support &amp; general questions:</strong> <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a></li>
              <li><strong>Privacy &amp; data requests:</strong> <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a></li>
              <li><strong>Sales:</strong> <a href="mailto:sriram@getspanforge.com">sriram@getspanforge.com</a></li>
            </ul>
            <p>See our <Link href="/privacy">Privacy Policy</Link> for full details on how we handle your data.</p>
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
