// * Hooks & Utils
import axios, { AxiosProgressEvent } from "axios"

// * Models
import { IMediaData, IMediaPatchOrderData } from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/medias"

export const fetchMediasByJobId = async (jobId: number) => {
  const { data } = await api.get<IMediaData[]>(`${ENDPOINT}?job=${jobId}`)
  return data
}

export const fetchMediasByRequestId = async (requestId: number) => {
  const { data } = await api.get<IMediaData[]>(
    `${ENDPOINT}?request=${requestId}`
  )
  return data
}

export const fetchMediasByAppId = async (appId: number) => {
  const { data } = await api.get<IMediaData[]>(`${ENDPOINT}?app=${appId}`)
  return data
}

export const fetchMediasByServiceId = async (serviceId: number) => {
  const { data } = await api.get<IMediaData[]>(
    `${ENDPOINT}?service=${serviceId}`
  )
  return data
}

export const updateMediaOrder = async (data: IMediaPatchOrderData) => {
  const { data: response } = await api.patch<IMediaData>(
    `${ENDPOINT}/${data.id}`,
    data
  )
  return response
}

const UPLOAD_ENDPOINT = "/upload/direct"

// * START
export type StartProps = {
  job?: number
  request?: number
  app?: number
  service?: number
  name: string
  fileName: string
}

export type StartResponse = {
  fields?: Record<string, string>
  id: number
  url: string
}

export const uploadStart = async ({
  job,
  request,
  app,
  service,
  name,
  fileName,
}: StartProps): Promise<StartResponse> => {
  const data = { job, request, app, service, name, file_name: fileName }
  const { data: response } = await api.post(`${UPLOAD_ENDPOINT}/start`, data)

  return response
}
// * START

// * DO
export type DoProps = {
  data: StartResponse
  file: File
  progressCallback?: (progressEvent: AxiosProgressEvent) => void
}

export type DoResponse = {
  fileId: number
}

export const uploadDo = async ({ data, file, progressCallback }: DoProps) => {
  const formData = new FormData()

  for (const key in data?.fields) {
    formData.append(key, data.fields[key])
  }

  formData.append("file", file)

  const response = await axios
    .post<DoResponse>(data.url, formData, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: (progressEvent) => {
        progressCallback && progressCallback(progressEvent)

        return progressEvent
      },
    })
    .then(async () => Promise.resolve({ fileId: data.id }))

  return response
}
// * DO

// * FINISH
export type FinishProps = {
  data: { id: number }
}

export type FinishResponse = {
  id: number
}

export const uploadFinish = async ({ data }: FinishProps) => {
  const { data: response } = await api.post<FinishResponse>(
    `${UPLOAD_ENDPOINT}/finish`,
    {
      file_id: data.id,
    }
  )
  return response
}
// * FINISH

export const deleteMedia = async (data: { id: number }) => {
  const { data: response } = await api.delete(`${ENDPOINT}/${data.id}`)
  return response
}
