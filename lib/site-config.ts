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
  promise: "Foncier. Immobilier. Climatisation. Un seul partenaire à Abidjan.",
  supporting: "Expertise, engagement et proximité, du terrain à la maison.",

  // Primary phone (pivot) — sourced from the official business card.
  phonePrimary: "+2250700045073",
  phonePrimaryDisplay: "07 00 04 50 73",
  phoneSecondary: "+2250757665859",
  phoneSecondaryDisplay: "07 57 66 58 59",
  phoneLandline: "+2252731949849",
  phoneLandlineDisplay: "27 31 94 98 49",

  // WhatsApp number (international format, digits only) — pending final confirmation.
  whatsappNumber: "2250700045073",

  // Commercial address — final address still to be confirmed by FIC GROUP.
  addressLine: "Abidjan — Songon, Carrefour Diapote",
  addressConfirmed: false,

  // Social — Facebook page URL awaiting the definitive link.
  facebookUrl: "https://www.facebook.com/",
  facebookConfirmed: false,

  // Email — awaiting confirmation.
  email: "",
  emailConfirmed: false,

  // Legal registration — display only if confirmed.
  rccm: "",
  rccmConfirmed: false,

  city: "Abidjan",
  region: "Songon",
  country: "Côte d'Ivoire",

  url: "https://fic-group.com",

  seo: {
    title: "FIC GROUP — Foncier, Immobilier & Climatisation à Abidjan",
    description:
      "FIC GROUP accompagne particuliers et entreprises à Abidjan pour la sécurisation de terrains, l'immobilier et la climatisation. Contactez-nous.",
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
