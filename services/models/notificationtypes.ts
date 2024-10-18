// * Models
import { INotificationTypeData } from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/notificationtypes"

export const fetchAllNotificationTypes = async () => {
  const { data } = await api.get<INotificationTypeData[]>(`${ENDPOINT}`)
  return data
}
