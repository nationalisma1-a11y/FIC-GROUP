"use client"

import { useState, type FormEvent } from "react"
import { Phone, MessageCircle, MapPin, Send, Mail } from "lucide-react"
import { FacebookIcon } from "@/components/icons"
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config"
import { SectionHeading } from "@/components/section-heading"
import { poles } from "@/lib/services-data"

export function ContactSection() {
  const [service, setService] = useState(poles[0].label)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") || "").trim()
    const phone = String(data.get("phone") || "").trim()
    const selectedService = String(data.get("service") || "").trim()
    const message = String(data.get("message") || "").trim()

    const lines = [
      `Bonjour ${siteConfig.brand}, je souhaite un devis.`,
      name && `Nom : ${name}`,
      phone && `Téléphone : ${phone}`,
      selectedService && `Service : ${selectedService}`,
      message && `Détails : ${message}`,
    ].filter(Boolean)

    window.open(buildWhatsAppLink(lines.join("\n")), "_blank", "noopener,noreferrer")
  }

  const contactItems = [
    {
      icon: Phone,
      label: "Appelez-nous",
      value: siteConfig.phonePrimaryDisplay,
      href: `tel:${siteConfig.phonePrimary}`,
      extra: `${siteConfig.phoneSecondaryDisplay} · ${siteConfig.phoneLandlineDisplay}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Discussion instantanée",
      href: buildWhatsAppLink(`Bonjour ${siteConfig.brand}, je souhaite un devis.`),
      external: true,
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: siteConfig.addressLine,
    },
    {
      icon: Mail,
      label: "E-mail",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: FacebookIcon,
      label: "Facebook",
      value: "Suivez notre actualité",
      href: siteConfig.facebookUrl,
      external: true,
      note: !siteConfig.facebookConfirmed ? "Lien à confirmer" : undefined,
    },
  ]

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact & devis"
          title="Demandez votre devis gratuit"
          description="Décrivez votre projet : nous vous recontactons rapidement. Le formulaire prépare votre message WhatsApp en un clic."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon
              const inner = (
                <>
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-green-soft text-brand-green">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="text-base font-semibold text-foreground">
                      {item.value}
                    </span>
                    {item.extra && (
                      <span className="text-sm text-muted-foreground">{item.extra}</span>
                    )}
                    {item.note && (
                      <span className="mt-0.5 text-xs italic text-brand-orange">
                        {item.note}
                      </span>
                    )}
                  </span>
                </>
              )

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 transition-colors hover:border-brand-green/40 hover:bg-brand-green-soft/50"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5"
                >
                  {inner}
                </div>
              )
            })}
          </div>

          <div className="overflow-hidden rounded-card border border-border bg-muted/40">
            <iframe title="FIC GROUP SONGON sur Google Maps" src="https://www.google.com/maps?q=FIC%20GROUP%20SONGON%20Abidjan%20Carrefour%20Diapoté&output=embed" loading="lazy" className="h-72 w-full border-0" referrerPolicy="no-referrer-when-downgrade" />
            <div className="flex flex-wrap gap-3 p-4">
              <a href="https://maps.app.goo.gl/JmtzW3a2baKMX7Wd7" target="_blank" rel="noopener noreferrer" className="rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white">Ouvrir dans Google Maps</a>
              <a href="https://maps.app.goo.gl/JmtzW3a2baKMX7Wd7" target="_blank" rel="noopener noreferrer" className="rounded-full border border-brand-green/30 px-4 py-2 text-sm font-semibold text-brand-green">Itinéraire</a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-card border border-border bg-muted/40 p-6 sm:p-8"
          >
            <div className="grid gap-5">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground">
                  Nom complet
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Votre nom"
                  className="rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-orange"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                  Téléphone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="07 00 00 00 00"
                  className="rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-orange"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="service" className="text-sm font-semibold text-foreground">
                  Service concerné
                </label>
                <select
                  id="service"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-orange"
                >
                  {poles.map((pole) => (
                    <option key={pole.id} value={pole.label}>
                      {pole.label}
                    </option>
                  ))}
                  <option value="Plusieurs services">Plusieurs services</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">
                  Votre projet
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Décrivez votre besoin en quelques mots"
                  className="resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-orange"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-orange-dark"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Envoyer via WhatsApp
              </button>

              <p className="text-center text-xs text-muted-foreground">
                En envoyant ce formulaire, votre message est préparé dans WhatsApp
                pour un traitement rapide. Aucune donnée n&apos;est stockée.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
