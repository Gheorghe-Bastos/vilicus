"use client"

import { Icon } from "@/components/icon";
import { Trash, Plus } from "lucide-react";
import { CardDemo, type CardDemoProps } from "./cardDemo";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { InputDemo } from "./inputField";
import { useState } from "react"

export interface ColumnProps {
    nameColumn: string;
    cards?: CardDemoProps[];
    onDelete?: () => void;
    onAddCard?: () => void;
    onRename?: (name: string) => void;
    className?: string;
}

export function Column({
    nameColumn,
    cards = [],
    onDelete,
    onAddCard,
    onRename,
    className,
}: ColumnProps) {
    const [isEditing, setIsEditing] = useState(false)
    const [draft, setDraft] = useState(nameColumn)

    function startEditing() {
        setDraft(nameColumn)
        setIsEditing(true)
    }

    function commit() {
        const trimmed = draft.trim()
        setIsEditing(false)
        if (!trimmed) {
            setDraft(nameColumn)
            return
        }
        setDraft(trimmed)
        if (trimmed !== nameColumn) {
            onRename?.(trimmed)
        }
    }

    function cancel() {
        setDraft(nameColumn)
        setIsEditing(false)
    }

    return (
        <main className={cn("flex flex-col items-center justify-center w-78 bg-card border border-border py-4 px-2.5 rounded-2xl", className)}>
            <header className="flex items-center justify-between pl-3 py-1.5 w-full">
                <div className="flex items-center gap-2 min-w-0">
                    {isEditing
                        ? <InputDemo
                            placeholder="Digite um nome para a lista"
                            inputType="text"
                            value={draft}
                            onChange={(event) => setDraft(event.target.value)}
                            onBlur={commit}
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault()
                                    commit()
                                } else if (event.key === "Escape") {
                                    event.preventDefault()
                                    cancel()
                                }
                            }}
                            autoFocus
                        />
                        : <button
                            type="button"
                            onClick={startEditing}
                            className="cursor-pointer truncate text-left text-foreground text-sm font-medium"
                        >
                            {nameColumn || "Sem nome"}
                        </button>
                    }
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
                <Button variant="subtle" className="flex gap-1" onClick={onAddCard}>
                    <Icon icon={Plus} size="sm" />Adicionar Tarefa
                </Button>
            </footer>
        </main>
    )
}
