// * Models
import { IIdAndName, ITimestamp } from "@/models"

export interface IServiceData extends IIdAndName, ITimestamp {
  short_name: string
  description: string
  thumbnail: string
  features: string
  badge: string
  is_active: boolean
}

export interface IServicePostData {
  name: string
  short_name: string
  description: string
  features: string
  badge: string
  is_active: boolean
  thumbnail: File
}

export interface IServicePutData {
  id: number
  name: string
  short_name: string
  description: string
  features: string
  badge: string
  is_active: boolean
}

export interface IServicePatchThumbnailData {
  id: number
  thumbnail: File
}
