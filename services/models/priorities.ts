// * Models
import { IPriorityData, IPriorityFilterData } from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/priorities"

export const fetchPrioritiesToFilter = async () => {
  const { data } = await api.get<IPriorityFilterData[]>("/filters/priorities")
  return data
}

export const fetchPriorityById = async (id: number) => {
  const { data } = await api.get<IPriorityData>(`${ENDPOINT}/${id}`)
  return data
}

export const fetchAllPriorities = async () => {
  const { data } = await api.get<IPriorityData[]>(`${ENDPOINT}?paginate=false`)
  const sortedData = data.sort((a, b) => {
    return a.order < b.order ? -1 : a.order > b.order ? 1 : 0
  })
  return sortedData
}
