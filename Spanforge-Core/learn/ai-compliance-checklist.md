# AI Compliance Checklist: 7 Categories, CLI Commands, and Risk Levels

Use this checklist to assess your AI system's compliance posture across the key regulatory frameworks that affect AI teams in 2025–2026.

Each item links to the SpanForge feature or guide that addresses it.

---

## How to use this checklist

- **Green** — you have documented, auditable evidence
- **Yellow** — you have a practice in place but no audit trail
- **Red** — you have no coverage; this is a risk

The goal is not just *doing* these things—it's being able to *prove* you did them. Regulators don't accept "we have a process." They require signed, timestamped records.

---

## 1. Training Data Governance

*(EU AI Act Article 10 · GDPR Article 5)*

- [ ] Dataset provenance documented (source, version, collection date, license)
- [ ] PII scan completed and results recorded
- [ ] PII redacted or excluded before training
- [ ] Preprocessing steps logged with input/output hashes
- [ ] Bias assessment completed and documented
- [ ] Dataset validation report generated and signed
- [ ] Data minimization principle applied and documented

**Automated by:**
```bash
spanforge validate --dataset data.jsonl --pii-check --bias-check
spanforge redact --dataset data.jsonl --output data.clean.jsonl
spanforge audit export --standard eu-ai-act-art10
```

→ [Full Article 10 guide →](/docs/learn/eu-ai-act-article-10)

---

## 2. Audit Trail

*(EU AI Act Article 12 · SOC 2 CC7 · GDPR Article 22)*

- [ ] Every inference logged with input hash, output hash, model version
- [ ] Every policy decision logged with rule reference
- [ ] Audit log is tamper-evident (signed/chained)
- [ ] Audit log is timestamped with UTC anchoring
- [ ] Audit log can be exported for regulator review
- [ ] Alert routing configured for policy violations
- [ ] Human-in-the-loop review paths are logged

**Automated by:**
```python
from spanforge import sf_observe

with sf_observe.trace("inference") as trace:
    trace.log_input(prompt)
    result = model.predict(prompt)
    trace.log_output(result)
    trace.log_policy("content-policy-v2")
```

→ [What is an AI audit trail? →](/docs/learn/what-is-ai-audit-trail)

---

## 3. PII in Production

*(GDPR · CCPA · EU AI Act Article 10)*

- [ ] PII detection running on live inputs
- [ ] PII redaction applied before model sees data
- [ ] PII redaction applied to model outputs before returning to users
- [ ] Redaction events logged with field, type, and confidence
- [ ] Data subject deletion requests supported (right to erasure)
- [ ] Cross-border transfer restrictions respected

**Automated by:**
```bash
spanforge validate --realtime --pii-check
```

→ [Detect PII in training data →](/docs/learn/detect-pii-training-data)

---

## 4. Compliance Evidence Chain

*(EU AI Act Article 11 · ISO 42001 · SOC 2)*

- [ ] Compliance Evidence Certificate (CEC) generated for each release
- [ ] CEC is cryptographically signed and verifiable
- [ ] CEC references all upstream scan results and audit records
- [ ] CEC export format suitable for regulator submission
- [ ] CECs retained for minimum required period (EU AI Act: 10 years for high-risk)

**Automated by:**
```bash
spanforge cec generate --version 1.4.2 --output evidence.pdf
spanforge cec verify --file evidence.pdf
```

→ [What is a Compliance Evidence Chain? →](/docs/learn/what-is-compliance-evidence-chain)

---

## 5. Runtime Governance

*(EU AI Act Article 9 · ISO 42001 · NIST AI RMF)*

- [ ] Policy rules defined and version-controlled
- [ ] Policy enforcement running at inference time
- [ ] Policy violations create alerts and logs
- [ ] Gate pipeline blocks non-compliant outputs before delivery
- [ ] Governance contracts enforced across teams and environments
- [ ] Replay and simulation tested before policy changes

**Automated by:**
```bash
spanforge gate --policy content-policy-v2 --env production
```

→ [Runtime governance guide →](/docs/runtime-governance)

---

## 6. Model Documentation

*(EU AI Act Article 11 · FDA AI/ML Action Plan)*

- [ ] Model card exists with intended use, performance, limitations
- [ ] Training data described (type, source, size, demographics)
- [ ] Evaluation results documented with benchmark dataset
- [ ] Known failure modes documented
- [ ] Update and retrain procedures documented
- [ ] Post-market monitoring plan in place

---

## 7. Incident Response

*(EU AI Act Article 73 · GDPR Article 33)*

- [ ] Process for detecting AI-caused incidents
- [ ] Escalation path defined and documented
- [ ] GDPR 72-hour breach notification process in place
- [ ] Serious incident reporting to EU AI Office (for high-risk systems)
- [ ] Audit trail sufficient to reconstruct incidents

---

## Risk level by AI Act classification

| System type | Risk level | Key obligations |
|-------------|-----------|----------------|
| General-purpose (non-deployed) | Minimal | None mandatory |
| Recommendation systems | Minimal–Limited | Transparency |
| CV screening, credit scoring | **High** | Full Article 10 + 12 |
| Biometric identification | **High** | Restricted + Article 10 + 12 |
| Medical diagnosis assistance | **High** | Full Article 10 + 12 |
| Prohibited use cases | **Unacceptable** | Banned |

---

## Get your compliance score

```bash
pip install spanforge

spanforge compliance check --all
```

SpanForge will assess your current setup against this checklist and generate a gap report.

---

---

## Run your compliance check

```bash
pip install spanforge

# Assess your current compliance posture
spanforge compliance check --all

# Fix the highest-risk gaps
spanforge validate --dataset data.jsonl --pii-check --bias-check
spanforge audit export --standard eu-ai-act --format pdf
```

**What you get:** A gap report scored across all 7 categories — training data, audit trail, PII, CEC, runtime governance, model documentation, and incident response. With specific CLI commands to close each gap.

→ [Start with training data compliance →](/docs/learn/detect-pii-training-data)  
→ [CLI reference →](/docs/cli)  
→ [30-second quickstart →](/docs/quickstart)

---

### Continue in Learn

→ [Detect PII in training data →](/docs/learn/detect-pii-training-data)  
→ [AI audit trail: track & prove decisions →](/docs/learn/what-is-ai-audit-trail)  
→ [EU AI Act Article 10 compliance guide →](/docs/learn/eu-ai-act-article-10)  
→ [What is a Compliance Evidence Chain? →](/docs/learn/what-is-compliance-evidence-chain)
