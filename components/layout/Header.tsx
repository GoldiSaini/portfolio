import Link from "next/link"
import Container from "@/components/common/Container"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/60 backdrop-blur-sm border-b border-border">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="inline-block">
            <span className="font-heading text-lg">Goldi Saini</span>
          </Link>
          <nav aria-label="Primary" className="hidden sm:block">
            <ul className="flex gap-6 text-sm">
              <li>
                <a href="#trust-indicators" className="text-muted-foreground hover:text-foreground">
                  Trust
                </a>
              </li>
              <li>
                <a href="#engineering-philosophy" className="text-muted-foreground hover:text-foreground">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#core-expertise" className="text-muted-foreground hover:text-foreground">
                  Expertise
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}
