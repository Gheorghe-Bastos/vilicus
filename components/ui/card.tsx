import * as React from "react"
import { cn } from "cn"

export type CardProps = React.ComponentProps<"div"> & { size?: "default" | "sm" }
export type CardHeaderProps = React.ComponentProps<"div">
export type CardTitleProps = React.ComponentProps<"div">

function Card({ className, size = "default", ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-1 overflow-hidden rounded-xl bg-card py-2 text-sm text-card-foreground border border-border [--card-spacing:--spacing(6)] has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(4)] *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-2 rounded-t-xl has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-md", className)}
      {...props}
    />
  )
} 

export {
  Card, 
  CardHeader,
  CardTitle,
}