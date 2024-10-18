// * Models
import {
  IUserData,
  IPackageData,
  IProjectData,
  IRequestStatusData,
  ICustomerData,
  IServiceTypeData,
  IPriorityData,
  ITimestamp,
} from "@/models"

export interface IRequestData extends ITimestamp {
  id: number
  user: IUserData
  user_created: IUserData
  responsible: IUserData | null
  user_last_modified: IUserData
  followers: number[]
  package: IPackageData | null
  project: IProjectData | null
  status: IRequestStatusData
  customer: ICustomerData
  servicetype: IServiceTypeData
  priority: IPriorityData
  title: string
  description: string
  seen_internally: boolean
  customer_term: string | null
  finish: string
}

export interface IRequestPatchStatusData {
  id: number
  status: number
}

export interface IRequestPatchCustomerTermData {
  id: number
  customer_term: string | null
}

export interface IRequestPatchFollowersData {
  id: number
  followers: number[]
}

export interface IRequestPutData {
  id: number
  title: string
  description: string
  user: number
  package?: number
  project?: number
  priority: number
}

export interface IRequestPostData {
  title: string
  description: string
  user: number
  package?: number
  project?: number
  priority: number
}
