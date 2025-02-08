import { pgTable, text, serial } from 'drizzle-orm/pg-core';

export const words = pgTable('words', {
  id: serial('id').primaryKey(),
  word: text('word').notNull().unique(),
});
