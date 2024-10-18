// * Models
import {
  IIdAndName,
  ITimestamp,
  IContractData,
  ICustomerData,
  IServiceTypeData,
  IUserData,
} from "@/models"

export interface IPackageData extends IIdAndName, ITimestamp {
  customer: ICustomerData
  servicetype: IServiceTypeData
  responsible: IUserData | null
  contracts: IContractData[]
  is_active: boolean
  can_customer_view: boolean
}

export interface IPackagePostData {
  name: string
  is_active: boolean
  can_customer_view: boolean
  customer: number
  servicetype: number
}

export interface IPackagePutData extends IIdAndName {
  responsible: number
  is_active: boolean
  can_customer_view: boolean
  customer: number
  servicetype: number
}

export interface IPackageConsumptionData {
  consumption: number
  contract: { hours: number }
  period: string
}

export interface IPackageFilterData extends IIdAndName {}
