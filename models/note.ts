// * Models
import { IIdAndName, ITimestamp } from "@/models"

export interface INoteData extends ITimestamp {
  id: number
  user: IIdAndName
  job: { id: number; title: string }
  minutes: number
  description: string
  start: string
  finish: string
}

export interface INotePostData {
  job: number
  description: string
  start: string | Date
  finish: string | Date
}

export interface INotePutData {
  id: number
  job: number
  description: string
  start: string | Date
  finish: string | Date
}
