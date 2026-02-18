import React from "react";

export default function RegisterCourtMap() {
  return (
    <div className="relative flex-1 min-h-[400px] lg:min-h-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
      {/* Mapa simulado */}
      <div className="absolute inset-0 bg-[#1e1e1e]" data-location="Santiago, Chile">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale opacity-40 mix-blend-luminosity"></div>
        {/* Marcador */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="bg-primary text-white p-2 rounded-full shadow-2xl shadow-primary/50 animate-bounce">
            <span className="material-symbols-outlined text-3xl font-bold">sports_basketball</span>
          </div>
          <div className="bg-primary/20 size-8 rounded-full blur-sm -mt-2"></div>
          {/* Tooltip */}
          <div className="mt-4 bg-background-dark border border-primary/50 rounded-lg p-3 shadow-2xl whitespace-nowrap min-w-[200px]">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-lg bg-cover bg-center border border-white/20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAL9FYma_aY6zDsAdb-BehIPx3lr5x238RnwamOuPf-EYgUSe0ZVs_0ohCfwleovqDZGs8Xo8BJFujHjCrf8c3KU6YNNO89eBDv7YGNp5dy_kwoAGca3nLPboi3RiqBgKoxZT8oTTM-ghhMo2xQj1Zpa5zp_DuLwcOlxwatjQBQthGWWq2WMKUTZOLk_ib16bb2T3iMVNYib2sTJimi697cywwF4pOjLatI-buYDFy7pGiiODS9JtLuYQyZMWFd8u_mVP9F4JfDqUBe')" }}></div>
              <div>
                <p className="text-white text-sm font-black uppercase">Los Bomberos</p>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-primary text-xs">star</span>
                  <span className="text-white/50 text-xs">Nueva cancha</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Controles de mapa */}
      <div className="absolute bottom-6 right-6 flex flex-col gap-2">
        <button className="size-12 rounded-lg bg-background-dark/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
          <span className="material-symbols-outlined">add</span>
        </button>
        <button className="size-12 rounded-lg bg-background-dark/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
          <span className="material-symbols-outlined">remove</span>
        </button>
      </div>
      <div className="absolute top-6 left-6 flex items-center gap-2 bg-background-dark/80 backdrop-blur-md px-4 py-2 rounded-full border border-primary/30">
        <span className="material-symbols-outlined text-primary text-sm">radar</span>
        <span className="text-white text-xs font-bold uppercase tracking-widest">Confirmar ubicación</span>
      </div>
    </div>
  );
}
