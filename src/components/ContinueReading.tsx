"use client";

import { useAuth } from "@/lib/auth-context";

export default function ContinueReading() {
  const { user } = useAuth();
  if (!user) return null;

  return (
    <div className="mb-4">
      <h2 className="text-[11px] uppercase tracking-widest text-gray-400 font-medium mb-2.5">
        Continue reading
      </h2>
      <div className="grid grid-cols-2 gap-2">
        <div className="card p-3.5 hover:border-black/20 transition-colors cursor-pointer">
          <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center text-lg mb-2.5">
            <i className="ti ti-book-2" aria-hidden />
          </div>
          <p className="text-sm font-medium text-gray-900 mb-0.5">Al-Baqarah</p>
          <p className="text-xs text-gray-400">Last read: {user.lastSurah}</p>
        </div>
        <div className="card p-3.5 hover:border-black/20 transition-colors cursor-pointer">
          <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center text-lg mb-2.5">
            <i className="ti ti-writing" aria-hidden />
          </div>
          <p className="text-sm font-medium text-gray-900 mb-0.5">Sahih Bukhari</p>
          <p className="text-xs text-gray-400">Last read: {user.lastHadith}</p>
        </div>
      </div>
    </div>
  );
}
