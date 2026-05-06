"use client";

import { useAuth } from "@/lib/auth-context";
import { HIJRI_DATE } from "@/lib/data";

export default function HeroBand() {
  const { user } = useAuth();

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
              Welcome to MoscheFinder
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
        <p className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">
          Next prayer
        </p>
        <p className="font-amiri text-2xl text-gold-400 leading-tight">Asr</p>
        <p className="text-xs text-white/50">in 1h 42m · 16:38</p>
        {user && (
          <p className="text-[10px] text-white/30 mt-1">
            {HIJRI_DATE} · {user.location}
          </p>
        )}
      </div>
    </div>
  );
}
