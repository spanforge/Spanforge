# How to Detect PII in Training Data

## The problem

You're preparing a dataset for model training. It looks clean. But buried in 50,000 rows are email addresses, phone numbers, names, and government IDs—collected during normal product usage.

You won't find them manually. And if you don't find them before training, **you've baked GDPR violations into your model weights.**

---

## Why this matters

Training on PII without consent creates compounding risk:

- **GDPR Article 5** — data must be adequate, relevant, and limited to what's necessary ("data minimization")
- **EU AI Act Article 10** — training data must be "relevant, representative, and free of errors" with documented practices for PII handling
- **CCPA / US State Laws** — model outputs that reproduce personal data create re-identification exposure

Most teams discover this during audits—not before. By then, the model is in production.

SpanForge detects it **before production.**

---

## What SpanForge scans for

| PII Type | Examples | Detection Method |
|----------|----------|-----------------|
| Email addresses | `user@company.com` | Regex + contextual |
| Phone numbers | `+1-555-867-5309` | E.164 + local formats |
| Names | `John Smith` | NER + dictionary |
| Government IDs | SSN, NIN, passport | Pattern + checksum |
| IP addresses | `192.168.1.1` | CIDR-aware |
| Financial data | Card numbers, IBANs | Luhn + BIC |
| Health identifiers | MRN, NPI | Healthcare-specific |
| Free-text PII | "my name is Sarah" | Contextual NLP |

---

## Example

**Input dataset row:**
```json
{
  "prompt": "Help me draft an email to john.doe@acme.com about the Q3 invoice",
  "completion": "Hi John, I'm writing on behalf of..."
}
```

**SpanForge scan output:**
```
[PII DETECTED]
Field: prompt
Match: john.doe@acme.com
Type: EMAIL_ADDRESS
Confidence: 0.99
Regulation: GDPR Article 5, EU AI Act Article 10
Action: REDACT | EXCLUDE | FLAG
```

**After redaction:**
```json
{
  "prompt": "Help me draft an email to [REDACTED:EMAIL] about the Q3 invoice",
  "completion": "Hi [REDACTED:FIRSTNAME], I'm writing on behalf of..."
}
```

---

## Try this in 30 seconds

```bash
pip install spanforge

# Scan a dataset for PII
spanforge validate --dataset data.jsonl --pii-check

# Redact in place
spanforge redact --dataset data.jsonl --output data.clean.jsonl

# Generate a compliance report
spanforge audit --dataset data.jsonl --format pdf
```

---

## What you get

- **PII scan report** — every match, field, confidence score, and regulation reference
- **Redacted dataset** — ready-to-train file with PII replaced by typed tokens
- **Compliance evidence** — signed, timestamped artifact you can hand to a regulator

---

## Compliance mapping

| Requirement | Standard | SpanForge Feature |
|-------------|----------|-------------------|
| Data minimization | GDPR Art. 5(1)(c) | `sf_pii` scanner |
| Training data quality | EU AI Act Art. 10 | `sf_validate` |
| Purpose limitation | GDPR Art. 5(1)(b) | `sf_audit` trail |
| Documented controls | ISO 27001 A.8 | Evidence export |

---

## Next steps

→ [View the PII API reference →](/docs/api/pii)  
→ [See the full compliance guide →](/docs/guide/compliance)  
→ [Generate compliance evidence →](/docs/learn/what-is-compliance-evidence-chain)
