import { education, experience, highlights } from '../../data/timeline'
import { SectionHeading } from '../UI/SectionHeading'
import { ArrowUpRightIcon } from '../UI/Icons'

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-20 border-t border-ink-line py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading index="04" title="Journey" />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="font-mono text-sm text-paper-faint">Education</h3>
            <ol className="mt-5 space-y-6 border-l border-ink-line pl-6">
              {education.map((item) => (
                <li key={item.school} className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-ink bg-amber" />
                  <p className="font-mono text-xs text-paper-faint">{item.period}</p>
                  <p className="mt-1 font-display font-semibold text-paper">{item.school}</p>
                  <p className="text-sm text-paper-muted">{item.credential}</p>
                </li>
              ))}
            </ol>

            <h3 className="mt-10 font-mono text-sm text-paper-faint">Experience</h3>
            <ol className="mt-5 space-y-6 border-l border-ink-line pl-6">
              {experience.map((item) => (
                <li key={item.org} className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-ink bg-amber" />
                  <p className="font-mono text-xs text-paper-faint">{item.period}</p>
                  <p className="mt-1 font-display font-semibold text-paper">{item.role}</p>
                  <p className="text-sm text-paper-muted">{item.org}</p>
                  <ul className="mt-2 space-y-1 text-sm text-paper-faint">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="font-mono text-sm text-paper-faint">Highlights</h3>
            <div className="mt-5 space-y-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-ink-line bg-ink-soft p-5"
                >
                  <p className="font-display font-semibold text-paper">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-paper-muted">
                    {item.detail}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-amber hover:underline"
                    >
                      {item.linkLabel}
                      <ArrowUpRightIcon className="h-3 w-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
