import { useNearbyMosques } from "@/hooks/useNearbyMosques";

export default function NearbyMosques() {
  const { mosques, error } = useNearbyMosques();

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2.5">
        <h2 className="text-[11px] uppercase tracking-widest text-gray-400 font-medium">
          Nearby mosques
        </h2>
        <span className="text-xs text-forest-600 cursor-pointer flex items-center gap-1">
          See all <i className="ti ti-arrow-right text-[11px]" aria-hidden />
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {mosques.map((m) => (
          <div
            key={m.id}
            className="card p-3.5 flex gap-2.5 hover:border-black/20 transition-colors cursor-pointer"
          >
            <div className="w-2 h-2 rounded-full bg-forest-600 shrink-0 mt-1.5" />
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{m.tags?.name}</p>
              {/* <p className="text-xs text-gray-400 leading-snug">{m.tags?.addr:street}</p> */}
            </div>
            {/* <span className="ml-auto text-xs text-gray-400 shrink-0 mt-0.5">{m.distance}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
}
