export type FlashcardCategory = "JavaScript" | "React" | "Tailwind CSS";

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: FlashcardCategory;
  created_at: string;
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
