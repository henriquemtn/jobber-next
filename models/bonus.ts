// * Models
import { IIdAndName, ITimestamp } from "@/models"

export interface IBonusData extends ITimestamp {
  id: number
  reason: string
}

export interface IBonusPostData {
  reason: string
}

export interface IBonusPutData {
  id: number
  reason: string
}

export interface IBonusFilterData extends IIdAndName {}
