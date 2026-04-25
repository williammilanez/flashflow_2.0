import Database from "better-sqlite3";

import fs from "fs";
import path from "path";

// Garantir diretório de dados
const dataDir = path.resolve(process.cwd(), "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// Caminho do arquivo SQLite
const dbPath = path.resolve(dataDir, "flashflow.db");

// Instância singleton do banco
export const db = new Database(dbPath);

// Schema de inicialização
function initializeSchema() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS flashcards (
      id TEXT PRIMARY KEY,
      question TEXT NOT NULL,
      answer TEXT NOT NULL,
      category TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
  `);
}

// Bootstrap imediato
initializeSchema();
