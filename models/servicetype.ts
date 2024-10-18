// * Models
import { IIdAndName, ITimestamp } from "@/models"

export interface IServiceTypeData extends IIdAndName, ITimestamp {
  can_customer_request: boolean
  display_consumption: boolean
}

export interface IServiceTypePostData {
  name: string
  can_customer_request: boolean
  display_consumption: boolean
}

export interface IServiceTypePutData extends IIdAndName {
  can_customer_request: boolean
  display_consumption: boolean
}

export interface IServiceTypeFilterData extends IIdAndName {}
