'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'

const phaseLinks = [
  { id: 'discover', label: '01 Discover', sub: 'Is AI right for this?',   color: 'var(--discover)', href: '/platform/discover' },
  { id: 'design',   label: '02 Design',   sub: 'What should we build?',    color: 'var(--design)',   href: '/platform/design' },
  { id: 'build',    label: '03 Build',    sub: 'Build it properly.',        color: 'var(--build)',    href: '/platform/build' },
  { id: 'govern',   label: '04 Govern',   sub: 'Make it accountable.',      color: 'var(--govern)',   href: '/platform/govern' },
  { id: 'scale',    label: '05 Scale',    sub: 'Run in production.',        color: 'var(--scale)',    href: '/platform/scale' },
]

const agentObsLinks = [
  { id: 'overview',  label: 'AgentOBS Overview', sub: 'Production observability', href: '/agentobs' },
  { id: 'standard',  label: 'RFC-0001 Standard',  sub: 'Open event-schema spec',  href: '/agentobs/standard' },
  { id: 'sdk',       label: 'Python SDK',          sub: 'pip install agentobs',    href: '/agentobs/sdk' },
  { id: 'debug',     label: 'AgentOBSDebug',       sub: 'Inspect & replay traces', href: '/agentobs/debug' },
  { id: 'validate',  label: 'AgentOBSValidate',    sub: 'Schema compliance in CI', href: '/agentobs/validate' },
]

export default function Nav() {
  const [scrolled,          setScrolled]          = useState(false)
  const [dropdownOpen,      setDropdownOpen]      = useState(false)
  const [agentObsOpen,      setAgentObsOpen]      = useState(false)
  const [mobileOpen,        setMobileOpen]        = useState(false)
  const pathname = usePathname()
  const dropdownRef    = useRef(null)
  const agentObsRef    = useRef(null)
  const closeBtnRef    = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
    setAgentObsOpen(false)
  }, [pathname])

  // Close Platform dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close AgentOBS dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (agentObsRef.current && !agentObsRef.current.contains(e.target)) {
        setAgentObsOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close all menus on Escape key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
        setDropdownOpen(false)
        setAgentObsOpen(false)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  // Lock body scroll when mobile menu is open; move focus to close button
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    if (mobileOpen) closeBtnRef.current?.focus()
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to content</a>

      <nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
        aria-label="Main navigation"
      >
        <div className={`container ${styles.inner}`}>

          {/* ── Logo ── */}
          <Link href="/" className={styles.logo} aria-label="SpanForge — home">
            <span className={styles.logoSpan}>Span</span>
            <span className={styles.logoForge}>Forge</span>
            <span className={styles.logoSub}>AI Lifecycle Platform</span>
          </Link>

          {/* ── Desktop links ── */}
          <div className={styles.links} role="menubar">

            {/* Platform dropdown */}
            <div
              className={styles.dropWrap}
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`${styles.link} ${isActive('/platform') ? styles.active : ''}`}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen((v) => !v)}
              >
                Platform
                <svg className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ''}`} width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {dropdownOpen && (
                <div className={styles.dropdown} role="menu">
                  <Link href="/platform" className={styles.dropItem} role="menuitem" onClick={() => setDropdownOpen(false)}>
                    Platform Overview
                  </Link>
                  <div className={styles.dropDivider} aria-hidden="true" />
                  {phaseLinks.map((p) => (
                    <Link
                      key={p.id}
                      href={p.href}
                      className={styles.dropPhaseItem}
                      role="menuitem"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span className={styles.pip} style={{ backgroundColor: p.color }} aria-hidden="true" />
                      <span>
                        <span className={styles.pipLabel}>{p.label}</span>
                        <span className={styles.pipSub}>{p.sub}</span>
                      </span>
                    </Link>
                  ))}
                  <div className={styles.dropDivider} aria-hidden="true" />
                  <Link
                    href="/platform/trust"
                    className={styles.dropTrustItem}
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className={styles.trustPip} aria-hidden="true" />
                    <span>
                      <span className={styles.pipLabel}>T.R.U.S.T. Framework</span>
                      <span className={styles.pipSub}>Governance layer</span>
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* AgentOBS dropdown */}
            <div
              className={styles.dropWrap}
              ref={agentObsRef}
              onMouseEnter={() => setAgentObsOpen(true)}
              onMouseLeave={() => setAgentObsOpen(false)}
            >
              <button
                className={`${styles.link} ${isActive('/agentobs') ? styles.active : ''}`}
                aria-haspopup="true"
                aria-expanded={agentObsOpen}
                onClick={() => setAgentObsOpen((v) => !v)}
              >
                AgentOBS
                <svg className={`${styles.chevron} ${agentObsOpen ? styles.chevronOpen : ''}`} width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {agentObsOpen && (
                <div className={styles.dropdown} role="menu">
                  {agentObsLinks.map((a) => (
                    <Link
                      key={a.id}
                      href={a.href}
                      className={styles.dropPhaseItem}
                      role="menuitem"
                      onClick={() => setAgentObsOpen(false)}
                    >
                      <span className={styles.aoPip} aria-hidden="true" />
                      <span>
                        <span className={styles.pipLabel}>{a.label}</span>
                        <span className={styles.pipSub}>{a.sub}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/tools"    className={`${styles.link} ${isActive('/tools')    ? styles.active : ''}`}>Tools</Link>
            <Link href="/about"    className={`${styles.link} ${isActive('/about')    ? styles.active : ''}`}>About</Link>
            <Link href="/blog"     className={`${styles.link} ${isActive('/blog')     ? styles.active : ''}`}>Blog</Link>
          </div>

          {/* ── Right: CTA + hamburger ── */}
          <div className={styles.right}>
            <Link href="/platform" className={`btn-primary ${styles.cta}`}>
              Get Started
            </Link>
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      {mobileOpen && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button ref={closeBtnRef} className={styles.closeBtn} onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <nav className={styles.mobileLinks} aria-label="Mobile navigation">
            <Link href="/platform" className={styles.mobileLink}>Platform</Link>
            <Link href="/platform/trust" className={styles.mobileLink}>T.R.U.S.T. Framework</Link>
            <Link href="/agentobs" className={styles.mobileLink}>AgentOBS</Link>
            <Link href="/agentobs/standard" className={styles.mobileLinkIndent}>RFC-0001 Standard</Link>
            <Link href="/agentobs/sdk" className={styles.mobileLinkIndent}>Python SDK</Link>
            <Link href="/agentobs/debug" className={styles.mobileLinkIndent}>AgentOBSDebug</Link>
            <Link href="/agentobs/validate" className={styles.mobileLinkIndent}>AgentOBSValidate</Link>
            <Link href="/tools"    className={styles.mobileLink}>Tools</Link>
            <Link href="/about"    className={styles.mobileLink}>About</Link>
            <Link href="/blog"     className={styles.mobileLink}>Blog</Link>
          </nav>

          <Link href="/platform" className={`btn-primary ${styles.mobileCta}`}>
            Get Started
          </Link>
        </div>
      )}
    </>
  )
}
