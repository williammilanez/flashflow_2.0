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
    <section
      className="
        mt-12
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
      "
    >
      {flashcards.map((flashcard) => (
        <Flashcard
          key={flashcard.id}
          category={flashcard.category}
          question={flashcard.question}
          answer={flashcard.answer}
        />
      ))}
    </section>
  );
}
