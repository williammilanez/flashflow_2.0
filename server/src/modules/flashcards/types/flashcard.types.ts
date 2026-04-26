import { FlashcardCategory } from "../constants/categories";

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: FlashcardCategory;
  created_at: string;
}
