'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'

const NAV_PRIMARY = [
  { label: 'SDK', href: '/spanforgecore' },
  { label: 'Compliance', href: '/advisory' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Docs', href: '/docs' },
  { label: 'About', href: '/about' },
]

const RESOURCES_MENU = [
  { label: 'Whitepapers', href: '/resources/whitepapers', desc: 'In-depth research on AI compliance' },
  { label: 'Library', href: '/resources', desc: 'Guides, papers & reference material' },
  { label: 'Blog', href: '/blog', desc: 'Updates, insights & announcements' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const resourcesRef = useRef(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setResourcesOpen(false)
  }, [pathname])

  useEffect(() => {
    const handler = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
        setResourcesOpen(false)
      }
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

  useEffect(() => {
    if (!resourcesOpen) return
    const handleClickOutside = (e) => {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target)) {
        setResourcesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [resourcesOpen])

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to content</a>

      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} aria-label="Main navigation">
        <div className={`container ${styles.inner}`}>
          <Link href="/" className={styles.logo} aria-label="SpanForge home">
            <span className={styles.logoMark}><span className={styles.logoSpan}>Span</span><span className={styles.logoForge}>Forge</span></span>
          </Link>

          <div className={styles.links}>
            {NAV_PRIMARY.map((link) => {
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

            {/* Resources dropdown */}
            <div className={styles.resourcesDropdown} ref={resourcesRef}>
              <button
                className={`${styles.link} ${styles.resourcesToggle} ${isActive('/resources') || isActive('/blog') ? styles.active : ''} ${resourcesOpen ? styles.resourcesToggleOpen : ''}`}
                onClick={() => setResourcesOpen((o) => !o)}
                aria-haspopup="true"
                aria-expanded={resourcesOpen}
              >
                Resources
                <svg className={styles.resourcesChevron} width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {resourcesOpen && (
                <div className={styles.resourcesMenu} role="menu">
                  {RESOURCES_MENU.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={styles.resourcesMenuItem}
                      role="menuitem"
                      onClick={() => setResourcesOpen(false)}
                    >
                      <span className={styles.resourcesMenuLabel}>{item.label}</span>
                      <span className={styles.resourcesMenuDesc}>{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className={styles.right}>
            <Link href="/spanforgecore/sdk" className={styles.installBtn}>Get Started Free</Link>
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
            {NAV_PRIMARY.map((link) => {
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
            <p className={styles.mobileSectionLabel}>Resources</p>
            {RESOURCES_MENU.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`${styles.mobileLink} ${styles.mobileLinkIndent} ${active ? styles.mobileLinkActive : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            <p className={styles.mobileSectionLabel}>More</p>
            {[{ label: 'Blog', href: '/blog' }, { label: 'Tools', href: '/tools' }, { label: 'Standards', href: '/standards' }].map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`${styles.mobileLink} ${styles.mobileLinkIndent} ${active ? styles.mobileLinkActive : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className={styles.mobileActions}>
              <Link href="/spanforgecore/sdk" className={styles.mobileInstallBtn} onClick={() => setMobileOpen(false)}>
                Get Started Free
              </Link>
              <Link href="/contact" className={styles.mobileGhostBtn} onClick={() => setMobileOpen(false)}>
                Schedule Advisory Call
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
