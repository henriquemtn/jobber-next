// * Models
import {
  IUserData,
  IBonusData,
  ITimestamp,
  ICustomerData,
  IPackageData,
  IProjectData,
  IRequestData,
  IStatusData,
} from "@/models"

export interface IJobData extends ITimestamp {
  id: number
  customer: ICustomerData
  project: IProjectData | null
  package: IPackageData | null
  requester: IUserData
  responsible: IUserData
  user_created: IUserData
  status: IStatusData
  bonus: IBonusData | null
  request: IRequestData
  followers: number[]
  title: string
  briefing: string
  estimated_time: number
  package_consumption: number
  minutes_per_day: number
  qtd_days: number
  budget: boolean
  package_date: string | null
  start: string
  finish: string | null
  is_finished: boolean
  internal_term: string
  customer_term: string
}

export interface IJobPostData {
  customer: number
  project?: number
  package?: number
  requester: number
  responsible: number
  status: number
  bonus: number | null
  request: number
  followers: number[]
  title: string
  briefing: string
  estimated_time: number
  package_consumption: number
  minutes_per_day: number
  qtd_days: number
  budget: boolean
  package_date?: string | Date
  start: string
  internal_term: string
  customer_term: string
}

export interface IJobPutData {
  id: number
  customer: number
  project?: number
  package?: number
  requester: number
  responsible: number
  status: number
  bonus: number | null
  request: number
  followers: number[]
  title: string
  briefing: string
  estimated_time: number
  package_consumption: number
  minutes_per_day: number
  qtd_days: number
  budget: boolean
  package_date?: string | Date
  start: string
  internal_term: string
  customer_term: string
}

export interface IJobPatchStatusData {
  id: number
  status: number
}

export interface IJobPatchFollowersData {
  id: number
  followers: number[]
}
