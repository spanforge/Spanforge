import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

/** Return sorted list of all post frontmatter (desc by date). */
export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.(md|mdx)$/, '')
    const raw  = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8')
    const { data } = matter(raw)
    return { slug, ...data }
  })
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

/** Return frontmatter + content for a single post. */
export function getPostBySlug(slug) {
  const extensions = ['.mdx', '.md']
  for (const ext of extensions) {
    const filePath = path.join(BLOG_DIR, slug + ext)
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(raw)
      return { slug, ...data, content }
    }
  }
  return null
}

/** Slugs for generateStaticParams. */
export function getAllSlugs() {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((f) => f.replace(/\.(md|mdx)$/, ''))
}
