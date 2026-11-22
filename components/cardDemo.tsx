import { Button } from "@/components/ui/button"
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/label"
import { Icon } from "@/components/icon"
import { Clock4, User, Text, CheckSquare } from "lucide-react"


export function CardDemo() {

    return (
        <Card className="flex flex-col justify-center w-full px-3">

            <Label colorLabel="bg-red-500" contentLabel="Username" />

            <CardHeader>
                <CardTitle>Login to your account</CardTitle>
            </CardHeader>

            <section className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                    <Icon icon={Clock4} className="size-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">20 de Nov.</span>
                </div>  
                <div className="flex items-center gap-1">
                    <Icon icon={Text} className="size-3.5 text-muted-foreground" />
                </div>
                <div className="flex items-center gap-1 py-0.5">
                    <Icon icon={CheckSquare} className="size-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">2/5</span>
                </div>
            </section>
        </Card>
    )
}
