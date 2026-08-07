import Container from "@/components/common/Container"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import type { TrustIndicator } from "@/data/home"

type TrustIndicatorsProps = {
  items: TrustIndicator[]
}

export default function TrustIndicators({ items }: TrustIndicatorsProps) {
  return (
    <Section className="pb-16 pt-10 sm:pt-14" variant="default">
      <Container>
        <SectionHeader
          eyebrow="Trust indicators"
          title="Engineering quality you can rely on."
          description="These are the values and capabilities I bring to every team, platform, and product."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
