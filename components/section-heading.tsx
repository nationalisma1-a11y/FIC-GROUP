export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
}: {
  eyebrow: string
  title: string
  description?: string
  align?: "center" | "left"
  tone?: "dark" | "light"
}) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "text-left items-start"
  const titleColor = tone === "light" ? "text-white" : "text-brand-green"
  const descColor = tone === "light" ? "text-white/75" : "text-muted-foreground"

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      <span className="inline-flex w-fit items-center rounded-full bg-brand-orange-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange">
        {eyebrow}
      </span>
      <h2 className={`mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-pretty text-base ${descColor}`}>{description}</p>
      )}
    </div>
  )
}
