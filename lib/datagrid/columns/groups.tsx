// * MUI
import { GridColDef } from '@mui/x-data-grid';

/**
 * Columns definition for the data grid
 */

export const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 80,
    editable: false,
    sortable: true,
    filterable: false,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'name',
    headerName: 'Nome',
    flex: 1,
    editable: false,
    sortable: true,
    filterable: false,
    renderCell: ({ value }) => <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{value && value}</span>,
    sortComparator: (v1, v2) => v1.localeCompare(v2),
  },
];
