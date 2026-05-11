import { useState } from "react";

import { flashcardService } from "../../services/flashcard.service";

import type { Flashcard, FlashcardCategory } from "../../types/flashcard";

type CreateModalProps = {
  isOpen: boolean;

  onClose: () => void;

  onCreate: (flashcard: Flashcard) => void;
};

const categories: FlashcardCategory[] = [
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
];

export function CreateModal({ isOpen, onClose, onCreate }: CreateModalProps) {
  const [category, setCategory] = useState<FlashcardCategory | "">("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function resetForm() {
    setCategory("");
    setQuestion("");
    setAnswer("");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!category) {
      return;
    }

    try {
      setIsSubmitting(true);

      const createdFlashcard = await flashcardService.create({
        category,
        question,
        answer,
      });

      onCreate(createdFlashcard);

      resetForm();

      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!isOpen) {
    return null;
  }

  const isFormInvalid = !category || !question.trim() || !answer.trim();

  return (
    <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
      <div className=" w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-8 shadow-xl">
        <header className="flex items-start justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="font-manrope text-2xl font-extrabold text-slate-800">
              Criar Flashcard
            </h2>

            <p className="font-inter text-base font-normal text-slate-500">
              Organize seu conhecimento com precisão e clareza.
            </p>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label className="font-inter text-xs font-bold text-slate-600 uppercase">
              Categoria
            </label>

            <div className="relative">
              <img
                src="/select-icon.svg"
                alt="Ícone de seleção"
                className="absolute left-4 top-6 -translate-y-1/2 w-4 h-4 pointer-events-none"
              />

              <select
                value={category}
                onChange={(event) =>
                  setCategory(event.target.value as FlashcardCategory)
                }
                className="w-full h-12 appearance-none rounded-xl border border-slate-200 bg-white px-12 text-sm outline-none transition focus:border-violet-500"
              >
                <option value="">Selecione a categoria do card</option>
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>

              <img
                src="/down-arrow-icon.svg"
                alt="Seta para baixo, para escolher as opções do select"
                className="absolute right-4 top-6 -translate-y-1/2 w-3 h-3 pointer-events-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-inter text-xs font-bold text-slate-600 uppercase">
              Pergunta
            </label>

            <div className="relative">
              <img
                src="/question-icon.svg"
                alt="Ícone de pergunta"
                className="absolute left-4 top-5 w-4 h-4 pointer-events-none"
              />

              <textarea
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder="Ex: O que é uma Closure no JavaScript?"
                className="w-full font-inter text-sm min-h-[100px] resize-none rounded-2xl border border-slate-200 py-4 px-12 outline-none transition focus:border-violet-500"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-inter text-xs font-bold text-slate-600 uppercase">
              Resposta
            </label>

            <div className="relative">
              <img
                src="/answer-icon.svg"
                alt="Ícone de resposta"
                className=" absolute left-4 top-5 w-4 h-4 pointer-events-none"
              />

              <textarea
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
                placeholder="Ex: Uma closure é a combinação de uma função com o ambiente léxico..."
                className=" w-full font-inter text-sm min-h-[140px] resize-none rounded-2xl border border-slate-200 py-4 px-12 outline-none transition focus:border-violet-500"
              />
            </div>
          </div>

          <footer className="mt-2 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-full border border-slate-300 bg-slate-100 px-6 py-4 font-inter text-sm font-bold text-slate-700 hover:bg-slate-200 transition"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={isSubmitting || isFormInvalid}
              className="w-full rounded-full bg-violet-700 px-6 py-4 font-inter text-sm font-bold text-white hover:bg-violet-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Salvando..." : "Salvar"}
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}
