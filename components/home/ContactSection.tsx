import Container from "@/components/common/Container"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { Text } from "@/components/ui/typography"
import type { ContactContent } from "@/data/home"

type ContactSectionProps = {
  content: ContactContent
}

export default function ContactSection({ content }: ContactSectionProps) {
  return (
    <Section id="contact" className="pb-16 pt-10 sm:pt-14" variant="default">
      <Container>
        <SectionHeader
          eyebrow="Contact"
          title={content.title}
          description={content.description}
        />
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={content.ctaHref}
            className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            {content.ctaLabel}
          </a>
          <Text className="text-sm text-muted-foreground">
            {content.supportText}
          </Text>
        </div>
      </Container>
    </Section>
  )
}
