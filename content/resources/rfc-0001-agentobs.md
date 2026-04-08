---
title: "RFC-0001: AGENTOBS — Observability Schema Standard for Agentic AI Systems"
slug: rfc-0001-agentobs
type: spec
date: "2026-04-03"
author: "S. Sriram, SpanForge"
pages: 52
excerpt: "The full AGENTOBS open specification. Defines the Event Envelope, Namespace Taxonomy, Agent Span Hierarchy, HMAC Audit Chains, PII Redaction Framework, Provider Normalisation, and four Conformance Profiles (Core, Security, Privacy, Enterprise) for standardised AI observability across any LLM provider."
downloadUrl: "/downloads/RFC-0001-AGENTOBS.pdf"
tags:
  - agentobs
  - observability
  - open-standard
  - opentelemetry
  - security
  - privacy
---

## Overview

RFC-0001 defines **AGENTOBS** — an open event-schema standard for observability of agentic AI systems. It addresses the fundamental gap between general-purpose APM tooling and the requirements of production AI systems: structured cost attribution, PII redaction at source, tamper-evident audit chains, and a coherent span tree for multi-step agent runs.

## What This Specification Covers

AGENTOBS standardises nine interconnected capabilities:

1. **Event Envelope** — a typed, immutable container applied uniformly to every observability event, carrying identity, routing, and security fields alongside a namespace-specific payload.
2. **Namespace Taxonomy** — ten observability namespaces (decision, tool_call, chain, confidence, consent, drift, latency, hitl, playbook, audit), each with a typed payload schema.
3. **Agent Span Hierarchy** — `SpanPayload`, `AgentStepPayload`, and `AgentRunPayload` types that represent multi-step runs as an OpenTelemetry-compatible span tree, including `ReasoningStep` and `DecisionPoint` sub-types.
4. **Token and Cost Model** — `TokenUsage` with per-category breakdowns and `CostBreakdown` as a typed value object — not a bare float — enabling reproducible cost attribution months after a call is made.
5. **Provider Normalisation** — a language-neutral `ProviderNormalizer` protocol with built-in mappings for OpenAI, Anthropic, Vertex AI, Bedrock, Azure AI, Groq, Ollama, Mistral, Cohere, Together AI, and Hugging Face.
6. **HMAC Audit Chains** — HMAC-SHA256 signing with `prev_id` linkage, `verify_chain()` with structured tamper detection, and key rotation without chain discontinuity.
7. **PII Redaction Framework** — a five-level sensitivity scale (`LOW` → `PHI`), `Redactable` type with annotations at construction time, and `RedactionPolicy` enforcement before any export.
8. **Export Abstraction** — structural Exporter protocol with reference implementations for JSONL, Webhook, OTLP, Datadog, Grafana Loki, and OTel SDK bridging.
9. **Governance Primitives** — `EventGovernancePolicy`, `ConsumerRegistry`, `DeprecationRegistry`, and `migration_roadmap()` for managing schema evolution at scale.

## Conformance Profiles

The specification defines four cumulative conformance profiles to enable incremental adoption:

| Profile | What it adds |
|---|---|
| **Core** | Event Envelope, ULID, spans, tokens, cost, export, OTel alignment |
| **Security** | HMAC signing, audit chains, key rotation |
| **Privacy** | `Redactable` type, `RedactionPolicy`, pre-export redaction |
| **Enterprise** | Governance policy, `ConsumerRegistry`, `DeprecationRegistry`, CLI compliance checks |

A team can reach `AGENTOBS-Core-2.0` conformance by implementing five things: Event Envelope with auto-generated ULID, `SpanPayload` with `TokenUsage`, deterministic JSON serialisation, one Exporter, and OTel attribute mapping at export time.

## Specification Status

- **Status:** Public Review Draft
- **Version:** 2.0 (targeting v2.0 data model)
- **Schema:** `schemas/v1.0/schema.json` (stable normative artifact)
- **Public comment period:** April 3, 2026 — June 4, 2026
- **Issues:** [github.com/veerarag1973/Spanforge/issues](https://github.com/veerarag1973/Spanforge/issues)
