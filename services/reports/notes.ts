// * Models
import { INoteReportData, IReportGenerateData } from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/reports/note"

type TReportNoteFilters = {
  start: string
  finish: string
  customer?: string
  project?: string
  package?: string
  status?: string
  responsible?: string
}

export const fetchReportNote = async (filters: TReportNoteFilters) => {
  const params = `?${String(new URLSearchParams(filters))}`
  const { data } = await api.get<INoteReportData[]>(`${ENDPOINT}${params}`)
  return data
}

export const fetchGenerateReportNote = async (filters: TReportNoteFilters) => {
  const params = `?${String(new URLSearchParams(filters))}&generate=true`
  const { data } = await api.get<IReportGenerateData>(`${ENDPOINT}${params}`)
  return data
}
