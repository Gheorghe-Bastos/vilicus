import { Icon } from "@/components/icon";
import { Trash, Plus } from "lucide-react";
import { CardDemo, type CardDemoProps } from "./cardDemo";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export interface ColumnProps {
    nameColumn: string;
    cards: CardDemoProps[];
    onDelete?: () => void;
    onAddCard?: () => void;
    className?: string;
}

export function Column({
    nameColumn,
    cards,
    onDelete,
    onAddCard,
    className,
}: ColumnProps) {

    return (
        <main className={cn("flex flex-col items-center justify-center w-78 bg-card border border-border py-4 px-2.5 rounded-2xl", className)}>
            <header className="flex items-center justify-between pl-3 py-1.5 w-full">
                <div className="flex items-center gap-2">
                    <div className="text-foreground text-sm font-medium">
                        {nameColumn}
                    </div>
                    <div className="flex text-muted-foreground items-center justify-center text-xs font-medium bg-muted rounded-full w-4.5 h-4.5">
                        {cards.length}
                    </div>
                </div>
                <Button variant="ghost" size="sm" className="flex items-center justify-center" onClick={onDelete}>
                    <Icon icon={Trash} size="sm" className="text-muted-foreground" />
                </Button>
            </header>
            <section className="flex flex-col gap-2 w-full py-2">
                {cards.map((card, index) => (
                    <CardDemo key={index} {...card} />
                ))}
            </section>
            <footer className="flex items-center w-full">
                <Button variant="ghost" className="flex gap-1" onClick={onAddCard}>
                    <Icon icon={Plus} size="sm" />Adicionar Tarefa
                </Button>
            </footer>
        </main>
    )
}
