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
  const [isFetchingUser, setIsFetchingUser] = useState<boolean>(false);

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
      try {
        setTokensAndHeader(data.access, data.refresh);
        setIsFetchingUser(true);  // Indica que o usuário está sendo buscado
        const userData = await getUserByToken();  // Busca os dados do usuário
        if (!userData) {
          throw new Error('Falha na autenticação');
        }
        setUser(userData);  // Atualiza o estado do usuário
        setIsFetchingUser(false);
      } catch (error) {
        toast.error('Erro ao realizar login.');
        logout();
      }
    },
    [router],
  );

  useEffect(() => {
    if (accessToken && !user) {
      getUserByToken()
        .then((userData) => {
          console.log("Usuário recuperado:", userData);
          setUser(userData); // Atualiza o estado do usuário
        })
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