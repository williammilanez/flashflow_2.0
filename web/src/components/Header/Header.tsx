type HeaderProps = {
  onCreate?: () => void;
};

export function Header({ onCreate }: HeaderProps) {
  return (
    <header className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="Logo Flash Flow"
            className="w-10 h-10 object-contain"
          />
          <h1 className="font-manrope text-3xl text-slate-800 font-extrabold">
            Flash Flow
          </h1>
        </div>

        <button
          onClick={onCreate}
          className="font-manrope text-sm leading-5 bg-violet-700 text-white px-6 py-3 rounded-full font-bold hover:bg-violet-800 transition"
        >
          Novo Flashcard
        </button>
      </div>
    </header>
  );
}
