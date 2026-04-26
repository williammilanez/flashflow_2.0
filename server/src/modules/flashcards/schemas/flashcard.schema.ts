import { z } from "zod";
import { FLASHCARD_CATEGORIES } from "../constants/categories";

export const createFlashcardSchema = z.object({
  question: z.string().min(1, "QUESTION_REQUIRED"),
  answer: z.string().min(1, "ANSWER_REQUIRED"),
  category: z.enum(FLASHCARD_CATEGORIES),
});

export const updateFlashcardSchema = z.object({
  id: z.string().uuid("INVALID_ID"),
  question: z.string().min(1, "QUESTION_REQUIRED"),
  answer: z.string().min(1, "ANSWER_REQUIRED"),
  category: z.enum(FLASHCARD_CATEGORIES),
});
