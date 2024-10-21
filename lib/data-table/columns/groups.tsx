// * Components
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"

// * Icons
import { ArrowUpDown } from "lucide-react"

// * Types
export type Groups = {
  id: string
  name: string
}

export const columns: ColumnDef<Groups>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },
]