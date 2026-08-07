import Container from "@/components/common/Container"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import type { HeroContent } from "@/data/home"

type HeroProps = {
  content: HeroContent
}

export default function Hero({ content }: HeroProps) {
  return (
    <Section className="pt-14 sm:pt-18" variant="default">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
          <ButtonGroup className="mt-10">
            <Button size="lg">{content.primaryCtaLabel}</Button>
            <Button variant="outline" size="lg">
              {content.secondaryCtaLabel}
            </Button>
          </ButtonGroup>
          <Text className="mt-6" variant="muted">
            {content.footerText}
          </Text>
        </div>
      </Container>
    </Section>
  )
}
