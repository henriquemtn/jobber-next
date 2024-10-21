// * Models
import { IIdAndName } from "@/models"

export interface IGroupData extends IIdAndName {
  permissions: string[]
}
