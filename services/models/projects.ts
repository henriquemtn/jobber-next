// * Hooks & Utils
import { sortBetweenName } from "@/helpers/sortBetweenName"

// * Models
import {
  IRequestPaginated,
  IProjectData,
  IProjectFilterData,
  IProjectPostData,
  IProjectPutData,
} from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/projects"

export const fetchProjects = async (page = 0, pageSize = 10, filters?: any) => {
  const params = filters ? `&${new URLSearchParams(filters).toString()}` : ""
  const { data } = await api.get<IRequestPaginated<IProjectData>>(
    `${ENDPOINT}?p=${page + 1}&page_size=${pageSize}${params}`
  )
  return data
}

export const fetchProjectsToFilter = async () => {
  const { data } = await api.get<IProjectFilterData[]>("/filters/projects")
  const sortedData = sortBetweenName(data)
  return sortedData
}

export const fetchProjectById = async (id: number) => {
  const { data } = await api.get<IProjectData>(`${ENDPOINT}/${id}`)
  return data
}

export const fetchProjectsByCustomerId = async (customerId: number) => {
  const { data } = await api.get<IProjectData[]>(
    `${ENDPOINT}?customer=${customerId}&paginate=false`
  )
  const sortedData = sortBetweenName(data)
  return sortedData
}

export const fetchActiveProjectsByCustomerId = async (customerId: number) => {
  const { data } = await api.get<IProjectData[]>(
    `${ENDPOINT}?customer=${customerId}&is_active=true&paginate=false`
  )
  const sortedData = sortBetweenName(data)
  return sortedData
}

export const createProject = async (data: IProjectPostData) => {
  const { data: response } = await api.post<IProjectData>(ENDPOINT, data)
  return response
}

export const updateProject = async (data: IProjectPutData) => {
  const { data: response } = await api.put<IProjectData>(
    `${ENDPOINT}/${data.id}`,
    data
  )
  return response
}
