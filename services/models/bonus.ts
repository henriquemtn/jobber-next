// * Models
import {
  IRequestPaginated,
  IBonusData,
  IBonusPostData,
  IBonusPutData,
  IBonusFilterData,
} from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/bonus"

export const fetchBonuses = async (page = 0, pageSize = 10) => {
  const { data } = await api.get<IRequestPaginated<IBonusData>>(
    `${ENDPOINT}?p=${page + 1}&page_size=${pageSize}`
  )
  return data
}

export const fetchBonusById = async (id: number) => {
  const { data } = await api.get<IBonusData>(`${ENDPOINT}/${id}`)
  return data
}

export const fetchAllBonuses = async () => {
  const { data } = await api.get<IBonusData[]>(`${ENDPOINT}?paginate=false`)
  return data
}

export const fetchBonusesToFilter = async () => {
  const { data } = await api.get<IBonusFilterData[]>("/filters/bonus")
  return data
}

export const createBonus = async (data: IBonusPostData) => {
  const { data: response } = await api.post<IBonusData>(ENDPOINT, data)
  return response
}

export const updateBonus = async (data: IBonusPutData) => {
  const { data: response } = await api.put<IBonusData>(
    `${ENDPOINT}/${data.id}`,
    data
  )
  return response
}
