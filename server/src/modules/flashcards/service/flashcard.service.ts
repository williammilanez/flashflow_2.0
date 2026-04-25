import { randomUUID } from "crypto";
import { AppError } from "../../../shared/errors/app-error";
import { FLASHCARD_CATEGORIES } from "../constants/categories";
import { FlashcardRepository } from "../repository/flashcard.repository";
import { Flashcard, FlashcardCategory } from "../types/flashcard.types";

interface CreateFlashcardDTO {
  question: string;
  answer: string;
  category: string;
}

interface UpdateFlashcardDTO {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export class FlashcardService {
  private repository = new FlashcardRepository();

  private validateCategory(
    category: string,
  ): asserts category is FlashcardCategory {
    if (!FLASHCARD_CATEGORIES.includes(category as FlashcardCategory)) {
      throw new AppError("Invalid category");
    }
  }

  private validateRequiredFields(question: string, answer: string) {
    if (!question?.trim()) {
      throw new AppError("Question is required");
    }

    if (!answer?.trim()) {
      throw new AppError("Answer is required");
    }
  }

  createFlashcard({
    question,
    answer,
    category,
  }: CreateFlashcardDTO): Flashcard {
    this.validateRequiredFields(question, answer);
    this.validateCategory(category);

    const flashcard: Flashcard = {
      id: randomUUID(),
      question: question.trim(),
      answer: answer.trim(),
      category,
      created_at: new Date().toISOString(),
    };

    this.repository.create(flashcard);

    return flashcard;
  }

  listFlashcards(): Flashcard[] {
    return this.repository.findAll();
  }

  updateFlashcard({
    id,
    question,
    answer,
    category,
  }: UpdateFlashcardDTO): Flashcard {
    const existing = this.repository.findById(id);

    if (!existing) {
      throw new AppError("Flashcard not found", 404);
    }

    this.validateRequiredFields(question, answer);
    this.validateCategory(category);

    const updated: Flashcard = {
      ...existing,
      question: question.trim(),
      answer: answer.trim(),
      category,
    };

    this.repository.update(updated);

    return updated;
  }

  deleteFlashcard(id: string): void {
    const existing = this.repository.findById(id);

    if (!existing) {
      throw new AppError("Flashcard not found", 404);
    }

    this.repository.delete(id);
  }
}
