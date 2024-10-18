// * Models
import { IIdAndName, ITimestamp, ICustomerData } from "@/models"

export interface IProjectData extends IIdAndName, ITimestamp {
  customer: ICustomerData
  estimated_time: string
  is_active: boolean
  can_customer_view: boolean
  can_customer_request: boolean
}

export interface IProjectPostData {
  name: string
  customer: number
  estimated_time: string
  is_active: boolean
  can_customer_view: boolean
  can_customer_request: boolean
}

export interface IProjectPutData extends IIdAndName {
  customer: number
  estimated_time: string
  is_active: boolean
  can_customer_view: boolean
  can_customer_request: boolean
}

export interface IProjectFilterData extends IIdAndName {}
