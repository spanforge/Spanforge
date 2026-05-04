# Learn — AI Compliance Explained

Most AI compliance documentation assumes you already know what you need to prove, who you need to prove it to, and which regulations apply to your system.

This section doesn't assume that.

These pages explain the real problems, the real risks, and exactly what SpanForge does about each one — in language that works for engineers, CTOs, and compliance buyers.

---

## Start with the problem that's most urgent for you

### "I think my training data might have PII in it"

→ [How to detect PII in training data](detect-pii-training-data.md)

You almost certainly have PII you don't know about. Most teams only find out during audits. This page shows you how to detect it, redact it, and prove you handled it correctly — before anyone asks.

---

### "I need to show an auditor what my AI system did"

→ [What is an AI audit trail?](what-is-ai-audit-trail.md)

Logs are not an audit trail. An audit trail is tamper-evident, cryptographically signed, and structured for regulator review. This page explains the difference and how to build one.

---

### "We're dealing with EU AI Act requirements"

→ [How to pass EU AI Act Article 10](eu-ai-act-article-10.md)

High-risk AI obligations apply from August 2, 2026. Article 10 governs training data governance. This page breaks down exactly what's required, what auditors will ask for, and how to generate compliant evidence.

---

### "I need to assess our overall AI compliance posture"

→ [AI compliance checklist](ai-compliance-checklist.md)

A structured checklist across training data, audit trails, PII handling, compliance evidence, runtime governance, model documentation, and incident response — with SpanForge commands for each item.

---

### "A customer asked about our 'compliance evidence' and I didn't know what to say"

→ [What is a Compliance Evidence Chain?](what-is-compliance-evidence-chain.md)

A CEC is a single, cryptographically-signed document that links all your compliance artifacts — scan reports, audit logs, policy records — into a verifiable package you can hand to a regulator or enterprise buyer.

---

## Why these pages exist

SpanForge's core docs are excellent for engineers who already know what they need.

These Learn pages exist for the moment before that — when a team is trying to figure out:

- *What exactly does "AI compliance" mean for our system?*
- *Which regulations apply to us?*
- *What would a regulator actually ask for?*
- *Where do we start?*

These are the most important questions. And they're usually the ones that don't have good answers online.

---

## Regulations covered in this section

| Regulation | What it governs | Covered here |
|------------|----------------|-------------|
| EU AI Act Article 10 | Training data quality and PII handling | [Guide →](eu-ai-act-article-10.md) |
| EU AI Act Article 12 | Logging and tamper-evident audit trails | [Audit trail →](what-is-ai-audit-trail.md) |
| GDPR Article 5 | Data minimization | [PII detection →](detect-pii-training-data.md) |
| GDPR Article 22 | Automated decision-making records | [Audit trail →](what-is-ai-audit-trail.md) |
| SOC 2 CC7 | Tamper-evident records | [Evidence chain →](what-is-compliance-evidence-chain.md) |
| ISO 42001 | AI management system documentation | [Checklist →](ai-compliance-checklist.md) |
| NIST AI RMF | Risk management documentation | [Checklist →](ai-compliance-checklist.md) |

---

## Next: Get running

Once you understand the problem, the quickstart gets you from install to signed audit trail in under 5 minutes.

→ [Quickstart →](../quickstart.md)  
→ [AI compliance checklist →](ai-compliance-checklist.md)
