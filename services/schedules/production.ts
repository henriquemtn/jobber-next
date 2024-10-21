// * Models
import { IScheduleData } from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/schedules/production"

export const fetchProduction = async (
  start: string,
  finish: string,
  responsible: number[],
  status?: number[],
  active?: boolean
) => {
  const { data } = await api.get<IScheduleData[]>(
    `${ENDPOINT}?start=${start}&finish=${finish}${
      responsible.length > 0 ? `&responsible=${responsible.join(",")}` : ""
    }${status && status.length > 0 ? `&status=${status.join(",")}` : ""}${
      active ? `&active=${active}` : ""
    }`
  )
  return data
}
