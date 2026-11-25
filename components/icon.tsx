import type { LucideIcon, LucideProps } from "lucide-react"
import { cn } from "@/lib/utils"

const iconSizes = {
  xs: "size-3",
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
  xl: "size-8",
} as const

type IconSize = keyof typeof iconSizes

interface IconProps extends Omit<LucideProps, "size"> {
  icon: LucideIcon
  size?: IconSize
}

export function Icon({ icon: IconComponent, size = "sm", className, ...props }: IconProps) {
  return <IconComponent className={cn(iconSizes[size], className)} {...props} strokeWidth={2.5}/>
}

export { iconSizes, type IconProps, type IconSize }
