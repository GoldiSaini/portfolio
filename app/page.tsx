import Hero from "@/components/home/Hero"
import TrustIndicators from "@/components/home/TrustIndicators"
import { heroContent, trustIndicators } from "@/data/home"

export default function Home() {
  return (
    <main>
      <Hero content={heroContent} />
      <TrustIndicators items={trustIndicators} />
    </main>
  )
}
