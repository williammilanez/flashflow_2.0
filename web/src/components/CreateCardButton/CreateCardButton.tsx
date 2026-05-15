type CreateCardButtonProps = {
  onClick: () => void;
};

export function CreateCardButton({ onClick }: CreateCardButtonProps) {
  return (
    <article className="min-h-[280px] sm:min-h-[320px] rounded-3xl border-2 border-dashed border-slate-300 bg-violet-50 p-5 sm:p-6 flex flex-col items-center justify-center text-center transition md:hover:border-violet-400 md:hover:bg-white">
      <button
        type="button"
        onClick={onClick}
        className="transition md:hover:opacity-80"
      >
        <img
          src="/Button-create-new-card.svg"
          alt="Criar novo flashcard"
          className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
        />
      </button>

      <div className="mt-6 flex flex-col gap-2">
        <h3 className="font-manrope text-lg font-bold text-slate-800">
          Criar novo card
        </h3>

        <p className="font-inter text-xs font-normal text-slate-500">
          Adicione um novo desafio à sua biblioteca e mantenha o ritmo.
        </p>
      </div>
    </article>
  );
}
