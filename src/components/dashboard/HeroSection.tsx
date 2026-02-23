"use client";

import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserByEmail, UserData } from "@/services/userService";
import { useUserStore } from "@/store/userStore";


const HeroSection = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const userData = useUserStore(state => state.userData);
  const setUserData = useUserStore(state => state.setUserData);
  const loadingUser = useUserStore(state => state.loadingUser);
  const setLoadingUser = useUserStore(state => state.setLoadingUser);

  useEffect(() => {
    if (isAuthenticated && user && typeof user.email === "string") {
      setLoadingUser(true);
      getAccessTokenSilently()
        .then(token => getUserByEmail(user.email as string, token))
        .then(setUserData)
        .catch(() => setUserData(null))
        .finally(() => setLoadingUser(false));
    }
  }, [isAuthenticated, user, getAccessTokenSilently]);

  // Placeholder/fallbacks
  const team = userData?.ownedTeams?.[0] || userData?.playerTeams?.[0]?.team;
  const teamName = team?.name || "Tu equipo";
  const defaultLogo = "https://lh3.googleusercontent.com/aida-public/AB6AXuAlljE6Dha7uF3UShb9jcWdk_-cy-UtjW1A7t-3clSIJHLddbaBIhUeHLUIiRXCODj2hIS26KNmu8N2fAqrxQsvEzS8U72j5GeA6tt7tpAur3zY5KQPUSckkFi7_jnYOauiJqPRIFkMFg6beSoKHT1kCNRJSYJd5NGtJWt6ahZvGzX837zVQsGJ31MukFCFpzdnMh3f2L3m7t5Q0KWlE-LsvkwyiznhivLYx5WjRAGFATEGJYLlRn3s0OLmsovhEGpYk2M3WjVhpAP9";
  const teamLogo = team?.logoUrl && team.logoUrl.trim() !== "" ? team.logoUrl : defaultLogo;
  // Mostrar ranking personalizado
  let rankingInfo = "Jugador";
  if (userData) {
    if (typeof userData.personalRanking === "number" && userData.personalRanking > 0) {
      // Buscar cancha y ciudad
      let fieldName = "";
      let fieldCity = "";
      if (userData.kings && userData.kings.length > 0) {
        fieldName = userData.kings[0]?.field?.name || "";
        fieldCity = userData.kings[0]?.field?.city || "";
      }
      rankingInfo = `Ranking #${userData.personalRanking} - ${fieldName}${fieldCity ? ", " + fieldCity : ""}`;
    } else if (typeof userData.teamRanking === "number" && userData.teamRanking > 0) {
      rankingInfo = `Ranking equipo #${userData.teamRanking}`;
    }
  }
  // Buscar la cancha donde el usuario es king (primer king)
  const kingFieldName = userData?.kings && userData.kings.length > 0
    ? userData.kings[0]?.field?.name
    : null;
  // Mostrar datos reales si existen
  const powerRanking = userData?.powerRanking ?? 0.0;
  const seasonRecord = userData?.seasonRecord || "0-0";
  const winStreak = "W0";

  if (loadingUser || isLoading) {
    return (
      <section className="grid grid-cols-1 @[800px]:grid-cols-3 gap-6 mb-8">
        <div className="@[800px]:col-span-2 bg-[#1e1310] rounded-xl p-8 border border-[#2d1d19] relative overflow-hidden group text-white animate-pulse">
          <div className="absolute top-0 right-0 w-64 h-full bg-primary/5 -skew-x-12 translate-x-16 group-hover:translate-x-12 transition-transform duration-700"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="size-32 rounded-xl bg-accent-dark flex items-center justify-center border-2 border-primary overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gray-700" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
                <div className="h-8 w-48 bg-gray-700 rounded mb-2" />
                <div className="h-4 w-12 bg-[#f45925]/20 rounded" />
              </div>
              <div className="h-4 w-32 bg-gray-700 rounded mb-4 mx-auto md:mx-0" />
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                <div>
                  <div className="h-4 w-24 bg-gray-700 rounded mb-2" />
                  <div className="h-8 w-20 bg-gray-700 rounded" />
                </div>
                <div className="w-px h-10 bg-accent-dark"></div>
                <div>
                  <div className="h-4 w-24 bg-gray-700 rounded mb-2" />
                  <div className="h-8 w-20 bg-gray-700 rounded" />
                </div>
                <div className="w-px h-10 bg-accent-dark"></div>
                <div>
                  <div className="h-4 w-24 bg-gray-700 rounded mb-2" />
                  <div className="h-8 w-20 bg-gray-700 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="grid grid-cols-1 @[800px]:grid-cols-3 gap-6 mb-8">
      <div className="@[800px]:col-span-2 bg-[#1e1310] rounded-xl p-8 border border-[#2d1d19] relative overflow-hidden group text-white">
        <div className="absolute top-0 right-0 w-64 h-full bg-primary/5 -skew-x-12 translate-x-16 group-hover:translate-x-12 transition-transform duration-700"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="size-32 rounded-xl bg-accent-dark flex items-center justify-center border-2 border-primary overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${teamLogo}')` }}></div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
              <h2 className="text-4xl font-extrabold tracking-tighter uppercase italic">{teamName}</h2>
              <span className="bg-[#f45925]/20 text-[#f45925] text-[10px] font-black px-2 py-0.5 rounded border border-[#f45925]/30 tracking-widest">ÉLITE</span>
            </div>
            <p className="text-chart-1 font-medium mb-4">{rankingInfo}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <div>
                <p className="text-xs text-white uppercase font-bold tracking-widest mb-1">Ranking de potencia</p>
                <p className="text-2xl font-black text-white italic">{powerRanking} <span className="text-[#f45925] text-sm material-symbols-outlined align-middle">trending_up</span></p>
              </div>
              <div className="w-px h-10 bg-accent-dark"></div>
              <div>
                <p className="text-xs text-white uppercase font-bold tracking-widest mb-1">Registro de temporada</p>
                <p className="text-2xl font-black text-white italic">{seasonRecord}</p>
              </div>
              <div className="w-px h-10 bg-accent-dark"></div>
              <div>
                <p className="text-xs text-white uppercase font-bold tracking-widest mb-1">Racha de victorias</p>
                <p className="text-2xl font-black text-[#f45925] italic">{winStreak}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


