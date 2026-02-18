"use client";

import React from "react";

const HeroSection = () => (
  <section className="grid grid-cols-1 @[800px]:grid-cols-3 gap-6 mb-8">
    <div className="@[800px]:col-span-2 bg-[#1e1310] rounded-xl p-8 border border-[#2d1d19] relative overflow-hidden group text-white">
      <div className="absolute top-0 right-0 w-64 h-full bg-primary/5 -skew-x-12 translate-x-16 group-hover:translate-x-12 transition-transform duration-700"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
        <div className="size-32 rounded-xl bg-accent-dark flex items-center justify-center border-2 border-primary overflow-hidden shadow-2xl">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBeD-xAUV-rvA_LkHftGDnZXd4JNAd8smh9A83K5Ho5A-uwqMj3q43qOhJVF__E5d_GTAoxnHVHF3gtA26l40X2CZXWc9B5dffwyqkXSo783NA_S5hx1fmPq0-FU6-tnXZEm1sseMQvoJfiUF4YDU6gBjg6f2IzvjuGRuzfNP6WZjP09Vp2OEwrK0sgYYdii7FhcaEBCGyMnIidgSBJ47vaQbGfyGwAJSVWkjKgvtMmqmORHbyoDqobhFOma3NDBMjR_KvxDbbMBpZT')" }}></div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
            <h2 className="text-4xl font-extrabold tracking-tighter uppercase italic">Ballerz United</h2>
            <span className="bg-[#f45925]/20 text-[#f45925] text-[10px] font-black px-2 py-0.5 rounded border border-[#f45925]/30 tracking-widest">ÉLITE</span>
          </div>
          <p className="text-slate-400 font-medium mb-4">Liga Urbana • División NYC • Puesto #12</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <div>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Ranking de potencia</p>
              <p className="text-2xl font-black text-white italic">98.5 <span className="text-[#f45925] text-sm material-symbols-outlined align-middle">trending_up</span></p>
            </div>
            <div className="w-px h-10 bg-accent-dark"></div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Registro de temporada</p>
              <p className="text-2xl font-black text-white italic">24 - 4</p>
            </div>
            <div className="w-px h-10 bg-accent-dark"></div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Racha de victorias</p>
              <p className="text-2xl font-black text-[#f45925] italic">W7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#1e1310] rounded-xl p-6 border border-[#2d1d19] flex flex-col justify-between text-white">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-sm uppercase tracking-widest text-slate-400">Team Analytics</h3>
        <span className="material-symbols-outlined text-[#f45925]">analytics</span>
      </div>
      <div className="flex-1 flex items-end justify-between gap-2 px-2 pb-2">
        <div className="w-full space-y-2">
          <div className="flex items-end gap-1 h-32">
            <div className="flex-1 bg-primary/20 rounded-t border-t border-primary/50" style={{ height: "80%" }}></div>
            <div className="flex-1 bg-primary/20 rounded-t border-t border-primary/50" style={{ height: "65%" }}></div>
            <div className="flex-1 bg-primary rounded-t" style={{ height: "95%" }}></div>
            <div className="flex-1 bg-primary/20 rounded-t border-t border-primary/50" style={{ height: "40%" }}></div>
            <div className="flex-1 bg-primary/20 rounded-t border-t border-primary/50" style={{ height: "75%" }}></div>
          </div>
          <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
            <span>OFF</span><span>DEF</span><span>REB</span><span>AST</span><span>STL</span>
          </div>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-4 text-center">Top 3% of teams in Offensive Efficiency</p>
    </div>
  </section>
);

export default HeroSection;
