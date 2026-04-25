import { getDatabase } from "../../../database/database";
import { Flashcard } from "../types/flashcard.types";

export class FlashcardRepository {
  private get db() {
    return getDatabase();
  }

  create(flashcard: Flashcard): void {
    const stmt = this.db.prepare(`
      INSERT INTO flashcards (id, question, answer, category, created_at)
      VALUES (?, ?, ?, ?, ?)
    `);

    stmt.run(
      flashcard.id,
      flashcard.question,
      flashcard.answer,
      flashcard.category,
      flashcard.created_at,
    );
  }

  findAll(): Flashcard[] {
    const stmt = this.db.prepare(`
      SELECT id, question, answer, category, created_at
      FROM flashcards
    `);

    return stmt.all() as Flashcard[];
  }

  findById(id: string): Flashcard | undefined {
    const stmt = this.db.prepare(`
      SELECT id, question, answer, category, created_at
      FROM flashcards
      WHERE id = ?
    `);

    return stmt.get(id) as Flashcard | undefined;
  }

  update(flashcard: Flashcard): void {
    const stmt = this.db.prepare(`
      UPDATE flashcards
      SET question = ?, answer = ?, category = ?
      WHERE id = ?
    `);

    stmt.run(
      flashcard.question,
      flashcard.answer,
      flashcard.category,
      flashcard.id,
    );
  }

  delete(id: string): void {
    const stmt = this.db.prepare(`
      DELETE FROM flashcards
      WHERE id = ?
    `);

    stmt.run(id);
  }
}
