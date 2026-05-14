import { useState } from "react";
import toast from "react-hot-toast";

import { flashcardService } from "../../services/flashcard.service";
import type { Flashcard } from "../../types/flashcard";

type DeleteModalProps = {
  flashcard: Flashcard | null;

  onClose: () => void;

  onDelete: (flashcardId: string) => void;
};

export function DeleteModal({
  flashcard,
  onClose,
  onDelete,
}: DeleteModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleDelete() {
    if (!flashcard) {
      return;
    }

    try {
      setIsSubmitting(true);

      await flashcardService.delete(flashcard.id);

      onDelete(flashcard.id);
      toast.success("Flashcard excluído com sucesso.");

      onClose();
    } catch (error) {
      console.error(error);

      toast.error("Erro ao excluir flashcard.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!flashcard) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-5 shadow-xl sm:p-8">
        <div className="flex flex-col items-center text-center">
          <img
            src="/del.svg"
            alt="Excluir flashcard"
            className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
          />

          <h2 className="mt-8 font-manrope text-xl sm:text-2xl font-extrabold text-slate-800">
            Tem certeza que deseja excluir este card?
          </h2>

          <p className="mt-4 font-inter text-sm leading-relaxed text-slate-500">
            Esta ação não pode ser desfeita e o card será removido
            permanentemente da sua biblioteca.
          </p>
        </div>

        <footer className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-full border border-slate-300 bg-slate-100 px-6 py-4 font-inter text-sm font-bold text-slate-700 hover:bg-slate-200 transition"
          >
            Cancelar
          </button>

          <button
            type="button"
            onClick={handleDelete}
            disabled={isSubmitting}
            className="w-full rounded-full bg-red-700 px-6 py-4 font-inter text-sm font-bold text-white hover:bg-red-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Excluindo..." : "Excluir"}
          </button>
        </footer>
      </div>
    </div>
  );
}
