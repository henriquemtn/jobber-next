import { IProjectData } from "@/models";
import { ColumnDef } from "@tanstack/react-table";

export const columnProjects: ColumnDef<IProjectData>[] = [
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
  {
    accessorKey: "isActive",
    header: "Ativo",
    cell: ({ getValue }) => <span>{getValue() ? "Sim" : "Não"}</span>,
    enableSorting: true,
    enableColumnFilter: true,
  },
  {
    accessorKey: "estimated_time",
    header: "Tempo estimado",
    cell: ({ getValue }) => {
      const timeInMinutes = parseInt(getValue() as string, 10); // Converte a string para número
  
      // Verifica se o valor é um número válido
      if (isNaN(timeInMinutes) || timeInMinutes < 0) {
        return <span>N/A</span>; // Exibe N/A se o valor não for válido
      }
  
      // Calcula horas e minutos
      const hours = Math.floor(timeInMinutes / 60);
      const minutes = timeInMinutes % 60;
  
      // Retorna o valor formatado
      return <span>{`${hours}h ${minutes}m`}</span>;
    },
    enableSorting: true,
    enableColumnFilter: false,
  },  
  {
    accessorKey: "customer",
    header: "Cliente",
    cell: ({ getValue }) => {
      const customer = getValue() as { id: number; name: string };
      return <span>{customer?.name || "N/A"}</span>;
    },
    enableSorting: true,
    enableColumnFilter: true,
  },
  {
    accessorKey: "actions",
    header: "Ações",
    size: 150,
    enableSorting: false,
    enableColumnFilter: false,
    cell: (props) => (
      <div>
        <button>teste</button>
        <button>Ação 2</button>
      </div>
    ),
  },
];
