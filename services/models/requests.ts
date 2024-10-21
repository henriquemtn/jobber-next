// * Models
import {
  IRequestPaginated,
  IRequestData,
  IRequestPatchStatusData,
  IRequestPatchCustomerTermData,
  IRequestPatchFollowersData,
  IRequestPostData,
  IRequestPutData,
} from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/requests"

export const fetchRequests = async (page = 0, pageSize = 10, filters?: any) => {
  const params = filters ? `&${new URLSearchParams(filters).toString()}` : ""
  const { data } = await api.get<IRequestPaginated<IRequestData>>(
    `${ENDPOINT}?p=${page + 1}&page_size=${pageSize}${params}`
  )
  return data
}

export const fetchRequestById = async (id: number) => {
  const { data } = await api.get<IRequestData>(`${ENDPOINT}/${id}`)
  return data
}

export const fetchRequestsByPackageId = async (
  packageId: number,
  page = 0,
  pageSize = 10,
  filters?: any
) => {
  const params = filters ? `&${new URLSearchParams(filters).toString()}` : ""
  const { data } = await api.get<IRequestPaginated<IRequestData>>(
    `${ENDPOINT}?package=${packageId}&p=${
      page + 1
    }&page_size=${pageSize}${params}`
  )
  return data
}

export const fetchRequestsByProjectId = async (
  projectId: number,
  page = 0,
  pageSize = 10,
  filters?: any
) => {
  const params = filters ? `&${new URLSearchParams(filters).toString()}` : ""
  const { data } = await api.get<IRequestPaginated<IRequestData>>(
    `${ENDPOINT}?project=${projectId}&p=${
      page + 1
    }&page_size=${pageSize}${params}`
  )
  return data
}

export const fetchRequestsByPackageIdOrProjectIdToFilter = async (
  packageId: number | undefined,
  projectId: number | undefined,
  page = 0,
  pageSize = 10,
  filters?: any
) => {
  const param = packageId ? `package=${packageId}` : `project=${projectId}`
  const params = filters ? `&${new URLSearchParams(filters).toString()}` : ""
  const { data } = await api.get<IRequestPaginated<IRequestData>>(
    `/filters/requests?${param}&p=${page + 1}&page_size=${pageSize}${params}`
  )
  return data
}

export const fetchRequestsByPackageIdOrProjectIdToSelect = async (
  packageId: number | null,
  projectId: number | null
) => {
  const { data } = await api.get<IRequestData[]>(
    `${ENDPOINT}?paginate=false${
      packageId ? `&package=${packageId}` : `&project=${projectId}`
    }`
  )
  return data
}

export const fetchRequestsUsersByPackageIdOrProjectId = async (
  packageId: number | null,
  projectId: number | null
) => {
  const param = packageId ? `package=${packageId}` : `project=${projectId}`
  const { data } = await api.get<Array<{ id: number; name: string }>>(
    `${ENDPOINT}/users_by_package_or_project?${param}`
  )
  return data
}

export const createRequest = async (data: IRequestPostData) => {
  const { data: response } = await api.post<IRequestData>(ENDPOINT, data)
  return response
}

export const updateRequest = async (data: IRequestPutData) => {
  const { data: response } = await api.put<IRequestData>(
    `${ENDPOINT}/${data.id}`,
    data
  )
  return response
}

export const updateRequestStatus = async (data: IRequestPatchStatusData) => {
  const { data: response } = await api.patch<IRequestData>(
    `${ENDPOINT}/${data.id}`,
    data
  )
  return response
}

export const updateRequestCustomerTerm = async (
  data: IRequestPatchCustomerTermData
) => {
  const { data: response } = await api.patch<IRequestData>(
    `${ENDPOINT}/${data.id}`,
    data
  )
  return response
}

export const updateRequestFollowers = async (
  data: IRequestPatchFollowersData
) => {
  const { data: response } = await api.patch<IRequestData>(
    `${ENDPOINT}/${data.id}`,
    data
  )
  return response
}
