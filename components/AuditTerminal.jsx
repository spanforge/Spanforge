'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './AuditTerminal.module.css'

const LOG_LINES = [
  { ts: '[14:32:07.114]', status: 'SIGNED ', statusCls: 'ok',  event: ' llm.trace.started      ', detail: 'chain:4821 prev:4820 hmac:a3f7c2d1\u2026 \u2713', detailCls: 'cm' },
  { ts: '[14:32:07.441]', status: 'SIGNED ', statusCls: 'ok',  event: ' llm.cost.recorded      ', detail: 'gpt-4o \u00b7 $0.0043 \u00b7 1,720 tokens \u00b7 proj:loan-v2', detailCls: 'cm' },
  { ts: '[14:32:07.891]', status: 'BLOCKED', statusCls: 'blk', event: ' llm.secrets.detected   ', detail: 'STRIPE_LIVE_KEY \u00b7 entropy:5.1bits/char \u00b7 auto-blocked \u2715', detailCls: 'rd' },
  { ts: '[14:32:08.203]', status: 'REDACT ', statusCls: 'rd',  event: ' llm.pii.detected       ', detail: 'EMAIL \u2192 [REDACTED:pii] \u00b7 GDPR Art.5(1)(f) \u2713', detailCls: 'rd' },
  { ts: '[14:32:08.550]', status: 'SIGNED ', statusCls: 'ok',  event: ' llm.guard.evaluated    ', detail: 'confidence:0.41 < threshold:0.70 \u2192 HITL queue', detailCls: 'cm' },
  { ts: '[14:32:08.890]', status: 'SIGNED ', statusCls: 'ok',  event: ' llm.trace.completed    ', detail: 'chain:4822 hmac:c8e2f1a3\u2026 latency:778ms \u2713', detailCls: 'cm' },
  { ts: '[14:32:09.110]', status: 'VERIFY ', statusCls: 'ok2', event: ' chain verified         ', detail: '4,822 events \u00b7 0 gaps \u00b7 0 tampering \u00b7 EU AI Act Art.12 \u2713', detailCls: 'ok2' },
  { ts: '[14:32:12.334]', status: 'SIGNED ', statusCls: 'ok',  event: ' llm.trace.started      ', detail: 'chain:4823 prev:4822 hmac:d9b1e4f2\u2026 \u2713', detailCls: 'cm' },
  { ts: '[14:32:12.671]', status: 'REDACT ', statusCls: 'rd',  event: ' llm.pii.detected       ', detail: 'PHONE_NUMBER \u2192 [REDACTED:phone] \u00b7 HIPAA Safe Harbor \u2713', detailCls: 'rd' },
  { ts: '[14:32:13.002]', status: 'SIGNED ', statusCls: 'ok',  event: ' llm.trace.completed    ', detail: 'chain:4824 hmac:f3c7a8d5\u2026 latency:668ms \u2713', detailCls: 'cm' },
]

export default function AuditTerminal() {
  const [visible, setVisible] = useState([0, 1, 2, 3, 4, 5, 6])
  const [animating, setAnimating] = useState(null)
  const nextIdx = useRef(7)
  const containerRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const incoming = nextIdx.current % LOG_LINES.length
      nextIdx.current++
      setAnimating(incoming)
      setVisible(prev => {
        const next = [...prev.slice(-6), incoming]
        return next
      })
      setTimeout(() => setAnimating(null), 600)
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.terminal} ref={containerRef} aria-label="Live audit chain feed" aria-live="polite">
      <div className={styles.header}>
        <span className={styles.dot} style={{ background: '#F09595' }} />
        <span className={styles.dot} style={{ background: '#EF9F27' }} />
        <span className={styles.dot} style={{ background: '#97C459' }} />
        <span className={styles.title}>spanforge audit-chain &mdash; live</span>
        <span className={styles.badge}>&#9679; live</span>
      </div>
      <div className={styles.lines}>
        {visible.map((lineIdx, i) => {
          const l = LOG_LINES[lineIdx]
          const isNew = animating === lineIdx && i === visible.length - 1
          return (
            <span key={`${lineIdx}-${i}`} className={`${styles.line} ${isNew ? styles.lineNew : ''}`}>
              <span className={styles.ts}>{l.ts} </span>
              <span className={styles[l.statusCls]}>{l.status}</span>
              <span className={styles.ev}>{l.event}</span>
              <span className={styles[l.detailCls]}>{l.detail}</span>
            </span>
          )
        })}
        <span className={styles.cursor} aria-hidden="true">&#9646;</span>
      </div>
    </div>
  )
}
