// * Models
import { ICommentData, ICommentPostData, ICommentPutData } from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/comments"

export const fetchCommentsByJobId = async (jobId: number) => {
  const { data } = await api.get<ICommentData[]>(`${ENDPOINT}?job=${jobId}`)
  return data
}

export const createComment = async (data: ICommentPostData) => {
  const { data: response } = await api.post<ICommentData>(ENDPOINT, data)
  return response
}

export const updateComment = async (data: ICommentPutData) => {
  const { data: response } = await api.put<ICommentData>(
    `${ENDPOINT}/${data.id}`,
    data
  )
  return response
}

export const deleteComment = async (data: { id: number }) => {
  const { data: response } = await api.delete(`${ENDPOINT}/${data.id}`)
  return response
}
