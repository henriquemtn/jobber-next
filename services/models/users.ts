// * Hooks & Utils
import { sortBetweenName } from "@/helpers/sortBetweenName"

// * Models
import {
  IRequestPaginated,
  INotificationData,
  IUserFilterData,
  IUserListData,
  IUserRetrieveData,
  IUserPostData,
  IUserPutData,
  IUserPatchNotificationsData,
} from "@/models"
import api from "@/services/api"

const ENDPOINT = "/users"

export const fetchUsers = async (page = 0, pageSize = 10, filters?: any) => {
  const params = filters ? `&${new URLSearchParams(filters).toString()}` : ""
  const { data } = await api.get<IRequestPaginated<IUserListData>>(
    `${ENDPOINT}?p=${page + 1}&page_size=${pageSize}${params}`
  )
  return data
}

export const fetchUserById = async (id: number) => {
  const { data } = await api.get<IUserRetrieveData>(`${ENDPOINT}/${id}`)
  return data
}

export const fetchUsersById = async (id: number[]) => {
  const { data } = await api.get<IUserListData[]>(
    `${ENDPOINT}?ids=${id.join(",")}&paginate=false`
  )
  return data
}

export const fetchUsersByCustomerId = async (customerId: number) => {
  const { data } = await api.get<IUserListData[]>(
    `${ENDPOINT}?customer=${customerId}&paginate=false`
  )
  return data
}

export const fetchUserNotificationByUserId = async (userId: number) => {
  const { data } = await api.get<INotificationData>(
    `${ENDPOINT}/${userId}/notifications`
  )
  return data
}

export const fetchUsersToFilter = async () => {
  const { data } = await api.get<IUserFilterData[]>("/filters/users")
  const sortedData = sortBetweenName(data)
  return sortedData
}

export const fetchInternalUsers = async () => {
  const { data } = await api.get<IUserListData[]>(
    `${ENDPOINT}?is_customer=false&is_active=true`
  )
  const sortedData = sortBetweenName(data)
  return sortedData
}

export const fetchCustomerUsers = async () => {
  const { data } = await api.get<IUserListData[]>(
    `${ENDPOINT}?is_customer=true&is_active=true`
  )
  const sortedData = sortBetweenName(data)
  return sortedData
}

export const createUser = async (data: IUserPostData) => {
  const { data: response } = await api.post<IUserRetrieveData>(ENDPOINT, data)
  return response
}

export const updateUser = async (data: IUserPutData) => {
  const { data: response } = await api.put<IUserRetrieveData>(
    `${ENDPOINT}/${data.id}`,
    data
  )
  return response
}

export const updateUserPassword = async (data: {
  old_password: string
  new_password: string
}) => {
  const { data: response } = await api.post<{ code: number; status: string }>(
    `${ENDPOINT}/change_password`,
    data
  )
  return response
}

export const updateUserNotifications = async (
  data: IUserPatchNotificationsData
) => {
  const { data: response } = await api.patch<INotificationData>(
    `${ENDPOINT}/${data.user}/notifications`,
    data
  )
  return response
}
