// * Models
import { IIdAndName } from "@/models"

export interface ICommentData {
  id: number
  job: { id: number; title: string }
  user: IIdAndName
  comment: string
  date_created: string
  date_updated: string
}

export interface ICommentPostData {
  job: number
  comment: string
}

export interface ICommentPutData {
  id: number
  job: number
  comment: string
}
