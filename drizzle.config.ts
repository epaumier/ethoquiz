import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  schema: './database/schema.ts',
  out: './drizzle-sqlite',
  driver: 'expo', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
} satisfies Config;
