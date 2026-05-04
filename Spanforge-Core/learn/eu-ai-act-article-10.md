# How to Pass EU AI Act Article 10 (Training Data Requirements)

## The regulation

**EU AI Act Article 10** governs training, validation, and testing data for high-risk AI systems. It came into force August 2, 2024, with high-risk AI obligations applying from August 2, 2026.

The core requirement:

> *Training, validation and testing data sets shall be subject to appropriate data governance and management practices. Those practices shall concern... relevant design choices, data collection processes, data preparation operations such as annotation... possible biases and how those biases could be mitigated... identification of any possible gaps or shortcomings of data sets.*

---

## What Article 10 actually requires

### § 10(2) — Data governance practices
You must document:
- Where the data came from (provenance)
- How it was collected and selected
- Any preprocessing, labeling, or cleaning applied

**SpanForge feature:** [Dataset provenance tracking →](/docs/guide/tracing)

---

### § 10(3) — Relevance and representativeness
Training data must be:
- Relevant to the system's intended purpose
- Representative of real-world operating conditions
- Free from errors and complete (to the extent possible)

**SpanForge feature:** [Dataset validation →](/docs/guide/compliance)

---

### § 10(5) — Personal data handling
When training data includes personal data, you must:
- Identify what personal data is present
- Apply technical controls (pseudonymization, minimization)
- Document the legal basis under GDPR

**SpanForge feature:** [PII detection and redaction →](/docs/learn/detect-pii-training-data)

---

### § 10(6) — Bias monitoring
You must identify potential biases and put in place mitigation measures where those biases are likely to cause harm.

**SpanForge feature:** Dataset drift detection, compliance gates

---

## The compliance gap most teams miss

Article 10 does not just require *doing* these things. It requires **documented proof** that you did them—maintained in the technical documentation required under Article 11.

Most teams have some practices in place. Very few have:
- Signed, timestamped records of dataset scans
- Immutable audit trails of preprocessing steps
- Regulator-ready evidence packages

That gap is what SpanForge closes.

---

## Article 10 compliance checklist

| Requirement | Reference | How to meet it | SpanForge command |
|-------------|-----------|---------------|-------------------|
| Document data provenance | Art. 10(2)(a) | Log source, version, collection date | `spanforge trace --dataset` |
| Record preprocessing steps | Art. 10(2)(b) | Instrument every transformation | `sf_observe.trace()` |
| Scan for PII | Art. 10(5) | Run PII scan before training | `spanforge validate --pii-check` |
| Redact or exclude PII | Art. 10(5) | Apply redaction pipeline | `spanforge redact` |
| Detect and document bias | Art. 10(6) | Run bias assessment | `spanforge validate --bias-check` |
| Generate technical docs | Art. 11 | Export signed evidence package | `spanforge audit export` |
| Maintain post-market logs | Art. 12 | Enable runtime tracing | `sf_audit` + SIEM export |

---

## Example: end-to-end Article 10 workflow

```bash
# Step 1 — Scan training data for PII
spanforge validate --dataset training.jsonl --pii-check --output pii-report.json

# Step 2 — Redact identified PII
spanforge redact --dataset training.jsonl --output training.clean.jsonl

# Step 3 — Run bias and quality checks
spanforge validate --dataset training.clean.jsonl --bias-check --quality-check

# Step 4 — Trace preprocessing lineage
spanforge trace --dataset training.clean.jsonl --provenance origin.json

# Step 5 — Export Article 10 evidence package
spanforge audit export --standard eu-ai-act-art10 --format pdf --output evidence.pdf
```

**Output:** A signed, timestamped PDF containing:
- Dataset scan results with PII locations
- Redaction log with before/after hashes
- Bias assessment summary
- Data provenance chain
- Digital signature for tamper detection

---

## What regulators will ask for

Based on guidance from the EU AI Office, auditors reviewing Article 10 compliance will expect:

1. **Dataset card** — what data, from where, how collected
2. **PII assessment** — documented scan results + remediation actions
3. **Preprocessing log** — every transformation step, signed
4. **Bias assessment** — methodology and findings
5. **Ongoing monitoring** — evidence that data quality is continuously checked

SpanForge generates all five.

---

## Timeline

| Date | Requirement |
|------|-------------|
| Aug 2, 2024 | EU AI Act in force |
| Feb 2, 2025 | Prohibited AI practices apply |
| Aug 2, 2025 | GPAI model rules apply |
| **Aug 2, 2026** | **High-risk AI (Annex III) obligations apply — including Article 10** |

---

## Next steps

→ [Run your first PII scan →](/docs/learn/detect-pii-training-data)  
→ [Build an audit trail →](/docs/learn/what-is-ai-audit-trail)  
→ [Generate compliance evidence →](/docs/learn/what-is-compliance-evidence-chain)  
→ [See the full compliance guide →](/docs/guide/compliance)
