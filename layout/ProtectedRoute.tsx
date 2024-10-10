"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, isFetchingUser } = useAuth();
  const router = useRouter();

  // if user is not logged, redirect to login page
  useEffect(() => {
    if (!isFetchingUser && !user) {
      router.replace('/auth');
    }
  }, [isFetchingUser, user, router]);

  if (isFetchingUser) return <p>is loading..</p>;

  return user ? children : null;
};
