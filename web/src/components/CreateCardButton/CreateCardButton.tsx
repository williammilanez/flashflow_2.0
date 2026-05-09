type CreateCardButtonProps = {
  onCreate?: () => void;
};

export function CreateCardButton({ onCreate }: CreateCardButtonProps) {
  return (
    <article
      className="
        min-h-[320px]
        rounded-3xl
        border-2
        border-dashed
        border-slate-300
        bg-violet-50
        p-6
        flex
        flex-col
        items-center
        justify-center
        text-center
        transition
        hover:border-violet-400
        hover:bg-white
      "
    >
      <button onClick={onCreate} className="hover:opacity-80 transition">
        <img
          src="/Button-create-new-card.svg"
          alt="Criar novo flashcard"
          className="w-16 h-16 object-contain"
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
