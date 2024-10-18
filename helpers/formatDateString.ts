/**
 * Format date string to locale date string
 * @param date - Date string, number or Date object
 * @returns string
 */

const toENCADate = (date: Date) => date.toLocaleDateString("en-CA")

export const formatDateString = (date: string | Date | number) => {
  if (date instanceof Date) return toENCADate(date)

  return toENCADate(new Date(date))
}
