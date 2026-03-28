import { phases } from '@/lib/phases-data'
import PhasePageLayout from '@/components/PhasePageLayout'

const phase = phases[1]
const prev  = phases[0]
const next  = phases[2]

export const metadata = {
  title: 'Design — Platform — SpanForge',
  description: phase.tagline,
}

export default function DesignPage() {
  return <PhasePageLayout phase={phase} prev={prev} next={next} />
}
