"use client";

import React from "react";

const StatsGrid = () => (
  <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
    <div className="bg-[#1e1310] border border-[#2d1d19] p-6 rounded-xl stat-card-glow transition-all text-white">
        <p className="text-xs font-bold text-white uppercase tracking-widest mb-2">Puntos por partido</p>
      <div className="flex items-baseline gap-2">
        <h4 className="text-3xl font-black italic text-white">88.4</h4>
        <span className="text-xs font-bold text-green-500">+12%</span>
      </div>
    </div>
    <div className="bg-[#1e1310] border border-[#2d1d19] p-6 rounded-xl stat-card-glow transition-all text-white">
        <p className="text-xs font-bold text-white uppercase tracking-widest mb-2">Calificación defensiva</p>
      <div className="flex items-baseline gap-2">
        <h4 className="text-3xl font-black italic text-white">A-</h4>
        <span className="text-xs font-bold text-[#f45925]">Top 10</span>
      </div>
    </div>
    <div className="bg-[#1e1310] border border-[#2d1d19] p-6 rounded-xl stat-card-glow transition-all text-white">
        <p className="text-xs font-bold text-white uppercase tracking-widest mb-2">Ranking global</p>
      <div className="flex items-baseline gap-2">
        <h4 className="text-3xl font-black italic text-white">#124</h4>
        <span className="text-xs font-bold text-red-500">-5 pos</span>
      </div>
    </div>
    <div className="bg-[#1e1310] border border-[#2d1d19] p-6 rounded-xl stat-card-glow transition-all text-white">
        <p className="text-xs font-bold text-white uppercase tracking-widest mb-2">Química de equipo</p>
      <div className="flex items-baseline gap-2">
        <h4 className="text-3xl font-black italic text-white">92%</h4>
          <span className="text-xs font-bold text-green-500">Máximo</span>
      </div>
    </div>
  </section>
);

export default StatsGrid;
