
"use client";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function TestPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen flex items-center justify-center bg-background-dark text-white">
        <h1 className="text-4xl font-bold">Página protegida: ¡Estás autenticado!</h1>
      </div>
    </ProtectedRoute>
  );
}
