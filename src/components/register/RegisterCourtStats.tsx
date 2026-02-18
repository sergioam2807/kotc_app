import React from "react";

export default function RegisterCourtStats() {
  return (
    <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-primary/20">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/20 rounded-xl">
          <span className="material-symbols-outlined text-primary text-3xl">emoji_events</span>
        </div>
        <div>
          <h3 className="text-white text-lg font-black uppercase tracking-wide">Análisis de territorio</h3>
          <p className="text-white/60 text-sm mt-1">"Los Bomberos" está en una zona de alta actividad. Jugadores en Distrito 7 buscan nuevos desafíos. Registrar esta cancha alertará a más de 250 jugadores locales.</p>
        </div>
      </div>
    </div>
  );
}
