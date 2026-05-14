import { useState } from "react";

import type { Flashcard } from "../types/flashcard";

import { CategoryFilter } from "../components/CategoryFilter/CategoryFilter";
import { CreateCardButton } from "../components/CreateCardButton/CreateCardButton";
import { EmptyState } from "../components/EmptyState/EmptyState";
import { FlashcardGrid } from "../components/FlashcardGrid/FlashcardGrid";
import { Header } from "../components/Header/Header";
import { CreateModal } from "../components/Modal/CreateModal";
import { DeleteModal } from "../components/Modal/DeleteModal";
import { EditModal } from "../components/Modal/EditModal";
import { FlashcardSkeleton } from "../components/Skeleton/FlashcardSkeleton";

import { useFlashcards } from "../hooks/useFlashcards";

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Tudo");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingFlashcard, setEditingFlashcard] = useState<Flashcard | null>(
    null,
  );
  const [deletingFlashcard, setDeletingFlashcard] = useState<Flashcard | null>(
    null,
  );
  const {
    flashcards,
    isLoading,
    createFlashcard,
    updateFlashcard,
    deleteFlashcard,
  } = useFlashcards();

  const filteredFlashcards =
    selectedCategory === "Tudo"
      ? flashcards
      : flashcards.filter((card) => card.category === selectedCategory);

  const hasFlashcards = flashcards.length > 0;

  const hasFilteredFlashcards = filteredFlashcards.length > 0;

  const handleCreateFlashcard = createFlashcard;
  const handleUpdateFlashcard = updateFlashcard;
  const handleDeleteFlashcard = deleteFlashcard;

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onCreate={() => setIsCreateModalOpen(true)} />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* HEADER */}
        <section className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3">
            <p className="font-inter text-xs font-bold text-violet-700 uppercase">
              Painel de Aprendizado
            </p>

            <h2 className="font-manrope text-3xl leading-tight sm:text-4xl font-extrabold text-slate-800">
              Domine tecnologia com foco total.
            </h2>
          </div>

          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </section>

        <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {isLoading &&
            Array.from({ length: 6 }).map((_, index) => (
              <FlashcardSkeleton key={index} />
            ))}

          {!isLoading && !hasFlashcards && (
            <div className="col-span-full">
              <EmptyState onCreate={() => setIsCreateModalOpen(true)} />
            </div>
          )}

          {!isLoading && hasFlashcards && !hasFilteredFlashcards && (
            <div className="col-span-full">
              <EmptyState
                onCreate={() => setIsCreateModalOpen(true)}
                message="Categoria sem flashcards."
              />
            </div>
          )}

          {!isLoading && hasFilteredFlashcards && (
            <>
              <FlashcardGrid
                flashcards={filteredFlashcards}
                onEdit={setEditingFlashcard}
                onDelete={setDeletingFlashcard}
              />

              <CreateCardButton onClick={() => setIsCreateModalOpen(true)} />
            </>
          )}
        </section>
      </main>

      <CreateModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreate={handleCreateFlashcard}
      />

      <EditModal
        flashcard={editingFlashcard}
        onClose={() => setEditingFlashcard(null)}
        onUpdate={handleUpdateFlashcard}
      />

      <DeleteModal
        flashcard={deletingFlashcard}
        onClose={() => setDeletingFlashcard(null)}
        onDelete={handleDeleteFlashcard}
      />
    </div>
  );
}
