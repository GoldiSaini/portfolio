import Container from "@/components/common/Container"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { Heading, Text } from "@/components/ui/typography"
import type { PhilosophyItem } from "@/data/home"

type EngineeringPhilosophyProps = {
  items: PhilosophyItem[]
}

export default function EngineeringPhilosophy({ items }: EngineeringPhilosophyProps) {
  return (
    <Section id="engineering-philosophy" className="pb-16 pt-10 sm:pt-14" variant="default">
      <Container>
        <SectionHeader
          eyebrow="Engineering philosophy"
          title="How I approach quality at the system level."
          description="A compact view of the principles that guide scalable testing, architecture, and team collaboration."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border bg-card p-5"
            >
              <Heading size="md" className="mb-3">
                {item.title}
              </Heading>
              <Text variant="muted">{item.description}</Text>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
