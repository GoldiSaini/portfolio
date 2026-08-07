import * as React from "react"

import { cn } from "@/lib/utils"
import { Heading, Text } from "@/components/ui/typography"

type SectionHeaderProps = React.ComponentPropsWithoutRef<"div"> & {
  eyebrow?: string
  title: string
  description?: string
  headingSize?: "xl" | "lg" | "md"
  centered?: boolean
}

export function SectionHeader({
  className,
  eyebrow,
  title,
  description,
  headingSize = "xl",
  centered = true,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      data-slot="section-header"
      className={cn(
        "mx-auto max-w-4xl",
        centered && "text-center",
        className
      )}
      {...props}
    >
      {eyebrow ? (
        <Text variant="label" className="mb-4 inline-block">
          {eyebrow}
        </Text>
      ) : null}
      <Heading size={headingSize}>{title}</Heading>
      {description ? (
        <Text className="mt-6" variant="muted">
          {description}
        </Text>
      ) : null}
    </div>
  )
}
