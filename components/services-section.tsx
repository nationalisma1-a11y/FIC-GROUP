import Image from "next/image"
import { Check, ArrowRight } from "lucide-react"
import { poles } from "@/lib/services-data"
import { SectionHeading } from "@/components/section-heading"

export function ServicesSection() {
  return (
    <section id="services" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Le détail de nos prestations"
          title="Des services complets pour chaque pôle"
          description="Chaque pôle regroupe des prestations précises. Les tarifs sont communiqués sur devis, selon la nature et l'ampleur de votre projet."
        />

        <div className="mt-14 flex flex-col gap-10 lg:gap-16">
          {poles.map((pole, index) => {
            const Icon = pole.icon
            const reversed = index % 2 === 1
            return (
              <article
                key={pole.id}
                className="grid items-center gap-8 lg:grid-cols-2"
              >
                <div
                  className={`relative overflow-hidden rounded-card border border-border shadow-sm ${
                    reversed ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={pole.image}
                    alt={pole.imageAlt}
                    width={640}
                    height={460}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>

                <div className={reversed ? "lg:order-1" : ""}>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-orange shadow-sm">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {pole.label}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-brand-green">
                    {pole.tagline}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{pole.description}</p>

                  <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {pole.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-start gap-2 text-sm text-foreground/85"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-green"
                          aria-hidden="true"
                        />
                        {service}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
                  >
                    Demander un devis {pole.label.toLowerCase()}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
