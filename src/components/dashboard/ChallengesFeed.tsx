"use client";

import React from "react";

const ChallengesFeed = () => (
  <section className="space-y-6 mb-8">
    <div className="flex items-center justify-between">
      <h3 className="text-xl text-white font-black uppercase italic tracking-tight">Desafíos activos</h3>
      <span className="bg-[#f45925] px-2 py-1 rounded text-[10px] font-bold text-white">EN VIVO</span>
    </div>
    <div className="space-y-4">
      {/* Desafío pendiente */}
      <div className="bg-[#1e1310] border-l-4 border-[#f45925] rounded-r-xl p-4 shadow-lg text-white">
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined text-[#f45925] text-sm">priority_high</span>
          <p className="text-[10px] font-black text-[#f45925] uppercase tracking-widest">Invitación pendiente</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="size-10 rounded bg-slate-800 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAb__A93xxfXLxZnRUApA1XPZt6bvhirvHbuu0A_6WsGgbHj22vLu-Woa4hs9exnNc4WytyqjF34BAf-yAxSBX9zk6M_W7NqN5O9DvqO5y-kKPFSpqcK3hWfGjnsVy9RVY4W2SN3kLMsGCpD5gnFLDhfaF90455rP7fYQS-9eCBXONV_aD6kgneycXZYiW3-5fYzPxbTkL27xpi75b0bgwinCStrJQNc9DwSiV0-NnjPTXHmjqi7q8jab94BuTfIKY3TbmEM3Wu7nwd')" }}></div>
          <div className="flex-1 min-w-0">
            <h6 className="text-sm font-bold uppercase italic truncate">Dunk City Elite</h6>
            <p className="text-[10px] text-slate-500">Apuesta: 500 Cred</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-[#f45925] text-white py-1.5 rounded font-bold text-[10px] uppercase tracking-widest hover:brightness-110 transition-all">Aceptar</button>
          <button className="flex-1 border border-slate-700 text-slate-500 py-1.5 rounded font-bold text-[10px] uppercase tracking-widest hover:text-white hover:border-white transition-all">Rechazar</button>
        </div>
      </div>
      {/* Partido aceptado */}
      <div className="bg-[#2d1d19]/40 border border-[#2d1d19] rounded-xl p-4 text-white">
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined text-slate-400 text-sm">schedule</span>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Próximo partido</p>
        </div>
        <div className="flex flex-col items-center justify-center py-2 text-center">
          <div className="flex items-center gap-4 w-full justify-between mb-4">
            <div className="size-8 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfbbLr66CIWlYCGGpp1gRJAtqBojc02hRaVOEtlUoPfrZvSHTDvL-Lm1IPYEGpT2E0IeUiBtlNH-MPrnIjMgKYWBKXevoc5eWzwH8iDa8W9mYTp6z9H_P3WcRerpWV_ARLWp6JQF7_YJHHQImgAMRkgYIAJ9ixxnrsEhJBgAeGYjDKWn7lDIenEVm2WZMJEJsA0_nTFcCo5aK1he-J4jrsEZ1Hfi6Wqj6RRj4Jfhf0Un0qRNMpD1XcFmA7MYxkWmgzMJht2IN2nzO3')" }}></div>
            <p className="text-xs font-black italic">VS</p>
            <div className="size-8 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNxGqA77uUnC-bhN0Gk6eKcBoIDbUSD4Iz8ZP4NKlH74Moqp0TRRlYY5ooSxnr0Zgfs7I6r4QqPwEsWjCtEeuttVSLBCiXKBVC2fb48-OyM2M0y23ru4MTrwhd1Nf1fK5li0gZZA2b6J1NxOQy9nihK6hUb_2Edw0l0Hn0dOyuty88Vyris0sLsD19r3T4cC3yahZAwXJzuOvHX-9oZuMD9d5EyiOWjDupGckPMs-R6V1tVWATjUthFqqAjD5EGF1aBdNZ7yhAIzDr')" }}></div>
          </div>
          <h6 className="text-sm font-bold uppercase italic mb-1">Rucker Park Showdown</h6>
          <p className="text-xs text-[#f45925] font-bold">Comienza en: 02h 14m 45s</p>
        </div>
        <button className="w-full mt-4 bg-accent-dark text-slate-300 py-2 rounded font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-sm">location_on</span>
          Ver mapa de cancha
        </button>
      </div>
      {/* Resultado reciente */}
      <div className="bg-[#1e1310] border border-[#2d1d19] rounded-xl p-4 opacity-70 group hover:opacity-100 transition-opacity text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Resultado del último partido</p>
          </div>
          <span className="text-xs font-black text-green-500 italic">VICTORIA</span>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-xs font-bold text-slate-300">Vs Queens Finest</span>
          <span className="text-xs font-black">92 - 88</span>
        </div>
      </div>
    </div>
  </section>
);

export default ChallengesFeed;
