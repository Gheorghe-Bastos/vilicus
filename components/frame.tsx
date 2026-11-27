"use client"

import { Column, type ColumnProps } from "./column"
import { Button } from "./ui/button"
import { Icon } from "@/components/icon"
import { ChartColumnBig, Plus, Trash } from "lucide-react"
import { cn } from "@/lib/utils"

export interface FrameProps {
    nameProject: string
    columns: ColumnProps[]
    description?: string
    onAddColumn?: () => void
    onDeleteProject?: () => void
    onRenameColumn?: (index: number, name: string) => void
    className?: string
}

export function Frame({
    nameProject,
    columns,
    description,
    onAddColumn,
    onDeleteProject,
    onRenameColumn,
    className,
}: FrameProps) {

    return (
        <main className={cn("flex flex-col gap-4 p-5", className)}>
            <header className="flex items-center justify-between gap-2">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <h1 className="text-lg font-semibold text-foreground">
                            {nameProject}
                        </h1>
                    </div>
                    {description && (
                        <p className="text-sm text-muted-foreground">{description}</p>
                    )}
                </div>
                <div className="flex items-center gap-1">
                    {onAddColumn && (
                        <Button variant="ghost" size="sm" onClick={onAddColumn}>
                            <Icon icon={Plus} size="sm" />
                            Adicionar Quadro
                        </Button>
                    )}
                    {onDeleteProject && (
                        <Button variant="ghost" size="sm" onClick={onDeleteProject}>
                            <Icon icon={Trash} size="sm" className="text-muted-foreground" />
                        </Button>
                    )}
                </div>
            </header>
            <section className="flex items-start gap-4 overflow-x-auto pb-2">
                {columns.map((column, index) => (
                    <Column
                        key={index}
                        {...column}
                        onRename={(name) => onRenameColumn?.(index, name)}
                    />
                ))}
                <Button variant="secondary" size="lg">
                    <Icon icon={ChartColumnBig} size="sm" />
                    <span>Adicionar Lista</span>
                </Button>
            </section>
        </main>
    )
}
