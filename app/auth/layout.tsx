import { ReactNode } from 'react';

// * Contexts
import Providers from '@/contexts/query';
import { AuthProvider } from '@/contexts/auth';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <AuthProvider>
        {children}
      </AuthProvider>
    </Providers>
  );
}
