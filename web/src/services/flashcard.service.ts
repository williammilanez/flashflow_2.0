import { apiFetch } from "./api";

import type {
  CreateFlashcardDTO,
  Flashcard,
  UpdateFlashcardDTO,
} from "../types/flashcard";

export const flashcardService = {
  getAll: async (): Promise<Flashcard[]> => {
    return apiFetch<Flashcard[]>("/flashcards");
  },

  create: async (data: CreateFlashcardDTO): Promise<Flashcard> => {
    return apiFetch<Flashcard>("/flashcards", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  update: async (id: string, data: UpdateFlashcardDTO): Promise<Flashcard> => {
    return apiFetch<Flashcard>(`/flashcards/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  },

  delete: async (id: string): Promise<void> => {
    return apiFetch<void>(`/flashcards/${id}`, {
      method: "DELETE",
    });
  },
};
