import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  uid: text('uid').primaryKey().default(globalThis.crypto.randomUUID()),
  name: text('name'),
  phone: integer('phone'),
})

export type User = typeof users.$inferSelect
export type InsertUser = typeof users.$inferInsert