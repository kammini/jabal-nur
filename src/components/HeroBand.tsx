"use client";

import { useAuth } from "@/lib/auth-context";
import { usePrayerTimes } from "@/hooks/usePrayerTimes";

export default function HeroBand() {
  const { user } = useAuth();
  const { times, location, hijri, error } = usePrayerTimes();

  // Find the next prayer
  const nextPrayer = times.find((p) => p.next);

  // Helper to format remaining time
  const getTimeRemaining = (timeStr: string) => {
    const [h, m] = timeStr.split(":").map(Number);
    const target = new Date();
    target.setHours(h, m, 0, 0);
    const diff = target.getTime() - new Date().getTime();
    
    if (diff < 0) return "";
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hours > 0 ? `${hours}h ` : ""}${mins}m`;
  };

  return (
    <div className="bg-forest-900 rounded-xl p-5 mb-4 flex items-center justify-between">
      <div>
        {user ? (
          <>
            <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">
              Today&apos;s overview
            </p>
            <p className="font-amiri text-2xl text-white leading-tight mb-0.5">
              Good afternoon,{" "}
              <span className="text-gold-400">{user.name}</span>
            </p>
            <p className="text-xs text-white/40">
              3 saved mosques · Reading {user.lastSurah}
            </p>
          </>
        ) : (
          <>
            <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">
              Welcome to Jabal-Nur
            </p>
            <p className="font-amiri text-2xl text-white leading-tight mb-0.5">
              Your{" "}
              <span className="text-gold-400">Islamic companion</span>
            </p>
            <p className="text-xs text-white/40">
              Find mosques · Read Quran · Track prayers
            </p>
          </>
        )}
      </div>

      {/* Next prayer */}
      <div className="text-right">
        {nextPrayer ? (
          <>
            <p className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">
              Next prayer
            </p>
            <p className="font-amiri text-2xl text-gold-400 leading-tight">
              {nextPrayer.name}
            </p>
            <p className="text-xs text-white/50">
              {getTimeRemaining(nextPrayer.time) ? `in ${getTimeRemaining(nextPrayer.time)} · ` : ""}{nextPrayer.time}
            </p>
            <p className="text-[10px] text-white/30 mt-1">
              {hijri} {location ? `· ${location}` : ""}
            </p>
          </>
        ) : error ? (
          <p className="text-xs text-white/30">Location required for prayer times</p>
        ) : (
          <div className="animate-pulse flex flex-col items-end gap-1">
            <div className="h-2 w-16 bg-white/10 rounded" />
            <div className="h-6 w-20 bg-white/10 rounded" />
            <div className="h-2 w-24 bg-white/10 rounded" />
          </div>
        )}
      </div>
    </div>
  );
}
