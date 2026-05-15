import { FLASHCARD_CATEGORIES } from "../../constants/categories";

const categories = ["Tudo", ...FLASHCARD_CATEGORIES];

type CategoryFilterProps = {
  selectedCategory: string;

  onSelectCategory: (category: string) => void;
};

export function CategoryFilter({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <section className="font-inter flex w-full flex-wrap items-center justify-center gap-2 rounded-3xl bg-slate-100 p-3 text-sm md:justify-start lg:w-auto">
      {categories.map((category) => {
        const isActive = selectedCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`
              px-4 py-2 sm:px-5 rounded-full text-sm font-semibold transition
              ${
                isActive
                  ? "font-semibold bg-violet-100 text-violet-700 border border-slate-200 hover:bg-violet-200"
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
