# Terms of Service
## Spanforge Compliance & Governance Platform

**Last Updated:** May 2, 2026  
**Effective Date:** May 2, 2026  
**Version:** 1.0  

---

## ⚠️ Important Notice

These Terms of Service govern your use of Spanforge (the "**Service**"). By accessing or using Spanforge, you agree to be bound by these terms. If you do not agree, do not use the Service.

**Read carefully:** Sections 6 (Limitation of Liability), 7 (Indemnification), and 8 (Termination) contain important legal limitations.

---

## 1. Definitions

**"Account"** — Your user profile on the Spanforge platform, including login credentials and workspace configuration.

**"Confidential Information"** — Non-public information exchanged between parties, including source code, algorithms, customer data, and business plans.

**"Data"** — All information submitted to or processed by the Service, including audit events, policies, approval workflows, and configuration files.

**"Documentation"** — Spanforge's user guides, API documentation, and best practices materials available at docs.getspanforge.com.

**"Fees"** — Subscription charges for the Service, as specified in your Order Form or pricing page.

**"Intellectual Property" or "IP"** — Patents, copyrights, trademarks, trade secrets, and other proprietary rights.

**"Order Form"** — The document specifying the Service tier, Fees, and term (if applicable).

**"Service"** — Spanforge's platform, including the SDK, web apps, CLI tools, APIs, and hosted platform.

**"User"** — Any person accessing the Service on your behalf (employee, contractor, customer).

**"You" or "Customer"** — The organization that has entered into these Terms.

---

## 2. Service Description

### 2.1 What Spanforge Does

Spanforge is a **governance and compliance platform** that helps you:
- ✅ Log AI model decisions and governance events
- ✅ Define and enforce governance policies
- ✅ Audit compliance with regulations (GDPR, EU AI Act, DPDP, etc.)
- ✅ Generate compliance evidence bundles for auditors
- ✅ Manage approval workflows for high-risk decisions
- ✅ Detect policy violations and trigger alerts

### 2.2 What Spanforge Does NOT Do

Spanforge is **not**:
- ❌ A replacement for your own security, risk, or compliance programs
- ❌ A guarantee that you will be compliant with any regulation
- ❌ A replacement for legal or compliance counsel
- ❌ Responsible for preventing your AI model from making bad decisions
- ❌ Liable for decisions made by your AI systems

