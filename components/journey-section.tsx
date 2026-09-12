import { journeySteps, values } from "@/lib/services-data"
import { SectionHeading } from "@/components/section-heading"

export function JourneySection() {
  return (
    <section id="demarche" className="bg-brand-green-soft py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Notre démarche"
          title="Du terrain à la maison, un parcours maîtrisé"
          description="Nous accompagnons chaque étape de votre projet avec la même exigence de qualité et de proximité."
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {journeySteps.map((step) => (
            <li
              key={step.step}
              className="relative rounded-card border border-border bg-white p-7 shadow-sm"
            >
              <span className="text-4xl font-black text-brand-orange/25">{step.step}</span>
              <h3 className="mt-2 text-xl font-bold text-brand-green">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-border bg-white/70 p-6"
            >
              <h4 className="text-base font-bold text-brand-orange">{value.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
