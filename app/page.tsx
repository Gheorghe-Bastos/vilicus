import {CardDetail} from "@/components/cardDetails";
import { Frame } from "@/components/frame";
import type { ColumnProps } from "@/components/column";

const columns: ColumnProps[] = [
  {
    nameColumn: "Em Desenvolvimento",
    cards: [
      {
        username: "Username",
        labelColor: "bg-red-500",
        title: "Login to your account",
        date: "20 de Nov.",
        checkedCount: 2,
        totalCount: 5,
      },
      {
        username: "Username",
        labelColor: "bg-green-500",
        title: "Configurar projeto",
        date: "23 de Nov.",
        checkedCount: 5,
        totalCount: 5,
      },
      {
        username: "Username",
        labelColor: "bg-green-500",
        title: "Configurar projeto",
        date: "23 de Nov.",
        checkedCount: 5,
        totalCount: 5,
      },
    ],
  },
  {
    nameColumn: "Em andamento",
    cards: [
      {
        username: "Username",
        labelColor: "bg-blue-500",
        title: "Criar tela de login",
        date: "21 de Nov.",
        checkedCount: 1,
        totalCount: 3,
      },
      {
        username: "Username",
        labelColor: "bg-green-500",
        title: "Configurar projeto",
        date: "23 de Nov.",
        checkedCount: 5,
        totalCount: 5,
      },{
        username: "Username",
        labelColor: "bg-green-500",
        title: "Configurar projeto",
        date: "23 de Nov.",
        checkedCount: 5,
        totalCount: 5,
      },
    ],
  },
  {
    nameColumn: "Em revisão",
    cards: [
      {
        username: "Username",
        labelColor: "bg-yellow-500",
        title: "Revisar componentes",
        date: "22 de Nov.",
        checkedCount: 2,
        totalCount: 4,
      },
    ],
  },
  {
    nameColumn: "Concluído",
    cards: [
      {
        username: "Username",
        labelColor: "bg-green-500",
        title: "Configurar projeto",
        date: "23 de Nov.",
        checkedCount: 5,
        totalCount: 5,
      },
    ],
  },
];

export default function Home() {

  const coco = true

  return (
    <main className="items-center justify-center w-full">
      {coco && <Frame nameProject="Meu Projeto" columns={columns} />}
      <CardDetail/>
    </main>
  )
}
