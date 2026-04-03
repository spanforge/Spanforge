import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const RESOURCES_DIR = path.join(process.cwd(), 'content', 'resources')

/** Return sorted list of all resource frontmatter (desc by date). */
export function getAllResources() {
  if (!fs.existsSync(RESOURCES_DIR)) return []
  const files = fs.readdirSync(RESOURCES_DIR).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
  const resources = files.map((filename) => {
    const slug = filename.replace(/\.(md|mdx)$/, '')
    const raw  = fs.readFileSync(path.join(RESOURCES_DIR, filename), 'utf8')
    const { data } = matter(raw)
    return { slug, ...data }
  })
  return resources.sort((a, b) => new Date(b.date) - new Date(a.date))
}

/** Return frontmatter + content for a single resource. */
export function getResourceBySlug(slug) {
  const extensions = ['.mdx', '.md']
  for (const ext of extensions) {
    const filePath = path.join(RESOURCES_DIR, slug + ext)
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(raw)
      return { slug, ...data, content }
    }
  }
  return null
}

/** Slugs for generateStaticParams. */
export function getAllResourceSlugs() {
  if (!fs.existsSync(RESOURCES_DIR)) return []
  return fs
    .readdirSync(RESOURCES_DIR)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((f) => f.replace(/\.(md|mdx)$/, ''))
}
