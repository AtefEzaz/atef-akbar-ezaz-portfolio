export function TechTag({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-ink-line bg-ink-raised px-2.5 py-1 font-mono text-xs text-paper-muted">
      {label}
    </span>
  )
}
