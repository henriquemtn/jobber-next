// * MUI
import { GridColDef } from "@mui/x-data-grid"

// * Components
import { DataGrid } from "@/components/data-grid"

export const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
    editable: false,
    sortable: true,
    filterable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "name",
    headerName: "Nome",
    flex: 1,
    editable: false,
    sortable: true,
    filterable: false,
  },
  {
    field: "short_name",
    headerName: "Nome curto",
    flex: 1,
    editable: false,
    sortable: true,
    filterable: false,
  },
  {
    field: "is_active",
    headerName: "Ativo",
    flex: 1,
    type: "boolean",
    headerAlign: "center",
    align: "center",
    editable: false,
    sortable: true,
    filterable: false,
  },
  {
    field: "action",
    headerName: "Ações",
    width: 150,
    sortable: false,
    editable: false,
    filterable: false,
    disableColumnMenu: true,
    disableExport: true,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => (
      <DataGrid.Actions params={params} endpoint="services" />
    ),
  },
]
