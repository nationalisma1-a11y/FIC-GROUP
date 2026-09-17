"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const gallery = [
  { src: "/images/realisations/bulldozer-cat.jpg", title: "Décapage de terrain", category: "Foncier", alt: "Bulldozer CAT utilisé pour le décapage d'un terrain à Songon" },
  { src: "/images/realisations/bien-duplex.jpg", title: "Bien immobilier — portefeuille FIC GROUP", category: "Immobilier", alt: "Bien immobilier du portefeuille FIC GROUP" },
  { src: "/images/realisations/bornage-topo.jpg", title: "Bornage & levé topographique", category: "Foncier", alt: "Opération de bornage et levé topographique" },
  { src: "/images/realisations/construction-btcs.jpg", title: "Construction BTCS & maçonnerie", category: "BTP", alt: "Travaux de construction BTCS et maçonnerie" },
  { src: "/images/realisations/maintenance-clim.jpg", title: "Maintenance climatisation", category: "Climatisation", alt: "Intervention de maintenance de climatisation" },
  { src: "/images/realisations/chantier-villas-rangee.jpg", title: "Chantier de villas", category: "BTP", alt: "Chantier réel de villas" },
]

export function RealisationsSection() {
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    if (selected === null) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null)
      if (event.key === "ArrowLeft") setSelected((current) => current === null ? null : (current - 1 + gallery.length) % gallery.length)
      if (event.key === "ArrowRight") setSelected((current) => current === null ? null : (current + 1) % gallery.length)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKeyDown) }
  }, [selected])

  return (
    <section id="realisations" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Nos chantiers sur le terrain" title="Réalisations & savoir-faire" description="Nos réalisations sur le terrain, de Songon à Abidjan." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <button key={item.src} type="button" onClick={() => setSelected(index)} className="group relative overflow-hidden rounded-card border border-border text-left shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange" aria-label={`Agrandir : ${item.title}`}>
              <Image src={item.src} alt={item.alt} width={520} height={400} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 via-brand-green-dark/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4"><span className="inline-flex rounded-full bg-brand-orange px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">{item.category}</span><p className="mt-2 text-base font-bold text-white">{item.title}</p></div>
            </button>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">Vous avez un projet similaire ? <a href="#contact" className="font-semibold text-brand-green underline underline-offset-4">Parlons-en</a>.</p>
      </div>
      {selected !== null && (
        <div role="dialog" aria-modal="true" aria-label={gallery[selected].title} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4" onClick={() => setSelected(null)}>
          <button type="button" onClick={() => setSelected(null)} aria-label="Fermer la galerie" className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><X aria-hidden="true" /></button>
          <button type="button" onClick={(event) => { event.stopPropagation(); setSelected((selected - 1 + gallery.length) % gallery.length) }} aria-label="Image précédente" className="absolute left-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><ChevronLeft aria-hidden="true" /></button>
          <div className="relative h-[75vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}><Image src={gallery[selected].src} alt={gallery[selected].alt} fill sizes="95vw" className="object-contain" priority /></div>
          <button type="button" onClick={(event) => { event.stopPropagation(); setSelected((selected + 1) % gallery.length) }} aria-label="Image suivante" className="absolute right-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><ChevronRight aria-hidden="true" /></button>
        </div>
      )}
    </section>
  )
}
