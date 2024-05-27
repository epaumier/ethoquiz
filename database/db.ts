import { drizzle } from 'drizzle-orm/expo-sqlite';
import { openDatabaseSync } from 'expo-sqlite/next';
import { migrate } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from '../drizzle-sqlite/migrations';
import { main } from './query';

const sqlite = openDatabaseSync('sqlite.db');

const db = drizzle(sqlite);

let resolve: (value?: void | PromiseLike<void>) => void;

const isReady = new Promise<void>((res, rej) => {
  resolve = res;
  //   reject = rej;
});

migrate(db, migrations).then(async () => {
  await main(db);
  resolve();
});

export async function readDb() {
  await isReady;
  return db;
}
