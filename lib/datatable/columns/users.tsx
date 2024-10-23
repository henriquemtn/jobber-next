import { IUserListData } from "@/models";
import { ColumnDef } from "@tanstack/react-table";

export const columnUsers: ColumnDef<IUserListData>[] = [
  {
    accessorKey: "id",
    header: "ID",
    size: 80,
    enableSorting: true,
    enableColumnFilter: false,
    cell: ({ getValue }) => <span>{getValue() as number}</span>,
  },
  {
    accessorKey: "first_name",
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
      (rowA.getValue("first_name") as string).localeCompare(
        rowB.getValue("first_name") as string
      ),
  },
  {
    accessorKey: "last_name",
    header: "Sobrenome",
    cell: ({ getValue }) => <span>{(getValue() as string) || "N/A"}</span>,
    enableSorting: true,
    enableColumnFilter: false,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ getValue }) => <span>{(getValue() as string) || "N/A"}</span>,
    enableSorting: true,
    enableColumnFilter: false,
  },
  {
    accessorKey: "is_active",
    header: "Ativo",
    cell: ({ getValue }) => (
      <span>{(getValue() as boolean) ? "Sim" : "Não"}</span>
    ),
    enableSorting: true,
    enableColumnFilter: false,
  },
  {
    header: "Ações",
    cell: ({ row }) => (
      <button
        onClick={() => handleUserAction(row.original)}
        className="text-blue-500 hover:underline"
      >
        Ver Detalhes
      </button>
    ),
    enableSorting: false,
    enableColumnFilter: false,
  },
];

function handleUserAction(user: IUserListData) {
  console.log("User action:", user);
}
