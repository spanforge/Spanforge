'use client'

import { useState } from 'react'
import { TERMINAL_THEME } from '@/lib/ui-theme'
import styles from './TerminalMock.module.css'

const scenarios = {
  consent: {
    label: 'Consent violation',
    lines: [
      { label: 'agent_id', value: 'loan-approval-v2', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.ok },
      { label: 'status', value: 'MONITORING', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.ok },
      { label: 'baseline', value: 'established 2026-03-01', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.ok },
      { label: 'decisions', value: '1,247 today', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.ok },
      { label: 'drift_score', value: '0.02 (normal)', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.ok },
      { type: 'divider' },
      { type: 'alert', text: 'ALERT [14:32:07] - Consent boundary violation', color: TERMINAL_THEME.warn },
      { type: 'alert', text: 'data.credit_history accessed outside declared purpose', color: TERMINAL_THEME.warn },
      { type: 'divider' },
      { label: 'action', value: 'ESCALATED to compliance@org', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.danger },
      { label: 'playbook', value: 'GDPR-002 triggered', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.ok },
      { label: 'agent', value: 'PAUSED pending human review', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.ok },
      { type: 'comment', text: '// SpanForge caught it before the regulator did.' },
    ],
  },
  drift: {
    label: 'Drift detected',
    lines: [
      { label: 'agent_id', value: 'contract-analysis-v3', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.ok },
      { label: 'status', value: 'MONITORING', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.ok },
      { label: 'baseline', value: 'established 2026-02-14', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.ok },
      { label: 'evaluations', value: '4,901 today', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.ok },
      { label: 'drift_score', value: '0.31 (elevated)', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.warn },
      { type: 'divider' },
      { type: 'alert', text: 'ALERT [09:14:55] - Drift threshold exceeded (2.4 sigma)', color: TERMINAL_THEME.warn },
      { type: 'alert', text: 'Output distribution deviating from baseline', color: TERMINAL_THEME.warn },
      { type: 'divider' },
      { label: 'action', value: 'NOTIFIED ai-lead@org', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.danger },
      { label: 'playbook', value: 'DRIFT-001 triggered', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.ok },
      { label: 'review', value: 'Queued for human inspection', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.ok },
      { type: 'comment', text: '// Caught silently. Would have been invisible without baselines.' },
    ],
  },
  confidence: {
    label: 'Confidence breach',
    lines: [
      { label: 'agent_id', value: 'clinical-support-v1', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.ok },
      { label: 'status', value: 'MONITORING', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.ok },
      { label: 'threshold', value: '0.85 (configured)', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.ok },
      { label: 'decisions', value: '312 today', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.ok },
      { label: 'confidence', value: '0.61 (below threshold)', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.danger },
      { type: 'divider' },
      { type: 'alert', text: 'ALERT [11:07:33] - Confidence below threshold on 4 decisions', color: TERMINAL_THEME.warn },
      { type: 'alert', text: 'Routing to human review queue', color: TERMINAL_THEME.warn },
      { type: 'divider' },
      { label: 'action', value: 'QUEUED for dr.chen@hospital', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.ok },
      { label: 'playbook', value: 'HITL-003 triggered', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.ok },
      { label: 'agent', value: 'WAITING on human approval', labelColor: TERMINAL_THEME.label, valueColor: TERMINAL_THEME.ok },
      { type: 'comment', text: '// Human in the loop before any patient-facing output.' },
    ],
  },
}

const scenarioKeys = Object.keys(scenarios)

export default function TerminalMock() {
  const [active, setActive] = useState('consent')
  const scenario = scenarios[active]

  const moveSelection = (currentKey, delta) => {
    const currentIndex = scenarioKeys.indexOf(currentKey)
    const nextIndex = (currentIndex + delta + scenarioKeys.length) % scenarioKeys.length
    setActive(scenarioKeys[nextIndex])
  }

  return (
    <div className={styles.wrap} role="region" aria-label="SpanForge live monitoring example">
      <div className={styles.tabs} role="tablist" aria-label="Monitoring scenarios">
        {Object.entries(scenarios).map(([key, item], index) => {
          const selected = active === key
          const tabId = `terminal-tab-${key}`
          const panelId = `terminal-panel-${key}`

          return (
            <button
              key={key}
              id={tabId}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              className={`${styles.tab} ${selected ? styles.tabActive : ''}`}
              onClick={() => setActive(key)}
              onKeyDown={(event) => {
                if (event.key === 'ArrowRight') {
                  event.preventDefault()
                  moveSelection(key, 1)
                } else if (event.key === 'ArrowLeft') {
                  event.preventDefault()
                  moveSelection(key, -1)
                } else if (event.key === 'Home') {
                  event.preventDefault()
                  setActive(scenarioKeys[0])
                } else if (event.key === 'End') {
                  event.preventDefault()
                  setActive(scenarioKeys[scenarioKeys.length - 1])
                }
              }}
            >
              <span className="sr-only">Scenario {index + 1}: </span>
              {item.label}
            </button>
          )
        })}
      </div>

      <div className={styles.bar}>
        <span className={styles.dot} style={{ background: TERMINAL_THEME.chromeRed }} aria-hidden="true" />
        <span className={styles.dot} style={{ background: TERMINAL_THEME.chromeAmber }} aria-hidden="true" />
        <span className={styles.dot} style={{ background: TERMINAL_THEME.chromeGreen }} aria-hidden="true" />
        <span className={styles.barLabel}>SpanForge - Production Monitor</span>
      </div>

      <div
        id={`terminal-panel-${active}`}
        className={styles.body}
        role="tabpanel"
        aria-labelledby={`terminal-tab-${active}`}
      >
        {scenario.lines.map((line, index) => {
          if (line.type === 'divider') {
            return <div key={index} className={styles.divider} aria-hidden="true" />
          }
          if (line.type === 'alert') {
            return (
              <div key={index} className={styles.line}>
                <span style={{ color: line.color }}>{line.text}</span>
              </div>
            )
          }
          if (line.type === 'comment') {
            return (
              <div key={index} className={styles.line}>
                <span className={styles.comment}>{line.text}</span>
              </div>
            )
          }
          return (
            <div key={index} className={styles.line}>
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
