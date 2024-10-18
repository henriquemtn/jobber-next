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
    field: "reason",
    headerName: "Motivo",
    flex: 1,
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
      <DataGrid.Actions
        params={params}
        endpoint="bonus"
        fieldName="reason"
        cannotEdit
        cannotDelete
      />
    ),
  },
]
