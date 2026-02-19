"use client";

import React from "react";

const DashboardFooter = () => (
  <footer className="mt-auto p-8 border-t border-[#2d1d19] bg-[#1e1310] flex flex-col md:flex-row items-center justify-between gap-4 text-white">
    <p className="text-xs text-white font-medium">© 2024 KING OF THE COURT. TODOS LOS DERECHOS RESERVADOS.</p>
    <div className="flex items-center gap-6">
      <a className="text-xs text-white hover:text-primary transition-colors uppercase font-bold tracking-widest" href="#">Política de privacidad</a>
      <a className="text-xs text-white hover:text-primary transition-colors uppercase font-bold tracking-widest" href="#">Términos de servicio</a>
      <a className="text-xs text-white hover:text-primary transition-colors uppercase font-bold tracking-widest" href="#">Centro de ayuda</a>
    </div>
  </footer>
);

export default DashboardFooter;
