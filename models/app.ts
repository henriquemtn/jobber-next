// * Models
import { IIdAndName, ITimestamp } from "@/models"

export interface IAppData extends IIdAndName, ITimestamp {
  description: string
  short_description: string
  thumbnail: string
  features: string
  badge: string
  highlight: boolean
  is_active: boolean
}

export interface IAppPostData {
  name: string
  description: string
  short_description: string
  thumbnail: File
  features: string
  badge: string
  highlight: boolean
  is_active: boolean
}

export interface IAppPutData {
  id: number
  description: string
  short_description: string
  features: string
  badge: string
  highlight: boolean
  is_active: boolean
}

export interface IAppPatchThumbnailData {
  id: number
  thumbnail: File
}
