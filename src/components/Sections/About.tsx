import { profile } from '../../data/profile'
import { SectionHeading } from '../UI/SectionHeading'

const facts = [
  { label: 'Based in', value: profile.location },
  { label: 'Focus', value: 'React, Next.js, MERN' },
  { label: 'Education', value: 'B.Sc. CSE, North South University' },
  { label: 'Open to', value: 'Internships & junior roles' },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading index="01" title="About" />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-base leading-relaxed text-paper-muted sm:text-lg">
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 20)}>{paragraph}</p>
            ))}
          </div>

          <dl className="h-fit divide-y divide-ink-line rounded-xl border border-ink-line bg-ink-soft">
            {facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1 px-5 py-4">
                <dt className="font-mono text-xs text-paper-faint">{fact.label}</dt>
                <dd className="text-sm text-paper">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
