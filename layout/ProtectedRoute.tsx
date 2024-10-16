"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isFetchingUser } = useAuth();
  const router = useRouter();

  // if user is not logged, redirect to login page
  useEffect(() => {
    if (!isFetchingUser && !user) {
      router.push('/auth');
    } else if (!isFetchingUser && user) {
      console.log('Usuário autenticado, pode acessar a rota protegida');
    }
  }, [isFetchingUser, user, router]);
  

  if (isFetchingUser) return null;

  return user ? children : null;
};