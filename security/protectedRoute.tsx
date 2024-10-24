"use client";

// * Next
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// * Hooks & Utils
import { useAuth } from "@/hooks/useAuth";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isFetchingUser, isCustomer, isInternal, isStaff } = useAuth();
  const router = useRouter();

  // if user is not logged, redirect to login page
  useEffect(() => {
    if (!isFetchingUser && !user) {
      router.push("/auth/signin");
    } else if (!isFetchingUser && user) {
      console.log("Usuário autenticado, pode acessar a rota protegida");

      if (isCustomer) {
        console.log("Tipo de usuário: Cliente");
      } else if (isInternal) {
        console.log("Tipo de usuário: Interno");
      } else if (isStaff) {
        console.log("Tipo de usuário: Funcionário");
      } else {
        console.log("Tipo de usuário: Desconhecido");
      }
    }
  }, [isFetchingUser, user, router]);

  if (isFetchingUser) return null;

  return user ? children : null;
};
