// * Components
import { Navigation } from "@/components/navigation/navigation";

// * Contexts
import { AuthProvider } from "@/contexts/auth";
import { ProtectedRoute } from "@/security/protectedRoute";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthProvider>
        <ProtectedRoute>
          <Navigation />
          {children}
        </ProtectedRoute>
      </AuthProvider>
    </>
  );
}
