import { useEffect, useState } from "react";
import { flashcardService } from "../services/flashcard.service";
import type { Flashcard } from "../types/flashcard";

export function useFlashcards() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await flashcardService.getAll();
        setFlashcards(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    load();
  }, []);

  function createFlashcard(card: Flashcard) {
    setFlashcards((prev) => [card, ...prev]);
  }

  function updateFlashcard(updated: Flashcard) {
    setFlashcards((prev) =>
      prev.map((c) => (c.id === updated.id ? updated : c)),
    );
  }

  function deleteFlashcard(id: string) {
    setFlashcards((prev) => prev.filter((c) => c.id !== id));
  }

  return {
    flashcards,
    isLoading,
    createFlashcard,
    updateFlashcard,
    deleteFlashcard,
  };
}
