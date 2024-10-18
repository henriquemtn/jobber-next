// * Hooks & Utils
import { ICustomSnackbar } from "@/hooks/useCustomSnackbar"

interface IShowErrorProps {
  error: { response: { data: Record<string, unknown> } }
  snackbar: ICustomSnackbar
  message: string
}

/**
 * Map errors and show them in snackbar
 * @param error
 * @param snackbar
 * @param message
 * @returns void
 */
export const showError = ({ error, snackbar, message }: IShowErrorProps) => {
  const errors = error.response.data as Record<string, unknown>
  const keys = Object.keys(errors)
  snackbar.showError(
    `${message}: ${keys.map((key) =>
      Object.values(errors[key] as Array<unknown>).map((e) => e)
    )}`
  )
}
