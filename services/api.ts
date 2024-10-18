// * Hooks & Utils
import {
  clearTokensAndHeader,
  getLocalAccessToken,
  getLocalRefreshToken,
  setLocalAccessToken,
} from "@/helpers/auth"
import axios from "axios"

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

instance.interceptors.request.use(
  (config) => {
    const accessToken = getLocalAccessToken()

    if (accessToken) config.headers!.Authorization = `Bearer ${accessToken}`

    return config
  },
  async (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config
    const { status } = err.response
    const refreshTokenUrl = "/auth/token/refresh"

    if (status === 401) {
      if (originalConfig.url === refreshTokenUrl) {
        clearTokensAndHeader()
        // router.push("/auth")

        return Promise.reject(err)
      }

      if (!originalConfig._retry) {
        originalConfig._retry = true

        try {
          const refresh = getLocalRefreshToken()
          const rs = await instance.post(refreshTokenUrl, {
            refresh,
          })

          setLocalAccessToken(rs.data.access)

          return await instance(originalConfig)
        } catch (_error) {
          return await Promise.reject(_error)
        }
      }
    }

    if (status === 403 || status === 401) {
      // * Transform data response to an array
      err.response.data = Object.entries(err.response.data).map(
        ([key, value]) => ({ [key]: value })
      )
      return Promise.reject(err)
    }

    return Promise.reject(err)
  }
)

export default instance
