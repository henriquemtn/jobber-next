// * Models
import {
  IRequestPaginated,
  IPostData,
  IPostPostData,
  IPostPutData,
  IPostPatchThumbnailData,
} from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/posts"

export const fetchPosts = async (page = 0, pageSize = 10) => {
  const { data } = await api.get<IRequestPaginated<IPostData>>(
    `${ENDPOINT}?p=${page + 1}&page_size=${pageSize}`
  )
  return data
}

export const fetchPostById = async (id: number) => {
  const { data } = await api.get<IPostData>(`${ENDPOINT}/${id}`)
  return data
}

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "*/*",
  },
}

type PostPostKeys = keyof IPostPostData

export const createPost = async (data: IPostPostData) => {
  const formData = new FormData()

  for (const key in data) {
    if (typeof data[key as PostPostKeys] === "boolean") {
      formData.append(key, String(data[key as PostPostKeys]))
    }
    formData.append(key, data[key as PostPostKeys] as string | Blob)
  }

  const { data: response } = await api.post<IPostData>(
    `${ENDPOINT}`,
    formData,
    config
  )
  return response
}

type PostPutKeys = keyof IPostPutData

export const updatePost = async (data: IPostPutData) => {
  const formData = new FormData()

  for (const key in data) {
    if (typeof data[key as PostPutKeys] === "boolean") {
      formData.append(key, String(data[key as PostPutKeys]))
    }
    formData.append(key, data[key as PostPutKeys] as string)
  }

  const { data: response } = await api.put<IPostData>(
    `${ENDPOINT}/${data.id}`,
    formData,
    config
  )
  return response
}

export const updatePostThumbnail = async (data: IPostPatchThumbnailData) => {
  const formData = new FormData()
  formData.append("thumbnail", data.thumbnail)

  const { data: response } = await api.patch<IPostData>(
    `${ENDPOINT}/${data.id}`,
    formData,
    config
  )
  return response
}
