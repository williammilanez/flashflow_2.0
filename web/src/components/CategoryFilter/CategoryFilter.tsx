const categories = ["Tudo", "JavaScript", "React", "Tailwind CSS", "Node.js"];

export function CategoryFilter() {
  return (
    <section className="font-inter text-sm inline-flex flex-wrap items-center gap-3 bg-slate-100 rounded-full px-3 py-3">
      {categories.map((category, index) => {
        const isActive = index === 0;

        return (
          <button
            key={category}
            className={`
              px-5 py-2 rounded-full text-sm font-semibold transition
              ${
                isActive
                  ? "font-semibold bg-violet-100 text-violet-700 border hover:bg-violet-200"
                  : "font-medium bg-slate-50 text-slate-800 hover:bg-violet-200"
              }
            `}
          >
            {category}
          </button>
        );
      })}
    </section>
  );
}
