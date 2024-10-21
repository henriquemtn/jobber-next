// * Models
import {
  IRequestPaginated,
  IWalletPackageData,
  IListWalletPackageData,
} from "@/models"

// * Services
import api from "@/services/api"

const ENDPOINT = "/walletpackages"

export const fetchWalletPackages = async (page = 0, pageSize = 10) => {
  const { data } = await api.get<IRequestPaginated<IWalletPackageData>>(
    `${ENDPOINT}?p=${page + 1}&page_size=${pageSize}`
  )
  return data
}

export const fetchAllWalletPackages = async () => {
  const { data } = await api.get<IListWalletPackageData[]>(
    `${ENDPOINT}?paginate=false`
  )
  return data
}

export const fetchWalletPackageById = async (id: number) => {
  const { data } = await api.get<IWalletPackageData>(`${ENDPOINT}/${id}`)
  return data
}

export const fetchWalletPackageByResponsibleId = async (
  responsibleId: number
) => {
  const { data } = await api.get<IWalletPackageData[]>(
    `${ENDPOINT}?responsible=${responsibleId}&paginate=false`
  )
  return data
}

export const updateWalletPackagePackages = async (data: {
  id: number
  packages: number[]
}) => {
  const { data: response } = await api.patch<IWalletPackageData>(
    `${ENDPOINT}/${data.id}/update_wallet_package_packages`,
    data
  )
  return response
}
