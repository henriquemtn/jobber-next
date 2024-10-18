// * Models
import { IPackageReportData, IReportGenerateData } from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/reports/package"

type TReportPackageFilters = {
  servicetype: string
  year: string
  month: string
}

export const fetchReportPackage = async (filters: TReportPackageFilters) => {
  const params = `?${String(new URLSearchParams(filters))}`
  const { data } = await api.get<IPackageReportData[]>(`${ENDPOINT}${params}`)
  return data
}

export const fetchGenerateReportPackage = async (
  filters: TReportPackageFilters
) => {
  const params = `?${String(new URLSearchParams(filters))}&generate=true`
  const { data } = await api.get<IReportGenerateData>(`${ENDPOINT}${params}`)
  return data
}
