'use client'

import { useState } from 'react'
import styles from './JourneyStrip.module.css'

const STEPS = [
  {
    num: '01',
    label: 'Install',
    desc: 'pip install spanforge',
    detail: (
      <>
        <strong>Step 01 - Install:</strong>{' '}
        <code>pip install spanforge</code> - zero required dependencies. Works in any
        Python 3.9-3.12 environment. Local fallback mode means you can develop without
        any SpanForge backend.{' '}
        <a href="/spanforgecore/sdk">Install documentation -&gt;</a>
      </>
    ),
  },
  {
    num: '02',
    label: 'Instrument',
    desc: '@spanforge.trace',
    detail: (
      <>
        <strong>Step 02 - Instrument:</strong> Add{' '}
        <code>@spanforge.trace</code> to any function to capture every call, input,
        output, cost, and latency. One decorator. Full observability. Works with any
        OpenAI-compatible model endpoint.
      </>
    ),
  },
  {
    num: '03',
    label: 'Enforce',
    desc: 'sf_pii | sf_secrets',
    detail: (
      <>
        <strong>Step 03 - Enforce:</strong>{' '}
        <code>sf_pii</code> scans for 6 compliance frameworks (GDPR, HIPAA, CCPA, DPDP,
        PIPL, China PIPL). <code>sf_secrets</code> detects 20 secret patterns with Shannon
        entropy scoring. Both run inline before any output is stored - auto-block policy
        included.
      </>
    ),
  },
  {
    num: '04',
    label: 'Audit',
    desc: 'sf_audit | WORM',
    detail: (
      <>
        <strong>Step 04 - Audit:</strong>{' '}
        <code>sf_audit</code> builds an HMAC-SHA256 chain. Every event is cryptographically
        signed and linked to the previous. Tamper-evident, WORM-compliant storage across
        S3, GCS, and Azure is supported, with 7-year retention and tombstone erasure for GDPR Art.17.
      </>
    ),
  },
  {
    num: '05',
    label: 'Prove',
    desc: 'sf_cec.build_bundle()',
    detail: (
      <>
        <strong>Step 05 - Prove:</strong>{' '}
        <code>sf_cec.build_bundle()</code> generates a signed ZIP containing evidence
        records, clause mapping, chain proof, and PDF attestation - ready for your auditor.
        Maps to EU AI Act, GDPR, HIPAA, SOC 2, ISO 42001, and NIST AI RMF.
      </>
    ),
  },
]

export default function JourneyStrip() {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div className={styles.strip} role="tablist" aria-label="Developer workflow steps">
        {STEPS.map((step, index) => (
          <button
            key={step.num}
            id={`journey-tab-${index}`}
            role="tab"
            aria-selected={active === index}
            aria-controls={`journey-panel-${index}`}
            className={`${styles.step} ${active === index ? styles.stepActive : ''}`}
            onClick={() => setActive(index)}
          >
            <span className={styles.num}>{step.num}</span>
            <span className={styles.label}>{step.label}</span>
            <span className={styles.desc}>{step.desc}</span>
          </button>
        ))}
      </div>
      <div
        id={`journey-panel-${active}`}
        role="tabpanel"
        aria-labelledby={`journey-tab-${active}`}
        className={styles.detail}
      >
        <p>{STEPS[active].detail}</p>
      </div>
    </div>
  )
}
