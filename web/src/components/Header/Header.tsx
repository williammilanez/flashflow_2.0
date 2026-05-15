type HeaderProps = {
  onCreate?: () => void;
};

export function Header({ onCreate }: HeaderProps) {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center justify-center gap-2 md:justify-start">
          <img
            src="/logo.svg"
            alt="Logo Flash Flow"
            className="w-10 h-10 object-contain"
          />
          <h1 className="font-manrope text-2xl sm:text-3xl text-slate-800 font-extrabold">
            Flash Flow
          </h1>
        </div>

        <button
          type="button"
          onClick={onCreate}
          className="flex w-full items-center justify-center rounded-full bg-violet-700 px-6 py-3 font-manrope text-sm font-bold leading-5 text-white transition md:hover:bg-violet-800 md:w-auto"
        >
          Novo Flashcard
        </button>
      </div>
    </header>
  );
}
