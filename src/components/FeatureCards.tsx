const FEATURES = [
  { icon: "ti-map-search", label: "Mosque finder", desc: "Search or use GPS",      color: "bg-forest-100 text-forest-600" },
  { icon: "ti-clock",      label: "Prayer times",  desc: "5 daily prayers",        color: "bg-amber-50 text-amber-600"   },
  { icon: "ti-book-2",     label: "Quran",         desc: "Read all 114 surahs",    color: "bg-blue-50 text-blue-700"     },
  { icon: "ti-writing",    label: "Hadith",        desc: "Browse collections",     color: "bg-purple-50 text-purple-700" },
];

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-4 gap-2 mb-4">
      {FEATURES.map((f) => (
        <div
          key={f.label}
          className="card p-3.5 hover:border-black/20 transition-colors cursor-pointer"
        >
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg mb-2.5 ${f.color}`}>
            <i className={`ti ${f.icon}`} aria-hidden />
          </div>
          <p className="text-sm font-medium text-gray-900 mb-0.5">{f.label}</p>
          <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}
