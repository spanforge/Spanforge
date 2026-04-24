import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BOOK_DIR = path.join(process.cwd(), 'content', 'book')

// Ordered chapter list per part — drives prev/next navigation
const PART_CHAPTERS = {
  1: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8'],
  2: ['2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7', '2.8', '2.9', '2.10'],
  3: ['3.1', '3.2', '3.3', '3.4', '3.5', '3.6', '3.7', '3.8'],
  4: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9', '4.10'],
  5: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7', '5.8', '5.9', '5.10'],
  6: ['6.1', '6.2', '6.3', '6.4', '6.5', '6.6', '6.7', '6.8', '6.9', '6.10', '6.11', '6.12'],
  7: ['7.1', '7.2', '7.3', '7.4', '7.5', '7.6', '7.7', '7.8'],
  8: ['8.1', '8.2', '8.3', '8.4', '8.5', '8.6', '8.7'],
}

/** Convert URL slug ("1-1") to file chapterId ("1.1") and vice-versa. */
export function slugToChapterId(slug) { return slug.replace('-', '.') }
export function chapterIdToSlug(id) { return id.replace('.', '-') }

/**
 * Build the URL for a chapter given its partNumber and chapterId.
 * Uses dash format for the chapterId to avoid Next.js static-file routing issues with dots.
 */
export function chapterHref(partNumber, chapterId) {
  return `/learn/the-spanforge-book/part-${partNumber}/chapter-${chapterIdToSlug(chapterId)}`
}

/**
 * Read a single chapter's frontmatter + content.
 * Accepts URL slug format ("1-1") — converts to dot format for file lookup.
 * Returns null if the file does not exist.
 */
export function getChapter(partNumber, chapterSlug) {
  // URL uses dash format ("1-1"), files use dot format ("1.1")
  const fileChapterId = chapterSlug.replace(/^(\d+)-(\d+)$/, '$1.$2')
  const filePath = path.join(BOOK_DIR, `part-${partNumber}`, `${fileChapterId}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return { ...data, content, chapterId: fileChapterId, partNumber: Number(partNumber) }
}

/**
 * Get prev and next chapter info for navigation within a part.
 * Accepts URL slug format ("1-1"). Returns dot-format chapterIds for href generation.
 * Returns { prev: { chapterId, partNumber } | null, next: { chapterId, partNumber } | null }
 */
export function getPrevNext(partNumber, chapterSlug) {
  const part = Number(partNumber)
  const chapters = PART_CHAPTERS[part] || []
  // Convert URL slug to dot-format for indexOf lookup
  const chapterId = chapterSlug.replace(/^(\d+)-(\d+)$/, '$1.$2')
  const idx = chapters.indexOf(chapterId)

  const prev = idx > 0 ? { chapterId: chapters[idx - 1], partNumber: part } : null
  const next = idx !== -1 && idx < chapters.length - 1
    ? { chapterId: chapters[idx + 1], partNumber: part }
    : null

  return { prev, next }
}

/**
 * All published chapter params — used by generateStaticParams.
 * Returns dash-format chapterId (e.g. "1-1") to avoid URL dot-routing issues.
 * A chapter is "published" when its .md file exists.
 */
export function getAllPublishedChapterParams() {
  const params = []
  for (const [partNum, chapterIds] of Object.entries(PART_CHAPTERS)) {
    for (const chapterId of chapterIds) {
      const filePath = path.join(BOOK_DIR, `part-${partNum}`, `${chapterId}.md`)
      if (fs.existsSync(filePath)) {
        // Return dash-format slug for the URL param
        params.push({ partNum: String(partNum), chapterId: chapterIdToSlug(chapterId) })
      }
    }
  }
  return params
}
