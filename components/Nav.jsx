'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'

const NAV_LINKS = [
  { label: 'Advisory', href: '/advisory' },
  { label: 'Docs', href: '/docs' },
  { label: 'SDK', href: '/spanforgecore' },
  { label: 'Standards', href: '/standards' },
  { label: 'Tools', href: '/tools' },
  { label: 'Blog', href: '/blog' },
  { label: 'Learn', href: '/learn' },
  { label: 'About', href: '/about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const closeBtnRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const handler = (event) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    if (mobileOpen) closeBtnRef.current?.focus()
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return
    function trapFocus(e) {
      if (e.key !== 'Tab') return
      const overlay = overlayRef.current
      if (!overlay) return
      const focusable = overlay.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', trapFocus)
    return () => document.removeEventListener('keydown', trapFocus)
  }, [mobileOpen])

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to content</a>

      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} aria-label="Main navigation">
        <div className={`container ${styles.inner}`}>
          <Link href="/" className={styles.logo} aria-label="SpanForge home">
            <span className={styles.logoMark}><span className={styles.logoSpan}>Span</span><span className={styles.logoForge}>Forge</span></span>
            <span className={styles.logoSub}>AI compliance infrastructure</span>
          </Link>

          <div className={styles.links}>
            {NAV_LINKS.map((link) => {
              if (link.external) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {link.label}
                  </a>
                )
              }
              const active = isActive(link.href)
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`${styles.link} ${active ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className={styles.right}>
            <Link href="/contact" className={styles.talkLink}>Talk to us</Link>
            <Link href="/spanforgecore/sdk" className={styles.installBtn}>Explore SDK</Link>
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-controls="mobile-nav"
              aria-expanded={mobileOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Navigation menu" ref={overlayRef}>
          <div className={styles.overlayHeader}>
            <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
              <span className={styles.logoMark}>SpanForge</span>
              <span className={styles.logoSub}>AI compliance infrastructure</span>
            </Link>
            <button
              ref={closeBtnRef}
              className={styles.closeBtn}
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav id="mobile-nav" className={styles.mobileLinks} aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => {
              if (link.external) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mobileLink}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              }
              const active = isActive(link.href)
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`${styles.mobileLink} ${active ? styles.mobileLinkActive : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className={styles.mobileActions}>
              <Link href="/spanforgecore/sdk" className={styles.mobileInstallBtn} onClick={() => setMobileOpen(false)}>
                Explore SDK
              </Link>
              <Link href="/contact" className={styles.mobileGhostBtn} onClick={() => setMobileOpen(false)}>
                Request a briefing
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
