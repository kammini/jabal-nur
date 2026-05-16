"use client";

import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";
import HeroBand from "@/components/HeroBand";
import PrayerRow from "@/components/PrayerRow";
import SearchBar from "@/components/SearchBar";
import FeatureCards from "@/components/FeatureCards";
import NearbyMosques from "@/components/NearbyMosques";
import QuranStrip from "@/components/QuranStrip";
import SavedMosques from "@/components/SavedMosques";
import ContinueReading from "@/components/ContinueReading";
import LockedSection from "@/components/LockedSection";
import { useAuth } from "@/lib/auth-context";
import { usePrayerTimes } from "@/hooks/usePrayerTimes";

export default function HomePage() {
  const { user } = useAuth();
  const prayerData = usePrayerTimes();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Topbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-5 overflow-auto">
          <HeroBand />
          {(prayerData.times.length === 0 && !prayerData.error) && <div className="animate-pulse h-24 bg-gray-100 rounded-lg mb-4"/> ||
            <PrayerRow 
            times={prayerData.times}
            location={prayerData.location} 
            hijri={prayerData.hijri} 
            locationError={prayerData.error} 
            />
          }
          <SearchBar />
          <ContinueReading />
          <FeatureCards />
          <NearbyMosques />
          <QuranStrip />

          {user ? (
            <SavedMosques />
          ) : (
            <>
              <LockedSection
                icon="ti-heart"
                title="Save your favourite mosques"
                description="Create a free account to bookmark mosques, sync across devices and get directions fast."
              />
              <LockedSection
                icon="ti-book"
                title="Pick up where you left off"
                description="Sign in to save your Quran and Hadith reading progress automatically."
              />
            </>
          )}
        </main>
      </div>
    </div>
  );
}
