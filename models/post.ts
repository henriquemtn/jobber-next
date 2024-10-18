// * Models
import { ITimestamp } from "@/models"

export interface IPostData extends ITimestamp {
  id: number
  title: string
  description: string
  short_description: string
  thumbnail: string
  link: string
  author: string
  highlight: boolean
  date_published: string
}

export interface IPostPostData {
  title: string
  description: string
  short_description: string
  link: string
  author: string
  highlight: boolean
  date_published: string
  thumbnail: File
}

export interface IPostPutData {
  id: number
  title: string
  description: string
  short_description: string
  link: string
  author: string
  highlight: boolean
  date_published: string
}

export interface IPostPatchThumbnailData {
  id: number
  thumbnail: File
}
