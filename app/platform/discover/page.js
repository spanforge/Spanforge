import { phases } from '@/lib/phases-data'
import PhasePageLayout from '@/components/PhasePageLayout'

const phase = phases[0]
const next  = phases[1]

export const metadata = {
  title: 'Discover — Platform — SpanForge',
  description: phase.tagline,
}

export default function DiscoverPage() {
  return <PhasePageLayout phase={phase} prev={null} next={next} />
}
