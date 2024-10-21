// * Models
import {
  IRequestPaginated,
  IFAQData,
  IFAQPostData,
  IFAQPutData,
} from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/faqs"

export const fetchFAQs = async (page = 0, pageSize = 10) => {
  const { data } = await api.get<IRequestPaginated<IFAQData>>(
    `${ENDPOINT}?p=${page + 1}&page_size=${pageSize}`
  )
  return data
}

export const fetchFAQById = async (id: number) => {
  const { data } = await api.get<IFAQData>(`${ENDPOINT}/${id}`)
  return data
}

export const createFAQ = async (data: IFAQPostData) => {
  const { data: response } = await api.post<IFAQData>(`${ENDPOINT}`, data)
  return response
}

export const updateFAQ = async (data: IFAQPutData) => {
  const { data: response } = await api.put<IFAQData>(
    `${ENDPOINT}/${data.id}`,
    data
  )
  return response
}
