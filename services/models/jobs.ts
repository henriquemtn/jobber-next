// * Models
import {
  IRequestPaginated,
  IJobData,
  IJobPatchFollowersData,
  IJobPatchStatusData,
  IJobPostData,
  IJobPutData,
} from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/jobs"

type TFetchJobFilters = {
  responsible?: string
  has_open_note?: string
  customer?: string
  project?: string
  package?: string
  status?: string
  user?: string
  ids?: string
  year?: string
  month?: string
}

export const fetchJobs = async (
  page = 0,
  pageSize = 10,
  filters?: TFetchJobFilters
) => {
  const params = filters ? `&${String(new URLSearchParams(filters))}` : ""
  const { data } = await api.get<IRequestPaginated<IJobData>>(
    `${ENDPOINT}?p=${page + 1}&page_size=${pageSize}${params}`
  )
  return data
}

export const fetchJobById = async (id: number) => {
  const { data } = await api.get<IJobData>(`${ENDPOINT}/${id}`)
  return data
}

export const importJob = async (data: { file: File }) => {
  const formData = new FormData()
  formData.append("file", data.file)

  const { data: response } = await api.post<IJobData[]>(
    `${ENDPOINT}/import`,
    formData
  )
  return response
}

type TGenerateJobImportData = {
  customer: number
  project: number | null
  package: number | null
  requester: number
  responsible: number
  status: number
  bonus: number | null
  request: number
  package_consumption: string | null
  estimated_time: string
  budget: boolean
  package_date: string | null
}

export const generateJobImportExample = async (
  data: TGenerateJobImportData
) => {
  api.interceptors.response.use(
    (response) => {
      return response
    },
    async (error: {
      request: { responseType: string }
      response: { data: Blob }
    }) => {
      const { request, response } = error

      if (
        request.responseType === "blob" &&
        response.data instanceof Blob &&
        response.data.type &&
        response.data.type.toLowerCase().includes("json")
      ) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = () => {
            response.data = JSON.parse(reader.result as string)
            resolve(Promise.reject(error))
          }
          reader.onerror = () => reject(error)
          reader.readAsText(response.data)
        })
      }
      return Promise.reject(error)
    }
  )

  const { data: response } = await api.post<Blob | string[]>(
    `${ENDPOINT}/generate_import_example`,
    data,
    {
      responseType: "blob",
    }
  )
  return response
}

export const createJob = async (data: IJobPostData) => {
  const { data: response } = await api.post<IJobData>(ENDPOINT, data)
  return response
}

export const updateJob = async (data: IJobPutData) => {
  const { data: response } = await api.put<IJobData>(
    `${ENDPOINT}/${data.id}`,
    data
  )
  return response
}

export const updateJobStatus = async (data: IJobPatchStatusData) => {
  const { data: response } = await api.patch<IJobData>(
    `${ENDPOINT}/${data.id}`,
    data
  )
  return response
}

export const updateJobFollowers = async (data: IJobPatchFollowersData) => {
  const { data: response } = await api.patch<IJobData>(
    `${ENDPOINT}/${data.id}`,
    data
  )
  return response
}

export const fetchJobsByRequestId = async (requestId: number) => {
  const { data } = await api.get<IJobData[]>(`/requests/${requestId}/jobs`)
  return data
}
