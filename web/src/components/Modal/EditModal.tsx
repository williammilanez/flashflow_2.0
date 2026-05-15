import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { FLASHCARD_CATEGORIES } from "../../constants/categories";
import { flashcardService } from "../../services/flashcard.service";
import type { Flashcard, FlashcardCategory } from "../../types/flashcard";

type EditModalProps = {
  flashcard: Flashcard | null;

  onClose: () => void;

  onUpdate: (flashcard: Flashcard) => void;
};

export function EditModal({ flashcard, onClose, onUpdate }: EditModalProps) {
  const [formData, setFormData] = useState({
    category: "" as FlashcardCategory | "",
    question: "",
    answer: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (flashcard) {
      setFormData({
        category: flashcard.category,
        question: flashcard.question,
        answer: flashcard.answer,
      });
    }
  }, [flashcard]);
  /* eslint-enable react-hooks/set-state-in-effect */

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!flashcard || !formData.category) {
      return;
    }

    try {
      setIsSubmitting(true);

      const updatedFlashcard = await flashcardService.update(flashcard.id, {
        category: formData.category as FlashcardCategory,
        question: formData.question,
        answer: formData.answer,
      });

      onUpdate(updatedFlashcard);
      toast.success("Flashcard atualizado com sucesso.");

      onClose();
    } catch {
      toast.error("Erro ao atualizar flashcard.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!flashcard) {
    return null;
  }

  const isFormInvalid =
    !formData.category || !formData.question.trim() || !formData.answer.trim();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
      <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-5 shadow-xl sm:p-8">
        <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="font-manrope text-xl sm:text-2xl font-extrabold text-slate-800">
              Editar Flashcard
            </h2>

            <p className="font-inter text-base font-normal text-slate-500">
              Organize seu conhecimento com precisão e clareza.
            </p>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
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
                value={formData.category}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    category: event.target.value as FlashcardCategory,
                  }))
                }
                className="w-full h-12 appearance-none rounded-xl border border-slate-200 bg-white px-12 text-sm outline-none transition-colors duration-200 focus:border-violet-500"
              >
                <option value="">Selecione a categoria do card</option>

                {FLASHCARD_CATEGORIES.map((category) => (
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
                value={formData.question}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    question: event.target.value,
                  }))
                }
                placeholder="Ex: O que é uma Closure no JavaScript?"
                className="w-full font-inter text-sm min-h-[120px] resize-none rounded-2xl border border-slate-200 py-4 px-12 outline-none transition-colors duration-200 focus:border-violet-500"
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
                value={formData.answer}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    answer: event.target.value,
                  }))
                }
                placeholder="Ex: Uma closure é a combinação de uma função com o ambiente léxico..."
                className="w-full font-inter text-sm min-h-[160px] resize-none rounded-2xl border border-slate-200 py-4 px-12 outline-none transition-colors duration-200 focus:border-violet-500"
              />
            </div>
          </div>

          <footer className="mt-4 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-full border border-slate-300 bg-slate-100 px-6 py-4 font-inter text-sm font-bold text-slate-700 transition-colors duration-200 hover:bg-slate-200"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={isSubmitting || isFormInvalid}
              className="w-full rounded-full bg-violet-700 px-6 py-4 font-inter text-sm font-bold text-white transition-colors duration-200 hover:bg-violet-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Salvando..." : "Salvar"}
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}
