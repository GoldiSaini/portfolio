import * as React from "react"

import { cn } from "@/lib/utils"

type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
  title?: string
  description?: string
  variant?: "default" | "accent"
}

function Section({
  className,
  title,
  description,
  variant = "default",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-slot="section"
      data-variant={variant}
      className={cn(
        "py-16 sm:py-20",
        variant === "accent" && "bg-muted/50 dark:bg-muted/20",
        className
      )}
      {...props}
    >
      {(title || description) && (
        <div className="mx-auto mb-10 max-w-4xl text-center">
          {title && (
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  )
}

export { Section }
