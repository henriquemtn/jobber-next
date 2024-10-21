"use client"

import * as React from "react"
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { ArrowUpDown } from "lucide-react"
import { DataTablePagination } from "../data-table/pagination"

export type Groups = {
  id: string
  name: string
}

const data: Groups[] = [
  { id: "m5gr84i9", name: "Group 1" },
  { id: "m5gr84i9", name: "Group 2" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 1" },
  { id: "m5gr84i9", name: "Group 2" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 1" },
  { id: "m5gr84i9", name: "Group 2" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 1" },
  { id: "m5gr84i9", name: "Group 2" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 1" },
  { id: "m5gr84i9", name: "Group 2" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 1" },
  { id: "m5gr84i9", name: "Group 2" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 1" },
  { id: "m5gr84i9", name: "Group 2" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 1" },
  { id: "m5gr84i9", name: "Group 2" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 3" },
  { id: "m5gr84i9", name: "Group 3" },
]

const columns: ColumnDef<Groups>[] = [
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

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    state: { sorting, rowSelection },
  })

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">No results.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <DataTablePagination table={table} />

    </div>
  )
}
