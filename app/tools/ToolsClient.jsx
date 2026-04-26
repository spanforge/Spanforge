'use client'

import { useState, useMemo } from 'react'
import ToolCard from '@/components/ToolCard'
import styles from './page.module.css'

const ALL_TYPES = [
  { id: 'all', label: 'All' },
  { id: 'sdk', label: 'SDK Services' },
  { id: 'webapp', label: 'Web Apps' },
  { id: 'doc', label: 'Documents' },
  { id: 'fw', label: 'Frameworks' },
]

export default function ToolsClient({ tools }) {
  const [typeFilter, setTypeFilter] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return tools.filter((tool) => {
      const matchType = typeFilter === 'all' || tool.type === typeFilter
      const query = search.trim().toLowerCase()
      const matchSearch =
        !query ||
        tool.name.toLowerCase().includes(query) ||
        (tool.description || '').toLowerCase().includes(query)

      return matchType && matchSearch
    })
  }, [tools, typeFilter, search])

  return (
    <section className={styles.toolsSection} aria-label="Tools catalog">
      <div className="container">
        <div className={styles.filterBar}>
          <div className={styles.filterGroup}>
            {ALL_TYPES.map((type) => (
              <button
                key={type.id}
                className={`${styles.filterBtn} ${typeFilter === type.id ? styles.filterBtnActive : ''}`}
                onClick={() => setTypeFilter(type.id)}
                aria-pressed={typeFilter === type.id}
              >
                {type.label}
              </button>
            ))}
          </div>

          <label className={styles.searchLabel}>
            <span className="sr-only">Search tools</span>
            <input
              type="search"
              placeholder="Search tools..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className={styles.searchInput}
            />
          </label>
        </div>

        <p className={styles.resultCount} aria-live="polite">
          Showing {filtered.length} of {tools.length} public tools
        </p>

        {filtered.length > 0 ? (
          <div className={styles.toolsGrid}>
            {filtered.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <p>No tools match your filters.</p>
            <button
              className={styles.resetBtn}
              onClick={() => {
                setTypeFilter('all')
                setSearch('')
              }}
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
