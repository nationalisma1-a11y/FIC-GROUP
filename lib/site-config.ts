/**
 * Single source of truth for FIC GROUP business information.
 * Update values here once; every component reads from this file.
 * Values still awaiting client confirmation are marked with the
 * `A_CONFIRMER` flag so they can be replaced without touching the UI.
 */

export const siteConfig = {
  brand: "FIC GROUP",
  legalName: "FONCIER IMMOBILIER CLIMATISATION GROUP",
  legalForm: "SARLU",
  tagline: "Votre partenaire de confiance",
  promise: "Foncier. Immobilier. BTP. Climatisation. Un seul partenaire à Abidjan.",
  supporting: "Expertise, engagement et proximité, du terrain à la maison.",

  phonePrimary: "+2250703530343",
  phonePrimaryDisplay: "+225 07 03 53 03 43",
  phoneSecondary: "+2252731949849",
  phoneSecondaryDisplay: "+225 27 31 94 98 49",
  phoneLandline: "+2252731949849",
  phoneLandlineDisplay: "+225 27 31 94 98 49",
  whatsappNumber: "2250703530343",
  addressLine: "FIC GROUP SONGON — Abidjan, Songon, Carrefour Diapoté, Côte d'Ivoire",
  addressConfirmed: true,

  // Social — Facebook page URL awaiting the definitive link.
  facebookUrl: "https://www.facebook.com/",
  facebookConfirmed: false,

  email: "ficgroup25@gmail.com",
  emailConfirmed: true,

  // Legal registration — display only if confirmed.
  rccm: "",
  rccmConfirmed: false,

  city: "Abidjan",
  region: "Songon",
  country: "Côte d'Ivoire",
  url: "https://fic-group.vercel.app",

  seo: {
    title: "FIC GROUP — Foncier, Immobilier, BTP & Climatisation à Abidjan",
    description:
      "FIC GROUP — Foncier, Immobilier, BTP et Climatisation à Abidjan (Songon, Carrefour Diapoté). Bornage, lotissement, construction, gestion locative, climatisation. Devis gratuit sur WhatsApp.",
    keywords: [
      "foncier Abidjan",
      "immobilier Songon",
      "bornage terrain Abidjan",
      "climatisation Abidjan",
      "installation climatisation Abidjan",
      "entretien climatisation Abidjan",
      "FIC GROUP Abidjan",
    ],
  },
} as const

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`
}

export const CONFIRM_TAG = "[À confirmer]"
