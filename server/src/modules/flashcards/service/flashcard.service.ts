import { randomUUID } from "crypto";
import { AppError } from "../../../shared/errors/app-error";
import { ERROR_CODES, ErrorCode } from "../../../shared/errors/error-codes";
import { FlashcardRepository } from "../repository/flashcard.repository";
import {
  createFlashcardSchema,
  updateFlashcardSchema,
} from "../schemas/flashcard.schema";
import { Flashcard } from "../types/flashcard.types";

export class FlashcardService {
  private repository = new FlashcardRepository();

  createFlashcard(data: unknown): Flashcard {
    const parsed = createFlashcardSchema.safeParse(data);

    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      throw new AppError(issue.message as ErrorCode, 400);
    }

    const { question, answer, category } = parsed.data;

    const flashcard: Flashcard = {
      id: randomUUID(),
      question,
      answer,
      category,
      created_at: new Date().toISOString(),
    };

    this.repository.create(flashcard);

    return flashcard;
  }

  listFlashcards(): Flashcard[] {
    return this.repository.findAll();
  }

  updateFlashcard(data: any): Flashcard {
    const existing = this.repository.findById(data.id);

    if (!existing) {
      throw new AppError(ERROR_CODES.FLASHCARD_NOT_FOUND, 404);
    }

    const parsed = updateFlashcardSchema.safeParse(data);

    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      throw new AppError(issue.message as ErrorCode, 400);
    }

    const updated: Flashcard = {
      ...existing,
      ...parsed.data,
    };

    this.repository.update(updated);

    return updated;
  }

  deleteFlashcard(id: string): void {
    const existing = this.repository.findById(id);

    if (!existing) {
      throw new AppError(ERROR_CODES.FLASHCARD_NOT_FOUND, 404);
    }

    this.repository.delete(id);
  }
}
