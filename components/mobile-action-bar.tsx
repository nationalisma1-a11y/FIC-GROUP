import { Phone, MessageCircle } from "lucide-react"
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config"

export function MobileActionBar() {
  const whatsappLink = buildWhatsAppLink(
    `Bonjour ${siteConfig.brand}, je souhaite un devis.`,
  )

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 px-3 py-2.5">
        <a
          href={`tel:${siteConfig.phonePrimary}`}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-green/30 px-4 py-2.5 text-sm font-semibold text-brand-green"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Appeler
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-4 py-2.5 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
