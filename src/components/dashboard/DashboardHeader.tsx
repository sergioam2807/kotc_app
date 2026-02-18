"use client";

import React from "react";

const DashboardHeader = () => (
  <header className="h-20 border-b border-accent-dark flex items-center justify-between px-8 sticky top-0 bg-background-dark/80 backdrop-blur-md z-10">
    <div className="flex items-center flex-1 max-w-xl">
      <div className="relative w-full group">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">search</span>
        <input className="w-full bg-accent-dark border-none rounded-lg pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary transition-all placeholder:text-slate-500" placeholder="Buscar rivales, equipos o jugadores..." type="text" />
      </div>
    </div>
    <div className="flex items-center gap-4">
      <button className="relative p-2 text-slate-400 hover:text-white transition-colors bg-accent-dark rounded-lg">
        <span className="material-symbols-outlined">notifications</span>
        <span className="absolute top-2 right-2 size-2 bg-primary rounded-full border-2 border-background-dark"></span>
      </button>
      <a href="/register-court" className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg font-bold text-sm tracking-wide transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
        <span className="material-symbols-outlined text-[18px]">add_location_alt</span>
        AGREGAR CANCHA
      </a>
      <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg font-bold text-sm tracking-wide transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
        <span className="material-symbols-outlined text-[18px]">add_circle</span>
        CREAR DESAFÍO
      </button>
    </div>
  </header>
);

export default DashboardHeader;
