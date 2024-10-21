// * Models
import {
  IInteractionPostData,
  IInteractionPutData,
  IInteractionData,
} from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/interactions"

export const fetchInteractionsByRequestId = async (requestId: number) => {
  const { data } = await api.get<IInteractionData[]>(
    `${ENDPOINT}?request=${requestId}`
  )
  return data
}

export const createInteraction = async (data: IInteractionPostData) => {
  const { data: response } = await api.post<IInteractionData>(ENDPOINT, data)
  return response
}

export const updateInteraction = async (data: IInteractionPutData) => {
  const { data: response } = await api.put<IInteractionData>(
    `${ENDPOINT}/${data.id}`,
    data
  )
  return response
}

export const deleteInteraction = async (data: { id: number }) => {
  const { data: response } = await api.delete(`${ENDPOINT}/${data.id}`)
  return response
}
