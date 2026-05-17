import {
  pgTable,
  uuid,
  text,
  varchar,
  integer,
  timestamp,
  primaryKey,
  real
} from "drizzle-orm/pg-core"
import { notInArray, relations } from "drizzle-orm"
import { create } from "domain"

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  location: text("location"),
  createdAt: timestamp("created_at").defaultNow().notNull()
})

export const userSettings = pgTable("user_settings", {
  userId: uuid("id").references(() => users.id).primaryKey(),
  preferredEdition: text("preferred_edition").default("en.sahih").notNull(),
  prayerMethod: text("prayer_method").default("ISNA").notNull(),
})

export const mosques = pgTable("mosques", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  address: text("address").notNull(),
  latitude: real("latitude").notNull(),
  longitude: real("longitude").notNull(),
})

export const savedMosques = pgTable("saved_mosques", {
  userId: uuid("user_id").references(() => users.id).notNull(),
  mosquesId: uuid("mosques_id").references(() => mosques.id).notNull(),
  savedAt: timestamp("saved_at").defaultNow().notNull(),
}, table => ({
  pk: primaryKey({ columns: [table.userId, table.mosquesId]})
}))

export const surahs = pgTable("surahs", {
 number: integer("number").primaryKey(),
 nameArabic: text("name_arabic").notNull(),
 nameEnglish: text("name_english").notNull(),
 revelationType: varchar("revelation_type", { length: 20 }),
 totalAyahs: integer("total_ayahs").notNull()
})

export const readingProgress = pgTable("reading_progress", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id).notNull(),
  type: text("type").notNull(),
  reference: text("reference").notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
})