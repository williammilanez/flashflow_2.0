export type FlashcardCategory = "JavaScript" | "React" | "Tailwind CSS";

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: FlashcardCategory;
  created_at: string;
}
