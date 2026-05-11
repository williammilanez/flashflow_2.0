type EmptyStateProps = {
  onCreate?: () => void;
};

export function EmptyState({ onCreate }: EmptyStateProps) {
  return (
    <section className="min-h-[420px] rounded-3xl border border-dashed border-slate-300 bg-white flex flex-col items-center justify-center text-center px-6">
      <img
        src="/logo-pb.svg"
        alt="Nenhum flashcard encontrado"
        className="w-10 h-10 object-contain"
      />

      <div className="mt-8 flex flex-col gap-3">
        <p className="font-inter font-normal text-sm text-slate-500">
          Você ainda não possui flashcards.
          <br />
          Que tal criar um para começar?
        </p>
      </div>

      <button
        onClick={onCreate}
        className="mt-8 rounded-full bg-violet-700 px-6 py-3 font-inter text-sm font-bold text-white hover:bg-violet-800 transition"
      >
        Novo Flashcard
      </button>
    </section>
  );
}
