"use client"
import { useEffect, useState } from "react";

type Mosque = {
  id: number;
  lat: number;
  lon: number;
  center?: {
    lat: number;
    lon: number;
  };
  tags?: {
    name?: string;
  }
}

type MosqueState = {
  mosques: Mosque[];
  error: boolean;
}
export function useNearbyMosques() {
  const [data, setData] = useState<MosqueState>({
    mosques: [],
    error: false,
  })
  
  useEffect(() => {
    const fetchMosques = async (lat:number, lon:number) => {
      try {
        const query = `
          [out:json][timeout:25];
          (
            node["amenity"="place_of_worship"]["religion"="muslim"](around:5000,${lat},${lon});
            way["amenity"="place_of_worship"]["religion"="muslim"](around:5000,${lat},${lon});
            relation["amenity"="place_of_worship"]["religion"="muslim"](around:5000,${lat},${lon});
          );
          out center;
        `;

        const res = await fetch("https://overpass-api.de/api/interpreter", {
          method: "POST",
          body: query,
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Overpass API error: ${res.status} ${text.substring(0, 100)}`);
        }

        const json = await res.json();

        setData({
          mosques: json.elements || [],
          error: false
        })
      } catch (err) {
        console.error("Failed to fetch mosques", err);
        setData(prev => ({...prev, error: true}))
      }
    }


    navigator.geolocation.getCurrentPosition(
      pos => {
        fetchMosques(pos.coords.latitude, pos.coords.longitude);
      },
      () => {
        setData(prev => ({...prev, error: true}))
      }
    )
  }, [])

  return data;
}