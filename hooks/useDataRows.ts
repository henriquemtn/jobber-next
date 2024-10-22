/**
 * ? Hook to handle data grid rows based on data + cols
 * */

export const useDataRows = (columns: any[], data: any[]) => {
  const rows: any[] = [];
  const fields = columns.map((column) => column.field);

  data.forEach((item: any) => {
    const row: any = {};

    fields.forEach((field) => {
      row[field] = item[field];
    });

    rows.push(row);
  });

  return { rows };
};
