// * Models
import { IIdAndName, ITimestamp } from "@/models"

export interface IStatusData extends IIdAndName, ITimestamp {
  color: string
  description: string
  order: number
  can_finish: boolean
  active: boolean
}

export interface IStatusPostData {
  name: string
  color: string
  description: string
  order: number
  can_finish: boolean
  active: boolean
}

export interface IStatusPutData extends IIdAndName {
  color: string
  description: string
  order: number
  can_finish: boolean
  active: boolean
}

export interface IStatusFilterData extends IIdAndName {}
