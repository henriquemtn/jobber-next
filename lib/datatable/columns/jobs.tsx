import { IJobData } from "@/models";
import { ColumnDef } from "@tanstack/react-table";

export const columnJobs: ColumnDef<IJobData>[] = [
  {
    accessorKey: "id",
    header: "ID",
    size: 80,
    enableSorting: true,
    enableColumnFilter: false,
    cell: ({ getValue }) => <span>{getValue() as number}</span>,
  },
  {
    accessorKey: "title",
    header: "Título",
    cell: ({ getValue }) => (
      <span
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {(getValue() as string) || "N/A"}
      </span>
    ),
    enableSorting: true,
    enableColumnFilter: false,
    sortingFn: (rowA, rowB) =>
      (rowA.getValue("title") as string).localeCompare(
        rowB.getValue("title") as string
      ),
  },
  {
    accessorKey: "customer.name",
    header: "Cliente",
    cell: ({ getValue }) => <span>{(getValue() as string) || "N/A"}</span>,
    enableSorting: true,
    enableColumnFilter: false,
  },
  {
    accessorKey: "responsible.name",
    header: "Responsável",
    cell: ({ getValue }) => <span>{(getValue() as string) || "N/A"}</span>,
    enableSorting: true,
    enableColumnFilter: false,
  },
  {
    accessorKey: "status.name",
    header: "Status",
    cell: ({ getValue }) => <span>{(getValue() as string) || "N/A"}</span>,
    enableSorting: true,
    enableColumnFilter: false,
  },
  {
    accessorKey: "start",
    header: "Início",
    cell: ({ getValue }) => (
      <span>{new Date(getValue() as string).toLocaleDateString() || "N/A"}</span>
    ),
    enableSorting: true,
    enableColumnFilter: false,
  },
  {
    accessorKey: "finish",
    header: "Término",
    cell: ({ getValue }) => (
      <span>{getValue() ? new Date(getValue() as string).toLocaleDateString() : "Em aberto"}</span>
    ),
    enableSorting: true,
    enableColumnFilter: false,
  },
  {
    accessorKey: "estimated_time",
    header: "Tempo Estimado (h)",
    cell: ({ getValue }) => <span>{getValue() as number}</span>,
    enableSorting: true,
    enableColumnFilter: false,
  },
];
