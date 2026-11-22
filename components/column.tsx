import { Icon } from "@/components/icon";
import { Trash, Plus } from "lucide-react";
import { Card } from "./ui/card";
import { CardDemo } from "./cardDemo";

export function Column() {
    return (
        <main className="flex flex-col items-center justify-center w-78 bg-card border border-border py-4 px-4 rounded-lg">
            <header className="flex items-center justify-between px-2 py-1.5 w-full">
                <div className="flex items-center gap-2">
                    <div className="text-foreground text-sm font-medium">
                        Fazer coco
                    </div>
                    <div className="flex text-muted-foreground items-center justify-center text-xs font-medium bg-muted rounded-full w-4.5 h-4.5">
                        5
                    </div>
                </div>
                <div>
                    <Icon icon={Trash} size="sm" className="text-muted-foreground"/>
                </div>
            </header>
            <section className="flex flex-col gap-2 w-full py-2">
                <CardDemo />
                <CardDemo />
                <CardDemo />
                <CardDemo />
                <CardDemo />
                <CardDemo />
            </section>
            <footer className="flex items-center w-full py-1">
                <span className="flex gap-1 items-center text-sm font-medium text-muted-foreground">
                    <Icon icon={Plus} size="md" /> Adicionar Tarefa
                </span>
            </footer>
        </main>
    )
}