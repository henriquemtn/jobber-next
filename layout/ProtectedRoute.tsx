"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isFetchingUser } = useAuth();
  const router = useRouter();

  console.log(isFetchingUser)
  console.log(user)

  // if user is not logged, redirect to login page
  useEffect(() => {
    console.log('isFetchingUser:', isFetchingUser);
    console.log('user:', user);
  
    if (!isFetchingUser && !user) {
      console.log('Redirecionando para /auth');
      router.push('/auth');
    } else if (!isFetchingUser && user) {
      console.log('Usuário autenticado, pode acessar a rota protegida');
    }
  }, [isFetchingUser, user, router]);
  

  if (isFetchingUser) return <p>is loading..</p>;

  return user ? children : null;
};