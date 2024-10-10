import api from '@/services/api';

enum LocalStorageKeys { 
  ACCESS_TOKEN = '@App:token:access',
  REFRESH_TOKEN = '@App:token:refresh',
}

// * Local Storage
export const getLocalAccessToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN);
  }
  return null;
};

export const getLocalRefreshToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(LocalStorageKeys.REFRESH_TOKEN);
  }
  return null;
};

export const setLocalAccessToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LocalStorageKeys.ACCESS_TOKEN, token);
  }
};

export const setLocalRefreshToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LocalStorageKeys.REFRESH_TOKEN, token);
  }
};

export const setHeader = (token: string) => {
  api.defaults.headers.Authorization = `Bearer ${token}`;
};

export const setTokensAndHeader = (accessToken: string, refreshToken: string) => {
  setLocalAccessToken(accessToken);
  setLocalRefreshToken(refreshToken);
  setHeader(accessToken);
};

export const removeLocalAccessToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(LocalStorageKeys.ACCESS_TOKEN);
  }
};

export const removeLocalRefreshToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(LocalStorageKeys.REFRESH_TOKEN);
  }
};

export const clearTokensAndHeader = () => {
  removeLocalAccessToken();
  removeLocalRefreshToken();
  delete api.defaults.headers.Authorization;
};

