// * Models
import { ILoginData } from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/auth"

export const apiLogin = async (data: { email: string; password: string }) => {
  const { data: response } = await api.post<ILoginData>(
    `${ENDPOINT}/token`,
    data
  )
  return response
}

export const resetPassword = async (email: string) => {
  const { data } = await api.post<{ status: string }>(
    `${ENDPOINT}/passwordreset`,
    email
  )
  return data
}

export const confirmPasswordReset = async (data: {
  token: string
  password: string
}) => {
  const { data: response } = await api.post<string>(
    `${ENDPOINT}/passwordreset/confirm`,
    data
  )
  return response
}
