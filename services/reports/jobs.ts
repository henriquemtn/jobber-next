// * Models
import { IJobReportData, IReportGenerateData } from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/reports/job"

type TReportJobFilters = {
  customer?: string
  project?: string
  package?: string
  requester?: string
  responsible?: string
  status?: string
  bonus?: string
  request?: string
  budget?: string
  title?: string
  start: string
  finish: string
}

export const fetchReportJob = async (filters: TReportJobFilters) => {
  const params = `?${String(new URLSearchParams(filters))}`
  const { data } = await api.get<IJobReportData[]>(`${ENDPOINT}${params}`)
  return data
}

export const fetchGenerateReportJob = async (filters: TReportJobFilters) => {
  const params = `?${String(new URLSearchParams(filters))}&generate=true`
  const { data } = await api.get<IReportGenerateData>(`${ENDPOINT}${params}`)
  return data
}
