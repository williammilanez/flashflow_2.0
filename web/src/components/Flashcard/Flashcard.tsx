import { useState } from "react";

type FlashcardProps = {
  id: string;
  category: string;
  question: string;
  answer: string;
  onEdit: () => void;
  onDelete: () => void;
};

export function Flashcard({
  category,
  question,
  answer,
  onEdit,
  onDelete,
}: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlipCard() {
    setIsFlipped((prevState) => !prevState);
  }

  return (
    <article className="w-full min-h-[280px] sm:min-h-[320px] rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
      {!isFlipped ? (
        <>
          <header className="font-inter flex items-start justify-between">
            <span className="font-semibold text-xs bg-slate-100 text-slate-500 border border-slate-200 rounded-full px-3 py-1 uppercase">
              {category}
            </span>
          </header>

          <div className="flex-1 flex items-center justify-center text-center">
            <h3 className="font-manrope break-words whitespace-pre-wrap text-xl font-bold leading-snug text-slate-800">
              {question}
            </h3>
          </div>

          <footer className="flex justify-end">
            <button onClick={handleFlipCard}>
              <img
                src="/Button-flip-card.svg"
                alt="Virar card"
                className="w-10 h-10 object-contain hover:opacity-80 transition"
              />
            </button>
          </footer>
        </>
      ) : (
        <>
          <header className="font-inter flex items-start justify-between">
            <span className="font-semibold text-xs bg-slate-100 text-slate-500 border border-slate-200 rounded-full px-3 py-1 uppercase">
              {category}
            </span>

            <div className="flex items-center gap-2">
              <button type="button" onClick={onEdit}>
                <img
                  src="/Button-edit.svg"
                  alt="Editar flashcard"
                  className="w-10 h-10 object-contain hover:opacity-80 transition"
                />
              </button>

              <button type="button" onClick={onDelete}>
                <img
                  src="/Button-del.svg"
                  alt="Deletar flashcard"
                  className="w-10 h-10 object-contain hover:opacity-80 transition"
                />
              </button>
            </div>
          </header>

          <div className="flex flex-1 flex-col items-center justify-center gap-6 overflow-hidden text-center">
            <h3 className="font-inter break-words whitespace-pre-wrap text-sm font-normal text-slate-600">
              {question}
            </h3>

            <p className="font-manrope break-words whitespace-pre-wrap text-base font-semibold leading-relaxed text-violet-700">
              {answer}
            </p>
          </div>

          <footer className="flex justify-end">
            <button type="button" onClick={handleFlipCard}>
              <img
                src="/Button-flip-card.svg"
                alt="Virar card"
                className="w-10 h-10 object-contain hover:opacity-80 transition"
              />
            </button>
          </footer>
        </>
      )}
    </article>
  );
}
