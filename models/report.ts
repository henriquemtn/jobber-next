// * Models
import { IIdAndName, ITimestamp } from "@/models"

export interface IReportGenerateData {
  check_status: string
}

export enum IReportStatus {
  PENDING = "PENDING",
  STARTED = "STARTED",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export interface ICheckReportStatusData {
  state: IReportStatus
  link: string
  email: boolean
}

export interface ICustomerResultData {
  id: number
  status: IIdAndName & { color: string }
  customer_term: string
  title: string
  package_consumption: number
}

export interface ICustomerReportListData {
  customer: IIdAndName
  package: IIdAndName & {
    servicetype: { id: number; display_consumption: true }
  }
  results: ICustomerResultData[]
}

export interface IJobReportData {
  id: number
  title: string
  customer: IIdAndName
  project: IIdAndName | null
  package:
    | (IIdAndName & { servicetype: { id: number; display_consumption: true } })
    | null
  budget: true
  status: IIdAndName & { color: string }
  consumption: number
  requester: IIdAndName
  responsible: IIdAndName
  bonus: { id: number; reason: string }
  request: number
  start: string
  finish: string | null
  internal_term: string
  customer_term: string
  package_date: string
  estimated_time: number
  minutes_per_day: number
  qtd_days: number
  orcamentos_mensais: [
    { year: number; month: string; days: number; budget: number }
  ]
}

export interface INoteReportData extends ITimestamp {
  id: number
  job: {
    id: number
    title: string
    budget: true
    customer: IIdAndName
    package:
      | (IIdAndName & {
          servicetype: { id: number; display_consumption: true }
        })
      | null
    request: { id: number; title: string }
    estimated_time: number
    bonus: { id: number; reason: string }
    project: IIdAndName | null
  }
  user: IIdAndName
  minutes: number
  description: string
  start: string
  finish: string
}

export interface IPackageReportData extends IIdAndName {
  customer: IIdAndName
  hours: number
  consumption: number
  exceeded: number | null
}
