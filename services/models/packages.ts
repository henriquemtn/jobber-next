// * Hooks & Utils
import { sortBetweenName } from "@/helpers/sortBetweenName"

// * Models
import {
  IRequestPaginated,
  IPackageData,
  IPackageConsumptionData,
  IPackagePostData,
  IPackageFilterData,
  IPackagePutData,
} from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/packages"

export const fetchPackages = async (page = 0, pageSize = 10, filters?: any) => {
  const params = filters ? `&${new URLSearchParams(filters).toString()}` : ""
  const { data } = await api.get<IRequestPaginated<IPackageData>>(
    `${ENDPOINT}?p=${page + 1}&page_size=${pageSize}${params}`
  )
  return data
}

export const fetchPackagesToFilter = async () => {
  const { data } = await api.get<IPackageFilterData[]>("/filters/packages")
  const sortedData = sortBetweenName(data)
  return sortedData
}

export const fetchPackageById = async (id: number) => {
  const { data } = await api.get<IPackageData>(`${ENDPOINT}/${id}`)
  return data
}

export const fetchPackagesById = async (id: number[]) => {
  const { data } = await api.get<IPackageData[]>(
    `${ENDPOINT}?ids=${id.join(",")}&paginate=false`
  )
  return data
}

export const fetchPackagesByCustomerId = async (customerId: number) => {
  const { data } = await api.get<IPackageData[]>(
    `${ENDPOINT}?customer=${customerId}&paginate=false`
  )
  const sortedData = sortBetweenName(data)
  return sortedData
}

export const fetchActivePackagesByCustomerId = async (customerId: number) => {
  const { data } = await api.get<IPackageData[]>(
    `${ENDPOINT}?customer=${customerId}&is_active=true&paginate=false`
  )
  const sortedData = sortBetweenName(data)
  return sortedData
}

export const fetchPackageConsumptionByPeriod = async (
  packageId: number,
  period: string
) => {
  const { data } = await api.get<IPackageConsumptionData>(
    `${ENDPOINT}/${packageId}/package_consumption?period=${period}`
  )
  return data
}

export const createPackage = async (data: IPackagePostData) => {
  const { data: response } = await api.post<IPackageData>(ENDPOINT, data)
  return response
}

export const updatePackage = async (data: IPackagePutData) => {
  const { data: response } = await api.put<IPackageData>(
    `${ENDPOINT}/${data.id}`,
    data
  )
  return response
}
