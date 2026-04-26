import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

const dataDir = path.resolve(process.cwd(), "data");

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

const dbPath = path.resolve(dataDir, "flashflow.db");

let database: Database.Database;

function initializeSchema(db: Database.Database) {
  db.prepare(
    `
  CREATE TABLE IF NOT EXISTS flashcards (
    id TEXT PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    category TEXT NOT NULL,
    created_at TEXT NOT NULL
  )
`,
  ).run();
}

export function getDatabase(): Database.Database {
  if (!database) {
    database = new Database(dbPath);
    initializeSchema(database);
  }

  return database;
}
