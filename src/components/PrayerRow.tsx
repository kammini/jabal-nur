import { PRAYER_TIMES } from "@/lib/data";

export default function PrayerRow() {
  return (
    <div className="flex gap-2 mb-4">
      {PRAYER_TIMES.map((p) => (
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
  );
}
