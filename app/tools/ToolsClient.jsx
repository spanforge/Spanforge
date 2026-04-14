'use client'

import { useState, useMemo } from 'react'
import ToolCard from '@/components/ToolCard'
import styles from './page.module.css'

const ALL_TYPES = [
  { id: 'all',     label: 'All' },
  { id: 'webapp',  label: 'Web Apps' },
  { id: 'python',  label: 'Python CLI' },
  { id: 'doc',     label: 'Documents' },
  { id: 'fw',      label: 'Frameworks' },
  { id: 'product', label: 'Products' },
]

const ALL_PHASES = [
  { id: 'all',      label: 'All Phases' },
  { id: 'discover', label: 'Discover' },
  { id: 'design',   label: 'Design' },
  { id: 'build',    label: 'Build' },
  { id: 'govern',   label: 'Govern' },
  { id: 'scale',    label: 'Scale' },
]

export default function ToolsClient({ tools }) {
  const [typeFilter, setTypeFilter] = useState('all')
  const [phaseFilter, setPhaseFilter] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return tools.filter(t => {
      const matchType  = typeFilter  === 'all' || t.type  === typeFilter
      const matchPhase = phaseFilter === 'all' || t.phase === phaseFilter
      const q = search.trim().toLowerCase()
      const matchSearch = !q || t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q)
      return matchType && matchPhase && matchSearch
    })
  }, [tools, typeFilter, phaseFilter, search])

  return (
    <section className={styles.toolsSection} aria-label="Tools catalog">
      <div className="container">
        {/* Filter bar */}
        <div className={styles.filterBar}>
          <div className={styles.filterGroup}>
            {ALL_TYPES.map(t => (
              <button
                key={t.id}
                className={`${styles.filterBtn} ${typeFilter === t.id ? styles.filterBtnActive : ''}`}
                onClick={() => setTypeFilter(t.id)}
                aria-pressed={typeFilter === t.id}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className={styles.filterGroup}>
            {ALL_PHASES.map(p => (
              <button
                key={p.id}
                className={`${styles.filterBtn} ${phaseFilter === p.id ? styles.filterBtnActive : ''}`}
                onClick={() => setPhaseFilter(p.id)}
                aria-pressed={phaseFilter === p.id}
              >
                {p.label}
              </button>
            ))}
          </div>

          <label className={styles.searchLabel}>
            <span className="sr-only">Search tools</span>
            <input
              type="search"
              placeholder="Search tools…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className={styles.searchInput}
            />
          </label>
        </div>

        {/* Results count */}
        <p className={styles.resultCount} aria-live="polite">
          Showing {filtered.length} of {tools.length} public tools
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className={styles.toolsGrid}>
            {filtered.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <p>No tools match your filters.</p>
            <button
              className={styles.resetBtn}
              onClick={() => { setTypeFilter('all'); setPhaseFilter('all'); setSearch('') }}
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
