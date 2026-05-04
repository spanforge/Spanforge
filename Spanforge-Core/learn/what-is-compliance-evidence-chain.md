# What is a Compliance Evidence Chain (CEC)?

## The problem

You've run your PII scans. You've built your audit trail. Your dataset is clean. Your model passed all validation checks.

Now a regulator asks:

> "Prove it. Show us a single, verifiable record that all of these controls actually ran—and that nobody has changed the results since."

A folder of log files won't answer that. An email thread definitely won't. You need a **Compliance Evidence Chain (CEC).**

---

## What is a CEC?

A Compliance Evidence Chain is a signed, cryptographically-linked document that:

1. **References** every compliance artifact — scan reports, audit logs, policy records, redaction logs
2. **Links** them into a chain where each artifact is verified by the hash of the previous one
3. **Signs** the entire chain with a private key, making tampering detectable
4. **Exports** to a portable format (PDF, JSON, SIEM-compatible) for submission

It is the difference between "we have logs" and "here is a verifiable proof package."

---

## Why this matters

| Without a CEC | With a CEC |
|---------------|-----------|
| Logs exist in different systems | Single verified package |
| No proof logs weren't modified | Cryptographic tamper detection |
| Regulator must trust your word | Regulator can verify independently |
| Takes weeks to assemble for audit | One command |
| Gap between compliance practice and proof | None |

Under **EU AI Act Article 11**, high-risk AI providers must maintain technical documentation that demonstrates conformity with obligations. Unconnected logs do not satisfy this. A CEC does.

---

## How SpanForge builds the chain

```
[Dataset scan]  →  signed hash
      ↓
[PII report]   →  signed hash  →  links to dataset scan hash
      ↓
[Redaction log] →  signed hash  →  links to PII report hash
      ↓
[Audit trail]  →  signed hash  →  links to redaction log hash
      ↓
[Policy eval]  →  signed hash  →  links to audit trail hash
      ↓
[CEC document] →  SIGNED      →  links entire chain + timestamp
```

Every link is a SHA-256 hash. If any intermediate artifact is modified—even one character—the hash breaks and the CEC verification fails.

---

## Example

```bash
# Generate a CEC for a model release
spanforge cec generate \
  --version 1.4.2 \
  --dataset-scan pii-report-2025-03.json \
  --audit-trail audit-2025-03.json \
  --policy-version content-policy-v2 \
  --output evidence-1.4.2.pdf
```

**Generated CEC contains:**
```
COMPLIANCE EVIDENCE CERTIFICATE
SpanForge v1.4.2 — 2025-03-15T09:12:44Z

Model: customer-support-classifier
Environment: production

Evidence chain:
  [1] Dataset scan     sha256:a3f9c... ✓
  [2] PII report       sha256:b17de... ✓ (links to [1])
  [3] Redaction log    sha256:c82a1... ✓ (links to [2])
  [4] Audit trail      sha256:d55f4... ✓ (links to [3])
  [5] Policy record    sha256:e901b... ✓ (links to [4])

Regulations covered:
  ✓ EU AI Act Article 10 (training data)
  ✓ EU AI Act Article 12 (logging)
  ✓ GDPR Article 5 (data minimization)
  ✓ GDPR Article 22 (automated decisions)

Chain signature: hmac-sha256:f74a2c...
Signed at: 2025-03-15T09:12:44Z UTC
Signer: spanforge-cli/1.4.2
```

---

## Verify a CEC

Anyone with the public key can verify a CEC independently—including regulators, auditors, or customers:

```bash
spanforge cec verify --file evidence-1.4.2.pdf

# Output:
# ✓ Chain integrity verified
# ✓ Signature valid
# ✓ All artifacts present
# ✓ Timestamps consistent
# Generated: 2025-03-15T09:12:44Z UTC
```

---

## Try this in 30 seconds

```bash
pip install spanforge

# Run full compliance pipeline + generate CEC
spanforge validate --dataset data.jsonl --pii-check
spanforge cec generate --version 1.0.0 --output my-first-cec.pdf

# Verify it
spanforge cec verify --file my-first-cec.pdf
```

---

## CEC retention and lifecycle

| Use case | Recommended retention |
|----------|-----------------------|
| EU AI Act high-risk systems | 10 years |
| GDPR automated decision records | Duration of processing + 3 years |
| SOC 2 audit evidence | 1 year minimum |
| Internal model governance | Per your risk policy |

SpanForge can export CECs to long-term storage backends: S3, Azure Blob, GCS, or local archive.

---

## Compliance mapping

| Requirement | Standard | How CEC addresses it |
|-------------|----------|---------------------|
| Technical documentation | EU AI Act Art. 11 | CEC is the documentation artifact |
| Logging and monitoring | EU AI Act Art. 12 | Audit trail linked in CEC |
| Accountability | GDPR Art. 5(2) | Signed, verifiable record |
| Conformity assessment evidence | EU AI Act Art. 43 | CEC submitted to notified body |
| Record retention | EU AI Act Art. 18 | Timestamped + exportable |

---

---

## Run this with SpanForge

```bash
pip install spanforge

# Generate a Compliance Evidence Certificate
spanforge cec generate --version 1.0.0 --output my-cec.pdf

# Verify it (anyone can do this, including regulators and auditors)
spanforge cec verify --file my-cec.pdf

# Output:
# ✓ Chain integrity verified
# ✓ Signature valid
# ✓ All artifacts present
# ✓ Timestamps consistent
```

**What you get:** A cryptographically-signed, regulator-ready package linking every compliance artifact — dataset scan, PII report, redaction log, audit trail, policy record. One file. Independently verifiable. Accepted by auditors, enterprise buyers, and notified bodies.

→ [CEC API reference →](/docs/api/cec)  
→ [Audit trail guide →](/docs/guide/audit)  
→ [CLI reference →](/docs/cli)  
→ [30-second quickstart →](/docs/quickstart)

---

### Continue in Learn

→ [AI compliance checklist →](/docs/learn/ai-compliance-checklist)  
→ [EU AI Act Article 10 compliance guide →](/docs/learn/eu-ai-act-article-10)  
→ [AI audit trail: track & prove decisions →](/docs/learn/what-is-ai-audit-trail)
