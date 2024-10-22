// * Next
import { useState } from 'react'

// * Components
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

// * Hooks & Utils
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
  SortingState,
  getFilteredRowModel,
  getSortedRowModel,
} from '@tanstack/react-table'
import { useQuery } from '@tanstack/react-query'
import { ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react'

// Models
import { IRequestPaginated } from "@/models";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  queryKey: string
  queryFn: (page?: number, pageSize?: number) => Promise<IRequestPaginated<TData>>
  filterColumn?: string
  onClickRow: (row: TData) => void
}

export function DataTable<TData, TValue>({
  columns,
  queryKey,
  queryFn,
  filterColumn,
  onClickRow
}: DataTableProps<TData, TValue>) {
  const [globalFilter, setGlobalFilter] = useState('')
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [sorting, setSorting] = useState<SortingState>([])

  const { data, isLoading, isError } = useQuery({
    queryKey: [queryKey, page, pageSize],
    queryFn: () => queryFn(page, pageSize), 
  })

  const table = useReactTable({
    data: data?.results || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      globalFilter,
      pagination: {
        pageSize,
        pageIndex: 0,
      },
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    globalFilterFn: 'includesString',
    pageCount: Math.ceil((data?.count ?? 0) / pageSize),
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error fetching data</div>

  return (
    <div className="space-y-4 p-4">
      <div className="flex justify-between items-center">
        {filterColumn && (
          <Input
            placeholder={`Filtrar por ${filterColumn}...`}
            value={globalFilter ?? ''}
            onChange={(event) => setGlobalFilter(String(event.target.value))}
            className="max-w-sm"
          />
        )}
        <Select
          value={pageSize.toString()}
          onValueChange={(value) => {
            setPageSize(Number(value))
            table.setPageSize(Number(value))
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select rows per page" />
          </SelectTrigger>
          <SelectContent>
            {[10, 25, 50, 100].map((pageSize) => (
              <SelectItem key={pageSize} value={pageSize.toString()}>
                {pageSize} Linhas
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="rounded-md border overflow-auto">
        <Table>
          <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div className="flex items-center font-medium ">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanSort() && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="ml-2 h-8 data-[state=open]:bg-accent"
                            onClick={() => header.column.toggleSorting()}
                          >
                            <ArrowUpDown className="h-4 w-4" />
                            <span className="sr-only">Toggle sort</span>
                          </Button>
                        )}
                      </div>
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() => onClickRow(row.original)}
                  className='cursor-pointer text-[14px] font-medium'
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div>
        <span className="text-sm font-medium">
          {(data?.count ?? 0) > 0 ? (
            <>
              {page * pageSize + 1}–{Math.min((page + 1) * pageSize, data?.count ?? 0)} de {data?.count ?? 0}
            </>
          ) : (
            "Nenhum resultado"
          )}
        </span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage(page + 1)}
          disabled={page >= table.getPageCount() - 1}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
