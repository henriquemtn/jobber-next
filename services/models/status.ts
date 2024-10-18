// * Models
import { IRequestPaginated, IStatusData, IStatusFilterData } from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/status"

export const fetchStatuses = async (page = 0, pageSize = 10) => {
  const { data } = await api.get<IRequestPaginated<IStatusData>>(
    `${ENDPOINT}?p=${page + 1}&page_size=${pageSize}`
  )
  return data
}

export const fetchStatusesToFilter = async () => {
  const { data } = await api.get<IStatusFilterData[]>("/filters/status")
  return data
}

export const fetchStatusById = async (id: number) => {
  const { data } = await api.get<IStatusData>(`${ENDPOINT}/${id}`)
  return data
}

export const fetchAllStatuses = async () => {
  const { data } = await api.get<IStatusData[]>(`${ENDPOINT}?paginate=false`)
  return data
}
