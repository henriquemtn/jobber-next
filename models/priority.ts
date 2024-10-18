// * Models
import { IIdAndName, ITimestamp } from "@/models"

export interface IPriorityData extends IIdAndName, ITimestamp {
  order: number
}

export interface IPriorityFilterData extends IIdAndName {}
