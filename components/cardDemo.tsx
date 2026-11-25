import type { MouseEventHandler } from "react"
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/label"
import { Icon } from "@/components/icon"
import { cn } from "@/lib/utils"
import { Clock4, Text, CheckSquare } from "lucide-react"

export interface CardDemoProps {
    username: string
    labelColor?: string
    title: string
    date: string
    description?: string
    checkedCount?: number
    totalCount?: number
    className?: string
    onClick?: MouseEventHandler<HTMLDivElement>
}

export function CardDemo({
    username,
    labelColor,
    title,
    date,
    description,
    checkedCount = 0,
    totalCount = 0,
    className,
    onClick,
}: CardDemoProps) {

    return (
        <Card
            className={cn(
                "flex flex-col justify-center w-full px-3 cursor-pointer hover:bg-neutral-100 border dark:hover:bg-neutral-900 :active:bg-neutral-800",
                className
            )}
            onClick={onClick}
        >
            <Label colorLabel={labelColor} contentLabel={username} />

            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>   

            <section className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                    <Icon icon={Clock4} className="size-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{date}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Icon icon={Text} className="size-3.5 text-muted-foreground" />
                    {description && (
                        <span className="text-xs text-muted-foreground">{description}</span>
                    )}
                </div>
                <div className="flex items-center gap-1 py-0.5">
                    <Icon icon={CheckSquare} className="size-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{checkedCount}/{totalCount}</span>
                </div>
            </section>
        </Card>
    )
}
