declare module 'helpers/auth' {
  export const clearTokensAndHeader: () => void;
  export const getLocalAccessToken: () => string | null;
  export const getLocalRefreshToken: () => string | null;
  export const setLocalAccessToken: (token: string) => void;
}
