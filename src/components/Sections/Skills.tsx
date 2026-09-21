import { skillGroups } from '../../data/skills'
import { SectionHeading } from '../UI/SectionHeading'
import { TechTag } from '../UI/TechTag'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-ink-line py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading
          index="02"
          title="Skills"
          description="What I reach for day to day, grouped by where it sits in the stack."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-xl border border-ink-line bg-ink-soft p-6"
            >
              <h3 className="font-display text-sm font-semibold text-paper">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <TechTag key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
