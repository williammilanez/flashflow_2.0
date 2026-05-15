import type { Flashcard as FlashcardType } from "../../types/flashcard";
import { Flashcard } from "../Flashcard/Flashcard";

type FlashcardGridProps = {
  flashcards: FlashcardType[];
  onEdit: (card: FlashcardType) => void;
  onDelete: (card: FlashcardType) => void;
};

export function FlashcardGrid({
  flashcards,
  onEdit,
  onDelete,
}: FlashcardGridProps) {
  return (
    <>
      {flashcards.map((flashcard) => (
        <Flashcard
          key={flashcard.id}
          id={flashcard.id}
          category={flashcard.category}
          question={flashcard.question}
          answer={flashcard.answer}
          onEdit={() => onEdit(flashcard)}
          onDelete={() => onDelete(flashcard)}
        />
      ))}
    </>
  );
}
