import type { Mosque, PrayerTime, User } from "@/types";

export const MOCK_USER: User = {
  name: "Ahmad",
  initials: "AK",
  location: "Frankfurt, Germany",
  lastSurah: "Al-Baqarah 2:255",
  lastHadith: "Sahih Bukhari, Book 2 · Hadith 13",
};

export const PRAYER_TIMES: PrayerTime[] = [
  { name: "Fajr",    time: "04:12", passed: true,  next: false },
  { name: "Dhuhr",   time: "13:22", passed: true,  next: false },
  { name: "Asr",     time: "16:38", passed: false, next: true  },
  { name: "Maghrib", time: "20:54", passed: false, next: false },
  { name: "Isha",    time: "22:41", passed: false, next: false },
];

export const NEARBY_MOSQUES: Mosque[] = [
  { id: "1", name: "Masjid Al-Nour Frankfurt",   address: "Münchener Str. 10, Frankfurt", distance: "0.8 km" },
  { id: "2", name: "Fatih Moschee",              address: "Elbestr. 25, Frankfurt",       distance: "1.2 km" },
  { id: "3", name: "IGMG Moschee Frankfurt",     address: "Mainzer Landstr. 61",          distance: "1.9 km" },
  { id: "4", name: "Al-Nur Islamisches Zentrum", address: "Henschelstr. 11, Frankfurt",   distance: "2.4 km" },
];

export const SAVED_MOSQUES: Mosque[] = [
  { id: "1", name: "Masjid Al-Nour Frankfurt",    address: "Münchener Str. 10", distance: "0.8 km", saved: true },
  { id: "2", name: "Fatih Moschee",               address: "Elbestr. 25, Frankfurt", distance: "1.2 km", saved: true },
  { id: "5", name: "Islamisches Zentrum Frankfurt", address: "Hamburger Allee 12", distance: "3.4 km", saved: true },
];

export const VERSE_OF_DAY = {
  arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
  ref: "At-Talaq 65:3",
};

export const HIJRI_DATE = "8 Dhul-Hijjah 1446";
