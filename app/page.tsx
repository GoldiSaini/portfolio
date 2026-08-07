import Hero from "@/components/home/Hero"
import TrustIndicators from "@/components/home/TrustIndicators"
import CoreExpertise from "@/components/home/CoreExpertise"
import EngineeringPhilosophy from "@/components/home/EngineeringPhilosophy"
import { heroContent, trustIndicators, expertiseItems, philosophyItems } from "@/data/home"

export default function Home() {
  return (
    <main>
      <Hero content={heroContent} />
      <TrustIndicators items={trustIndicators} />
      <EngineeringPhilosophy items={philosophyItems} />
      <CoreExpertise items={expertiseItems} />
    </main>
  )
}
