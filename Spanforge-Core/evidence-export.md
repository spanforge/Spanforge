# Evidence Export Guide

## Why this matters

Generating logs is not the same as generating proof. Regulators, auditors, and enterprise procurement teams don't want raw event files — they want a signed, structured evidence package they can verify without trusting you.

A real scenario:

> **Problem:** A financial services firm deployed an AI document review system. Six months in, an enterprise client's legal team asked for evidence that the AI's decisions were auditable and tamper-evident. The team could produce logs — but not signed packages, not chain verification, and not a deploymen-level compliance record.
>
> **Risk:** The deal paused for 11 weeks while the team scrambled to manually produce something that looked like an evidence package. The client nearly churned.
>
> **With SpanForge:** `sf_enterprise.generate_evidence_package()` produces a signed, verifiable export in one command — with deployment profile, retention controls, and chain-verified audit records. Pass it to any auditor or enterprise security review board.

If you ship AI systems to regulated industries or enterprise clients, evidence packages are your proof layer. Without them, every audit is a manual, high-risk effort.

---

Phase 4 through Phase 6 converge on one export story:

`trace -> decision -> signed evidence -> package`

This page explains the export layers, the expected consumers, and the adjacent JSONL/SIEM/OpenInference paths that matter for enterprise workflows.

## Export Layers

| Layer | Producer | Audience |
|-------|----------|----------|
| Operator evidence package | `sf_operator.export_package()` | operators, incident responders, security reviewers |
| Enterprise evidence package | `sf_enterprise.generate_evidence_package()` | auditors, compliance teams, architecture review boards |
| JSONL event export | `JSONLExporter` / `spanforge.io` | archival, offline analysis, replay inputs |
| SIEM export | Splunk / syslog exporters | SOC, SIEM, alerting, correlation systems |
| OpenInference bridge | `OpenInferenceSpanBridge` | interoperability with OpenInference-style trace consumers |

## Operator Package

`sf_operator.export_package(trace_id)` packages one runtime trace into:

- final outcome
- concise why-allowed or why-blocked summary
- policy decisions
- explanations
- grounding results
- scope and RBAC decisions
- lineage records
- signed audit records
- timeline view
- chain-verification result

CLI:

```bash
spanforge operator inspect TRACE_ID
spanforge operator export TRACE_ID --output operator-package.json
```

## Enterprise Package

`sf_enterprise.generate_evidence_package(trace_id)` wraps the operator package with enterprise context:

- deployment profile
- retention and export controls
- enterprise status
- reference deployment architectures
- signed checksum and signature

Use this when the consumer needs to understand not only the trace evidence, but also how SpanForge is deployed and controlled in the target environment.

## JSONL and Audit Workflows

JSONL remains the simplest durable transport for:

- offline archives
- replay inputs
- air-gapped evidence movement
- long-term audit retention

Relevant docs:

- [User Guide: Export Backends](user_guide/export.md)
- [API Reference: `spanforge.export`](api/export.md)
- [Air-Gapped Deployment](deployment/air-gapped.md)

## SIEM-Friendly Mapping

Phase 5 introduced a normalized SIEM mapping so Splunk, syslog, and other downstream systems see the same core event fields:

- event identity and timestamps
- trace/span linkage
- actor and session metadata
- normalized category
- normalized severity
- payload and tags

That normalized schema is used by the Splunk HEC and syslog/CEF exporters.

## OpenInference Interop

The OpenInference bridge translates existing SpanForge spans into an OpenInference-style trace document. It is intended for interoperability, not for replacing SpanForge’s own signed evidence chain.

Use it when you need:

- compatibility with OpenInference-aware tooling
- a bridge from SpanForge traces into external analysis pipelines
- a vendor-neutral trace handoff alongside the signed governance exports

## Related Docs

- [Runtime Governance GA Guide](runtime-governance.md)
- [API Reference: `spanforge.sdk.operator`](api/operator.md)
- [API Reference: `spanforge.sdk.enterprise`](api/enterprise.md)
- [API Reference: `spanforge.export`](api/export.md)
- [Enterprise Evidence Demo](demos/enterprise-evidence-demo.md)
