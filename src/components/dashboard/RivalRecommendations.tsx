"use client";

import React from "react";

const RivalRecommendations = () => (
  <section className="mb-8">
    <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl text-white font-black uppercase italic tracking-tight">Recomendaciones de Rivales</h3>
      <a className="text-xs font-bold text-[#f45925] uppercase tracking-widest hover:underline" href="#">View All</a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Rival Card 1 */}
      <div className="bg-[#1e1310] border border-[#2d1d19] rounded-xl p-5 hover:bg-[#2d1d19]/50 transition-colors group text-white">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-lg bg-cover bg-center border border-slate-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBG4DN2XMbuoSDUYcYNcoOySu86MwyS-plUE5QcGofrVQN-MXlFlUjPzyELPtl2jW9m_vmDPyYMVcuEACxJR-UgYvpMNzBbONbSz5kOPT9Xk3joMqs-KoWC5S01r1nQD6XNxRL56zK7nz3kBNTeY1D9wfLxzOhVKG1u2drzvqPfVw_fiMWn9EWzQnIRONbwq57813oXkbus8r5OEm1sbY1Du_6D3R6SHYbU_tyQfc9kJaUcFp7HFE8rcovYAewPLj8sPXFv926bZQyD')" }}></div>
            <div>
              <h5 className="font-bold text-white uppercase italic">Concrete Kings</h5>
                <p className="text-xs text-slate-500">Brooklyn • Puesto #15</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black text-slate-500 uppercase">Power</p>
            <p className="text-sm font-black text-white">97.2</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-background-dark p-2 rounded text-center">
              <p className="text-[8px] text-slate-500 uppercase font-black">PPP</p>
            <p className="text-xs font-bold text-white">82.1</p>
          </div>
          <div className="bg-background-dark p-2 rounded text-center">
              <p className="text-[8px] text-slate-500 uppercase font-black">Racha</p>
            <p className="text-xs font-bold text-white">L2</p>
          </div>
          <div className="bg-background-dark p-2 rounded text-center">
              <p className="text-[8px] text-slate-500 uppercase font-black">Estilo</p>
            <p className="text-xs font-bold text-white">Fast</p>
          </div>
        </div>
          <button className="w-full border border-[#f45925] text-[#f45925] hover:bg-[#f45925] hover:text-white transition-all py-2 rounded font-bold text-xs uppercase tracking-widest">
            Retar equipo
        </button>
      </div>
      {/* Rival Card 2 */}
      <div className="bg-[#1e1310] border border-[#2d1d19] rounded-xl p-5 hover:bg-[#2d1d19]/50 transition-colors group text-white">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-lg bg-cover bg-center border border-slate-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3Fjl74W1Epuk-znx3rJob9MQs7YMA2XEuwSMawnWVjt63lyjPFx1qHoJ5wzrO0693nS4AeE7Dk9MLZ-aK4vwrJl2fMwtmUTQSkWMtpqA5XfSqFKAMueZ5B91G5PdNCKF0qWovmsw46gWwf6-8IE18hjkzB8UIZ8c_CKMFuHwIeN4ckU12TVfNz7iusyhPHUTDN67xmKcVNH-Xne6ZKslUQvb9YMFC_anqScYrZROSIMpQFtXzbTXaYGvMWT6i7pmNqyiyVH-rCJbv')" }}></div>
            <div>
              <h5 className="font-bold text-white uppercase italic">Harlem Heat</h5>
                <p className="text-xs text-slate-500">Harlem • Puesto #8</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black text-slate-500 uppercase">Power</p>
            <p className="text-sm font-black text-white">102.4</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-background-dark p-2 rounded text-center">
              <p className="text-[8px] text-slate-500 uppercase font-black">PPP</p>
            <p className="text-xs font-bold text-white">95.6</p>
          </div>
          <div className="bg-background-dark p-2 rounded text-center">
              <p className="text-[8px] text-slate-500 uppercase font-black">Racha</p>
            <p className="text-xs font-bold text-white">W12</p>
          </div>
          <div className="bg-background-dark p-2 rounded text-center">
              <p className="text-[8px] text-slate-500 uppercase font-black">Estilo</p>
            <p className="text-xs font-bold text-white">Iso</p>
          </div>
        </div>
          <button className="w-full border border-primary text-primary hover:bg-primary hover:text-white transition-all py-2 rounded font-bold text-xs uppercase tracking-widest">
            Retar equipo
        </button>
      </div>
    </div>
    {/* Quick Actions Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
      <button className="flex flex-col items-center justify-center gap-2 p-6 bg-accent-dark/30 hover:bg-primary/10 border border-white rounded-xl transition-all group">
        <span className="material-symbols-outlined text-white text-3xl group-hover:scale-110 transition-transform">person_add</span>
          <span className="text-[10px] text-white font-bold uppercase tracking-widest text-slate-400">Reclutar</span>
      </button>
      <button className="flex flex-col items-center justify-center gap-2 p-6 bg-accent-dark/30 hover:bg-primary/10 border border-white rounded-xl transition-all group">
        <span className="material-symbols-outlined text-white text-3xl group-hover:scale-110 transition-transform">videocam</span>
          <span className="text-[10px] text-white  font-bold uppercase tracking-widest text-slate-400">Destacados</span>
      </button>
      <button className="flex flex-col items-center justify-center gap-2 p-6 bg-accent-dark/30 hover:bg-primary/10 border border-white rounded-xl transition-all group">
        <span className="material-symbols-outlined text-white text-3xl group-hover:scale-110 transition-transform">storefront</span>
          <span className="text-[10px] text-white font-bold uppercase tracking-widest text-slate-400">Tienda</span>
      </button>
      <button className="flex flex-col items-center justify-center gap-2 p-6 bg-accent-dark/30 hover:bg-primary/10 border border-white rounded-xl transition-all group">
        <span className="material-symbols-outlined text-white text-3xl group-hover:scale-110 transition-transform">stadium</span>
          <span className="text-[10px] text-white font-bold uppercase tracking-widest text-slate-400">Buscar cancha</span>
      </button>
    </div>
  </section>
);

export default RivalRecommendations;
