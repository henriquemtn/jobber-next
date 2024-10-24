// * Contexts
import { AuthProvider } from "@/contexts/auth";
import { ProtectedRoute } from "@/security/protectedRoute";

// * Components
import { AppSidebar } from "@/components/sidebar/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthProvider>
        <ProtectedRoute>
          <SidebarProvider>
            <AppSidebar />
            {children}
          </SidebarProvider>
        </ProtectedRoute>
      </AuthProvider>
    </>
  );
}
