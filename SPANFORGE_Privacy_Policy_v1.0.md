# Privacy Policy
## Spanforge Compliance & Governance Platform

**Last Updated:** May 2, 2026  
**Effective Date:** May 2, 2026  
**Version:** 1.0.2 (Final Edition)  
**Note:** This Privacy Policy has been carefully drafted for legal robustness. We recommend legal review by qualified counsel in your jurisdiction before use.

---

## ⚠️ Important: Shared Responsibility

Spanforge is a **governance platform that helps you manage AI decision-making**. This means:

1. **You control governance data** — You decide what data goes into audit events, policies, and approval workflows. We're the processor; you're the controller.

2. **We're transparent about our own data collection** — We collect account info, usage data, and cookies. This policy explains what and why.

3. **You remain responsible** for:
   - Ensuring audit events don't contain unnecessary personal data
   - Complying with privacy laws when using Spanforge
   - Notifying your end-users if you process their data
   - Implementing appropriate privacy practices in your AI systems

4. **We provide the tools**; you make the governance decisions — Spanforge enables policies, gates, and approvals. You decide how to use them.

This policy explains how we handle data. For guidance on using Spanforge compliantly in your organization, see our [Data Processing Addendum (DPA)](https://getspanforge.com/dpa) and [Best Practices Guide](https://docs.getspanforge.com/guides/best-practices).

---

## 1. Introduction

Spanforge ("**we**," "**us**," "**our**," or "**Company**") is committed to protecting your privacy and ensuring you have a positive experience on our platform and website. This Privacy Policy explains how we collect, use, disclose, and otherwise process personal data in accordance with applicable regulations including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and India Digital Personal Data Protection Act (DPDP).

This Privacy Policy applies to:
- **Spanforge SDK** — The open-source software library (`pip install spanforge`)
- **Spanforge Platform** — The cloud-hosted governance platform (getspanforge.com, platform.getspanforge.com)
- **Spanforge Products** — All SaaS products (P2: GitHub App, P8: Cloud, P1: Managed SaaS, etc.)
- **Spanforge Website** — Our marketing and documentation website (getspanforge.com)

If you have questions about this Privacy Policy, please contact us at **[privacy@getspanforge.com](mailto:privacy@getspanforge.com)**.

---

## Company Identity

**Spanforge Technologies Private Limited**  
[Your Registered Address]  
[City, State, Postal Code, Country]  
Jurisdiction of Incorporation: [India / Netherlands / etc.]  
Registration Number: [Enter statutory registration number]  
Email: [privacy@getspanforge.com](mailto:privacy@getspanforge.com)  
Phone: [Optional]

**Data Protection Officer:**  
Name: [DPO Name]  
Email: [dpo@getspanforge.com](mailto:dpo@getspanforge.com)  
(Required under GDPR Article 37 for organizations subject to GDPR)

---

## 2. Personal Data We Collect & Roles We Play

### 2.0 Important: Our Role — Data Controller AND Processor

This is critical to understand. **Spanforge plays dual roles**:

#### **Spanforge as a Data Processor**
For audit events and compliance data you submit via the platform:
- We process this data **on your instructions**
- You (the organization/customer) are the "data controller"
- We must follow your documented processing instructions (see Data Processing Addendum)
- Your data subject rights (access, delete, correct) are primarily your responsibility to fulfill
- We assist by providing audit trails and evidence bundles

**Example:** If your system logs a decision by "user_12345", you control how that actor ID is used; we only store and audit it per your instructions.

#### **Spanforge as a Data Controller**
For data we collect independently, we are solely responsible:
- Your account information (name, email, billing address, password hash)
- Your login activity and API usage
- Website behavior and analytics
- Support tickets and feedback you send us
- Payment and billing records
- Marketing communications (newsletters, product announcements)

For this data, **you have direct rights** under GDPR/CCPA/DPDP to access, correct, or delete your own account information.

#### **Key Implication**
This means:
- ✅ You have **strong control** over governance data (you're the controller)
- ✅ We're **transparent** about what we collect independently
- ⚠️ For audit data, **you remain responsible** for ensuring actor IDs and payloads comply with privacy laws (we provide the tools, you make the decisions)

This distinction matters for your rights and our obligations. See Section 4.1 for details.

---

### 2.1 What is Personal Data?

Personal data is any information that relates to an identified or identifiable person. This includes:
- **Identifiers:** Name, email address, phone number, postal address
- **Account information:** Username, password hash, authentication tokens
- **Usage data:** IP address, browser type, pages visited, timestamps
- **Device information:** Device type, operating system, unique device identifiers
- **Metadata:** Timestamps, actor IDs, model IDs, action types (in audit events)

**Important:** In the context of Spanforge, actor IDs and other audit metadata *may constitute personal data* depending on whether they can be linked back to identifiable individuals. Customers remain responsible for ensuring that personal data is not unnecessarily included in audit event payloads.

### 2.2 Data We Collect and Why

#### A. **Account Information** (Required to provide the service)
When you create a Spanforge account, we collect:
- **Full name** — To identify you
- **Email address** — Primary communication + account recovery
- **Phone number** (optional) — Account verification + support contact
- **Organization name** — To organize your workspace
- **Billing address** (if paying) — For invoicing

**Legal basis:** Contractual necessity (GDPR Article 6(1)(b)) + Legitimate interest (6(1)(f))

---

#### B. **Audit Event Metadata** (Core product feature)
When you use Spanforge, we collect metadata about decisions made by your AI systems:
- **Event ID** (ULID) — Unique identifier for the event
- **Timestamp** — When the decision was made
- **Actor ID** — Who/what made the decision (user ID or service account ID)
- **Model ID** — Which AI model was involved
- **Action type** — What was done (read, write, execute, etc.)
- **Resource ID** — What was acted upon (anonymized)
- **Decision outcome** — APPROVE, REJECT, or ESCALATE
- **Approval workflow** — Who approved the decision + when

**What we do NOT collect:** Customer's actual business data, model inputs, model outputs, or customer PII.

**Legal basis:** Contractual necessity (service delivery) + Legitimate interest (compliance + audit trail)

---

#### C. **Authentication & Authorization Data**
- **Login events** — Timestamp, IP address, authentication method (OAuth2, SAML, JWT)
- **API keys/tokens** — Hashed, never stored in plaintext
- **Role assignments** — Which roles you have (viewer, editor, admin, etc.)
- **Multi-factor authentication** — MFA phone number (if enabled)

**Legal basis:** Contractual necessity + Security

---

#### D. **Website & Usage Analytics** (Optional, with consent)
If you don't opt out, we may collect:
- **Page views** — Which docs/blog posts you read
- **Time on page** — How long you spent on each page
- **Click events** — Which links you clicked
- **Download events** — Which files you downloaded

**Tools used:** [Google Analytics 4 (GA4) with anonymization enabled] or [Plausible Analytics (privacy-first alternative)]

**Legal basis:** Consent (GDPR Article 6(1)(a)) — you can opt out at any time

**Opt-out link:** [Unsubscribe from analytics](https://example.com/analytics-opt-out)

---

#### E. **Support & Customer Service Data**
When you contact support, we collect:
- **Email messages** — Your questions + our responses
- **Chat transcripts** — If using live chat
- **Phone recordings** (if applicable) — With your consent
- **Attachments** — Files you send for debugging

**Legal basis:** Contractual necessity + Legitimate interest (customer support)

---

#### F. **Payment Information** (For paid plans)
- **Credit card details** — **NOT stored by us**; handled by [Stripe/PayPal]
- **Billing name & address** — For invoicing
- **Transaction history** — Records of payments made

**Legal basis:** Contractual necessity (billing)

**Note:** We do not store credit card numbers. Payment processing is handled by [Stripe, Inc.](https://stripe.com/privacy), which is certified under the EU-US Data Privacy Framework.

---

#### G. **Device & Network Data**
- **IP address** — Your internet protocol address
- **Browser type & version** — Chrome, Firefox, Safari, etc.
- **Operating system** — Windows, macOS, Linux, iOS, Android
- **Device identifiers** — Unique device ID (not personally identifying by itself)
- **Log data** — Timestamps, error messages, stack traces

**Legal basis:** Legitimate interest (security, debugging, service improvement)

---

#### H. **Cookies & Tracking Technologies**

We use the following types of cookies:

| Cookie Type | Purpose | Opt-in/Opt-out |
|---|---|---|
| **Session cookies** | Keep you logged in | Required (no opt-out) |
| **Security cookies** | CSRF protection, fingerprinting | Required (no opt-out) |
| **Analytics cookies** | Track page views, user behavior | Opt-out available |
| **Marketing cookies** | Retargeting, conversion tracking | Opt-out available |

**How to manage cookies:**
- Most browsers allow you to refuse cookies or alert you when a cookie is being set
- To opt out of analytics: [See analytics opt-out link above]
- To opt out of marketing: [See marketing opt-out link below]

**Legal basis:** Consent (for non-essential cookies) + Legitimate interest (security)

---

### 2.3 What We Are Designed NOT to Intentionally Collect

Spanforge is **architected to avoid** intentional collection of certain sensitive data types:
- ❌ **Customer business data** — Your actual AI model inputs, outputs, or proprietary business logic (unless you intentionally include in audit events)
- ❌ **Customer end-user personal data** — We do not have direct access to or intentionally collect your end-users' personal information
- ❌ **Model weights or parameters** — The trained parameters of your AI models
- ❌ **Complete API responses** — Full model outputs (unless customers explicitly include in event payloads)
- ❌ **Unencrypted passwords** — We store only hashed passwords using bcrypt or equivalent
- ❌ **Children's data** — We do not knowingly or intentionally collect data from children under 13 (COPPA)

**Important caveat:** While Spanforge is architected to avoid these data types, **customers remain responsible for ensuring that sensitive data is not unintentionally included in**:
- Event payloads (audit event metadata and optional fields)
- Support tickets and file attachments
- Configuration files or policy definitions
- API request/response logs you ask us to analyze

**If you accidentally send sensitive data to us:**
1. Notify us without undue delay at [privacy@getspanforge.com](mailto:privacy@getspanforge.com)
2. We will prioritize deletion of that data
3. We will help you audit whether the data was accessed or exposed
4. We will confirm deletion status within 5 business days or explain any compliance-based retention

This is a **shared responsibility model**: we design systems to prevent sensitive data collection, but you control what data you submit to the platform.

---

## 3. How We Use Personal Data

### 3.1 Service Delivery

We use your personal data to:
1. **Create and manage your account** — Authentication, workspace organization
2. **Deliver the Spanforge platform** — Process your governance requests, log audit events
3. **Send service notifications** — Alerts about gate approvals, policy violations, compliance events
4. **Provide technical support** — Answer your questions, debug issues
5. **Process payments** — Billing and subscription management

**Legal basis:** Contractual necessity (GDPR Article 6(1)(b))

---

### 3.2 Compliance & Legal Obligations

We use your data to:
1. **Maintain audit trails** — Demonstrate that your system followed governance rules (required by GDPR Article 5(1)(f), EU AI Act Article 28, SOC 2)
2. **Generate compliance reports** — Evidence bundles for regulators and auditors
3. **Respond to legal requests** — Subpoenas, GDPR data subject requests, law enforcement requests
4. **Detect and prevent fraud** — Identify suspicious activity, prevent account abuse
5. **Enforce our Terms of Service** — Monitor for violations (e.g., unauthorized API access)

**Legal basis:** 
- Legal obligation (GDPR Article 6(1)(c)) for regulatory/audit requirements
- Legitimate interest (Article 6(1)(f)) for fraud prevention and ToS enforcement — we perform balancing tests to ensure our interests don't override your privacy rights

---

### 3.3 Security & Fraud Prevention

We use your data to:
1. **Detect suspicious activity** — Brute-force login attempts, unusual API patterns, account compromises
2. **Prevent unauthorized access** — Monitor for compromised credentials, account takeovers
3. **Secure communications** — Encrypt data in transit, validate digital signatures
4. **Audit access logs** — Who accessed what, when, and why (essential for detecting insider threats)

**Legal basis:** Legitimate interest (GDPR Article 6(1)(f)) — we have a strong interest in preventing unauthorized access, and this interest generally does not override your privacy rights.

---

### 3.4 Product Improvement & Analytics

We use aggregated, anonymized data to:
1. **Understand usage patterns** — Which features are most used, which are neglected
2. **Improve documentation** — Make guides clearer based on user behavior
3. **Develop new features** — What users ask for in support tickets
4. **Optimize performance** — Which pages load slowly, which integrations fail often
5. **Fix bugs** — Error logs help us identify and fix problems

**Legal basis:** 
- **Consent** (GDPR Article 6(1)(a)) for non-essential analytics — you can opt out at any time via the unsubscribe link in the footer
- **Legitimate interest** (Article 6(1)(f)) for essential product analytics — necessary to provide and improve the service

---

### 3.5 Marketing & Business Communication

We may use your data to:
1. **Send newsletters** — Product updates, compliance news, best practices
2. **Announce new features** — Updates about releases that may interest you
3. **Invite to events** — Webinars, conferences, product demos
4. **Customer surveys** — Ask for feedback on features and satisfaction
5. **Case studies** — (with your written consent only) Showcase how you use Spanforge

**Legal basis:** 
- **Consent** (GDPR Article 6(1)(a)) — You can opt out of any marketing communication via the unsubscribe link
- **Legitimate interest** (Article 6(1)(f)) for surveys and feedback — with an easy opt-out mechanism
- **Explicit consent** only for case studies or testimonials that use your organization's name/logo

---

## 4. How We Share Personal Data

### 4.1 Who We Share Data With

#### **A. Service Providers (Processors)**
We share data with trusted vendors who process data on our behalf:

| Service | Data Shared | Purpose | DPA in place? |
|---|---|---|---|
| [Stripe](https://stripe.com/privacy) | Billing name, email, payment info | Payment processing | ✅ Yes |
| [AWS](https://aws.amazon.com/privacy) | Audit events, account info | Cloud infrastructure | ✅ Yes |
| [Datadog](https://www.datadoghq.com/privacy) | Error logs, performance metrics | Application monitoring | ✅ Yes |
| [Mailgun](https://www.mailgun.com/privacy) | Email address | Email delivery | ✅ Yes |
| [Okta](https://www.okta.com/privacy) (if enabled) | Email, profile, roles | Single sign-on (SSO) | ✅ Yes |
| [GitHub](https://github.com/privacy) (for P2 product) | Email, user ID, repo access | GitHub App integration | ✅ Yes |

**Data Protection:** All processors have signed Data Processing Agreements (DPAs) per GDPR Article 28.

---

#### **B. We Do NOT Share Data With:**
- ❌ **Advertisers** — We don't sell your data to third-party advertisers
- ❌ **Data brokers** — We don't share data with companies that sell personal data
- ❌ **Marketing partners** — We don't share email lists with other companies
- ❌ **Business partners** — We don't cross-sell to partners without your permission

---

#### **C. Legally Required Disclosures**
We may disclose personal data when required by law:
- **Subpoenas** — Law enforcement requests (we require valid legal process)
- **GDPR Article 15 requests** — Data subject access requests (within 30 days)
- **CCPA requests** — Consumer right-to-know requests (within 45 days)
- **DPDP requests** — Data principal requests (within 30 days per Indian law)

**Our process:**
1. We assess the legal request's validity
2. We notify you (unless prohibited by law)
3. We provide only the minimum data required
4. We keep records of all requests

---

#### **D. Business Transfers**
If Spanforge is acquired, sold, or merges with another company:
- We will notify you (by email) at least 30 days before transfer
- You may opt out by deleting your account
- The new owner must honor this Privacy Policy (or notify you of changes)

**Legal basis:** Legitimate interest (6(1)(f))

---

### 4.2 International Data Transfers

#### **For EU/UK/Swiss Users (GDPR, UK GDPR, Swiss FDPIC)**

We transfer personal data outside the EEA to:
- **United States** — For cloud infrastructure (AWS) and payment processing (Stripe)
- **Other regions** — As needed for service delivery and legal compliance

**Our safeguards:**
1. ✅ **EU-US Data Privacy Framework (DPF)** — Stripe and AWS are DPF-certified
2. ✅ **Standard Contractual Clauses (SCCs)** — In place with all processors
3. ✅ **UK adequacy decision** — Recognized for transfers from UK
4. ✅ **Swiss FDPIC adequacy** — Recognized for transfers from Switzerland
5. ⚠️ **EDPB Schrems II compliance** — We continuously monitor EDPB guidance and adjust safeguards if needed

**Your rights:**
- You can request information about transfer mechanisms (email [privacy@getspanforge.com](mailto:privacy@getspanforge.com))
- You can object to transfers (we'll work with you on alternatives where feasible)
- If EDPB invalidates our transfer mechanisms, we will implement supplementary safeguards or ask for additional explicit consent

**Note:** EU authorities are actively scrutinizing international transfers. If you are subject to stringent EU privacy requirements, please discuss transfer mechanisms with our sales/compliance team before signing.

---

#### **For India Users (DPDP Act)**

Under the Digital Personal Data Protection Act, 2023, data localization rules are still evolving. We handle transfers as follows:

**Account and personal metadata:**
- We store your account profile (name, email, billing) in AWS Mumbai region (ap-south-1) where feasible
- Limited exceptions exist for disaster recovery, backup, and support infrastructure (geographically distributed)

**Audit event data:**
- Audit events are processed per your configuration (regional options available where supported)
- If you select India storage, we prioritize ap-south-1

**Cross-border transfers:**
- For services requiring US-based infrastructure (support, monitoring), we:
  - Seek your explicit consent before enabling such features
  - Implement contractual protections (Standard Contractual Clauses)
  - Allow you to opt out of non-critical services with international transfer

**Your choice:**
- You can opt out of cross-border processing for certain services
- We will work with you to identify India-based alternatives where available
- Some features (e.g., Datadog monitoring) may not be available without cross-border transfer

**Important:** DPDP rules are still being finalized. We will update this policy as rules clarify. If you have strict localization requirements, inform us before signing a contract.

---

## 5. Your Rights

### 5.1 GDPR Rights (EU/UK/Swiss Users)

You have the following rights under GDPR Articles 15–22:

#### **Article 15: Right to Access**
You can request a copy of all personal data we hold about you.
- **How to request:** Email [dsar@getspanforge.com](mailto:dsar@getspanforge.com)
- **What we'll provide:** All data we hold, in machine-readable format (CSV, JSON)
- **Timeline:** Within 30 days of request

#### **Article 16: Right to Rectification**
You can correct inaccurate personal data.
- **Example:** If your email is wrong, we'll fix it
- **How to request:** Log in and edit your profile, or email us
- **Timeline:** Without undue delay

#### **Article 17: Right to Erasure ("Right to be Forgotten")**
You can request deletion of your personal data in certain circumstances.
- **Grounds for erasure:**
  - You no longer need the service
  - We no longer have a legal basis to process
  - You withdraw consent
- **Exceptions:** We must keep audit events for 7 years (regulatory/tax requirement)
- **How to request:** Email [dsar@getspanforge.com](mailto:dsar@getspanforge.com) with "ERASURE REQUEST"
- **Timeline:** Within 30 days (may take longer if we need to verify legal basis)

#### **Article 18: Right to Restrict Processing**
You can ask us to "freeze" processing (we keep data but don't use it actively).
- **When you might use this:** If you dispute the accuracy of data but don't want deletion yet
- **How to request:** Email [dsar@getspanforge.com](mailto:dsar@getspanforge.com)
- **Timeline:** Within 30 days

#### **Article 19: Notification of Rectification/Erasure/Restriction**
If we rectify or restrict your data, we notify other processors (with your permission).

#### **Article 20: Right to Data Portability**
You can receive your data in a machine-readable format and transmit it to another service.
- **Format:** CSV, JSON, or other structured format
- **How to request:** Email [dsar@getspanforge.com](mailto:dsar@getspanforge.com)
- **Timeline:** Within 30 days

#### **Article 21: Right to Object**
You can object to processing based on "legitimate interest."
- **What you can object to:**
  - Marketing emails (we'll unsubscribe without undue delay)
  - Profiling/analytics (we'll disable analytics for your account)
  - Certain automated decision-making
- **How to request:** Email [privacy@getspanforge.com](mailto:privacy@getspanforge.com)
- **Timeline:** We acknowledge your request without undue delay

#### **Article 22: Rights Related to Automated Decision-Making**
You have the right not to be subject to decisions made solely by automated means if those decisions produce legal or significant effects.
- **Current status:** Spanforge does not make automated decisions about you. All gate approvals are made by your designated approvers (humans).
- **If this changes:** We will notify you and ask for consent

---

### 5.2 CCPA Rights (California Residents)

You have the following rights under CCPA:

#### **Right to Know (CCPA §1798.100)**
You can request what personal data a business collects, uses, and shares.
- **Our response:** We'll provide a copy of your data, how we use it, and who we share it with
- **How to request:** Email [ccpa@getspanforge.com](mailto:ccpa@getspanforge.com)
- **Timeline:** Within 45 days

#### **Right to Delete (CCPA §1798.105)**
You can request deletion of personal data we collected from you.
- **Exceptions:** We may retain data if required by law (audit trails: 7 years)
- **How to request:** Email [ccpa@getspanforge.com](mailto:ccpa@getspanforge.com)
- **Timeline:** Within 45 days

#### **Right to Opt-Out of Sales (CCPA §1798.120)**
You can opt out of the "sale" of personal data.
- **Our commitment:** **We do not sell personal data.** This right does not apply.
- **Our definition of "sale":** We do not exchange personal data for money, products, or services

#### **Right to Correct Inaccurate Data (CCPA §1798.100(d))**
You can request correction of inaccurate personal data.
- **How to request:** Email [ccpa@getspanforge.com](mailto:ccpa@getspanforge.com)
- **Timeline:** Within 45 days

#### **Right to Limit Use (CCPA §1798.115)**
You can request that we limit how we use your personal data.
- **How to request:** Email [ccpa@getspanforge.com](mailto:ccpa@getspanforge.com)
- **Timeline:** Within 45 days

#### **Non-Discrimination (CCPA §1798.125)**
We will not discriminate against you for exercising your CCPA rights.
- ✅ We won't charge higher prices
- ✅ We won't deny service
- ✅ We won't provide worse service

---

### 5.3 DPDP Rights (India Residents)

Under the Digital Personal Data Protection Act, 2023, you have:

#### **Right to Access (DPDP §8)**
You can request your personal data.
- **Timeline:** Within 30 days

#### **Right to Correction (DPDP §8)**
You can correct inaccurate personal data.
- **Timeline:** Without undue delay for account info, within 30 days for other data

#### **Right to Erasure (DPDP §10)**
You can request deletion in certain circumstances.
- **Exceptions:** Legal/regulatory requirements (audit trails: 7 years)
- **Timeline:** Within 30 days

#### **Grievance Redressal (DPDP §5)**
If we don't respond to your request within 30 days, you can file a grievance.
- **Grievance officer:** [dpo@getspanforge.com](mailto:dpo@getspanforge.com)
- **Timeline for response:** Within 30 days of grievance

#### **Right to Withdraw Consent (DPDP §6)**
For optional data (analytics), you can withdraw consent anytime.
- **How:** Unsubscribe link in emails or email us

---

### 5.4 How to Exercise Your Rights

To exercise any of the above rights, please:

1. **Email us:**
   - **GDPR/DPDP requests:** [dsar@getspanforge.com](mailto:dsar@getspanforge.com)
   - **CCPA requests:** [ccpa@getspanforge.com](mailto:ccpa@getspanforge.com)
   - **General privacy questions:** [privacy@getspanforge.com](mailto:privacy@getspanforge.com)

2. **Include in your request:**
   - Your full name
   - Email address associated with your account
   - Type of request (access, delete, correct, etc.)
   - Specific details (which data, why you're requesting)
   - Your jurisdiction (EU, US, India, etc.)

3. **Verification:**
   - We may ask for proof of identity (especially for CCPA/DPDP)
   - We may need 30 days to verify your request

4. **Timeline:**
   - **GDPR:** 30 days (can extend to 60 days if complex)
   - **CCPA:** 45 days (California law allows this)
   - **DPDP:** 30 days (India law requires this)

---

## 6. Data Retention

### 6.1 How Long We Keep Your Data

| Data Type | Retention Period | Legal/Business Reason |
|---|---|---|
| **Account profile** (name, email, phone) | Until account deletion + 30 days | Service delivery |
| **Login/authentication logs** | 90 days | Security, fraud prevention, incident investigation |
| **Audit events** (governance decisions) | Up to 7 years | EU AI Act Article 28 (recordkeeping), regulatory/tax requirements, customer request |
| **Compliance evidence bundles** (CEC) | Up to 7 years | Regulatory audit proof of governance |
| **Support tickets & correspondence** | 2 years | Customer service, dispute resolution, legal defense |
| **Payment & billing records** | 7 years | Tax requirements, accounting standards |
| **Website analytics data** | 14 months (anonymized) | Product improvement, feature analysis |
| **Cookies** | Session to 1 year | Session management, security (CSRF tokens), fraud prevention |
| **Deleted account data** | Purged within 90 days | Except legal hold or regulatory requirement |

### 6.2 Retention Justification Details

**Why up to 7 years for audit events?**
- **EU AI Act Article 28** (proposed): May require record-keeping for high-risk AI systems; exact duration depends on risk classification
- **Regulatory requirements:** Many jurisdictions have record-keeping obligations ranging from 3–7 years
- **Tax/accounting standards:** Most countries require financial transaction records for 5–7 years
- **Enterprise contracts:** Many SaaS agreements specify 7-year audit retention for compliance and dispute resolution
- **Litigation hold:** If disputes arise, we may retain longer per legal requirement

**This is NOT unlimited:** You can request earlier deletion of audit trails if:
- ✅ No active legal proceedings
- ✅ No regulatory investigations
- ✅ No contractual requirement to retain
- ✅ Your account is in good standing (no dispute)

**How to request early deletion:**
Email [dsar@getspanforge.com](mailto:dsar@getspanforge.com) with "EARLY DELETION REQUEST" and explain your circumstances. We will evaluate based on applicable legal requirements.

---

### 6.3 Deletion Process

When you request account deletion:
1. **Immediate:** Your login credentials are revoked, data marked for deletion
2. **Within 30 days:** Non-regulatory data deleted (profile, support tickets, API keys)
3. **Audit trails:** Retained for applicable legal period (up to 7 years) — we'll notify you of specific retention dates

**What you can control:**
- ✅ Delete your account profile (name, email, etc.)
- ✅ Delete your support tickets and correspondence
- ⚠️ Request early deletion of audit trails (evaluated on case-by-case basis)

You can request earlier deletion of audit trails only if:
- No legal proceedings are pending
- No regulatory investigations are ongoing
- You have no active contracts requiring retention
- No customer disputes exist

We will confirm deletion status within 30 days.

---

## 7. Data Security

### 7.1 How We Protect Your Data

We implement industry-standard security measures designed to protect your data. While we cannot guarantee absolute security, we are committed to:

#### **Encryption**
- **At rest:** We employ AES-256 encryption for data stored in our systems
- **In transit:** We use TLS 1.3 for data transmitted across networks
- **In memory:** We clear sensitive data (passwords, API keys) from memory after use where feasible

#### **Access Control**
- **Authentication:** We support OAuth2, SAML 2.0, JWT, and basic authentication options
- **Multi-factor authentication (MFA):** Optional for all users, recommended for admins
- **Role-based access control (RBAC):** 10 standard roles with granular permission options
- **API key security:** Keys are hashed, never stored in plaintext

#### **Audit Logging**
- **Access tracking:** We log API calls with actor, resource, and timestamp information
- **Log retention:** Logs are retained for a minimum of 90 days and maximum of 1 year
- **Log integrity:** We employ cryptographic signing (HMAC-SHA256) to detect tampering
- **Monitoring:** We implement monitoring for suspicious patterns

#### **Vulnerability Management**
- **Dependency scanning:** We conduct regular automated scans using Dependabot and Snyk
- **Security patches:** We aim to apply critical security patches promptly, typically within 24 hours where feasible
- **Penetration testing:** We conduct internal penetration testing on a quarterly basis and engage external security researchers annually
- **Bug bounty:** We welcome responsible disclosure via [security@getspanforge.com](mailto:security@getspanforge.com)

#### **Infrastructure Security**
- **Cloud provider:** [AWS with SOC 2, ISO 27001, and HIPAA compliance certifications]
- **Regional data storage:** We offer regional storage options (EU: eu-west-1, India: ap-south-1, US: us-east-1)
- **Backup & disaster recovery:** We perform automated daily backups with testing, stored in geographically separate regions
- **Network security:** We implement VPC isolation, Web Application Firewall (WAF), and DDoS mitigation measures

---

### 7.2 What We DON'T Do

- ❌ We do not use your data for targeted ads or behavioral advertising
- ❌ We do not use cookies to track you across other websites
- ❌ We do not share data with data brokers or analytics companies
- ❌ We do not build behavioral profiles for sale
- ❌ We do not use dark patterns to trick you into sharing data

---

### 7.3 Data Breach Notification

If we discover a data breach:
1. **Within 72 hours:** We notify you via email (GDPR requirement)
2. **In the notification:** We include:
   - What data was affected
   - What we're doing to contain the breach
   - What steps you should take
   - Contact for more information
3. **To regulators:** We notify the appropriate authority (GDPR Article 33)
4. **Transparency report:** Published annually on our website

---

## 8. Cookies & Tracking

### 8.1 Types of Cookies We Use

| Cookie Name | Type | Purpose | Expiration | Category | Opt-in/Opt-out |
|---|---|---|---|---|---|
| `session_id` | Session | Keep you logged in | End of session | **Required** | No opt-out |
| `csrf_token` | Security | Prevent cross-site attacks | 1 year | **Required** | No opt-out |
| `device_fingerprint` | Security | Detect account takeover | 1 year | **Required** | No opt-out |
| `_ga` | Analytics | Track page views (GA4) | 2 years | **Optional** | ✅ Opt-out available |
| `_gat` | Analytics | Throttle analytics requests | 1 minute | **Optional** | ✅ Opt-out available |
| `utm_source` | Analytics | Track referral source | 6 months | **Optional** | ✅ Opt-out available |
| `marketing_id` | Retargeting | Show relevant ads | 1 year | **Optional** | ✅ Opt-out available |

---

### 8.2 Consent & Cookie Management

**When you first visit our website:**
- You see a cookie banner explaining essential vs optional cookies
- You can select your preference by clicking **accept all** or **manage preferences**
- Clicking "Manage" lets you toggle optional cookies on/off individually

**Your choice is recorded:**
- Your cookie preference is recorded and stored to demonstrate compliance with applicable laws
- Your preference is saved for **1 year** (in a preference cookie)
- You can change your mind anytime by revisiting the cookie settings
- We maintain an audit trail of consent for GDPR, CCPA, and DPDP compliance

**How to withdraw consent:**
1. Visit [https://getspanforge.com/cookies](https://getspanforge.com/cookies)
2. Click "Manage Cookie Preferences"
3. Toggle off any categories you object to
4. Click "Save Preferences"

**On your browser:**
1. Open browser settings → Privacy/Cookies
2. Block all cookies or specific sites
3. Some features may not work if you block essential cookies

**Important:** Essential cookies (session, security, CSRF) cannot be disabled — they're required for the website to function securely. Optional cookies (analytics, marketing) can always be disabled without undue delay.

---

### 8.3 Third-Party Cookies

We use the following third-party services that may set cookies:

| Service | Cookies | Purpose | Opt-out |
|---|---|---|---|
| Google Analytics 4 | `_ga`, `_gat` | Usage analytics | [Google Ads Settings](https://myaccount.google.com/data-and-privacy) |
| Datadog RUM | `dd_` prefixed | Performance monitoring | [Datadog Privacy](https://www.datadoghq.com/privacy) |
| Stripe | `m` | Payment processing | N/A (essential) |
| GitHub | `user_session` | GitHub App integration | [GitHub Settings](https://github.com/settings/cookies) |

**We do NOT use cookies for:**
- ❌ Selling your data to advertisers
- ❌ Cross-site behavioral tracking
- ❌ Building shadow profiles

---

## 9. Children's Privacy (COPPA)

The Spanforge platform is **not directed to children under 13**. We do not knowingly collect personal data from children.

If we discover we've collected data from a child under 13:
1. We delete that data without undue delay
2. We notify the parent/guardian
3. We take steps to prevent further collection

**If you're a parent/guardian:** If your child has created an account, please contact us at [privacy@getspanforge.com](mailto:privacy@getspanforge.com) to request deletion.

**COPPA Compliance (US):** We comply with the Children's Online Privacy Protection Act

---

## 10. Third-Party Links

Our website may contain links to third-party sites (GitHub, AWS, Stripe, etc.). This Privacy Policy does **not** apply to those sites — they have their own privacy policies.

**We recommend reviewing their policies:**
- [GitHub Privacy Statement](https://github.com/privacy)
- [AWS Privacy Notice](https://aws.amazon.com/privacy)
- [Stripe Privacy Policy](https://stripe.com/privacy)
- [Datadog Privacy Policy](https://www.datadoghq.com/privacy)

---

## 11. Automated Decision-Making & Profiling

### 11.1 Do We Use Automated Decisions?

**For YOU as a Spanforge user:** No.

We do **not** use automated decision-making to make eligibility, access, or legal decisions about you, including:
- ❌ Decisions to block your account
- ❌ Decisions to change your pricing tier
- ❌ Decisions to terminate your subscription
- ❌ Automated eligibility determinations
- ❌ Behavioral profiling for discrimination

All account decisions (disputes, access issues, etc.) are handled by **humans on our team**.

---

**For YOUR AI SYSTEMS (as Spanforge is used):** This depends on your configuration.

Spanforge does not make decisions *about your models*, but it enables you to configure:
- ✅ **Automated policy enforcement** — Gates can auto-approve/reject based on rules you define
- ✅ **Automated alerts** — Policies can auto-notify approvers or escalate
- ✅ **Automated gates** — You can set rules like "auto-approve if model confidence > 0.95"

**Important:** All automated decisions **you configure in Spanforge** are your responsibility. You must:
1. Provide notice to affected parties (your end-users/stakeholders)
2. Offer human review/appeal processes
3. Maintain documentation of decision logic
4. Comply with relevant regulations (GDPR Article 22, etc.)

Spanforge provides the **tools**; you make the **governance decisions**.

---

### 11.2 Do We Build Behavioral Profiles?

**No.** We do not:
- Build profiles to predict your behavior
- Use profiling to deny service or change pricing
- Sell profiles to third parties
- Use profiling for discrimination

We do collect aggregated analytics (page views, feature usage) to improve the product, but this is:
- ✅ Anonymized
- ✅ Opt-out available
- ✅ Not used for targeting or discrimination

---

## 12. Contact Us

### 12.1 Privacy Questions

**For general privacy questions:**
- Email: [privacy@getspanforge.com](mailto:privacy@getspanforge.com)
- Response time: Within 3 business days

---

### 12.2 Data Subject Access Requests (GDPR/CCPA/DPDP)

**For requests to access, delete, or correct your data:**
- Email: [dsar@getspanforge.com](mailto:dsar@getspanforge.com)
- Subject line: "[GDPR/CCPA/DPDP] [TYPE OF REQUEST]"
- Response time: Within 30–45 days (depending on jurisdiction)

---

### 12.3 Data Protection Officer (For GDPR-Subject Organizations)

**If you are subject to GDPR** (i.e., you have users in the EU whose personal data we process):
- Email: [dpo@getspanforge.com](mailto:dpo@getspanforge.com)
- DPO Name: [DPO Name — must appoint a real person]
- DPO Organization: Spanforge Technologies

**If you are not GDPR-subject**, contact our general privacy team at [privacy@getspanforge.com](mailto:privacy@getspanforge.com).

**Important:** A Data Protection Officer (GDPR Article 37) is required if:
- You are a public authority or body
- Your core activities involve systematic monitoring of individuals
- You process large-scale special categories of data

Most early-stage SaaS companies do NOT require a DPO, but Spanforge appoints one to demonstrate commitment to privacy compliance.

---

### 12.4 Grievance Redressal Officer (DPDP)

**For India DPDP questions:**
- Email: [grievance@getspanforge.com](mailto:grievance@getspanforge.com)
- Grievance Officer: [Name]
- Response time: Within 30 days

---

### 12.5 Escalation & Regulatory Authorities

If we don't respond satisfactorily, you can file a complaint with your local data protection authority:

**EU/UK:**
- [European Data Protection Board (EDPB)](https://edpb.ec.europa.eu/) — Handles EU cases
- [UK Information Commissioner's Office (ICO)](https://ico.org.uk/) — UK regulator
- Your local data protection authority

**US (California):**
- [California Attorney General](https://oag.ca.gov/) — Can enforce CCPA
- [California Privacy Protection Agency (CPPA)](https://cppa.ca.gov/) — CPRA enforcement

**India:**
- [Data Protection Board of India](https://dpia.gov.in/) (when established)
- Grievance Officer (contact us first)

---

## 13. Policy Updates

We may update this Privacy Policy from time to time. If we make material changes:
1. **We'll notify you:** Email to your registered address
2. **Notice period:** At least 30 days before changes take effect
3. **Your choice:** You can delete your account if you disagree with new terms

**Last updated:** May 2, 2026  
**Effective date:** May 2, 2026  
**Version:** 1.0

Check back for updates. The "Last Updated" date above tells you when this policy was last modified.

---

## 14. Glossary

**Personal Data:** Any information that relates to an identified or identifiable person (GDPR Article 4(1))

**Processing:** Any operation performed on personal data (collection, use, storage, deletion, etc.)

**Data Controller:** The person/entity that determines why and how personal data is processed. Depending on the context, Spanforge acts as both a data controller and a data processor (see Section 2.0 for detailed explanation).

**Data Processor:** A person/entity that processes personal data on behalf of a controller. Spanforge acts as a data processor for audit events processed via the platform on your instructions.

**Legitimate Interest:** One of the legal bases for processing data (used when consent isn't needed but we have a reasonable business reason)

**Consent:** Your explicit agreement to processing (required for non-essential cookies, marketing emails)

**Data Subject:** The person whose personal data is being processed (you)

**Personal Data Breach:** An accident or unauthorized access to personal data

**Data Protection Impact Assessment (DPIA):** A formal review of how we process high-risk personal data

---

## 15. Appendices

### A. List of Data Processors & Subprocessors

All processors below have signed Data Processing Agreements (DPAs):

| Entity | Location | Purpose | DPA? | Privacy Shield? |
|---|---|---|---|---|
| AWS (Cloud infrastructure) | US (configurable) | Cloud storage, compute | ✅ | ✅ DPF |
| Stripe (Payments) | US | Payment processing | ✅ | ✅ DPF |
| Datadog (Monitoring) | US | Application monitoring | ✅ | ✅ DPF |
| Mailgun (Email) | US | Email delivery | ✅ | ✅ DPF |
| Okta (SSO) | US | Identity provider | ✅ | ✅ DPF |
| GitHub (P2 integration) | US | Repository hosting | ✅ | ✅ DPF |

**Note:** All US-based processors are certified under the EU-US Data Privacy Framework.

**Dynamic Subprocessor List:**
We maintain an up-to-date list of all subprocessors at [https://getspanforge.com/subprocessors](https://getspanforge.com/subprocessors).

**Notification of Changes:**
If we add a new subprocessor or change an existing one:
1. We notify all affected customers at least **30 days** in advance
2. You can **object to new subprocessors** within 15 days
3. If you object, we work with you on alternatives or you can terminate affected services
4. If no reasonable alternative is available, continued use of the service may require acceptance of the new subprocessor
5. Material changes trigger a required update to our Data Processing Addendum

---

---

### B. Data Processing Addendum (Available on Request)

For enterprise customers, we offer a formal Data Processing Addendum (DPA) that includes:
- Detailed data processing terms
- Standard Contractual Clauses (SCCs)
- Security & confidentiality obligations
- Liability & indemnification

**Request a DPA:** Email [compliance@getspanforge.com](mailto:compliance@getspanforge.com)

---

**End of Privacy Policy**

---

**Document Version:** 1.0  
**Status:** Ready for Legal Review  
**Next Steps:** Legal review + publication to website
