// * Models
import { IUserData, ICustomerData, ITimestamp, IIdAndName } from "@/models"

export interface IWalletPackageData extends ITimestamp {
  id: number
  responsible: IUserData
  packages: IIdAndName[]
}

export interface IListWalletPackageData {
  id: number
  responsible: IUserData
  packages: Array<IIdAndName & { customer: ICustomerData }>
}
