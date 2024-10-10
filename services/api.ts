import axios from 'axios';
import { clearTokensAndHeader, getLocalAccessToken, getLocalRefreshToken, setLocalAccessToken } from '@/helpers/auth';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_API,
  headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = getLocalAccessToken();

    if (accessToken) config.headers!.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  async (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    const { status } = err.response;
    const refreshTokenUrl = '/auth/token/refresh';
    const loginUrl = '/auth/token';

    if (status === 401) {
      if (originalConfig.url === refreshTokenUrl) {
        clearTokensAndHeader();

        return Promise.reject(err);
      }

      if (!originalConfig._retry && originalConfig.url !== loginUrl) {
        originalConfig._retry = true;

        try {
          const refresh = getLocalRefreshToken();
          const rs = await instance.post(refreshTokenUrl, {
            refresh,
          });

          setLocalAccessToken(rs.data.access);

          return await instance(originalConfig);
        } catch (_error) {
          return await Promise.reject(_error);
        }
      }
    }

    if (status === 403 || status === 401) {
      // * Transform data response to an array
      err.response.data = Object.entries(err.response.data).map(([key, value]) => ({ [key]: value }));
      return Promise.reject(err);
    }

    return Promise.reject(err);
  },
);

export default instance;
