"use client";

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

// * Hooks & Helpers
import { clearTokensAndHeader, getLocalAccessToken, setTokensAndHeader } from '@/helpers/auth';

// * Models
import { AuthData, LoginData } from '@/models';

// * Contexts
import { AuthContext } from './AuthContext';

// * Services
import api from '@/services/api';
import toast from 'react-hot-toast';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter(); // Update the type of 'router'
  const accessToken = getLocalAccessToken();


  const getUserByToken = async () => {
    const { data: userData } = await api.get<AuthData>('/users/me');

    return userData;
  };

  const [user, setUser] = useState<AuthData | null>(null);

  const logout = useCallback(() => {
    clearTokensAndHeader();
    setUser(null);
    router.push('/auth');
  }, [router]);

  const login = useCallback(
    async (data: LoginData) => {
      setTokensAndHeader(data.access, data.refresh);

      const userData = await getUserByToken();
      const { is_superuser, is_customer, is_internal } = userData;

      if (!is_superuser && !is_customer && !is_internal) {
        toast.error(
          'O usuário está sem permissão para acessar o sistema, por favor, entre em contato com algum colaborador.',
        );

        return logout();
      }

      setUser(userData);
    },
    [logout, router],
  );

  useEffect(() => {
    if (accessToken && !user) {
      getUserByToken()
        .then((userData) => setUser(userData))
        .catch(() => logout());
    }
  }, [accessToken, user, logout]);

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
  );
};