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
    field: "title",
    headerName: "Título",
    flex: 1,
    editable: false,
    sortable: true,
    filterable: false,
  },
  {
    field: "author",
    headerName: "Autor",
    flex: 1,
    editable: false,
    sortable: true,
    filterable: false,
  },
  {
    field: "highlight",
    headerName: "Destaque",
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
      <DataGrid.Actions params={params} endpoint="posts" fieldName="title" />
    ),
  },
]