**You remain responsible** for:
- Your AI system's outputs and decisions
- Compliance with laws in your jurisdiction
- Appropriateness of policies you define
- Implementation and enforcement of safety measures
- User notifications and transparency (e.g., telling your users they're being audited)

### 2.3 Service Availability

We aim to maintain **99.5% monthly uptime** (measured as system availability). This means:
- Up to 3.6 hours of unplanned downtime per month is acceptable
- Planned maintenance (announced 7 days in advance) doesn't count as downtime
- Service Level Agreement (SLA) details in Section 3

---

## 3. Service Level Agreement (SLA)

### 3.1 Uptime Guarantee

**Standard SLA (for all customers):**

| Uptime Target | Monthly Downtime Allowed | Service Credit |
|---|---|---|
| 99.5% | 3.6 hours | 10% of monthly fees |
| 99.0% | 7.2 hours | 25% of monthly fees |
| 95.0% | 36 hours | 50% of monthly fees |
| <95.0% | >36 hours | 100% of monthly fees (full refund for that month) |

**Enterprise SLA (custom, available on request):**

Enterprise customers may negotiate higher uptime targets (e.g., 99.9%) with stronger remedies (e.g., service credits + technical support enhancements).

Contact sales@getspanforge.com to discuss enterprise SLA terms for your organization.

### 3.2 How to Claim SLA Credits

1. **Request credit:** Email support@getspanforge.com within 30 days of incident
2. **Provide details:** Timestamps, affected services, impact
3. **We calculate credit:** Based on uptime metrics
4. **Credit applied:** To your next month's invoice (no cash refunds)

### 3.3 Exclusions

The SLA does not apply to downtime caused by:
- Your network or systems (internet outages, firewalls, etc.)
- Third-party services (AWS, Stripe, etc.)
- Denial of service (DDoS) attacks
- Your misconfiguration of the Service
- Scheduled maintenance (announced 7 days prior)
- Force majeure events (natural disasters, war, etc.)

### 3.4 Maximum Liability

Regardless of the cause, our total liability for SLA breaches is limited to service credits only. We are **not** liable for:
- Lost revenue
- Lost data
- Business interruption
- Consequential or indirect damages

---

## 4. Your Rights and Responsibilities

### 4.1 Your Rights

You have the right to:
- Access the Service 24/7 (subject to maintenance windows)
- Store audit events and compliance data in the Service
- Export your data in standard formats (JSON, CSV)
- Request deletion of your account and data (subject to Section 4.6)
- Use the Service for lawful purposes consistent with this agreement
- Receive technical support during business hours

### 4.2 Your Responsibilities

You are responsible for:
- **Compliance with laws:** Using the Service in compliance with applicable laws
- **Acceptable use:** Not using the Service for prohibited activities (see Section 4.3)
- **Security:** Protecting your login credentials, API keys, and passwords
- **Configuration:** Properly configuring policies, gates, and approval workflows
- **Notifications:** Informing your users that their data may be logged by Spanforge
- **Sensitive data:** Ensuring you don't submit unnecessary personal data to Spanforge

### 4.3 Prohibited Uses

You may **not** use Spanforge to:

❌ **Harassment or abuse:**
- Monitor employees without proper legal notice
- Track individuals without consent
- Enable discrimination based on protected characteristics (race, gender, age, religion, etc.)

❌ **Illegal activity:**
- Violate laws or regulations
- Facilitate fraud, money laundering, or terrorism financing
- Circumvent security controls
- Infringe intellectual property rights

❌ **Dangerous AI practices:**
- Implement deceptive AI systems (deepfakes, impersonation)
- Deploy surveillance systems without disclosure
- Use biased AI for high-stakes decisions without human review
- Deliberately hide AI decision-making from affected parties

❌ **Interfere with the Service:**
- Reverse-engineer the Service
- Attempt to gain unauthorized access
- Probe for security vulnerabilities (use bug bounty instead: security@getspanforge.com)
- Sell or resell the Service without permission

### 4.4 Enforcement of Prohibited Uses

If you violate Section 4.3:
1. **First violation:** Written warning, 30 days to cure
2. **Second violation:** Account suspension (all data preserved)
3. **Third violation:** Account termination, data deleted after 90 days

We may take immediate action (without warning) if you engage in:
- Illegal activity
- Threatening behavior
- Abuse of our support team
- Active DDoS attacks
- Data exfiltration

### 4.5 Acceptable Use Policy Details

#### A. Employee Monitoring
If you use Spanforge to monitor employees:
- ✅ You must disclose monitoring to employees before collection
- ✅ Monitoring must be proportionate and necessary for stated business purpose
- ✅ You must comply with local labor laws (e.g., GDPR Article 88)
- ✅ You must offer employees access to view their own data

#### B. Sensitive Data
If your audit events contain personal data:
- ✅ You must ensure legal basis for processing (consent, contract, legitimate interest)
- ✅ You remain the "data controller"; Spanforge is the "processor"
- ✅ You must sign our Data Processing Addendum (DPA) — available at getspanforge.com/dpa
- ✅ You must notify affected parties (employees, customers) of data processing

#### C. AI Decision Monitoring
If using Spanforge to audit AI system decisions:
- ✅ You must disclose to affected parties that decisions are being logged
- ✅ For high-stakes decisions, human review is recommended
- ✅ You remain liable for your AI system's decisions (Spanforge is observational only)
- ✅ You must not use Spanforge as an excuse for poor AI governance ("The system logged it, so it's compliant")

---

## 5. Payment and Fees

### 5.1 Pricing and Billing

**Free Tier:**
- ✅ Up to 500 events per month
- ✅ Single user
- ✅ Basic documentation access
- ✅ Community support (GitHub Discussions)
- No credit card required

**Paid Tiers:**
Pricing varies by plan. See [https://getspanforge.com/pricing](https://getspanforge.com/pricing) for current rates.

Typical billing:
- **Monthly billing:** Charged on the same day each month
- **Annual billing:** Full year paid upfront (10% discount typically)
- **Volume discounts:** Available for 10+ teams (contact sales@getspanforge.com)

### 5.2 Payment Terms

- Invoices are due within **30 days** of issuance
- Failure to pay results in account suspension (your data is preserved)
- If account is suspended for 60+ days, we may delete data
- Late fees: 1.5% per month (or maximum allowed by law)

### 5.3 Free Trial

If you receive a free trial:
- ✅ Trial is for 14 days (unless specified otherwise)
- ✅ Trial includes full feature access
- ❌ You will NOT be automatically charged after trial ends
- ✅ You can convert to paid plan anytime during trial

### 5.4 Price Changes

- We may change prices with **30 days' notice** via email
- Changes apply only to **renewals** (not active subscriptions)
- If you disagree with new price, you can cancel before renewal date

### 5.5 Refund Policy

**Simple rule:** Once you are charged, that period is yours to use. No refunds.

**Monthly plans:**
- ❌ No refunds (you can cancel anytime, but current month is charged)
- ✅ You can downgrade to a lower tier (refund = difference in monthly price, pro-rated)
- ✅ You can upgrade anytime (charged difference immediately)

**Annual plans:**
- ❌ No refunds after 30 days of purchase
- ✅ Within 30 days: Full refund if unused (rarely used, but available)
- ✅ After 30 days: No refunds (but you can downgrade tier, see below)

**Downgrades:**
- If you downgrade mid-month, you get a pro-rated refund/credit for the unused portion
- Example: You paid $100 for a month, downgraded after 15 days to a $50/month plan. You get a $50 credit toward future charges.

**SLA Credits (Section 3.2):**
- If we miss our SLA, you get a service credit (deducted from next invoice)
- Service credits are NOT cash refunds

**Special situations:**
- Account deletion: You lose access immediately. Unused portions of annual plans **may** be refunded (contact support@getspanforge.com)
- We terminate your account without cause: You get pro-rated refund of unused fees

**Summary table:**
| Scenario | Refund? |
|---|---|
| Monthly plan, used 1+ days | ❌ No |
| Annual plan, within 30 days | ✅ Yes (if unused) |
| Annual plan, after 30 days | ❌ No (credit for downgrade) |
| We miss SLA | ✅ Service credit (not cash) |
| We terminate without cause | ✅ Pro-rated refund |
| You request deletion | ❓ Contact support (case-by-case) |

### 5.6 Taxes

You are responsible for all applicable taxes (sales tax, VAT, GST, etc.).

If you have a tax-exempt status:
- Provide tax exemption certificate before billing
- We will remove taxes from future invoices

---

## 6. Limitation of Liability

### 6.1 Our Liability Cap

**Spanforge's total liability** for any claims arising from these Terms is limited to:
- **Amounts you paid in the past 12 months**, OR
- **$100 USD** (whichever is greater)

This applies to:
- ✅ Breach of contract
- ✅ Negligence
- ✅ Failure to deliver features
- ✅ Security breaches
- ✅ SLA violations
- ✅ Any other legal theory

### 6.2 We Are NOT Liable For

**We are not liable** for any:
- **Indirect damages:** Lost revenue, lost profits, lost data, business interruption
- **Consequential damages:** Damages that result indirectly from our breach
- **Punitive damages:** Damages intended to punish (beyond direct damages)
- **Third-party claims:** Claims by your customers, employees, or partners

**Exception to data loss exclusion:** This exclusion does not apply if the data loss resulted from our gross negligence or willful misconduct. If we fail to implement basic security measures (contrary to our documented practices), resulting in data loss, we remain liable for direct damages.

**Example:** If your AI model makes a bad decision (even if Spanforge failed to log it), we are not liable for the consequences. You remain responsible for your AI system's outputs. However, if we deliberately delete your audit logs, or fail to maintain promised backups due to gross negligence, we are liable for the direct damages (not indirect damages like lost revenue).

### 6.3 Exception: What We ARE Liable For

Our liability cap does **not** apply to:
- ✅ Indemnification obligations (Section 7)
- ✅ Intellectual property infringement (Section 9)
- ✅ Gross negligence or willful misconduct
- ✅ Violations of applicable law
- ⚠️ **Data breaches:** Liability for data breaches is subject to the liability cap, except in cases of gross negligence or willful misconduct

**Important:** Even in cases of data breach, liability is capped unless the breach results from our gross negligence (reckless disregard for security) or willful misconduct (intentional wrongdoing). Ordinary negligence remains subject to the liability cap in Section 6.1.

---

## 7. Indemnification

### 7.1 Your Indemnification

You agree to indemnify (defend and hold harmless) Spanforge from any claims, damages, or expenses arising from:

1. **Your use of the Service:**
   - Your configurations, policies, or workflows
   - Data you submit to the Service
   - Your AI systems' decisions (even if Spanforge logged them)

2. **Your violation of these Terms:**
   - Prohibited uses (Section 4.3)
   - Your responsibilities (Section 4.2)
   - Applicable laws or regulations

3. **Your data and content:**
   - Claims that your data infringes third-party IP
   - Claims that your policies violate laws
   - Claims by your employees or customers regarding data processing

### 7.2 Our Indemnification (Mutual)

Spanforge agrees to indemnify you from any claims, damages, or expenses arising from:

1. **Our infringement of IP:**
   - Claims that the Service infringes third-party patents, copyrights, trademarks, or trade secrets
   - **Exception:** Not if you modified the Service or combined it with other products

2. **Our violation of law:**
   - Claims that Spanforge violated applicable laws in providing the Service
   - **Exception:** Not if caused by your use in violation of these Terms

3. **Our gross negligence or willful misconduct:**
   - Claims resulting from our gross negligence or deliberate wrongdoing

### 7.3 Indemnification Process

If a third party sues either party and indemnification applies:
1. The indemnified party notifies the indemnifying party within 10 days
2. The indemnifying party has the right to control the defense (the other party can participate)
3. The indemnifying party pays all legal costs and settlement amounts
4. The indemnified party must obtain the indemnifying party's consent before settling (consent not unreasonably withheld)
5. The indemnified party provides reasonable cooperation

---

## 8. Termination

### 8.1 How You Can Terminate

You can cancel your Spanforge account anytime:
- **Online:** Delete your account from Settings → Account
- **Email:** contact support@getspanforge.com with "ACCOUNT DELETION REQUEST"
- **Effective:** Immediately (though you pay through the end of billing period)

### 8.2 How We Can Terminate

We can terminate your account if:
- **Payment failure:** You don't pay within 30 days of due date (we give 10 days' notice)
- **Prohibited use:** You violate Section 4.3 (we give 30 days' notice, except for illegal activity)
- **Breach of contract:** You materially breach other Terms (we give 30 days' notice)
- **Inactivity:** Account unused for 12+ months (we give 60 days' notice)

### 8.3 Effect of Termination

Upon termination:
- Your account is deactivated immediately
- You lose access to the Service
- Your data is preserved for **90 days**
- After 90 days, all data is deleted (unless retention is legally required)
- You are refunded pro-rated fees (for monthly plans) if terminated by us without cause

### 8.4 Data Deletion

To request early deletion before 90 days:
- Email privacy@getspanforge.com with "DATA DELETION REQUEST"
- Include account email and reason for request
- We delete within a reasonable timeframe (typically within 5 business days, longer if legally required)

**Important:** Deleted data cannot be recovered. We may retain data longer if required by law (e.g., for tax purposes: 7 years, or if legal proceedings are pending).

---

## 9. Intellectual Property

### 9.1 Spanforge IP Ownership

We own all IP in:
- **The Service:** Code, algorithms, architecture
- **Documentation:** Guides, tutorials, best practices
- **Standards:** RFC-0001, Spanforge Way, T.R.U.S.T. Framework
- **Trademarks:** "Spanforge," logos, designs

You may NOT:
- ❌ Reverse-engineer the **hosted Service** (the web app and APIs)
- ❌ Copy or modify our IP
- ❌ Create competing products based on our IP

**Important:** The reverse-engineering prohibition applies only to the Spanforge **hosted service** (getspanforge.com, platform.getspanforge.com). The **open-source SDK** is subject to its own license terms (typically MIT or Apache 2.0), which permit reverse-engineering. See your SDK license for details.

You MAY:
- ✅ Use the Service as designed
- ✅ Use the open-source SDK for your own projects (including reverse-engineering per SDK license)
- ✅ Reference our standards (RFC-0001) in your own work
- ✅ Submit feedback or suggestions (we own improvements)

### 9.2 Your IP Ownership

You retain ownership of:
- **Your data:** Audit events, policies, configurations you create
- **Your content:** Documents, code, workflows you upload

You grant us a **license to use** your data only for:
- Providing the Service to you
- Improving the Service (with anonymization)
- Aggregated analytics (we never reveal your data)
- Compliance with law (legal requests, audits)

### 9.3 License Grant to You

Subject to these Terms, we grant you a **limited, non-exclusive license** to:
- Access and use the Service (read-only for free tier)
- Store data in the Service
- Export your data in standard formats
- Use the open-source SDK under its license (typically MIT or Apache 2.0)

This license is:
- **Non-transferable:** You can't give it to someone else
- **Revocable:** We can revoke if you breach these Terms
- **Non-exclusive:** We can license to others too

### 9.4 IP Indemnification

If someone claims the Service infringes their IP:
- We will defend you at our expense
- We will pay damages (subject to liability cap)
- You must notify us immediately of the claim
- **Exception:** We are not liable if you modified the Service or combined it with other products

---

## 10. Warranties and Disclaimers

### 10.1 Our Limited Warranties

We warrant that:
- **The Service will be available** 99.5% of the time (per SLA)
- **The Service will function as described** in Documentation
- **We have the right** to grant the license (Section 9.2)

### 10.2 Disclaimers

**THE SERVICE IS PROVIDED "AS-IS"** without any other warranties.

We do NOT warrant that:
- ❌ The Service will meet your needs or requirements
- ❌ The Service will be error-free or uninterrupted
- ❌ The Service is "compliant" with any regulation
- ❌ The Service will prevent your AI from making bad decisions
- ❌ The Service is free from viruses or malware

### 10.3 "AS-IS" Disclaimer

**EXCEPT AS EXPRESSLY PROVIDED IN SECTION 10.1, SPANFORGE MAKES NO OTHER WARRANTIES, EXPRESS OR IMPLIED.**

This includes:
- No implied warranty of merchantability
- No implied warranty of fitness for a particular purpose
- No implied warranty of non-infringement
- No warranty of title

### 10.4 Your Responsibility

**YOU ARE RESPONSIBLE FOR:**
- Evaluating the Service before use
- Determining if the Service meets your needs
- Backing up your data (we backup, but you are ultimately responsible)
- Compliance with laws (the Service is a tool, not a compliance guarantee)

---

## 11. Confidentiality

### 11.1 Confidential Information

Each party agrees to keep the other's Confidential Information confidential. This includes:
- **Our information:** Source code, algorithms, pricing, customer lists
- **Your information:** Your data, policies, business practices

### 11.2 Exceptions

We can disclose Confidential Information without your permission if:
- **Required by law:** Subpoena, court order, regulatory request
- **Public domain:** Information that becomes public through no fault of ours
- **Independently developed:** We developed it without using your information
- **Third-party source:** We received it from a third party without confidentiality obligation

**When we disclose due to legal requirement:**
- We notify you promptly (unless prohibited by law)
- We request confidentiality from the requesting party
- We disclose only the minimum required

### 11.3 Duration

Confidentiality obligations:
- **Standard confidential information:** Survive **3 years** after termination of this agreement
- **Trade secrets:** Remain confidential **indefinitely** (for as long as they qualify as trade secrets under applicable law)

**Example:**
- A product feature roadmap: confidential for 3 years after you leave
- A proprietary algorithm or formula: confidential forever (if it qualifies as a trade secret)

This is consistent with how courts treat trade secrets (indefinite protection) vs. other confidential information (limited duration).

---

## 12. Dispute Resolution and Governing Law

### 12.1 Governing Law

These Terms are governed by the laws of **[MUST BE FINALIZED: India, Singapore, Delaware, or your jurisdiction]**, without regard to conflicts of law principles.

**🔴 IMPORTANT:** Before publishing this agreement, replace the bracketed jurisdiction with your actual choice. Recommended options:
- **India** (if incorporated in India, Spanforge's home jurisdiction)
- **Singapore** (if expanding to Asia-Pacific, neutral jurisdiction)
- **Delaware** (if US presence, standard for US companies)
- **Your specific jurisdiction** (where you're legally established)

**For customers outside [your chosen jurisdiction]:** Local laws in your jurisdiction may also apply to certain aspects of this agreement (consumer protections, employment laws, etc.). This choice of law does not waive rights you have under mandatory local laws.

**Mandatory overrides:** If you are in the EU, GDPR applies regardless of this choice of law. If you are in California, CCPA applies regardless. If you are in India, DPDP applies regardless.

### 12.2 Dispute Resolution Process

If a dispute arises:

**Step 1: Good Faith Negotiation (30 days)**
- Either party sends written notice describing the dispute
- The parties attempt to resolve through good faith discussion
- Both parties communicate in good faith to find a resolution

**Step 2: Escalation (14 days)**
- If not resolved, escalate to senior management
- Both parties' executives meet (virtually or in-person) to resolve

**Step 3: Mediation (30 days, optional)**
- If still unresolved, either party can propose mediation
- Mediation is not binding; either party can proceed to litigation
- Mediation costs split equally unless otherwise agreed

**Step 4: Litigation**
- If all else fails, either party can file a lawsuit
- **Venue preference:** Courts in [SAME JURISDICTION CHOSEN IN SECTION 12.1]
- **Costs:** Prevailing party may recover reasonable legal fees and court costs (at court's discretion)

### 12.3 Jurisdiction and Venue

By using the Service, you consent to:
- Personal jurisdiction in [SAME JURISDICTION CHOSEN IN SECTION 12.1]
- Venue in the courts of [SAME JURISDICTION CHOSEN IN SECTION 12.1] (if you are the plaintiff) or any jurisdiction where you are located (if you are the defendant)

**For customers outside [your chosen jurisdiction]:** You may also bring claims in courts of your own jurisdiction.

**Exception:** Either party can seek injunctive relief (emergency court orders) in any jurisdiction if necessary to prevent irreparable harm.

### 12.4 Limitations on Actions

Any claim against either party must be:
- **Filed within 2 years** of when you first discovered (or should have discovered) the problem
- **After 2 years, all claims are barred** (except claims excluded below)
- **Exceptions:** The following claims are NOT barred by the 2-year limit:
  - IP infringement claims (governed by applicable IP law)
  - Data breach claims (governed by privacy law timelines)
  - Claims for gross negligence or willful misconduct

**Important clarification:** The 2-year period is measured from when you discovered (or should have reasonably discovered) the problem, **not** from when the problem occurred.

**Example 1:** You discover a data breach on January 15, 2028. You have until January 15, 2030 to file a claim (2 years from discovery).

**Example 2:** A bug occurs on January 1, 2028, but you don't discover it until June 1, 2028. You have until June 1, 2030 to file (2 years from discovery, not from the bug date).

---

## 13. Entire Agreement and Modifications

### 13.1 Entire Agreement

These Terms, together with:
- Privacy Policy (getspanforge.com/privacy)
- Data Processing Addendum (getspanforge.com/dpa)
- Your Order Form (if any)
- Documentation (docs.getspanforge.com)

...constitute the **entire agreement** between us. They supersede all previous agreements, understandings, and negotiations.

### 13.2 Modification of Terms

We may update these Terms:
- **With 30 days' notice:** We email you of changes
- **Changes apply to new subscriptions immediately**
- **For existing subscriptions:** Changes apply at renewal (you can cancel if you disagree)
- **Emergency changes:** For security or legal requirements, may be effective immediately

If you continue using the Service after changes take effect, you accept the new Terms.

### 13.3 Order of Precedence

If documents conflict, priority is:
1. **Your Order Form** (specific agreement)
2. **Data Processing Addendum** (for data processing)
3. **These Terms of Service** (general rules)
4. **Privacy Policy** (data handling)

---

## 14. General Provisions

### 14.1 Severability

If any provision of these Terms is found invalid or unenforceable:
- That provision is modified to the minimum extent necessary to make it valid
- If it can't be modified, it is severed
- **Remaining Terms remain in full effect**

### 14.2 Waiver

If we don't enforce a right:
- We don't waive that right
- We can still enforce it later
- Not enforcing once doesn't mean we'll never enforce

### 14.3 Force Majeure

Neither party is liable for failure to perform due to events beyond reasonable control:
- Natural disasters (earthquakes, floods, hurricanes)
- Acts of war or terrorism
- Pandemics or epidemics
- Government actions (embargoes, sanctions)
- Utility outages
- Third-party actions (major cloud provider outages)

**Exception:** Payment obligations are not excused by force majeure.

### 14.4 Assignment

- **You can't assign** these Terms to someone else without our written permission
- **We can assign** to a successor company (e.g., if we're acquired) without your permission
- **We'll notify you** if we assign, and you can cancel within 30 days if you disagree

### 14.5 No Third-Party Beneficiaries

These Terms are between you and us only. No third parties have rights under these Terms (except where explicitly stated, e.g., our indemnification obligations).

### 14.6 Relationship Between Parties

You and Spanforge are **independent entities**. Nothing in these Terms creates:
- Partnership
- Joint venture
- Agency relationship
- Employment relationship

---

## 15. Contact Information

### 15.1 Where to Send Notices

**Legal notices** (termination, dispute, etc.):
- **Email:** legal@getspanforge.com (with subject line "LEGAL NOTICE")
- **Mailing address:**
  ```
  Spanforge Technologies Private Limited
  [Your Registered Address]
  [City, State, Postal Code, Country]
  ```

### 15.2 Support and General Questions

**For support or general questions:**
- **Email:** support@getspanforge.com
- **Chat:** Available on getspanforge.com (business hours)
- **Community:** GitHub Discussions (community.getspanforge.com)
- **Response time:** Within 24 business hours

### 15.3 Privacy and Data Questions

**For privacy or data subject requests:**
- **Email:** privacy@getspanforge.com (response within 30 days)
- **Data Subject Access Request:** dsar@getspanforge.com
- **See also:** Privacy Policy (getspanforge.com/privacy)

---

## 16. Acceptable Use Policy (Detailed)

### 16.1 Prohibited Content

You may not use Spanforge to:

❌ **Facilitate illegal activity:**
- Fraud, money laundering, terrorism financing
- Violate sanctions or export control laws
- Traffic in contraband or illegal goods
- Violate intellectual property laws

❌ **Harassment, abuse, or exploitation:**
- Threaten, harass, or intimidate people
- Collect personal data without consent
- Stalk or monitor people without permission
- Create deepfakes or impersonations
- Exploit minors in any way

❌ **Deceptive or unsafe AI:**
- Deploy AI that deliberately deceives people
- Use AI for high-stakes decisions without transparency
- Fail to disclose AI involvement in decisions
- Use AI with known biases that harm protected groups
- Implement surveillance without disclosure

❌ **Interfere with the Service:**
- Attempt unauthorized access
- Reverse-engineer the Service
- Probe for vulnerabilities (use bug bounty: security@getspanforge.com)
- Overload systems with requests (spam/DDoS)
- Sell or resell the Service without permission

### 16.2 Monitoring and Enforcement

- We **may** monitor for violations of this policy
- We may automatically block or suspend access for violations
- We retain logs for 90 days for investigation purposes
- We can report violations to law enforcement if required by law

---

## 17. GDPR, CCPA, and DPDP Special Terms

### 17.1 For EU Users (GDPR)

- **Data Processing:** You are the "controller"; we are the "processor." Sign our DPA (getspanforge.com/dpa).
- **Rights:** You have rights under Articles 15–22 of GDPR. See Privacy Policy.
- **Data Transfers:** We use Standard Contractual Clauses (SCCs) for transfers outside the EU.

### 17.2 For California Users (CCPA)

- **Privacy Rights:** You have rights under CCPA. See Privacy Policy.
- **No Sale:** We do not "sell" personal data. No opt-out is required.
- **Deletion:** You can request deletion of your data. See Privacy Policy.

### 17.3 For India Users (DPDP)

- **Data Storage:** Personal data is stored in India (AWS ap-south-1) where feasible.
- **Consent:** We seek your consent for non-essential processing.
- **Grievance:** Contact grievance@getspanforge.com for DPDP issues.

---

## 18. Additional Provisions

### 18.1 Export Compliance

The Service may be subject to applicable export control laws and regulations, including but not limited to those of the United States, India, European Union, and other jurisdictions where Spanforge operates.

You may not:
- Export or re-export the Service to sanctioned countries or regions
- Provide the Service to sanctioned parties or entities
- Facilitate access by prohibited persons or organizations
- Use the Service in violation of export control laws

**Note:** If you are subject to export controls (e.g., US person, EU resident), you remain responsible for compliance. If you are unsure whether export controls apply, consult your legal counsel.

### 18.2 No Children Under 13

The Service is not directed to children under 13. If you are under 13, do not use the Service. If we learn you are under 13, we will delete your account and data.

### 18.3 Feedback and Suggestions

If you provide feedback or suggestions about the Service:
- You grant Spanforge a **perpetual, irrevocable, royalty-free, worldwide license** to use, modify, and incorporate your feedback into the Service
- You acknowledge that we may use your feedback without compensation or attribution
- You represent that you have the right to grant this license

**Example:** If you suggest "add dark mode," we can implement it without paying you or crediting you.

**Important:** This applies only to feedback about the Service itself, not to your data or confidential information. If your feedback includes confidential information, it remains subject to our Confidentiality section (Section 11).

### 18.4 Safety and Compliance Reminder

**Remember:** Spanforge is a **governance tool**, not a guarantee of compliance.

- ✅ Use it to log and track AI decisions
- ✅ Use it to enforce policies
- ✅ Use it to generate audit evidence
- ❌ Don't rely on it alone for compliance
- ❌ Don't use it as an excuse for poor AI governance
- ❌ Don't assume using Spanforge makes you compliant

**You are ultimately responsible** for your AI system's safety, fairness, and compliance.

---

## Signature & Acceptance

By creating an account or continuing to use Spanforge, you agree to these Terms of Service.

**If you do not agree, do not use the Service.**

---

**Last Updated:** May 2, 2026  
**Version:** 1.0  
**Effective Date:** May 2, 2026

For questions, contact:
- **Legal:** legal@getspanforge.com
- **Support:** support@getspanforge.com
- **Privacy:** privacy@getspanforge.com
