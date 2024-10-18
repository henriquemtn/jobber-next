export interface IRequestPaginated<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

export interface IIdAndName {
  id: number
  name: string
}

export interface ITimestamp {
  date_created: string
  date_updated: string
}
