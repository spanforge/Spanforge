'use client'

import { useState, useMemo } from 'react'
import ResourceCard from '@/components/ResourceCard'
import styles from './page.module.css'

const TYPE_FILTERS = [
  { value: 'all',            label: 'All' },
  { value: 'whitepaper',     label: 'Whitepapers' },
  { value: 'research-paper', label: 'Research Papers' },
  { value: 'mini-book',      label: 'Mini Books' },
  { value: 'guide',          label: 'Guides' },
  { value: 'spec',           label: 'Specs' },
  { value: 'report',         label: 'Reports' },
]

export default function ResourcesPageClient({ resources }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return resources
    return resources.filter((r) => r.type === activeFilter)
  }, [resources, activeFilter])

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">SpanForge Library</span>
          <h1 className={styles.h1}>
            Research, Guides &amp; Papers
          </h1>
          <p className={styles.heroSub}>
            Whitepapers, mini books, research papers, and practical guides on
            enterprise AI — governance, observability, production operations,
            and the SpanForge platform.
          </p>
        </div>
      </section>

      <section className={styles.library}>
        <div className="container">
          <div className={styles.filters} role="group" aria-label="Filter by type">
            {TYPE_FILTERS.map((f) => (
              <button
                key={f.value}
                className={`${styles.filterBtn} ${activeFilter === f.value ? styles.filterActive : ''}`}
                onClick={() => setActiveFilter(f.value)}
                aria-pressed={activeFilter === f.value}
              >
                {f.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className={styles.empty}>
              <p>No resources in this category yet. <a href="/blog">Read the blog</a> while you wait.</p>
            </div>
          ) : (
            <div className={styles.grid}>
              {filtered.map((resource) => (
                <ResourceCard key={resource.slug} resource={resource} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
