import React from "react";
import { Map, MapMarker, MarkerContent } from "@/components/ui/map";

interface RegisterCourtMapProps {
  latitude: number | null;
  longitude: number | null;
}

export default function RegisterCourtMap({ latitude, longitude }: RegisterCourtMapProps) {
  return (
    <div className="relative flex-1 min-h-[300px] lg:min-h-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
      <Map
        center={longitude && latitude ? [longitude, latitude] : [-71.543, -33.045]}
        zoom={latitude && longitude ? 15 : 6}
      >
        {latitude && longitude && (
          <MapMarker longitude={longitude} latitude={latitude}>
            <MarkerContent>
              <div className="size-5 rounded-full bg-primary border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform" />
            </MarkerContent>
          </MapMarker>
        )}
      </Map>
    </div>
  );
}
