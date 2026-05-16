"use client"

import { useEffect, useState } from "react";
import type { PrayerTime } from "@/types";
import { markStatus } from "@/lib/markStatus";

export function usePrayerTimes() {
  const [data, setData] = useState<{
    times: PrayerTime[],
    location: string,
    hijri: string;
    error: boolean
  }>({
    times: [],
    location: "",
    hijri: "",
    error: false,
  })
  
  useEffect(() => {
    const fetchData = async (lat: number, lon: number) => {
      try {
        // Fetch Prayer Times
        const prayerRes = await fetch(
          `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=2`
        )
        const prayerData = await prayerRes.json();
        const t = prayerData.data.timings;
        const h = prayerData.data.date.hijri;

        // Fetch Location Name (Reverse Geocoding)
        const geoRes = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
        )
        const geoData = await geoRes.json();
        const city = geoData.city || geoData.locality || "Unknown Location";

        const formatted = [
          { name: "Fajr", time: t.Fajr },
          { name: "Dhuhr", time: t.Dhuhr },
          { name: "Asr", time: t.Asr },
          { name: "Maghrib", time: t.Maghrib },
          { name: "Isha", time: t.Isha },
        ]

        setData({
          times: markStatus(formatted),
          location: city,
          hijri: `${h.day} ${h.month.en} ${h.year}`,
          error: false
        })
      } catch (err) {
        console.error("Failed to fetch prayer times", err);
        setData(prev => ({ ...prev, error: true }));
      }
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        fetchData(pos.coords.latitude, pos.coords.longitude)
      },
      (err) => {
        console.error("Geolocation error:", err);
        setData(prev => ({...prev, error: true}))
      }
    )
  }, [])

  return data;
}