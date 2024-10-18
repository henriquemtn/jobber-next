// * Models
import { IIdAndName, ITimestamp } from "@/models"

export interface IInteractionData extends ITimestamp {
  id: number
  user: IIdAndName
  request: { id: number; title: string }
  description: string
  system: boolean
  intern: boolean
}

export interface IInteractionPostData {
  request: number
  description: string
}

export interface IInteractionPutData {
  id: number
  request: number
  description: string
}
