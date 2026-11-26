import {CardDetail} from "@/components/cardDetails";
import { Frame } from "@/components/frame";
import type { ColumnProps } from "@/components/column";

const arrayColumn = [
  {nameColumn: "Fazer coco"}
]

export default function Home() {

  return (
    <main className="items-center justify-center w-full">
        <Frame nameProject="Meu Projeto" columns={arrayColumn}/>
    </main>
  )
}
