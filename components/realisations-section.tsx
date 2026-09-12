import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"

const gallery = [
  {
    src: "/images/bien-duplex.jpg",
    title: "Duplex moderne",
    category: "Immobilier",
  },
  {
    src: "/images/plan-cite1.jpg",
    title: "Aménagement de cité",
    category: "Foncier",
  },
  {
    src: "/images/clim3.jpg",
    title: "Installation climatisation",
    category: "Climatisation",
  },
  {
    src: "/images/immeubleresidentiel.jpg",
    title: "Immeuble résidentiel",
    category: "Immobilier",
  },
  {
    src: "/images/plan-chantier.jpg",
    title: "Suivi de chantier",
    category: "Foncier",
  },
  {
    src: "/images/Climatisation-entretien1.jpg",
    title: "Entretien de split",
    category: "Climatisation",
  },
]

export function RealisationsSection() {
  return (
    <section id="realisations" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Aperçu de nos univers"
          title="Réalisations & savoir-faire"
          description="Un aperçu de nos domaines d'intervention. Les projets présentés illustrent nos métiers ; la galerie sera enrichie de vos réalisations."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <figure
              key={item.title}
              className="group relative overflow-hidden rounded-card border border-border shadow-sm"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={520}
                height={400}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 via-brand-green-dark/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <span className="inline-flex items-center rounded-full bg-brand-orange px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  {item.category}
                </span>
                <p className="mt-2 text-base font-bold text-white">{item.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Vous avez un projet similaire ?{" "}
          <a href="#contact" className="font-semibold text-brand-green underline underline-offset-4">
            Parlons-en
          </a>
          .
        </p>
      </div>
    </section>
  )
}
