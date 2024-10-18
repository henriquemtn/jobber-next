// * Models
import {
  IRequestPaginated,
  IServiceData,
  IServicePatchThumbnailData,
  IServicePostData,
  IServicePutData,
} from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/services"

export const fetchServices = async (page = 0, pageSize = 10) => {
  const { data } = await api.get<IRequestPaginated<IServiceData>>(
    `${ENDPOINT}?p=${page + 1}&page_size=${pageSize}`
  )
  return data
}

export const fetchServiceById = async (id: number) => {
  const { data } = await api.get<IServiceData>(`${ENDPOINT}/${id}`)
  return data
}

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "*/*",
  },
}

type ServicePostKeys = keyof IServicePostData

export const createService = async (data: IServicePostData) => {
  const formData = new FormData()

  for (const key in data) {
    if (typeof data[key as ServicePostKeys] === "boolean") {
      formData.append(key, String(data[key as ServicePostKeys]))
    }
    formData.append(key, data[key as ServicePostKeys] as string | Blob)
  }

  const { data: response } = await api.post<IServiceData>(
    `${ENDPOINT}`,
    formData,
    config
  )
  return response
}

type ServicePutKeys = keyof IServicePutData

export const updateService = async (data: IServicePutData) => {
  const formData = new FormData()

  for (const key in data) {
    if (typeof data[key as ServicePutKeys] === "boolean") {
      formData.append(key, String(data[key as ServicePutKeys]))
    }
    formData.append(key, data[key as ServicePutKeys] as string)
  }

  const { data: response } = await api.put<IServiceData>(
    `${ENDPOINT}/${data.id}`,
    formData,
    config
  )
  return response
}

export const updateServiceThumbnail = async (
  data: IServicePatchThumbnailData
) => {
  const formData = new FormData()
  formData.append("thumbnail", data.thumbnail)

  const { data: response } = await api.patch<IServiceData>(
    `${ENDPOINT}/${data.id}`,
    formData,
    config
  )
  return response
}
