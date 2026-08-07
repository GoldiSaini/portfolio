import * as React from "react"

import { cn } from "@/lib/utils"

type ButtonGroupProps = React.ComponentPropsWithoutRef<"div"> & {
  stacked?: boolean
}

function ButtonGroup({ className, stacked = false, ...props }: ButtonGroupProps) {
  return (
    <div
      data-slot="button-group"
      className={cn(
        "flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6",
        stacked && "sm:flex-col",
        className
      )}
      {...props}
    />
  )
}

export { ButtonGroup }
