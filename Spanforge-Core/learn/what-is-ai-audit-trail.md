# What is an AI Audit Trail?

## The problem

Your AI model made a decision. Something went wrong. Now a regulator, customer, or internal team asks:

> "Show us exactly what data was used, what policy applied, and what the model output was—and prove it hasn't been tampered with."

If you can't answer that question with cryptographic certainty, **you're exposed.**

An AI audit trail is the mechanism that makes that question answerable.

---

## Why this matters

AI systems are being used to make decisions with real consequences—loan approvals, medical triage, hiring, content moderation. Regulators know this.

- **EU AI Act** — high-risk AI systems must maintain logs sufficient for post-market monitoring (Article 12)
- **GDPR** — automated decision-making requires explainability and human review paths (Article 22)
- **SEC / SOC 2** — AI in financial workflows requires tamper-evident records
- **HIPAA** — AI touching health data requires access logs and audit records

Without an audit trail, you're building on trust. Regulators require proof.

---

## What makes an audit trail "real"

Not all logs are audit trails. A real AI audit trail is:

| Property | What it means | SpanForge mechanism |
|----------|---------------|---------------------|
| **Immutable** | Records cannot be modified after creation | HMAC-chained events |
| **Tamper-evident** | Any modification is detectable | Signed event chain |
| **Timestamped** | Every event has a verifiable timestamp | ULID + UTC anchoring |
| **Structured** | Machine-readable for automated audits | Typed schema (v1.4+) |
| **Exportable** | Can be handed to a regulator | PDF, JSON, SIEM formats |

---

## How SpanForge builds it

SpanForge instruments every step of your AI pipeline and chains them together into a signed, verifiable record:

```
Dataset ingestion
    ↓ [signed event]
PII scan
    ↓ [signed event]
Policy evaluation
    ↓ [signed event]
Model inference
    ↓ [signed event]
Output validation
    ↓ [signed event]
Evidence export
```

Each arrow is a cryptographically signed event. Each event links to the previous one. Break the chain → SpanForge flags it.

---

## Example

```python
from spanforge import sf_audit, sf_observe

with sf_observe.trace("loan-decision") as trace:
    trace.log_input(application_data)
    decision = model.predict(application_data)
    trace.log_output(decision)
    trace.log_policy("credit-policy-v3")

# Generates a signed audit record:
# {
#   "trace_id": "01HZMQ...",
#   "timestamp": "2025-04-01T14:32:11Z",
#   "input_hash": "sha256:a3f...",
#   "output_hash": "sha256:d91...",
#   "policy": "credit-policy-v3",
#   "signature": "hmac-sha256:...",
#   "chain_link": "01HZMQ-PREV..."
# }
```

---

## Try this in 30 seconds

```bash
pip install spanforge

# Start tracing your AI pipeline
spanforge init

# View your audit trail
spanforge audit trail --last 10

# Export as compliance evidence
spanforge audit export --format pdf --output audit-2025-q1.pdf
```

---

## What you get

- **Signed event chain** — every inference, redaction, and policy decision, linked and signed
- **Human-readable trail** — readable by your legal team, not just engineers  
- **Regulator-ready export** — one command to package for an audit
- **Tamper detection** — automatic alerts if any record is modified

---

## Compliance mapping

| Requirement | Standard | SpanForge feature |
|-------------|----------|-------------------|
| Logging and monitoring | EU AI Act Art. 12 | `sf_audit` trail |
| Automated decision records | GDPR Art. 22 | `sf_observe` trace |
| Tamper-evident records | SOC 2 CC7 | HMAC chain |
| Evidence export | ISO 42001 | Evidence export |

---

## Next steps

→ [Build your first audit trail →](/docs/guide/audit)  
→ [See the signing mechanism →](/docs/guide/signing)  
→ [Export compliance evidence →](/docs/learn/what-is-compliance-evidence-chain)  
→ [Pass EU AI Act Article 10 →](/docs/learn/eu-ai-act-article-10)
