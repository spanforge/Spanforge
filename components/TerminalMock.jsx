'use client'

import { useState } from 'react'
import styles from './TerminalMock.module.css'

const scenarios = {
  consent: {
    label: 'Consent violation',
    lines: [
      { label: 'agent_id',    value: 'loan-approval-v2',          labelColor: '#5DADE2', valueColor: '#58D68D' },
      { label: 'status',      value: 'MONITORING',                labelColor: '#5DADE2', valueColor: '#58D68D' },
      { label: 'baseline',    value: 'established 2026-03-01',    labelColor: '#5DADE2', valueColor: '#58D68D' },
      { label: 'decisions',   value: '1,247 today',               labelColor: '#5DADE2', valueColor: '#58D68D' },
      { label: 'drift_score', value: '0.02  (normal)',            labelColor: '#5DADE2', valueColor: '#58D68D' },
      { type: 'divider' },
      { type: 'alert',  text: 'ALERT [14:32:07] — Consent boundary violation', color: '#F0A500' },
      { type: 'alert',  text: 'data.credit_history accessed outside declared purpose', color: '#F0A500' },
      { type: 'divider' },
      { label: 'action',    value: 'ESCALATED to compliance@org', labelColor: '#5DADE2', valueColor: '#EC7063' },
      { label: 'playbook',  value: 'GDPR-002 triggered',          labelColor: '#5DADE2', valueColor: '#58D68D' },
      { label: 'agent',     value: 'PAUSED pending human review', labelColor: '#5DADE2', valueColor: '#58D68D' },
      { type: 'comment', text: '// SpanForge caught it before the regulator did.' },
    ],
  },
  drift: {
    label: 'Drift detected',
    lines: [
      { label: 'agent_id',    value: 'contract-analysis-v3',  labelColor: '#5DADE2', valueColor: '#58D68D' },
      { label: 'status',      value: 'MONITORING',            labelColor: '#5DADE2', valueColor: '#58D68D' },
      { label: 'baseline',    value: 'established 2026-02-14',labelColor: '#5DADE2', valueColor: '#58D68D' },
      { label: 'evaluations', value: '4,901 today',           labelColor: '#5DADE2', valueColor: '#58D68D' },
      { label: 'drift_score', value: '0.31  (elevated)',      labelColor: '#5DADE2', valueColor: '#F0A500' },
      { type: 'divider' },
      { type: 'alert', text: 'ALERT [09:14:55] — Drift threshold exceeded (σ 2.4)', color: '#F0A500' },
      { type: 'alert', text: 'Output distribution deviating from baseline', color: '#F0A500' },
      { type: 'divider' },
      { label: 'action',    value: 'NOTIFIED ai-lead@org',       labelColor: '#5DADE2', valueColor: '#EC7063' },
      { label: 'playbook',  value: 'DRIFT-001 triggered',         labelColor: '#5DADE2', valueColor: '#58D68D' },
      { label: 'review',    value: 'Queued for human inspection', labelColor: '#5DADE2', valueColor: '#58D68D' },
      { type: 'comment', text: '// Caught silently. Would have been invisible without baselines.' },
    ],
  },
  confidence: {
    label: 'Confidence breach',
    lines: [
      { label: 'agent_id',    value: 'clinical-support-v1',   labelColor: '#5DADE2', valueColor: '#58D68D' },
      { label: 'status',      value: 'MONITORING',            labelColor: '#5DADE2', valueColor: '#58D68D' },
      { label: 'threshold',   value: '0.85 (configured)',     labelColor: '#5DADE2', valueColor: '#58D68D' },
      { label: 'decisions',   value: '312 today',             labelColor: '#5DADE2', valueColor: '#58D68D' },
      { label: 'confidence',  value: '0.61  (below threshold)',labelColor: '#5DADE2', valueColor: '#EC7063' },
      { type: 'divider' },
      { type: 'alert', text: 'ALERT [11:07:33] — Confidence below threshold on 4 decisions', color: '#F0A500' },
      { type: 'alert', text: 'Routing to human review queue', color: '#F0A500' },
      { type: 'divider' },
      { label: 'action',  value: 'QUEUED for dr.chen@hospital',  labelColor: '#5DADE2', valueColor: '#58D68D' },
      { label: 'playbook',value: 'HITL-003 triggered',           labelColor: '#5DADE2', valueColor: '#58D68D' },
      { label: 'agent',   value: 'WAITING on human approval',    labelColor: '#5DADE2', valueColor: '#58D68D' },
      { type: 'comment', text: '// Human in the loop before any patient-facing output.' },
    ],
  },
}

export default function TerminalMock() {
  const [active, setActive] = useState('consent')
  const scenario = scenarios[active]

  return (
    <div
      className={styles.wrap}
      role="region"
      aria-label="SpanForge live monitoring example"
    >
      {/* Tab bar */}
      <div className={styles.tabs} role="tablist">
        {Object.entries(scenarios).map(([key, s]) => (
          <button
            key={key}
            role="tab"
            aria-selected={active === key}
            className={`${styles.tab} ${active === key ? styles.tabActive : ''}`}
            onClick={() => setActive(key)}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Terminal bar */}
      <div className={styles.bar}>
        <span className={styles.dot} style={{ background: '#C0392B' }} aria-hidden="true" />
        <span className={styles.dot} style={{ background: '#F0A500' }} aria-hidden="true" />
        <span className={styles.dot} style={{ background: '#58D68D' }} aria-hidden="true" />
        <span className={styles.barLabel}>SpanForge — Production Monitor</span>
      </div>

      {/* Terminal body */}
      <div className={styles.body} role="tabpanel">
        {scenario.lines.map((line, i) => {
          if (line.type === 'divider') {
            return <div key={i} className={styles.divider} aria-hidden="true" />
          }
          if (line.type === 'alert') {
            return (
              <div key={i} className={styles.line}>
                <span style={{ color: line.color }}>{line.text}</span>
              </div>
            )
          }
          if (line.type === 'comment') {
            return (
              <div key={i} className={styles.line}>
                <span className={styles.comment}>{line.text}</span>
              </div>
            )
          }
          return (
            <div key={i} className={styles.line}>
              <span className={styles.lbl} style={{ color: line.labelColor }}>{line.label}</span>
              <span className={styles.sep}>{'  '}</span>
              <span style={{ color: line.valueColor }}>{line.value}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
