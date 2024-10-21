// * Models
import { IContractData } from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/contracts"

export const editContract = async (data: IContractData) => {
  const response = await api.put(`${ENDPOINT}/${data.id}`, data)
  return response.data
}

export const deleteContract = async (data: { id: number }) => {
  const { data: response } = await api.delete(`${ENDPOINT}/${data.id}`)
  return response
}
