// * Models
import { INoteData, INotePostData, INotePutData } from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/notes"

export const fetchNotesByJobId = async (jobId: number) => {
  const { data } = await api.get<INoteData[]>(`${ENDPOINT}?job=${jobId}`)
  return data
}

export const createNote = async (data: INotePostData) => {
  const { data: response } = await api.post<INoteData>(ENDPOINT, data)
  return response
}

export const updateNote = async (data: INotePutData) => {
  const { data: response } = await api.put<INoteData>(
    `${ENDPOINT}/${data.id}`,
    data
  )
  return response
}

export const deleteNote = async (data: { id: number }) => {
  const { data: response } = await api.delete(`${ENDPOINT}/${data.id}`)
  return response
}
