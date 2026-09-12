import Image from "next/image"
import { ShieldCheck, HeartHandshake, MapPin } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const pillars = [
  {
    icon: ShieldCheck,
    title: "Expertise",
    text: "Une maîtrise structurée du foncier, de l'immobilier et de la climatisation.",
  },
  {
    icon: HeartHandshake,
    title: "Engagement",
    text: "Un accompagnement orienté résultats, de la première visite à la livraison.",
  },
  {
    icon: MapPin,
    title: "Proximité",
    text: "Une équipe locale, basée à Abidjan, proche de ses clients.",
  },
]

export function AboutSection() {
  return (
    <section id="apropos" className="bg-brand-green-dark py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-card border border-white/10 shadow-2xl">
            <Image
              src="/images/duplex-moderne-construite.jpg"
              alt="Réalisation immobilière FIC GROUP"
              width={640}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-brand-orange px-5 py-4 text-white shadow-xl sm:block">
            <p className="text-2xl font-black leading-none">3</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide">
              pôles d&apos;expertise
            </p>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange">
            À propos de {siteConfig.brand}
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Votre partenaire de confiance à Abidjan
          </h2>
          <p className="mt-5 text-pretty text-base text-white/80">
            {siteConfig.legalName} réunit sous une même enseigne les métiers du foncier,
            de l&apos;immobilier et de la climatisation. Notre ambition : vous offrir un
            interlocuteur unique, capable de vous accompagner du terrain jusqu&apos;au
            confort de votre bâtiment.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <Icon className="h-6 w-6 text-brand-orange" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-bold text-white">{pillar.title}</h3>
                  <p className="mt-1.5 text-sm text-white/70">{pillar.text}</p>
                </div>
              )
            })}
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
          >
            Travaillons ensemble
          </a>
        </div>
      </div>
    </section>
  )
}
