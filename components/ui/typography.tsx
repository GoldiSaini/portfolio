import * as React from "react"

import { cn } from "@/lib/utils"

type HeadingSize = "xl" | "lg" | "md"

type HeadingProps = React.ComponentPropsWithoutRef<"h1"> & {
  size?: HeadingSize
}

function Heading({ className, size = "xl", ...props }: HeadingProps) {
  const sizes: Record<HeadingSize, string> = {
    xl: "text-4xl sm:text-5xl",
    lg: "text-2xl sm:text-3xl",
    md: "text-xl sm:text-2xl",
  }

  return (
    <h1
      className={cn(
        "font-heading font-semibold tracking-tight text-foreground",
        sizes[size],
        className
      )}
      {...props}
    />
  )
}

type TextVariant = "default" | "muted" | "lead" | "label"

type TextProps = React.ComponentPropsWithoutRef<"p"> & {
  variant?: TextVariant
}

function Text({ className, variant = "default", ...props }: TextProps) {
  const variants: Record<TextVariant, string> = {
    default: "text-base leading-7 text-foreground",
    muted: "text-base leading-7 text-muted-foreground",
    lead: "text-lg leading-8 text-muted-foreground sm:text-xl",
    label: "text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground",
  }

  return (
    <p className={cn(variants[variant], className)} {...props} />
  )
}

export { Heading, Text }
