// * Models
import { ICustomerData, IGroupData, IIdAndName, IVTEXStoreData } from "@/models"

export interface IUserData extends IIdAndName {
  first_name: string
  last_name: string
  email: string
  customer: ICustomerData[]
  vtex_stores: IVTEXStoreData[]
  groups: IGroupData[]
  is_active: boolean
  is_customer: boolean
  is_internal: boolean
  is_staff: boolean
  is_superuser: boolean
}

export interface IUserFilterData extends IIdAndName {
  is_customer: boolean
}

export interface IUserListData extends IIdAndName {
  first_name: string
  last_name: string
  email: string
  is_active: boolean
}

export interface IUserRetrieveData extends IIdAndName {
  first_name: string
  last_name: string
  email: string
  customer: ICustomerData[]
  vtex_stores: IVTEXStoreData[]
  groups: IGroupData[]
  is_active: boolean
  is_customer: boolean
  is_internal: boolean
  is_staff: boolean
  is_superuser: boolean
}

export interface IUserPostData {
  first_name: string
  last_name: string
  email: string
  is_active: boolean
  is_staff: boolean
  customer: number[]
  groups: number[]
}

export interface IUserPutData {
  id: number
  first_name: string
  last_name: string
  email: string
  is_active: boolean
  is_staff: boolean
  customer: number[]
  groups: number[]
}

export interface IUserPatchNotificationsData {
  id: number
  user: number
  types: number[]
}
