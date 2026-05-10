type DeleteModalProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

export function DeleteModal({ isOpen = false, onClose }: DeleteModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <div className="flex flex-col items-center text-center">
          <img
            src="/del.svg"
            alt="Excluir flashcard"
            className="w-16 h-16 object-contain"
          />

          <h2 className="mt-8 font-manrope text-2xl font-extrabold text-slate-800">
            Tem certeza que deseja excluir este card?
          </h2>

          <p className="mt-4 font-inter text-sm leading-relaxed text-slate-500">
            Esta ação não pode ser desfeita e o card será removido
            permanentemente da sua biblioteca.
          </p>
        </div>

        <footer className="mt-8 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-full border border-slate-300 bg-slate-100 px-6 py-4 font-inter text-sm font-bold text-slate-700 hover:bg-slate-200 transition"
          >
            Cancelar
          </button>

          <button
            type="button"
            className="w-full rounded-full bg-red-700 px-6 py-4 font-inter text-sm font-bold text-white hover:bg-red-800 transition"
          >
            Excluir
          </button>
        </footer>
      </div>
    </div>
  );
}
