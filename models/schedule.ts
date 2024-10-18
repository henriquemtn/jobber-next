// * Models
import { IIdAndName, IJobData } from "@/models"

interface IScheduleDay {
  date: { day: string; weekend: boolean; event: boolean }
  jobs: IJobData[]
  minutes_per_day: number
}

export interface IScheduleData {
  user: IIdAndName
  days: IScheduleDay[]
}
