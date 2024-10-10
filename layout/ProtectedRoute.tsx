"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, isFetchingUser } = useAuth();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false)

  // if user is not logged, redirect to login page
  useEffect(() => {
    if (!isFetchingUser && !user) {
      router.replace('/auth');
    }
    setIsMounted(true);
  }, [isFetchingUser, user, router]);

  if (!isMounted) return null;
  if (isFetchingUser) return <p>is loading..</p>;


  return user ? children : null;

};