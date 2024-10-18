// * Models
import { IIdAndName, ITimestamp } from "@/models"

export interface IMediaData extends IIdAndName, ITimestamp {
  job: { id: number; title: string } | null
  request: { id: number; title: string } | null
  app: IIdAndName | null
  service: IIdAndName | null
  user: IIdAndName
  file: string
  order: number | null
  is_valid: boolean
}

export interface IMediaPostData {
  user: number
  job?: number
  request?: number
  app?: number
  service?: number
  name: string
  file: string
}

export interface IMediaPatchOrderData {
  id: number
  order: number | null
}
