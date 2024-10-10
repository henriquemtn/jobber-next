import { LoginData } from '@/models';
import api from '@/services/api';

const ENDPOINT = '/auth';

export const apiLogin = async (data: { email: string; password: string }): Promise<LoginData> => {
  const { data: response } = await api.post(`${ENDPOINT}/token`, data);
  return response;
};

export const resetPassword = async (email: string): Promise<{ status: string }> => {
  const { data } = await api.post(`${ENDPOINT}/passwordreset`, { email });
  return data;
};

export const confirmPasswordReset = async (data: { token: string; password: string }): Promise<string> => {
  const { data: response } = await api.post(`${ENDPOINT}/passwordreset/confirm`, data);
  return response;
};