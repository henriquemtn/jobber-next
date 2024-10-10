"use client"

import { createContext } from 'react';

// * Models
import { AuthData, LoginData } from '@/models';

export type AuthContextType = {
  user: AuthData | null;
  isCustomer: boolean;
  isInternal: boolean;
  isStaff: boolean;
  isFetchingUser: boolean;
  login: (user: LoginData) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);