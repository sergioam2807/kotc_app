"use client";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth0();
  const router = useRouter();

  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/"); // Redirect to landing if not authenticated
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading || !isAuthenticated) {
    return <div className="flex items-center justify-center h-screen text-xl font-bold">Cargando...</div>;
  }

  return <>{children}</>;
}
