// * Hooks & Utils
import { useAuth } from "@/hooks/useAuth"

/**
 * Handler to verify permissions of the user
 * @param arrayPermissions
 * @returns true || false
 */

const includes = (
  arr: string[],
  mainObj: {
    [k: string]: boolean
  }
) => arr.every((el) => el in mainObj)

const main = (arr: string[]) =>
  Object.fromEntries(arr.map((key) => [key, true]))

export const VerifyPermission = (arrayPermissions: string[]) => {
  const { user } = useAuth()

  if (!user) return false
  else return includes(arrayPermissions, main(user.permissions))
}