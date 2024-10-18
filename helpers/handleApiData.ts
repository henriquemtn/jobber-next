/**
 * Filters the data from the API and returns the data in a format that can be used by the DataGrid component
 * @param data
 * @returns
 */

export const handleApiData = (data: any, name?: string) =>
  data.map((item: any) => ({
    id: item.id,
    name: name ? item[name] : item.name,
  }))
