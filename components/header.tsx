"use client"

import { useEffect, useState } from "react"
import { Menu, X, MessageCircle } from "lucide-react"
import { Logo } from "@/components/logo"
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config"

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#expertise", label: "Expertise" },
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#apropos", label: "À propos" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const whatsappLink = buildWhatsAppLink(
    `Bonjour ${siteConfig.brand}, je souhaite obtenir des informations.`,
  )

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-white/95 shadow-sm backdrop-blur"
          : "bg-white/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20">
        <a href="#accueil" aria-label={`${siteConfig.brand} accueil`}>
          <Logo />
        </a>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-brand-green-soft hover:text-brand-green"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 px-4 py-2 text-sm font-semibold text-brand-green transition-colors hover:bg-brand-green-soft"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-orange-dark"
          >
            Demander un devis
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-white lg:hidden"
        >
          <nav aria-label="Navigation mobile" className="mx-auto max-w-6xl px-4 py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-brand-green-soft hover:text-brand-green"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-green/30 px-4 py-3 text-sm font-semibold text-brand-green"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Discuter sur WhatsApp
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white"
              >
                Demander un devis
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
