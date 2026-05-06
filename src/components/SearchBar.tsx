export default function SearchBar() {
  return (
    <div className="flex gap-2 mb-4">
      <div className="flex-1 flex items-center gap-2 bg-white border border-black/[0.08]
                      rounded-lg px-3 h-10">
        <i className="ti ti-search text-gray-400 text-base" aria-hidden />
        <input
          type="text"
          placeholder="Search mosques, surahs, hadiths…"
          className="flex-1 bg-transparent text-sm text-gray-800 outline-none
                     placeholder:text-gray-400 font-sans"
        />
      </div>
      <button className="flex items-center gap-1.5 px-3 h-10 bg-forest-600 text-white
                         text-xs font-medium rounded-lg hover:bg-forest-700 transition-colors
                         whitespace-nowrap border-0 cursor-pointer">
        <i className="ti ti-current-location text-sm" aria-hidden />
        Near me
      </button>
    </div>
  );
}
