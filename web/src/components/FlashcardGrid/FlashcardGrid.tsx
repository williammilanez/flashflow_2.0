import { Flashcard } from "../Flashcard/Flashcard";

type FlashcardItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
};

type FlashcardGridProps = {
  flashcards: FlashcardItem[];
};

export function FlashcardGrid({ flashcards }: FlashcardGridProps) {
  return (
    <>
      {flashcards.map((flashcard) => (
        <Flashcard
          key={flashcard.id}
          category={flashcard.category}
          question={flashcard.question}
          answer={flashcard.answer}
        />
      ))}
    </>
  );
}
