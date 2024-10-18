// * Models
import { IIdAndName, ITimestamp } from "@/models"

export interface IRequestStatusData extends IIdAndName, ITimestamp {
  color: string
  description: string
  order: number
  can_customer_edit: boolean
}

export interface IRequestStatusFilterData extends IIdAndName {}
