import Image from "next/image"
import { MessageCircle, ArrowRight, MapPin } from "lucide-react"
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config"

export function Hero() {
  const whatsappLink = buildWhatsAppLink(
    `Bonjour ${siteConfig.brand}, je souhaite discuter de mon projet.`,
  )

  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-brand-green-dark pt-16 lg:pt-20"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/Plateau-abidjan-vueduciel.jpg"
          alt="Vue aérienne d'Abidjan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green-dark/85 via-brand-green-dark/80 to-brand-green-dark" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="fic-animate flex flex-col justify-center">
          <span className="inline-flex w-fit items-center rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
            Foncier • Immobilier • BTP • Climatisation
          </span>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Foncier. Immobilier. Climatisation.{" "}
            <span className="text-brand-orange">Un seul partenaire à Abidjan.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base text-white/80 sm:text-lg">
            {siteConfig.supporting}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-orange/20 transition-colors hover:bg-brand-orange-dark"
            >
              Demander un devis gratuit
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Discuter sur WhatsApp
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-white/70">
            <MapPin className="h-4 w-4 text-brand-orange" aria-hidden="true" />
            {siteConfig.addressLine}
          </p>
        </div>

        <div className="fic-animate relative hidden items-center justify-center lg:flex">
          <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <Image
              src="/images/bien-duplex.jpg"
              alt="Villa moderne représentative des projets immobiliers"
              width={720}
              height={560}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 max-w-[220px] rounded-2xl border border-border bg-white p-4 shadow-xl">
            <p className="text-sm font-bold text-brand-green">Terrain → Construction → Confort</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Un accompagnement continu, du foncier à la climatisation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
