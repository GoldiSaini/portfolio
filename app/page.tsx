import Hero from "@/components/home/Hero"
import { heroContent } from "@/data/home"

export default function Home() {
  return (
    <main>
      <Hero content={heroContent} />
    </main>
  )
}
