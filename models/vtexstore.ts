// * Models
import { IIdAndName, ITimestamp } from "@/models"

export interface IVTEXStoreData extends IIdAndName, ITimestamp {
  key: number[]
  token: boolean
  account_name: boolean
}
