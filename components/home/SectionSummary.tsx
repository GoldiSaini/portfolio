import { Section } from "@/components/ui/section"
import { Text } from "@/components/ui/typography"
import type { SectionLink } from "@/data/home"

type SectionSummaryProps = {
  items: SectionLink[]
}

export default function SectionSummary({ items }: SectionSummaryProps) {
  return (
    <Section className="pb-16 pt-10 sm:pt-14" variant="default">
      {/* Accessible heading for screen readers; visual eyebrow follows */}
      <h2 className="sr-only">Explore</h2>
      <div className="mb-4 text-center">
        <Text variant="label">Explore</Text>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-3xl border border-border bg-card p-5 transition hover:border-primary hover:bg-primary/5"
          >
            <Text className="font-medium text-foreground">{item.title}</Text>
            <Text className="mt-2 text-sm text-muted-foreground">{item.description}</Text>
          </a>
        ))}
      </div>
    </Section>
  )
}
