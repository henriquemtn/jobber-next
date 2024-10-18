// * Models
import { ITimestamp } from "@/models"

export interface IFAQData extends ITimestamp {
  id: number
  question: string
  answer: string
  is_active: boolean
}

export interface IFAQPostData {
  name: string
  question: string
  answer: string
  is_active: boolean
}

export interface IFAQPutData {
  id: number
  name: string
  question: string
  answer: string
  is_active: boolean
}
