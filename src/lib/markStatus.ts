import type { PrayerTime } from "@/types";

export function markStatus(times: Pick<PrayerTime, "name" | "time">[]): PrayerTime[] {
  const now = new Date();

  const marked = times.map((p) => {
    const [h, m] = p.time.split(":").map(Number);
    const prayerTime = new Date();
    prayerTime.setHours(h, m, 0, 0);

    return {
      ...p,
      passed: prayerTime < now,
      next: false,
    } as PrayerTime;
  });

  // Find the first prayer that hasn't passed
  const nextIndex = marked.findIndex((p) => !p.passed);

  if (nextIndex !== -1) {
    marked[nextIndex].next = true;
  }

  return marked;
}