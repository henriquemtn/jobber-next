// * Models
import { IRequestPaginated, IGroupData } from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/groups"

export const fetchGroups = async (page = 0, pageSize = 10) => {
  const { data } = await api.get<IRequestPaginated<IGroupData>>(
    `${ENDPOINT}?p=${page + 1}&page_size=${pageSize}`
  )
  return data
}

export const fetchAllGroups = async () => {
  const { data } = await api.get<IGroupData[]>(`${ENDPOINT}?paginate=false`)
  return data
}

export const fetchGroupById = async (id: number) => {
  const { data } = await api.get<IGroupData>(`${ENDPOINT}/${id}`)
  return data
}

export const fetchGroupsById = async (id: number[]) => {
  const { data } = await api.get<IGroupData[]>(
    `${ENDPOINT}?ids=${id.join(",")}&paginate=false`
  )
  return data
}
