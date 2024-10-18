// * Models
import { IPackageData, IContractData, ITimestamp } from "@/models"

export interface IContractPackageData extends ITimestamp {
  id: number
  package: IPackageData
  contracts: IContractData[]
}
