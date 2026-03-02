import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

const LOGO_URL = '/logo.png'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)

  const isLlmDiff = location.pathname.startsWith('/llm-diff')
  const isSchema = location.pathname.startsWith('/llm-toolkit-schema')

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
            {!isLlmDiff && !isSchema && (
              <>
                <li><a href="#observability">Why It Matters</a></li>
                <li><a href="#tools">Tools</a></li>
                <li><a href="#philosophy">Philosophy</a></li>
              </>
            )}
            {isLlmDiff && (
              <>
                <li><Link to="/llm-diff">Overview</Link></li>
                <li><Link to="/llm-diff/docs/getting-started">Docs</Link></li>
              </>
            )}
            {isSchema && (
              <>
                <li><Link to="/llm-toolkit-schema">Overview</Link></li>
                <li><Link to="/llm-toolkit-schema/docs/quickstart">Docs</Link></li>
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

          {(isLlmDiff || isSchema) && (
            <div className={styles.productBadge}>
              {isLlmDiff ? (
                <span className={styles.productName}>llm-diff</span>
              ) : (
                <span className={styles.productName}>llm-toolkit-schema</span>
              )}
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
          {!isLlmDiff && !isSchema && (
            <>
              <a href="#observability" onClick={closeMenu}>Why It Matters</a>
              <a href="#tools" onClick={closeMenu}>Tools</a>
              <a href="#philosophy" onClick={closeMenu}>Philosophy</a>
            </>
          )}
          {isLlmDiff && (
            <>
              <Link to="/llm-diff" onClick={closeMenu}>Overview</Link>
              <Link to="/llm-diff/docs/getting-started" onClick={closeMenu}>Docs</Link>
            </>
          )}
          {isSchema && (
            <>
              <Link to="/llm-toolkit-schema" onClick={closeMenu}>Overview</Link>
              <Link to="/llm-toolkit-schema/docs/quickstart" onClick={closeMenu}>Docs</Link>
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
