import { phases } from '@/lib/phases-data'
import PhasePageLayout from '@/components/PhasePageLayout'

const phase = phases[3]
const prev  = phases[2]
const next  = phases[4]

export const metadata = {
  title: 'Govern — Platform — SpanForge',
  description: phase.tagline,
}

export default function GovernPage() {
  return <PhasePageLayout phase={phase} prev={prev} next={next} />
}
