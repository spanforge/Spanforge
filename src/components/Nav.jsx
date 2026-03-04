import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

const LOGO_URL = '/logo.png'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)

  const isLlmDiff = location.pathname.startsWith('/llm-diff')
  const isStandard = location.pathname.startsWith('/standard')
  const isTutorials = location.pathname.startsWith('/learn')

  const closeMenu = () => setMenuOpen(false)

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [menuOpen])

  return (
    <div ref={navRef}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link to="/" className={styles.brand} onClick={closeMenu}>
            <img src={LOGO_URL} alt="Spanforge" />
            <span>Spanforge</span>
          </Link>

          <ul className={styles.links}>
            {!isLlmDiff && !isStandard && !isTutorials && (
              <>
                <li><a href="#mission">Why Here</a></li>
                <li><a href="#tools">Tools</a></li>
                <li><Link to="/standard">The Standard</Link></li>
                <li><a href="#learn">Education</a></li>
                <li><a href="#community">Community</a></li>
              </>
            )}
            {isStandard && (
              <>
                <li><Link to="/standard">Overview</Link></li>
                <li><Link to="/standard/spec">Full Specification</Link></li>
              </>
            )}
            {isTutorials && (
              <>
                <li><Link to="/learn/otel-python/part1">OTel in Python</Link></li>
              </>
            )}
            {isLlmDiff && (
              <>
                <li><Link to="/llm-diff">Overview</Link></li>
                <li><Link to="/llm-diff/docs/getting-started">Docs</Link></li>
              </>
            )}
            <li>
              <a
                href="https://github.com/veerarag1973"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ghLink}
              >
                GitHub ↗
              </a>
            </li>
          </ul>

          {(isLlmDiff || isStandard || isTutorials) && (
            <div className={styles.productBadge}>
              {isLlmDiff && <span className={styles.productName}>llm-diff</span>}
              {isStandard && <span className={styles.productName}>The Standard</span>}
              {isTutorials && <span className={styles.productName}>Learn</span>}
            </div>
          )}

          <button
            className={`${styles.toggle} ${menuOpen ? styles.open : ''}`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {!isLlmDiff && !isStandard && !isTutorials && (
            <>
              <a href="#mission" onClick={closeMenu}>Why Here</a>
              <a href="#tools" onClick={closeMenu}>Tools</a>
              <Link to="/standard" onClick={closeMenu}>The Standard</Link>
              <a href="#learn" onClick={closeMenu}>Education</a>
              <a href="#community" onClick={closeMenu}>Community</a>
            </>
          )}
          {isStandard && (
            <>
              <Link to="/standard" onClick={closeMenu}>Overview</Link>
              <Link to="/standard/spec" onClick={closeMenu}>Full Specification</Link>
            </>
          )}
          {isTutorials && (
            <>
              <Link to="/learn/otel-python/part1" onClick={closeMenu}>OTel in Python</Link>
            </>
          )}
          {isLlmDiff && (
            <>
              <Link to="/llm-diff" onClick={closeMenu}>Overview</Link>
              <Link to="/llm-diff/docs/getting-started" onClick={closeMenu}>Docs</Link>
            </>
          )}
          <a
            href="https://github.com/veerarag1973"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            GitHub ↗
          </a>
        </div>
      )}
    </div>
  )
}
