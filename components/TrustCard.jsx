import { trustDimensions } from '@/lib/phases-data'
import styles from './TrustCard.module.css'

export default function TrustCard() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>// T.R.U.S.T. Framework — Open Governance AI Standard</span>
      </div>
      <div className={styles.body}>
        {trustDimensions.map((d, i) => (
          <div key={i} className={styles.row}>
            <span className={styles.letter} aria-hidden="true">{d.letter}</span>
            <div className={styles.content}>
              <span className={styles.word}>{d.word}</span>
              <p className={styles.desc}>{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
