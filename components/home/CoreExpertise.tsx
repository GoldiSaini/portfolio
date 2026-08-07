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
import type { ExpertiseItem } from "@/data/home"

type CoreExpertiseProps = {
  items: ExpertiseItem[]
}

export default function CoreExpertise({ items }: CoreExpertiseProps) {
  return (
    <Section className="pb-16 pt-10 sm:pt-14" variant="default">
      <Container>
        <SectionHeader
          eyebrow="Core expertise"
          title="What I bring to quality engineering teams."
          description="A practical blend of architecture, automation, and cross-functional partnership to move teams faster with confidence."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title}>
              <CardContent>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
