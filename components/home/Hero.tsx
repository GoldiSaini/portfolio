import Container from "@/components/common/Container"
import { Section } from "@/components/ui/section"

export default function Hero() {
  return (
    <Section className="pt-14 sm:pt-18" variant="default">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Quality engineering leadership
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Goldi Saini helps teams scale quality engineering with modern automation.
          </h1>
          <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
            Build reliable platforms, improve release confidence, and communicate engineering strategy clearly.
          </p>
        </div>
      </Container>
    </Section>
  )
}
