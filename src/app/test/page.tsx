
"use client";
import { withAuthenticationRequired } from "@auth0/auth0-react";

function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-dark text-white">
      <h1 className="text-4xl font-bold">Página protegida: ¡Estás autenticado!</h1>
    </div>
  );
}

export default withAuthenticationRequired(TestPage, {
  onRedirecting: () => <div>Cargando...</div>,
});
