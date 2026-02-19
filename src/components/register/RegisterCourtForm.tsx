'use client'
import React, { useEffect, useState, useRef } from "react";

import { Map, MapMarker, MarkerContent } from "@/components/ui/map";
import { getRegions } from "@/services/courtService";

interface GooglePlace {
  description: string;
  place_id: string;
}

declare global {
  interface Window {
    google?: any;
  }
}

interface Comuna {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

interface Region {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  comunas: Comuna[];
}
interface RegisterCourtFormProps {
  latitude: number | null;
  longitude: number | null;
  setLatitude: (lat: number) => void;
  setLongitude: (lng: number) => void;
  mapViewport: { center: [number, number]; zoom: number };
  setMapViewport: (viewport: { center: [number, number]; zoom: number }) => void;
}

export default function RegisterCourtForm({ latitude, longitude, setLatitude, setLongitude, mapViewport, setMapViewport }: RegisterCourtFormProps) {

  const [regions, setRegions] = useState<Region[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<number | "">("");
  const [selectedComuna, setSelectedComuna] = useState("");
  const [address, setAddress] = useState("");
  const [addressResults, setAddressResults] = useState<GooglePlace[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const autocompleteService = useRef<any>(null);
  const geocoder = useRef<any>(null);

  useEffect(() => {
    getRegions()
      .then(data => setRegions(data))
      .catch(() => setRegions([]));
  }, []);


  // Cargar Google Maps Places API script
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Evitar cargar el script varias veces
      if (!window.google || !window.google.maps || !window.google.maps.places) {
        if (!document.getElementById("google-maps-script")) {
          const script = document.createElement("script");
          script.id = "google-maps-script";
          script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCCJS-nHMGWfbF-8r9yl4tdEODgNQOqiC0&libraries=places&language=es`;
          script.async = true;
          script.onload = () => {
            autocompleteService.current = new window.google.maps.places.AutocompleteService();
            geocoder.current = new window.google.maps.Geocoder();
          };
          document.body.appendChild(script);
        }
      } else {
        autocompleteService.current = new window.google.maps.places.AutocompleteService();
        geocoder.current = new window.google.maps.Geocoder();
      }
    }
  }, []);

  // Buscar sugerencias de direcciones con Google Places
  useEffect(() => {
    if (!autocompleteService.current || address.length < 3) {
      setAddressResults([]);
      setShowDropdown(false);
      return;
    }
    autocompleteService.current.getPlacePredictions({ input: address, componentRestrictions: { country: "cl" }, language: "es" }, (predictions: any[] | null) => {
      if (predictions && predictions.length > 0) {
        setAddressResults(predictions.map(p => ({ description: p.description, place_id: p.place_id })));
        setShowDropdown(true);
      } else {
        setAddressResults([]);
        setShowDropdown(false);
      }
    });
  }, [address]);

  return (
    <div>
      <div>
        <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] uppercase">Registrar nueva cancha</h1>
        <p className="text-white text-lg mt-2">Reclama tu territorio. Agrega un nuevo campo de batalla al mapa global.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 bg-white/5 p-6 md:p-8 rounded-xl border border-white/10 backdrop-blur-sm mt-8">
        {/* Nombre de la cancha */}
        <div className="flex flex-col gap-2">
          <label className="text-white text-sm font-bold uppercase tracking-wider">Nombre de la cancha</label>
          <input className="w-full rounded-lg bg-background-dark/50 border-white/20 text-white focus:border-primary focus:ring-primary h-14 px-4 text-lg font-medium transition-all" placeholder="Nombre de la cancha..." type="text" defaultValue="Los Bomberos" />
        </div>
        {/* Región */}
        <div className="flex flex-col gap-2">
          <label className="text-white text-sm font-bold uppercase tracking-wider">Región</label>
          <div className="relative">
            <select
              className="w-full appearance-none rounded-lg bg-background-dark/50 border-white/20 text-white focus:border-primary focus:ring-primary h-14 px-4 text-lg font-medium transition-all"
              value={selectedRegion}
              onChange={e => {
                const value = e.target.value === "" ? "" : Number(e.target.value);
                setSelectedRegion(value);
                setSelectedComuna("");
                // Buscar coordenadas de la región seleccionada
                if (value !== "") {
                  const region = regions.find(r => r.id === value);
                  if (region && typeof region.latitude === 'number' && typeof region.longitude === 'number') {
                    setMapViewport({ center: [region.longitude, region.latitude], zoom: 8 });
                  }
                } else {
                  setMapViewport({ center: [-71.543, -33.045], zoom: 6 });
                }
              }}
            >
              <option value="" className="text-black">Selecciona una región...</option>
              {regions.map(region => (
                <option className="text-black" key={region.id} value={region.id}>{region.name}</option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-4 top-4 pointer-events-none text-white/40">expand_more</span>
          </div>
        </div>
        {/* Comuna */}
        <div className="flex flex-col gap-2">
          <label className="text-white text-sm font-bold uppercase tracking-wider">Comuna</label>
          <div className="relative">
            <select
              className="w-full appearance-none rounded-lg bg-background-dark/50 border-white/20 text-white focus:border-primary focus:ring-primary h-14 px-4 text-lg font-medium transition-all"
              value={selectedComuna}
              onChange={e => {
                setSelectedComuna(e.target.value);
                // Buscar coordenadas de la comuna seleccionada
                if (selectedRegion && e.target.value) {
                  const region = regions.find(r => r.id === selectedRegion);
                  const comuna = region?.comunas.find(c => c.id === Number(e.target.value));
                  if (comuna && typeof comuna.latitude === 'number' && typeof comuna.longitude === 'number') {
                    setMapViewport({ center: [comuna.longitude, comuna.latitude], zoom: 12 });
                  }
                }
              }}
              disabled={!selectedRegion}
            >
              <option value="" className="text-black">Selecciona una comuna...</option>
              {selectedRegion &&
                regions.find(r => r.id === selectedRegion)?.comunas.map(comuna => (
                  <option className="text-black" key={comuna.id} value={comuna.id}>{comuna.name}</option>
                ))}
            </select>
            <span className="material-symbols-outlined absolute right-4 top-4 pointer-events-none text-white/40">expand_more</span>
          </div>
        </div>
        {/* Dirección/Ubicación y Mapa */}
        <div className="flex flex-col gap-2">
          <label className="text-white text-sm font-bold uppercase tracking-wider">Dirección/Ubicación</label>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <input
                className="w-full rounded-lg bg-background-dark/50 border-white/20 text-white focus:border-primary focus:ring-primary h-14 pl-12 pr-4 text-lg font-medium transition-all"
                placeholder="Buscar dirección para autocompletar..."
                type="text"
                value={address}
                onChange={e => {
                  setAddress(e.target.value);
                  setShowDropdown(true);
                }}
                autoComplete="off"
                onFocus={() => addressResults.length > 0 && setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              />
              <span className="material-symbols-outlined absolute left-4 top-4 text-white">location_on</span>
              {showDropdown && addressResults.length > 0 && (
                <ul className="absolute z-20 left-0 right-0 mt-1 bg-background border border-white/20 rounded-lg shadow-lg max-h-60 overflow-auto">
                  {addressResults.map((result, idx) => (
                    <li
                      key={idx}
                      className="px-4 py-2 cursor-pointer hover:bg-primary/20 text-white text-sm"
                      onMouseDown={() => {
                        setAddress(result.description);
                        setShowDropdown(false);
                        // Geocodificar el place_id seleccionado
                        if (geocoder.current) {
                          geocoder.current.geocode({ placeId: result.place_id }, (results: any[], status: string) => {
                            if (status === "OK" && results && results[0]) {
                              const location = results[0].geometry.location;
                              setLatitude(location.lat());
                              setLongitude(location.lng());
                              setMapViewport({ center: [location.lng(), location.lat()], zoom: 16 });
                            }
                          });
                        }
                      }}
                    >
                      {result.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              className="bg-white/10 hover:bg-white/20 text-white px-4 rounded-lg flex items-center justify-center transition-all border border-white/10"
              title="Detectar ubicación actual"
              type="button"
              onClick={() => {
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(pos => {
                    setLatitude(pos.coords.latitude);
                    setLongitude(pos.coords.longitude);
                  });
                }
              }}
            >
              <span className="material-symbols-outlined">my_location</span>
            </button>
          </div>
          {/* El mapa ahora está a la derecha, no aquí */}
        </div>
        {/* Foto de la cancha */}
        <div className="flex flex-col gap-2">
          <label className="text-white text-sm font-bold uppercase tracking-wider">Foto de la cancha</label>
          <div className="relative h-48 w-full rounded-xl overflow-hidden border-2 border-dashed border-white/20 group hover:border-primary transition-all">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDHFgI0LvCSemqepneZudHtxkTqsXMMSt3juvsuFGfO6ElFCb9NT_sap_nKrzVG2voqpujLNNo2eHvxVR41t9x3WCNU4c6Z1vGQjMKTsoOWSwP8Sq77bs-5uQ3p-trLr5xCqZKa2iVBdtIq3bsoyDMz7T3CAcxEap3E0YTSEM_RxTu9tWbrrmBLukVrieh6vfOXDb4n1DccqfI9E7ggdOxYelqXikD-FeEmZ3H6jq6AZKmEOSvOQQ5ShH44rYBpWEh6MvLb52KnevhL')" }}></div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex flex-col items-center justify-center gap-2 transition-all">
              <span className="material-symbols-outlined text-4xl text-white">photo_camera</span>
              <span className="text-sm font-bold text-white uppercase tracking-widest">Cambiar foto</span>
            </div>
          </div>
        </div>
        {/* Tipo de acceso */}
        <div className="flex flex-col gap-4 py-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-white text-lg font-bold">Tipo de acceso</span>
              <span className="text-white text-sm italic">¿Es una cancha pública o privada?</span>
            </div>
            <div className="flex p-1 bg-background-dark rounded-xl border border-white/10">
              <button className="px-6 py-2 rounded-lg text-sm font-bold uppercase transition-all bg-transparent text-white hover:text-white">Gratis</button>
              <button className="px-6 py-2 rounded-lg text-sm font-bold uppercase transition-all bg-primary text-white shadow-lg shadow-primary/20">Pagada</button>
            </div>
          </div>
          {/* Precio por hora */}
          <div className="flex flex-col gap-2 transition-all">
            <label className="text-white text-sm font-bold uppercase tracking-wider">Precio por hora ($)</label>
            <div className="relative">
              <input className="w-full rounded-lg bg-background-dark/50 border-white/20 text-white focus:border-primary focus:ring-primary h-14 pl-12 pr-4 text-lg font-medium transition-all" placeholder="0.00" type="number" defaultValue="15.00" />
              <span className="material-symbols-outlined absolute left-4 top-4 text-white">payments</span>
            </div>
          </div>
        </div>
        {/* Botón de registro */}
        <button className="w-full h-16 bg-primary hover:bg-primary/90 text-white text-xl font-black uppercase tracking-widest rounded-xl transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 active:scale-95">
          <span className="material-symbols-outlined font-bold">add_circle</span>
          Registrar cancha
        </button>
      </div>
    </div>
  );
}
