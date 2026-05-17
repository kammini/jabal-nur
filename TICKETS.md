# Project Roadmap: Database & Features

Follow these tickets in order to build out your backend infrastructure and data-driven features.

---

## Phase 1: Infrastructure (The Foundation)

### [ ] Ticket 1: Environment & Dependencies
- **Task**: Install Drizzle and Postgres dependencies.
- **Action**: 
    - Run `npm install drizzle-orm postgres` and `npm install -D drizzle-kit`.
    - Create a `.env` file and add your `DATABASE_URL`.
- **Success**: Running `npm list drizzle-orm` shows the package installed.

### [ ] Ticket 2: Schema Implementation
- **Task**: Create the database table definitions.
- **Action**: Create `src/db/schema.ts` and paste the schema from `DATABASE_SETUP.md`.
- **Success**: No TypeScript errors in the schema file.

### [ ] Ticket 3: First Migration
- **Task**: Push the schema to your live database.
- **Action**: 
    - Create `drizzle.config.ts`.
    - Run `npx drizzle-kit generate` then `npx drizzle-kit push`.
- **Success**: Running `npx drizzle-kit studio` shows all tables (users, mosques, surahs, etc.) existing in the UI.

### [ ] Ticket 4: DB Connection Utility
- **Task**: Create a helper to talk to the DB from your app.
- **Action**: Create `src/db/index.ts` to initialize the `postgres` client and `drizzle` instance.
- **Success**: You can import `db` into a Server Component without errors.

---

## Phase 2: Data Seeding (The Content)

### [ ] Ticket 5: Seed Surah Metadata
- **Task**: Populate the `surahs` table with the 114 names/numbers.
- **Action**: Create a `src/db/seed.ts` script that loops through Surah data and inserts it.
- **Success**: `surahs` table in Drizzle Studio is no longer empty.

---

## Phase 3: Core Features (The App)

### [ ] Ticket 6: Persistence - Reading Progress
- **Task**: Save where a user left off in the Quran to the DB.
- **Action**: 
    - Create a Server Action to update the `reading_progress` table.
    - Connect the "Continue Reading" button to this data.
- **Success**: Refreshing the page shows the correct "Last Read" surah from the database.

### [ ] Ticket 7: Feature - Favorite Mosques
- **Task**: Allow users to "Save" a mosque.
- **Action**: 
    - Implement the `saved_mosques` join table logic.
    - Create a toggle button on the Mosque card that inserts/deletes from the DB.
- **Success**: Saved mosques appear in the "Saved" section of the sidebar.

### [ ] Ticket 8: User Settings Sync
- **Task**: Allow users to change their preferred translation/edition.
- **Action**: Update the `user_settings` table when a user picks a new edition in their profile.
- **Success**: Quran verses are fetched using the saved `preferred_edition`.
