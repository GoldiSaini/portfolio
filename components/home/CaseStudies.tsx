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
import type { CaseStudy } from "@/data/home"

type CaseStudiesProps = {
  items: CaseStudy[]
}

export default function CaseStudies({ items }: CaseStudiesProps) {
  return (
    <Section id="case-studies" className="pb-16 pt-10 sm:pt-14" variant="default">
      <Container>
        <SectionHeader
          eyebrow="Case studies"
          title="Real quality engineering outcomes."
          description="Selected projects that demonstrate scalable automation, fast feedback, and engineering leadership."
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
