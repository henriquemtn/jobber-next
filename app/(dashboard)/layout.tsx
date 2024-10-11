import { ProtectedRoute } from "@/layout/ProtectedRoute";
import { Navigation } from "./_components/navigation";
import { AuthProvider } from "@/contexts/AuthProvider";

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