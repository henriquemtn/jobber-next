// * Models
import {
  IRequestPaginated,
  IRequestStatusData,
  IRequestStatusFilterData,
} from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/requeststatus"

export const fetchRequestStatuses = async (page = 0, pageSize = 10) => {
  const { data } = await api.get<IRequestPaginated<IRequestStatusData>>(
    `${ENDPOINT}?p=${page + 1}&page_size=${pageSize}`
  )
  return data
}

export const fetchRequestStatusesToFilter = async () => {
  const { data } = await api.get<IRequestStatusFilterData[]>(
    "/filters/requeststatus"
  )
  return data
}

export const fetchRequestStatusById = async (id: number) => {
  const { data } = await api.get<IRequestStatusData>(`${ENDPOINT}/${id}`)
  return data
}

export const fetchAllRequestStatuses = async () => {
  const { data } = await api.get<IRequestStatusData[]>(
    `${ENDPOINT}?paginate=false`
  )
  const sortedData = data.sort((a, b) => {
    return a.order < b.order ? -1 : a.order > b.order ? 1 : 0
  })
  return sortedData
}
