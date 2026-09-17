import { Landmark, Building2, Snowflake, Hammer, type LucideIcon } from "lucide-react"

export type Pole = {
  id: string
  label: string
  icon: LucideIcon
  tagline: string
  description: string
  services: string[]
  image: string
  imageAlt: string
}

export const poles: Pole[] = [
  {
    id: "foncier",
    label: "Foncier",
    icon: Landmark,
    tagline: "Sécuriser et préparer le terrain",
    description:
      "Des opérations foncières structurées pour sécuriser, viabiliser et valoriser vos terrains, du relevé topographique à l'aménagement.",
    services: [
      "Topographie",
      "Lotissements",
      "Décapage",
      "Ouverture de voie",
      "Pose de poteaux",
      "Bornage",
      "Terrassement",
      "Remblayage",
      "Forage",
      "Aménagement foncier",
    ],
    image: "/images/plan-cite1.jpg",
    imageAlt: "Plan de lotissement et d'aménagement foncier",
  },
  {
    id: "immobilier",
    label: "Immobilier",
    icon: Building2,
    tagline: "Acheter, vendre et construire",
    description:
      "Un accompagnement immobilier complet : transaction, construction, réhabilitation et gestion de vos biens à Abidjan.",
    services: [
      "Vente et achat de terrains, immeubles et villas",
      "Construction et réhabilitation",
      "BTP (gros œuvre, maçonnerie, BTCS)",
      "Gestion locative",
      "Relevé d'expertise",
      "Courtage en immobilier",
      "Vente de terrains / maisons",
      "Vente de briques",
    ],
    image: "/images/bien-construction-moderne.jpg",
    imageAlt: "Construction immobilière moderne",
  },
  {
    id: "btp",
    label: "BTP",
    icon: Hammer,
    tagline: "Construire avec rigueur",
    description:
      "Des travaux de gros œuvre, maçonnerie, BTCS et second œuvre réalisés avec méthode et exigence.",
    services: ["Gros œuvre", "Maçonnerie", "BTCS", "Second œuvre"],
    image: "/images/realisations/construction-btcs.jpg",
    imageAlt: "Travaux de construction BTCS et maçonnerie",
  },
  {
    id: "climatisation",
    label: "Climatisation",
    icon: Snowflake,
    tagline: "Installer et entretenir le confort",
    description:
      "Installation, entretien et dépannage de vos systèmes de climatisation, avec la partie électricité du bâtiment associée.",
    services: [
      "Installation encastrée",
      "Installation apparente",
      "Entretien split",
      "Dépannage",
      "Électricité bâtiment",
    ],
    image: "/images/clim3.jpg",
    imageAlt: "Installation et entretien de climatisation split",
  },
]

export const values = [
  {
    title: "Expertise",
    description:
      "Une approche structurée autour du foncier, de l'immobilier et de la climatisation.",
  },
  {
    title: "Engagement",
    description:
      "Un accompagnement orienté vers la réalisation concrète des projets.",
  },
  {
    title: "Proximité",
    description:
      "Une présence locale et un contact direct avec les clients.",
  },
]

export const journeySteps = [
  {
    step: "01",
    title: "Terrain",
    description:
      "Nous sécurisons et préparons votre foncier : bornage, topographie, lotissement et aménagement.",
  },
  {
    step: "02",
    title: "Construction",
    description:
      "Nous construisons, réhabilitons ou vous aidons à acheter et vendre le bien adapté à votre projet.",
  },
  {
    step: "03",
    title: "Confort",
    description:
      "Nous installons et entretenons la climatisation pour un cadre de vie durablement confortable.",
  },
]

export const faqs = [
  {
    question: "Dans quelles zones intervenez-vous ?",
    answer:
      "FIC GROUP est basé à Abidjan (Songon, Carrefour Diapote). Les zones d'intervention précises restent à confirmer — contactez-nous pour valider votre localisation.",
  },
  {
    question: "Proposez-vous un accompagnement du terrain à la construction ?",
    answer:
      "Oui. Sur la base de nos pôles Foncier et Immobilier, nous vous accompagnons de la sécurisation du terrain jusqu'à la construction ou la réhabilitation.",
  },
  {
    question: "Faites-vous l'entretien des climatiseurs ?",
    answer:
      "Oui, notamment l'entretien split et le dépannage, ainsi que l'installation encastrée ou apparente et l'électricité du bâtiment.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Utilisez le formulaire de demande de devis ou contactez-nous directement par téléphone ou WhatsApp. Les tarifs sont communiqués sur demande selon votre projet.",
  },
]
