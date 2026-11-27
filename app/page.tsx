"use client"

import { useState } from "react"
import { Frame } from "@/components/frame"
import type { ColumnProps } from "@/components/column"

const initialColumns: ColumnProps[] = [
  {
    nameColumn: ""
  }
]

export default function Home() {
  const [columns, setColumns] = useState<ColumnProps[]>(initialColumns)

  function handleRenameColumn(index: number, name: string) {
    setColumns((current) =>
      current.map((column, columnIndex) =>
        columnIndex === index ? { ...column, nameColumn: name } : column
      )
    )
  }

  return (
    <main className="items-center justify-center w-full">
        <Frame
          nameProject="Meu Projeto"
          columns={columns}
          description="fazer mta atividade"
          onRenameColumn={handleRenameColumn}
        />
    </main>
  )
}
