"use client";

import { useAuth } from "@/lib/auth-context";

const NAV_LINKS = [
  { label: "Home",    icon: "ti-home" },
  { label: "Mosques", icon: "ti-map-pin" },
  { label: "Quran",   icon: "ti-book-2" },
  { label: "Hadith",  icon: "ti-writing" },
];

export default function Topbar() {
  const { user, login, logout } = useAuth();

  return (
    <>
      {/* Google Fonts + Tabler Icons */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
      />

      <header className="flex items-center justify-between h-14 px-5 bg-forest-900 shrink-0">
        {/* Logo */}
        <div className="flex items-center gap-2 font-amiri text-xl text-white">
          <i className="ti ti-building-mosque text-gold-400 text-xl" aria-hidden />
          Jabal-Nur
        </div>

        {/* Nav links */}
        <nav className="flex gap-0.5">
          {NAV_LINKS.map((link) => (
            <span
              key={link.label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs text-white/55
                         hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            >
              <i className={`ti ${link.icon} text-[13px]`} aria-hidden />
              {link.label}
            </span>
          ))}
        </nav>

        {/* Auth area */}
        <div className="flex items-center gap-2">
          {user ? (
            <button
              onClick={logout}
              className="w-8 h-8 rounded-full bg-gold-400 text-forest-900 text-xs font-medium
                         flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
              title="Sign out"
            >
              {user.initials}
            </button>
          ) : (
            <>
              <button onClick={login} className="btn-ghost text-xs py-1.5 px-3">
                Sign in
              </button>
              <button
                onClick={login}
                className="bg-gold-400 text-forest-900 text-xs font-medium px-3 py-1.5
                           rounded-md hover:bg-yellow-400 transition-colors cursor-pointer border-0"
              >
                Sign up free
              </button>
            </>
          )}
        </div>
      </header>
    </>
  );
}
