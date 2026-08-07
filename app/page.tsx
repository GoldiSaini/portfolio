import Hero from "@/components/home/Hero"
import TrustIndicators from "@/components/home/TrustIndicators"
import CoreExpertise from "@/components/home/CoreExpertise"
import { heroContent, trustIndicators, expertiseItems } from "@/data/home"

export default function Home() {
  return (
    <main>
      <Hero content={heroContent} />
      <TrustIndicators items={trustIndicators} />
      <CoreExpertise items={expertiseItems} />
    </main>
  )
}
