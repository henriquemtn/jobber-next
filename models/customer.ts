// * Models
import { IIdAndName, ITimestamp } from "@/models"

export interface ICustomerData extends IIdAndName, ITimestamp {}

export interface ICustomerPostData {
  name: string
}

export interface ICustomerPutData extends IIdAndName {}

export interface ICustomerFilterData extends IIdAndName {}
