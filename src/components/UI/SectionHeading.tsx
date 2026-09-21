interface SectionHeadingProps {
  index: string
  title: string
  description?: string
}

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-14">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-amber">{index}</span>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="mt-3 max-w-xl text-paper-muted">{description}</p>
      )}
    </div>
  )
}
