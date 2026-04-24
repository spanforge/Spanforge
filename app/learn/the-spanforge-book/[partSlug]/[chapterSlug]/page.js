import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { getChapter, getPrevNext, getAllPublishedChapterParams, chapterHref } from '@/lib/book'
import styles from './page.module.css'

// Extract partNum from "part-1" → "1", chapterId from "chapter-1-1" → "1-1"
function parseParams(params) {
  const partNum = params.partSlug.replace('part-', '')
  const chapterId = params.chapterSlug.replace('chapter-', '')
  return { partNum, chapterId }
}

export async function generateStaticParams() {
  return getAllPublishedChapterParams().map(({ partNum, chapterId }) => ({
    partSlug: `part-${partNum}`,
    chapterSlug: `chapter-${chapterId}`,
  }))
}

export async function generateMetadata({ params }) {
  const { partNum, chapterId } = parseParams(params)
  const chapter = getChapter(partNum, chapterId)
  if (!chapter) return {}
  return {
    title: `${chapter.chapterId} — ${chapter.title} | The SpanForge Book`,
    description: `Part ${chapter.partNumber}: ${chapter.partTitle}. ${chapter.title} — from The SpanForge Book.`,
  }
}

const TRACK_COLOURS = {
  core:       { label: 'Core',       bg: '#e8f1ff', text: '#1266f1' },
  security:   { label: 'Security',   bg: '#fee2e2', text: '#dc2626' },
  compliance: { label: 'Compliance', bg: '#ede9fe', text: '#7c3aed' },
  ops:        { label: 'Ops',        bg: '#ccfbf1', text: '#0f766e' },
  advanced:   { label: 'Advanced',   bg: '#fef3c7', text: '#b45309' },
  testing:    { label: 'Testing',    bg: '#e0f2fe', text: '#0369a1' },
}

export default function ChapterPage({ params }) {
  const { partNum, chapterId } = parseParams(params)

  const chapter = getChapter(partNum, chapterId)
  if (!chapter) notFound()

  const { prev, next } = getPrevNext(partNum, chapterId)
  const track = TRACK_COLOURS[chapter.track] || TRACK_COLOURS.core

  return (
    <main id="main-content" className={styles.page}>

      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className="container">
          <ol className={styles.breadcrumbList}>
            <li><Link href="/learn" className={styles.breadcrumbLink}>Learn</Link></li>
            <li aria-hidden="true" className={styles.breadcrumbSep}>›</li>
            <li><Link href="/learn/the-spanforge-book" className={styles.breadcrumbLink}>The SpanForge Book</Link></li>
            <li aria-hidden="true" className={styles.breadcrumbSep}>›</li>
            <li className={styles.breadcrumbCurrent}>Chapter {chapter.chapterId}</li>
          </ol>
        </div>
      </nav>

      {/* ── Chapter header ── */}
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerMeta}>
            <span
              className={styles.trackPill}
              style={{ background: track.bg, color: track.text }}
            >
              {track.label}
            </span>
            <span className={styles.partLabel}>
              Part {chapter.partNumber} · {chapter.partTitle}
            </span>
          </div>
          <p className={styles.chapterId}>Chapter {chapter.chapterId}</p>
          <h1 className={styles.title}>{chapter.title}</h1>
          {chapter.estimatedTime && (
            <p className={styles.readingTime}>{chapter.estimatedTime} read</p>
          )}
        </div>
      </header>

      {/* ── Content ── */}
      <article className={styles.article}>
        <div className={`container ${styles.articleInner}`}>
          <div className={styles.prose}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
              {chapter.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      {/* ── Chapter navigation ── */}
      <nav className={styles.chapterNav} aria-label="Chapter navigation">
        <div className="container">
          <div className={styles.chapterNavInner}>
            <div className={styles.navSlot}>
              {prev && (
                <Link href={chapterHref(prev.partNumber, prev.chapterId)} className={styles.navLink}>
                  <span className={styles.navDirection}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Previous
                  </span>
                  <span className={styles.navChapterId}>Chapter {prev.chapterId}</span>
                </Link>
              )}
            </div>

            <Link href="/learn/the-spanforge-book" className={styles.tocLink}>
              View full curriculum
            </Link>

            <div className={`${styles.navSlot} ${styles.navSlotRight}`}>
              {next && (
                <Link href={chapterHref(next.partNumber, next.chapterId)} className={styles.navLink}>
                  <span className={styles.navDirection}>
                    Next
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className={styles.navChapterId}>Chapter {next.chapterId}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

    </main>
  )
}
