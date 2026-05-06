"use client";

import { useState } from "react";
import { SAVED_MOSQUES } from "@/lib/data";
import type { Mosque } from "@/types";

export default function SavedMosques() {
  const [saved, setSaved] = useState<Mosque[]>(SAVED_MOSQUES);

  const remove = (id: string) =>
    setSaved((prev) => prev.filter((m) => m.id !== id));

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2.5">
        <h2 className="text-[11px] uppercase tracking-widest text-gray-400 font-medium">
          Saved mosques
        </h2>
        <span className="text-xs text-forest-600 cursor-pointer flex items-center gap-1">
          Manage <i className="ti ti-arrow-right text-[11px]" aria-hidden />
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        {saved.map((m) => (
          <div
            key={m.id}
            className="card flex items-center gap-3 px-3.5 py-2.5"
          >
            <i className="ti ti-heart text-gold-400 text-base shrink-0" aria-hidden />
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-900">{m.name}</p>
              <p className="text-xs text-gray-400">{m.address}</p>
            </div>
            <span className="ml-auto text-xs text-gray-400 shrink-0">{m.distance}</span>
            <button
              onClick={() => remove(m.id)}
              aria-label={`Remove ${m.name}`}
              className="text-gray-300 hover:text-gray-500 transition-colors cursor-pointer
                         bg-transparent border-0 p-0 ml-1"
            >
              <i className="ti ti-x text-sm" aria-hidden />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
