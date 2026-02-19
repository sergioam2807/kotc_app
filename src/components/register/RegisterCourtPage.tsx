'use client';
import React, { useState } from "react";
import RegisterCourtForm from "./RegisterCourtForm";
import RegisterCourtMap from "./RegisterCourtMap";
import RegisterCourtStats from "./RegisterCourtStats"; 

export default function RegisterCourtPage() {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [mapViewport, setMapViewport] = useState<{ center: [number, number]; zoom: number }>({ center: [-71.543, -33.045], zoom: 6 });
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto p-4 md:p-8 gap-8">
      <div className="flex-1 flex flex-col gap-8 max-w-2xl">
        <RegisterCourtForm setLatitude={setLatitude} setLongitude={setLongitude} latitude={latitude} longitude={longitude} mapViewport={mapViewport} setMapViewport={setMapViewport} />
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <RegisterCourtMap latitude={latitude} longitude={longitude} mapViewport={mapViewport} />
        <RegisterCourtStats />
      </div>
    </div>
  );
}
