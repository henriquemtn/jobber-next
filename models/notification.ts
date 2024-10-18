// * Models
import { IIdAndName } from "@/models"

export interface INotificationTypeData extends IIdAndName {
  type: string
}

export interface INotificationData {
  id: number
  user: number
  types: INotificationTypeData[]
}
