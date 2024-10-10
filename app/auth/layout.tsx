import { AuthProvider } from '@/contexts/AuthProvider';
import Providers from '@/contexts/Providers';
import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <AuthProvider>
        {children}
      </AuthProvider>
    </Providers>
  );
}
