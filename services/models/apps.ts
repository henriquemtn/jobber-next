// * Models
import {
  IRequestPaginated,
  IAppData,
  IAppPostData,
  IAppPutData,
  IAppPatchThumbnailData,
} from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/apps"

export const fetchApps = async (page = 0, pageSize = 10) => {
  const { data } = await api.get<IRequestPaginated<IAppData>>(
    `${ENDPOINT}?p=${page + 1}&page_size=${pageSize}`
  )
  return data
}

export const fetchAppById = async (id: number) => {
  const { data } = await api.get<IAppData>(`${ENDPOINT}/${id}`)
  return data
}

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "*/*",
  },
}

type AppPostKeys = keyof IAppPostData

export const createApp = async (data: IAppPostData) => {
  const formData = new FormData()

  for (const key in data) {
    if (typeof data[key as AppPostKeys] === "boolean") {
      formData.append(key, String(data[key as AppPostKeys]))
    }
    formData.append(key, data[key as AppPostKeys] as string | Blob)
  }

  const { data: response } = await api.post<IAppData>(
    `${ENDPOINT}`,
    formData,
    config
  )
  return response
}

type AppPutKeys = keyof IAppPutData

export const updateApp = async (data: IAppPutData) => {
  const formData = new FormData()

  for (const key in data) {
    if (typeof data[key as AppPutKeys] === "boolean") {
      formData.append(key, String(data[key as AppPutKeys]))
    }
    formData.append(key, data[key as AppPutKeys] as string)
  }

  const { data: response } = await api.put<IAppData>(
    `${ENDPOINT}/${data.id}`,
    formData,
    config
  )
  return response
}

export const updateAppThumbnail = async (data: IAppPatchThumbnailData) => {
  const formData = new FormData()
  formData.append("thumbnail", data.thumbnail)

  const { data: response } = await api.patch<IAppData>(
    `${ENDPOINT}/${data.id}`,
    formData,
    config
  )
  return response
}
