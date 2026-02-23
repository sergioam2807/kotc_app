"use client";

import React from "react";
import { useUserStore } from "@/store/userStore";

const StatsGrid = () => {
  const userData = useUserStore(state => state.userData);
  const loadingUser = useUserStore(state => state.loadingUser);
  const loading = loadingUser || !userData;

  const pointsPerGame = userData?.pointsPerGame ?? 0;
  const defensiveRating = userData?.defensiveRating ?? 0;
  const defensiveGrade = userData?.defensiveGrade ?? "-";
  const globalRanking = userData?.globalRanking ?? 0;
  const rankingChange = userData?.rankingChange ?? 0;
  const teamChemistry = userData?.teamChemistry ?? 0;

  if (loading) {
    return (
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[1,2,3,4].map(i => (
          <div key={i} className="bg-[#1e1310] border border-[#2d1d19] p-6 rounded-xl stat-card-glow transition-all text-white animate-pulse">
            <div className="h-4 w-32 bg-gray-700 rounded mb-4" />
            <div className="h-8 w-24 bg-gray-700 rounded mx-auto" />
            <div className="h-4 w-16 bg-gray-700 rounded mt-4 mx-auto" />
          </div>
        ))}
      </section>
    );
  }
  
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-[#1e1310] border border-[#2d1d19] p-6 rounded-xl stat-card-glow transition-all text-white">
        <p className="text-xs font-bold text-white uppercase tracking-widest mb-2">Puntos por partido</p>
        <div className="flex items-baseline gap-2">
          <h4 className="text-3xl font-black italic text-white">{pointsPerGame}</h4>
          <span className="text-xs font-bold text-green-500">{/* Puedes calcular el % de mejora si tienes datos previos */}</span>
        </div>
      </div>
      <div className="bg-[#1e1310] border border-[#2d1d19] p-6 rounded-xl stat-card-glow transition-all text-white">
        <p className="text-xs font-bold text-white uppercase tracking-widest mb-2">Calificación defensiva</p>
        <div className="flex items-baseline gap-2">
          <h4 className="text-3xl font-black italic text-white">{defensiveGrade}</h4>
          <span className="text-xs font-bold text-[#f45925]">{defensiveRating > 0 ? `Top ${defensiveRating}` : ""}</span>
        </div>
      </div>
      <div className="bg-[#1e1310] border border-[#2d1d19] p-6 rounded-xl stat-card-glow transition-all text-white">
        <p className="text-xs font-bold text-white uppercase tracking-widest mb-2">Ranking global</p>
        <div className="flex items-baseline gap-2">
          <h4 className="text-3xl font-black italic text-white">#{globalRanking}</h4>
          <span className="text-xs font-bold text-red-500">{rankingChange > 0 ? `+${rankingChange} pos` : rankingChange < 0 ? `${rankingChange} pos` : ""}</span>
        </div>
      </div>
      <div className="bg-[#1e1310] border border-[#2d1d19] p-6 rounded-xl stat-card-glow transition-all text-white">
        <p className="text-xs font-bold text-white uppercase tracking-widest mb-2">Química de equipo</p>
        <div className="flex items-baseline gap-2">
          <h4 className="text-3xl font-black italic text-white">{teamChemistry}%</h4>
          <span className="text-xs font-bold text-green-500">{teamChemistry === 100 ? "Máximo" : ""}</span>
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
