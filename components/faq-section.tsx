import { faqs } from "@/lib/services-data"
import { SectionHeading } from "@/components/section-heading"

export function FaqSection() {
  return (
    <section id="faq" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Questions fréquentes"
          title="Vous avez des questions ?"
          description="Retrouvez ici les réponses aux questions les plus courantes. Pour toute demande spécifique, contactez-nous directement."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-border bg-white p-5 [&_svg]:open:rotate-45"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-brand-green">
                {faq.question}
                <svg
                  className="h-5 w-5 shrink-0 text-brand-orange transition-transform"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
