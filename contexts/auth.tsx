"use client";

import { createContext, useState, useEffect, useCallback } from "react"

// * Hooks & Utils
import {
  clearTokensAndHeader,
  getLocalAccessToken,
  setTokensAndHeader,
} from "@/helpers/auth"
import { useRouter, useSearchParams } from "next/navigation"
import toast from "react-hot-toast"

// * Models
import { IAuthData, ILoginData } from "@/models"

// * Services
import api from "@/services/api"

interface IAuthContext {
  user: IAuthData | null
  isCustomer: boolean
  isInternal: boolean
  isStaff: boolean
  isFetchingUser: boolean
  login: (user: ILoginData) => void
  logout: () => void
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  isCustomer: false,
  isInternal: false,
  isStaff: false,
  isFetchingUser: false,
  login: () => {},
  logout: () => {},
})

interface IAuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const accessToken = getLocalAccessToken()
  const from = searchParams.get("from") || "/dashboard"

  const [user, setUser] = useState<IAuthData | null>(null)

  const logout = useCallback(() => {
    clearTokensAndHeader()
    setUser(null)
    router.push("/auth/signin")
  }, [router])

  const getUserByToken = async () => {
    const { data: userData } = await api.get<IAuthData>("/users/me")
    return userData
  }

  const login = useCallback(
    async (data: ILoginData) => {
      setTokensAndHeader(data.access, data.refresh)

      const userData = await getUserByToken()
      const { is_superuser, is_customer, is_internal } = userData

      if (!is_superuser && !is_customer && !is_internal) {
        toast.error(
          "O usuário está sem permissão para acessar o sistema, por favor, entre em contato com algum colaborador."
        )

        return logout()
      }

      setUser(userData)
      toast.success("Você fez login com succeso!")

      const timer = setTimeout(() => {
        router.push(from)
        clearTimeout(timer)
      }, 1000)
    },
    [logout, toast, router, from]
  )

  useEffect(() => {
    if (accessToken && !user) {
      getUserByToken()
        .then((userData) => setUser(userData))
        .catch(() => logout())
    }
  }, [accessToken, user, logout])

  return (
    <AuthContext.Provider
      value={{
        user,
        isCustomer: Boolean(user?.is_customer),
        isInternal: Boolean(user?.is_internal),
        isStaff: Boolean(user?.is_staff),
        isFetchingUser: Boolean(accessToken) && !user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}