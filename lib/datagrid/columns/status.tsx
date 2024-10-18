// * MUI
import { GridColDef } from "@mui/x-data-grid"

// * Components
import { DataGrid } from "@/components/data-grid"

/**
 * Columns definition for the data grid
 */

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
    headerAlign: "center",
    align: "center",
    editable: false,
    sortable: true,
    filterable: false,
    renderCell: ({ value }) => (
      <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
        {value && value}
      </span>
    ),
    sortComparator: (v1, v2) => v1.localeCompare(v2),
  },
  {
    field: "order",
    headerName: "Ordem",
    width: 80,
    type: "number",
    headerAlign: "center",
    align: "center",
    editable: false,
    sortable: true,
    filterable: false,
    renderCell: ({ value }) => (
      <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
        {value && value}
      </span>
    ),
  },
  {
    field: "color",
    headerName: "Cor",
    flex: 1,
    cellClassName: "color-cell",
    headerAlign: "center",
    align: "center",
    editable: false,
    sortable: false,
    filterable: false,
    renderCell: ({ value }) => (
      <>
        <div
          className="color-cell-container"
          style={{
            backgroundColor: value,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        />
      </>
    ),
  },
  {
    field: "active",
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
    field: "description",
    headerName: "Descrição",
    flex: 1,
    headerAlign: "center",
    align: "center",
    editable: false,
    sortable: true,
    filterable: false,
    renderCell: ({ value }) => (
      <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
        {value && value}
      </span>
    ),
    sortComparator: (v1, v2) => v1.localeCompare(v2),
  },
  {
    field: "can_finish",
    headerName: "Finaliza tarefa?",
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
      <DataGrid.Actions
        params={params}
        endpoint="status"
        cannotEdit
        cannotDelete
      />
    ),
  },
]
