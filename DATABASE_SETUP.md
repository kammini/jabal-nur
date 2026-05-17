# Database Implementation Guide: Jabal-Nur (Drizzle ORM)

Follow these steps to set up your database using **Drizzle ORM**. Drizzle is excellent for learning because it stays close to real SQL while providing full TypeScript safety.

---

## Step 1: Install Dependencies
Run these commands to install Drizzle, the PostgreSQL driver (Postgres.js), and the migration toolkit:

```bash
# 1. Install Drizzle and Postgres driver
npm install drizzle-orm postgres

# 2. Install Drizzle Kit (for migrations)
npm install -D drizzle-kit
```

---

## Step 2: Define your Schema
Drizzle schemas are written in pure TypeScript. Create a directory `src/db` and a file `src/db/schema.ts`:

```typescript
// src/db/schema.ts
import { 
  pgTable, 
  uuid, 
  text, 
  varchar, 
  integer, 
  boolean, 
  timestamp, 
  primaryKey,
  real
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// --- Users ---
export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  location: text("location"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// --- User Settings ---
export const userSettings = pgTable("user_settings", {
  userId: uuid("user_id").references(() => users.id).primaryKey(),
  preferredEdition: text("preferred_edition").default("en.sahih").notNull(),
  prayerMethod: text("prayer_method").default("ISNA").notNull(),
});

// --- Mosques ---
export const mosques = pgTable("mosques", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  address: text("address").notNull(),
  latitude: real("latitude").notNull(),
  longitude: real("longitude").notNull(),
});

// --- Saved Mosques (Join Table) ---
export const savedMosques = pgTable("saved_mosques", {
  userId: uuid("user_id").references(() => users.id).notNull(),
  mosqueId: uuid("mosque_id").references(() => mosques.id).notNull(),
  savedAt: timestamp("saved_at").defaultNow().notNull(),
}, (table) => ({
  pk: primaryKey({ columns: [table.userId, table.mosqueId] }),
}));

// --- Surah Metadata ---
export const surahs = pgTable("surahs", {
  number: integer("number").primaryKey(), // 1 to 114
  nameArabic: text("name_arabic").notNull(),
  nameEnglish: text("name_english").notNull(),
  revelationType: varchar("revelation_type", { length: 20 }), // "Meccan" | "Medinan"
  totalAyahs: integer("total_ayahs").notNull(),
});

// --- Reading Progress ---
export const readingProgress = pgTable("reading_progress", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id).notNull(),
  type: text("type").notNull(), // "QURAN" or "HADITH"
  reference: text("reference").notNull(), // e.g. "2:255"
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
```

---

## Step 3: Configure Drizzle Kit
Create a `drizzle.config.ts` file in your root directory:

```typescript
// drizzle.config.ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

---

## Step 4: Run Migrations
Run these commands to sync your TypeScript schema with your actual database:

```bash
# 1. Generate SQL migration files
npx drizzle-kit generate

# 2. Push changes to the database
npx drizzle-kit push
```

---

## Step 5: The "Hybrid" Learning Strategy

1.  **Local Data (DB)**: Use Drizzle to insert the 114 Surah names. This teaches you how to perform **SQL-like Inserts**.
2.  **External Data (API)**: Use `fetch()` to get verse text from `api.quran.com`. This teaches you how to handle **Asynchronous API calls**.

---

## Step 6: Helpful Commands
- `npx drizzle-kit studio`: A local GUI to explore your database (similar to Prisma Studio).
- `npx drizzle-kit up`: Synchronizes your migration metadata.
