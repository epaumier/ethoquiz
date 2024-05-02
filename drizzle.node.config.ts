import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  schema: './database/schema.ts',
  out: './drizzle-sqlite-node',
  driver: 'better-sqlite', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
} satisfies Config;
