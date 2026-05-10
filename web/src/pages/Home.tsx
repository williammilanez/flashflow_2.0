import { useEffect, useState } from "react";

import { CategoryFilter } from "../components/CategoryFilter/CategoryFilter";
import { CreateCardButton } from "../components/CreateCardButton/CreateCardButton";
import { EmptyState } from "../components/EmptyState/EmptyState";
import { FlashcardGrid } from "../components/FlashcardGrid/FlashcardGrid";
import { Header } from "../components/Header/Header";

import { CreateModal } from "../components/Modal/CreateModal";
import { DeleteModal } from "../components/Modal/DeleteModal";
import { EditModal } from "../components/Modal/EditModal";

import { flashcardService } from "../services/flashcard.service";

import type { Flashcard } from "../types/flashcard";

export function Home() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

  const [selectedCategory, setSelectedCategory] = useState("Tudo");

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [editingFlashcard, setEditingFlashcard] = useState<Flashcard | null>(
    null,
  );

  const [deletingFlashcard, setDeletingFlashcard] = useState<Flashcard | null>(
    null,
  );

  async function loadFlashcards() {
    try {
      const data = await flashcardService.getAll();

      setFlashcards(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchFlashcards() {
      await loadFlashcards();
    }

    fetchFlashcards();
  }, []);

  const hasFlashcards = flashcards.length > 0;

  const filteredFlashcards =
    selectedCategory === "Tudo"
      ? flashcards
      : flashcards.filter((card) => card.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onCreate={() => setIsCreateModalOpen(true)} />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="flex items-end justify-between gap-8">
          <div className="flex flex-col gap-3">
            <p className="font-inter text-xs font-bold text-violet-700 uppercase">
              Painel de Aprendizado
            </p>

            <h2 className="font-manrope text-4xl font-extrabold text-slate-800">
              Domine tecnologia com foco total.
            </h2>
          </div>

          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </section>

        {!hasFlashcards ? (
          <EmptyState />
        ) : (
          <section className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <FlashcardGrid
              flashcards={filteredFlashcards}
              onEdit={setEditingFlashcard}
              onDelete={setDeletingFlashcard}
            />

            <CreateCardButton onClick={() => setIsCreateModalOpen(true)} />
          </section>
        )}
      </main>

      <CreateModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />

      <EditModal
        flashcard={editingFlashcard}
        onClose={() => setEditingFlashcard(null)}
      />

      <DeleteModal
        flashcard={deletingFlashcard}
        onClose={() => setDeletingFlashcard(null)}
      />
    </div>
  );
}
