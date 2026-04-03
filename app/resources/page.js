import { getAllResources } from '@/lib/resources'
import ResourcesPageClient from './ResourcesPageClient'

export const metadata = {
  title: 'Library — Whitepapers, Research Papers & Guides',
  description:
    'Whitepapers, mini books, research papers, and practical guides on enterprise AI governance, observability, production operations, and the SpanForge platform.',
}

export default async function ResourcesPage() {
  const resources = await getAllResources()
  return <ResourcesPageClient resources={resources} />
}
