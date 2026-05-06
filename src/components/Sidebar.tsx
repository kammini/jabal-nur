"use client";

import { useAuth } from "@/lib/auth-context";

export default function Sidebar() {
  const { user } = useAuth();

  return (
    <aside className="w-48 shrink-0 bg-white border-r border-black/[0.06] py-3">
      {/* Explore */}
      <div className="px-2.5 mb-5">
        <p className="section-label">Explore</p>
        <div className="sidebar-item-active">
          <i className="ti ti-layout-dashboard text-base" aria-hidden /> Home
        </div>
        <div className="sidebar-item">
          <i className="ti ti-map-search text-base" aria-hidden /> Find mosque
        </div>

        {/* Saved — locked for guests */}
        {user ? (
          <div className="sidebar-item">
            <i className="ti ti-heart text-base" aria-hidden /> Saved mosques
          </div>
        ) : (
          <div className="sidebar-item opacity-50 cursor-not-allowed select-none">
            <i className="ti ti-heart text-base" aria-hidden />
            Saved
            <i className="ti ti-lock text-xs ml-auto" aria-hidden />
          </div>
        )}
      </div>

      <hr className="mx-2.5 border-black/[0.06] mb-4" />

      {/* Learn */}
      <div className="px-2.5 mb-5">
        <p className="section-label">Learn</p>
        <div className="sidebar-item">
          <i className="ti ti-book-2 text-base" aria-hidden /> Quran
        </div>
        <div className="sidebar-item">
          <i className="ti ti-writing text-base" aria-hidden /> Hadith
        </div>
        <div className="sidebar-item">
          <i className="ti ti-calendar-event text-base" aria-hidden />
          Calendar
          <span className="ml-auto text-[9px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full">
            soon
          </span>
        </div>
      </div>

      <hr className="mx-2.5 border-black/[0.06] mb-4" />

      {/* Tools */}
      <div className="px-2.5">
        <p className="section-label">Tools</p>
        <div className="sidebar-item">
          <i className="ti ti-clock text-base" aria-hidden /> Prayer times
        </div>
        <div className="sidebar-item">
          <i className="ti ti-robot text-base" aria-hidden />
          Islamic AI
          <span className="ml-auto text-[9px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full">
            soon
          </span>
        </div>

        {user && (
          <div className="sidebar-item">
            <i className="ti ti-user text-base" aria-hidden /> My profile
          </div>
        )}
      </div>
    </aside>
  );
}
