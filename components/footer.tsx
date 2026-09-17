import { Phone, MessageCircle, MapPin } from "lucide-react"
import { Logo } from "@/components/logo"
import { FacebookIcon } from "@/components/icons"
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config"

const quickLinks = [
  { href: "#expertise", label: "Expertise" },
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#apropos", label: "À propos" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  const year = new Date().getFullYear()
  const whatsappLink = buildWhatsAppLink(
    `Bonjour ${siteConfig.brand}, je souhaite un renseignement.`,
  )

  return (
    <footer className="border-t border-border bg-brand-green-dark text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="inline-flex rounded-xl bg-white p-2">
            <Logo />
          </div>
          <p className="mt-5 max-w-md text-sm text-white/70">
            {siteConfig.legalName}. {siteConfig.tagline}. Foncier, immobilier et
            BTP et climatisation réunis pour accompagner vos projets à Abidjan.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-brand-orange"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`tel:${siteConfig.phonePrimary}`}
                className="flex items-center gap-2 text-white/70 transition-colors hover:text-brand-orange"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                {siteConfig.phonePrimaryDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-white/70 transition-colors hover:text-brand-orange">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 transition-colors hover:text-brand-orange"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2 text-white/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {siteConfig.addressLine}
            </li>
            <li>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 transition-colors hover:text-brand-orange"
              >
                <FacebookIcon className="h-4 w-4 shrink-0" />
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/50 sm:flex-row sm:px-6">
          <p>
            © {year} {siteConfig.brand} ({siteConfig.legalForm}). Tous droits réservés.
          </p>
          <p>Foncier · Immobilier · BTP · Climatisation — {siteConfig.city}</p>
        </div>
      </div>
    </footer>
  )
}
