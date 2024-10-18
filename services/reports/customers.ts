// * Models
import { ICustomerReportListData, IReportGenerateData } from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/reports/customer"

type TReportCustomerFilters = {
  year: string
  month: string
  customer: string
  package: string
}

export const fetchReportCustomer = async (filters: TReportCustomerFilters) => {
  const params = `?${String(new URLSearchParams(filters))}`
  const { data } = await api.get<ICustomerReportListData>(
    `${ENDPOINT}${params}`
  )
  return data
}

export const fetchGenerateReportCustomer = async (
  filters: TReportCustomerFilters
) => {
  const params = `?${String(new URLSearchParams(filters))}&generate=true`
  const { data } = await api.get<IReportGenerateData>(`${ENDPOINT}${params}`)
  return data
}
