import type { Project } from '../../types'
import { TechTag } from './TechTag'
import { ArrowUpRightIcon, GithubIcon } from './Icons'

const statusLabel: Record<Project['status'], string> = {
  shipped: 'Shipped',
  research: 'Research build',
  archived: 'Archived',
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-ink-line bg-ink-soft p-6 transition-colors duration-200 hover:border-amber/40">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-paper">{project.name}</h3>
        <span className="shrink-0 rounded-full border border-ink-line px-2.5 py-0.5 font-mono text-[11px] text-paper-faint">
          {statusLabel[project.status]}
        </span>
      </div>

      <p className="mt-2 text-sm text-paper-muted">{project.summary}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-paper-faint">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <TechTag key={t} label={t} />
        ))}
      </div>

      {(project.repoUrl || project.liveUrl) && (
        <div className="mt-5 flex items-center gap-4 border-t border-ink-line pt-4 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-paper transition-colors hover:text-amber"
            >
              Live site
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-paper-muted transition-colors hover:text-amber"
            >
              <GithubIcon className="h-4 w-4" />
              Source
            </a>
          )}
        </div>
      )}
    </article>
  )
}
