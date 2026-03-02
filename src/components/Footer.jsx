import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img src="/logo.png" alt="Spanforge" />
          <span>Spanforge</span>
        </div>

        <div className={styles.grid}>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Products</h4>
            <ul>
              <li><Link to="/llm-diff">llm-diff</Link></li>
              <li><Link to="/llm-toolkit-schema">llm-toolkit-schema</Link></li>
              <li><a href="https://github.com/veerarag1973/promptlock" target="_blank" rel="noopener">promptlock</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Docs</h4>
            <ul>
              <li><Link to="/llm-diff/docs/getting-started">llm-diff Docs</Link></li>
              <li><Link to="/llm-toolkit-schema/docs/quickstart">llm-toolkit-schema Docs</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Community</h4>
            <ul>
              <li><a href="https://github.com/veerarag1973" target="_blank" rel="noopener">GitHub</a></li>
              <li><a href="https://github.com/veerarag1973/llmdiff/issues" target="_blank" rel="noopener">Issues</a></li>
              <li><a href="https://pypi.org/project/llm-diff/" target="_blank" rel="noopener">PyPI</a></li>
            </ul>
          </div>
        </div>

        <hr className={styles.divider} />

        <p className={styles.meta}>
          &copy; {new Date().getFullYear()} Spanforge &mdash; Released under the{' '}
          <a href="/LICENSE" target="_blank" rel="noopener">MIT License</a>.
          Built in the open.
        </p>
      </div>
    </footer>
  )
}
