import { useState } from 'react'
import { NavLink, useLocation, Link } from 'react-router-dom'
import styles from './DocLayout.module.css'

export default function DocLayout({ basePath, sidebar, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { pathname } = useLocation()

  const allItems = sidebar.flatMap(s => s.items)
  const activeIndex = allItems.findIndex(item => pathname === `${basePath}/${item.path}`)
  const activePage = activeIndex >= 0 ? allItems[activeIndex] : null
  const prevItem = activeIndex > 0 ? allItems[activeIndex - 1] : null
  const nextItem = activeIndex < allItems.length - 1 && activeIndex >= 0 ? allItems[activeIndex + 1] : null

  const activeSection = sidebar.find(s =>
    s.items?.some(item => pathname === `${basePath}/${item.path}`)
  )

  return (
    <div className={styles.layout}>
      {/* Mobile toggle */}
      <button
        className={styles.sidebarToggle}
        onClick={() => setSidebarOpen(o => !o)}
        aria-label="Toggle sidebar"
      >
        <span className={styles.toggleIcon}>{sidebarOpen ? '✕' : '☰'}</span>
        <span>Menu</span>
      </button>

      {/* Sidebar overlay on mobile */}
      {sidebarOpen && (
        <div
          className={styles.overlay}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarVisible : ''}`}>
        <nav className={styles.sidebarNav}>
          {sidebar.map(section => (
            <div key={section.title} className={styles.section}>
              {section.title && (
                <p className={styles.sectionTitle}>{section.title}</p>
              )}
              <ul>
                {section.items.map(item => (
                  <li key={item.path}>
                    <NavLink
                      to={`${basePath}/${item.path}`}
                      className={({ isActive }) =>
                        `${styles.link} ${isActive ? styles.active : ''}`
                      }
                      onClick={() => setSidebarOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className={styles.content}>
        {/* Page header strip */}
        {activePage && (
          <div className={styles.pageHeader}>
            <div className={styles.pageHeaderInner}>
              {activeSection?.title && (
                <span className={styles.pageHeaderSection}>{activeSection.title}</span>
              )}
              {activeSection?.title && <span className={styles.pageHeaderSep}>/</span>}
              <span className={styles.pageHeaderTitle}>{activePage.label}</span>
            </div>
          </div>
        )}
        <div className={styles.contentInner}>
          {children}
        </div>
        {/* Prev / Next navigation */}
        {(prevItem || nextItem) && (
          <div className={styles.docNav}>
            {prevItem ? (
              <Link to={`${basePath}/${prevItem.path}`} className={`${styles.docNavBtn} ${styles.prev}`}>
                <span className={styles.docNavDir}>← Previous</span>
                <span className={styles.docNavLabel}>{prevItem.label}</span>
              </Link>
            ) : <div />}
            {nextItem ? (
              <Link to={`${basePath}/${nextItem.path}`} className={`${styles.docNavBtn} ${styles.next}`}>
                <span className={styles.docNavDir}>Next →</span>
                <span className={styles.docNavLabel}>{nextItem.label}</span>
              </Link>
            ) : <div />}
          </div>
        )}
      </main>
    </div>
  )
}
