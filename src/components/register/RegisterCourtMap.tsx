import React from "react";
import { Map, MapMarker, MarkerContent } from "@/components/ui/map";

interface RegisterCourtMapProps {
  latitude: number | null;
  longitude: number | null;
  mapViewport?: { center: [number, number]; zoom: number };
}

export default function RegisterCourtMap({ latitude, longitude, mapViewport }: RegisterCourtMapProps) {
  // Si hay lat/lng, priorizar el focus ahí
  const center: [number, number] = latitude !== null && longitude !== null
    ? [longitude, latitude]
    : mapViewport?.center || [-71.543, -33.045];
  const zoom: number = latitude !== null && longitude !== null
    ? 15
    : mapViewport?.zoom || 6;
  return (
    <div className="relative flex-1 min-h-[300px] lg:min-h-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
      <Map viewport={{ center, zoom }} onViewportChange={() => {}}>
        {latitude !== null && longitude !== null && (
          <MapMarker longitude={longitude} latitude={latitude}>
            <MarkerContent>
              <span className="material-symbols-outlined text-primary text-[20px] cursor-pointer flex items-center justify-center hover:scale-110 transition-transform" style={{ width: 20, height: 20, lineHeight: '20px' }}>sports_basketball</span>
            </MarkerContent>
          </MapMarker>
        )}
      </Map>
    </div>
  );
}
