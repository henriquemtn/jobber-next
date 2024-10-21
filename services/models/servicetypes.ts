// * Hooks & Utils
import { sortBetweenName } from "@/helpers/sortBetweenName"

// * Models
import { IServiceTypeData, IServiceTypeFilterData } from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/servicetypes"

export const fetchAllServiceTypes = async () => {
  const { data } = await api.get<IServiceTypeData[]>(ENDPOINT)
  const sortedData = sortBetweenName(data)
  return sortedData
}

export const fetchServiceTypesToFilter = async () => {
  const { data } = await api.get<IServiceTypeFilterData[]>(
    "/filters/servicetypes"
  )
  const sortedData = sortBetweenName(data)
  return sortedData
}
