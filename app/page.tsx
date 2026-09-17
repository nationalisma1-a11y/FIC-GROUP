import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ExpertiseSection } from "@/components/expertise-section"
import { ServicesSection } from "@/components/services-section"
import { JourneySection } from "@/components/journey-section"
import { RealisationsSection } from "@/components/realisations-section"
import { AboutSection } from "@/components/about-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { MobileActionBar } from "@/components/mobile-action-bar"
import { siteConfig } from "@/lib/site-config"

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.brand,
    alternateName: siteConfig.legalName,
    slogan: siteConfig.tagline,
    description: siteConfig.seo.description,
    telephone: siteConfig.phonePrimary,
    email: siteConfig.email,
    url: siteConfig.url,
    sameAs: ["https://maps.app.goo.gl/JmtzW3a2baKMX7Wd7"],
    areaServed: `${siteConfig.city}, ${siteConfig.country}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Songon, Carrefour Diapoté",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: "CI",
    },
    knowsAbout: ["Foncier", "Immobilier", "BTP", "Climatisation"],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <ExpertiseSection />
        <ServicesSection />
        <JourneySection />
        <RealisationsSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileActionBar />
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  )
}
