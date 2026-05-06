export interface User {
  name: string;
  initials: string;
  location: string;
  lastSurah: string;
  lastHadith: string;
}

export interface Mosque {
  id: string;
  name: string;
  address: string;
  distance: string;
  saved?: boolean;
}

export interface PrayerTime {
  name: string;
  time: string;
  passed: boolean;
  next: boolean;
}
