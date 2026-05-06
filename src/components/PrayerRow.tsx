import type { PrayerTime } from "@/types";

interface PrayerRowProps {
  times: PrayerTime[];
  location?: string;
  hijri?: string;
  locationError?: boolean;
}

export default function PrayerRow({ times, location, hijri, locationError }: PrayerRowProps) {
  if (locationError) {
    return (
      <div className="mb-4 p-4 rounded-lg bg-forest-50 border border-forest-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-600">
            <i className="ti ti-map-pin-off text-lg" />
          </div>
          <div>
            <p className="text-sm font-semibold text-forest-900">Location services disabled</p>
            <p className="text-xs text-forest-600">Enable location to see prayer times for your area.</p>
          </div>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="text-xs font-bold text-forest-700 hover:text-forest-900 transition-colors"
        >
          TRY AGAIN
        </button>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-3 px-1">
        <div className="flex items-center gap-1.5 text-gray-600">
          <i className="ti ti-map-pin text-forest-600" aria-hidden />
          <span className="text-[13px] font-medium">{location || "Locating..."}</span>
        </div>
        <div className="text-[12px] text-gray-400 font-medium">
          {hijri}
        </div>
      </div>

      <div className="flex gap-2">
        {times.map((p) => (
          <div
            key={p.name}
            className={`flex-1 rounded-lg px-2 py-2 text-center border transition-colors
              ${p.next
                ? "border-forest-600 bg-forest-100"
                : "border-black/[0.07] bg-white"
              }`}
          >
            <p className={`text-[10px] mb-0.5 ${p.next ? "text-forest-600" : "text-gray-400"}`}>
              {p.name}
            </p>
            <p
              className={`text-[13px] font-medium
                ${p.passed ? "text-gray-300 line-through" : ""}
                ${p.next ? "text-forest-600" : ""}
                ${!p.passed && !p.next ? "text-gray-700" : ""}
              `}
            >
              {p.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
