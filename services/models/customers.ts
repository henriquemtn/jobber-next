// * Hooks & Utils
import { sortBetweenName } from "@/helpers/sortBetweenName"

// * Models
import {
  IRequestPaginated,
  ICustomerData,
  ICustomerFilterData,
  ICustomerPostData,
  ICustomerPutData,
} from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/customers"

export const fetchCustomers = async (page = 0, pageSize = 10) => {
  const { data } = await api.get<IRequestPaginated<ICustomerData>>(
    `${ENDPOINT}?p=${page + 1}&page_size=${pageSize}`
  )
  return data
}

export const fetchCustomerById = async (id: number) => {
  const { data } = await api.get<ICustomerData>(`${ENDPOINT}/${id}`)
  return data
}

export const fetchAllCustomers = async () => {
  const { data } = await api.get<ICustomerData[]>(`${ENDPOINT}?paginate=false`)
  const sortedData = sortBetweenName(data)
  return sortedData
}

export const fetchCustomersToFilter = async () => {
  const { data } = await api.get<ICustomerFilterData[]>("/filters/customers")
  const sortedData = sortBetweenName(data)
  return sortedData
}

export const createCustomer = async (data: ICustomerPostData) => {
  const { data: response } = await api.post<ICustomerData>(ENDPOINT, data)
  return response
}

export const updateCustomer = async (data: ICustomerPutData) => {
  const { data: response } = await api.put<ICustomerData>(
    `${ENDPOINT}/${data.id}`,
    data
  )
  return response
}
