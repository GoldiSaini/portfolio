import Hero from "@/components/home/Hero"
import TrustIndicators from "@/components/home/TrustIndicators"
import CaseStudies from "@/components/home/CaseStudies"
import CoreExpertise from "@/components/home/CoreExpertise"
import EngineeringPhilosophy from "@/components/home/EngineeringPhilosophy"
import SectionSummary from "@/components/home/SectionSummary"
import ContactSection from "@/components/home/ContactSection"
import {
  heroContent,
  trustIndicators,
  caseStudies,
  expertiseItems,
  philosophyItems,
  contactContent,
  sectionLinks,
} from "@/data/home"

export default function Home() {
  return (
    <main>
      <Hero content={heroContent} />
      <SectionSummary items={sectionLinks} />
      <TrustIndicators items={trustIndicators} />
      <CaseStudies items={caseStudies} />
      <EngineeringPhilosophy items={philosophyItems} />
      <CoreExpertise items={expertiseItems} />
      <ContactSection content={contactContent} />
    </main>
  )
}
