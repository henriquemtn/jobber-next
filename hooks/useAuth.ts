// * React
import { useContext } from 'react';

// * Context
import { AuthContext } from '@/contexts/auth';

export const useAuth = () => {
  const context = useContext(AuthContext);

  const { user, isCustomer, isInternal, isStaff, isFetchingUser, login, logout } = context;

  return {
    user,
    isCustomer,
    isInternal,
    isStaff,
    isFetchingUser,
    login,
    logout,
  };
};
