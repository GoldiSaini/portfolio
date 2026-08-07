import Container from "@/components/common/Container"
import { Section } from "@/components/ui/section"
import { Heading, Text } from "@/components/ui/typography"

export default function Hero() {
  return (
    <Section className="pt-14 sm:pt-18" variant="default">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Text variant="label">
            Quality engineering leadership
          </Text>
          <Heading className="mt-6" size="xl">
            Goldi Saini helps teams scale quality engineering with modern automation.
          </Heading>
          <Text className="mt-6" variant="lead">
            Build reliable platforms, improve release confidence, and communicate engineering strategy clearly.
          </Text>
        </div>
      </Container>
    </Section>
  )
}
