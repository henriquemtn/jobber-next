// * Models
import { IIdAndName } from "@/models"

export interface IAuthData extends IIdAndName {
  id: number
  first_name: string
  last_name: string
  email: string
  permissions: string[]
  groups: number[]
  customer: number[]
  is_active: boolean
  is_customer: boolean
  is_internal: boolean
  is_staff: boolean
  is_superuser: boolean
}

export interface ILoginData {
  access: string
  refresh: string
}
