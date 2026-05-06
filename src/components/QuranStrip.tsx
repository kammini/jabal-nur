import { VERSE_OF_DAY } from "@/lib/data";

export default function QuranStrip() {
  return (
    <div className="bg-forest-900 rounded-xl p-4 mb-4 flex items-center justify-between gap-4">
      <div>
        <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">
          Verse of the day
        </p>
        <p className="font-amiri text-lg text-white leading-relaxed text-right" dir="rtl">
          {VERSE_OF_DAY.arabic}
        </p>
        <p className="text-xs text-white/35 mt-0.5">{VERSE_OF_DAY.ref}</p>
      </div>
      <span className="text-xs text-gold-400 flex items-center gap-1 cursor-pointer shrink-0">
        Read Quran <i className="ti ti-arrow-right text-xs" aria-hidden />
      </span>
    </div>
  );
}
