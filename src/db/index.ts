import { drizzle } from 'drizzle-orm/d1';
import { users } from './schemas/user';

export const table = {
  users
}

export const getD1 = (connectionString: D1Database) => drizzle(connectionString, { schema: table })