import { IGroupData } from "@/models";
import { ColumnDef } from "@tanstack/react-table";

export const columnGroups: ColumnDef<IGroupData>[] = [
  {
    accessorKey: "id",
    header: "ID",
    size: 80,
    enableSorting: true,
    enableColumnFilter: false,
    cell: ({ getValue }) => <span>{getValue() as number}</span>,
  },
  {
    accessorKey: "name",
    header: "Nome",
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
      (rowA.getValue("name") as string).localeCompare(
        rowB.getValue("name") as string
      ),
  },
];
