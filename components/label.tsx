import * as React from "react"
import { cn } from "@/lib/utils"

export interface LabelProps extends React.ComponentProps<"div"> {
    contentLabel: string
    colorLabel?: string
}

export function Label({
    contentLabel,
    colorLabel = "bg-muted text-muted-foreground",
    className,
    ...props
}: LabelProps) {
    return (
        <div
            className={cn(
                "w-fit rounded-sm items-center px-2 text-[0.580rem] font-bold",
                colorLabel,
                className
            )}
            {...props}
        >
            {contentLabel}
        </div>
    )
}
