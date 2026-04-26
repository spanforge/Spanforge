'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './GABanner.module.css'

const GA_DATE = new Date('2026-05-02T00:00:00.000Z')

export default function GABanner() {
  const [dismissed, setDismissed] = useState(true) // start hidden to avoid flash
  const [launched, setLaunched] = useState(false)

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('ga-banner-dismissed') === 'true'
    if (isDismissed) return
    setLaunched(new Date() >= GA_DATE)
    setDismissed(false)
  }, [])

  if (dismissed) return null

  function handleDismiss() {
    sessionStorage.setItem('ga-banner-dismissed', 'true')
    setDismissed(true)
  }

  return (
    <div className={styles.banner} role="region" aria-label="General Availability announcement">
      <span className={styles.dot} aria-hidden="true" />
      {launched ? (
        <span>
          <strong>SpanForge is now Generally Available</strong> — install v2.0.14 and ship compliance-ready AI today.
        </span>
      ) : (
        <span>
          <strong>SpanForge GA is launching May 2nd, 2026</strong> — General Availability is almost here. Explore the SDK before launch.
        </span>
      )}
      {launched ? (
        <Link href="/docs/installation" className={styles.link}>Install now →</Link>
      ) : (
        <Link href="/spanforgecore/sdk" className={styles.link}>Explore the SDK →</Link>
      )}
      <button
        className={styles.dismiss}
        onClick={handleDismiss}
        aria-label="Dismiss announcement"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}
