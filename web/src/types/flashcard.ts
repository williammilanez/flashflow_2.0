export type FlashcardCategory =
  | "JavaScript"
  | "React"
  | "Tailwind CSS"
  | "Node.js";

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: FlashcardCategory;
  created_at: string; // ISO 8601 date string
}

export interface CreateFlashcardDTO {
  question: string;
  answer: string;
  category: FlashcardCategory;
}

export interface UpdateFlashcardDTO {
  question: string;
  answer: string;
  category: FlashcardCategory;
}
