import { Icon } from "./icon";
import { Frame } from "./frame";
import { Text, Rows3 } from "lucide-react";
import type { ColumnProps } from "@/components/column";

export function CardDetail() {
    const columns: ColumnProps[] = [
        {
            nameColumn: "Fazer coco",
            cards: [
                {
                    username: "Username",
                    labelColor: "bg-red-500",
                    title: "Login to your account",
                    date: "20 de Nov.",
                    checkedCount: 2,
                    totalCount: 5,
                },
            ],
        },
    ];


    return (
        <main className="flex flex-col gap-4 w-[60%] border p-5 border-border rounded-2xl">
            <section className="flex justify-between w-full">
                <div className="flex flex-col gap-2">
                    <div>
                        <h2 className="text-xl font-semibold text-foreground">Estudar System Design</h2>
                    </div>
                    <div>
                        <h3 className="flex items-center gap-2 text-lg font-medium text-foreground"><Icon icon={Text} size={'md'} className="text-foreground" />Descrição e Detalhes</h3>
                        <p className="text-sm text-muted-foreground">Aqui você pode ver os detalhes do card selecionado.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="flex text-muted-foreground items-center justify-center text-xs font-medium bg-muted rounded-full">
                        Sem notificações no momento.
                    </span>
                </div>
            </section>
            <section className="flex flex-col justify-center w-full border border-border rounded-lg">
                <h2 className="flex gap-2 justify-center items-center text-xl pt-5 font-semibold text-foreground"><Icon icon={Rows3} size="md"/>Quadro do Card</h2>
                <Frame columns={columns} />
            </section>
        </main>
    )
}
