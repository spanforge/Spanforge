import DocsSidebar from '@/components/DocsSidebar'
import styles from './docs.module.css'
import 'highlight.js/styles/github-dark.css'

export default function DocsLayout({ children }) {
  return (
    <div className={styles.docsOuter}>
      <DocsSidebar />
      <section className={styles.docsMain}>
        {children}
      </section>
    </div>
  )
}
