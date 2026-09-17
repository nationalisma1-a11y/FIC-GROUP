import Image from "next/image"
import { Check } from "lucide-react"
import { poles } from "@/lib/services-data"
import { SectionHeading } from "@/components/section-heading"

export function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Nos domaines d'expertise"
          title="Quatre pôles complémentaires, un seul interlocuteur"
          description="Du terrain à la maison, FIC GROUP réunit les métiers du foncier, de l'immobilier, du BTP et de la climatisation pour couvrir l'ensemble de votre projet."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {poles.map((pole) => {
            const Icon = pole.icon
            return (
              <article
                key={pole.id}
                className="group flex flex-col overflow-hidden rounded-card border border-border bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={pole.image}
                    alt={pole.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/60 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-orange shadow-md">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-brand-green">{pole.label}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-orange">
                    {pole.tagline}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{pole.description}</p>

                  <ul className="mt-5 flex flex-1 flex-col gap-2">
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

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-sm font-semibold text-brand-green">
                      Prix sur demande
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center rounded-full bg-brand-green-soft px-4 py-2 text-sm font-semibold text-brand-green transition-colors hover:bg-brand-green hover:text-white"
                    >
                      Demander un devis
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
