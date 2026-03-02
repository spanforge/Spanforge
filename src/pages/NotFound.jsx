import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import styles from './NotFound.module.css'

export default function NotFound() {
  usePageTitle('Page Not Found · Spanforge')
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <div className={styles.code}>404</div>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.sub}>
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div className={styles.actions}>
          <Link to="/" className="btn btn-primary">← Back to home</Link>
          <Link to="/llm-diff/docs/getting-started" className="btn btn-outline">llm-diff Docs</Link>
          <Link to="/llm-toolkit-schema/docs/quickstart" className="btn btn-outline">llm-toolkit-schema Docs</Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
