import { CategoryFilter } from "../components/CategoryFilter/CategoryFilter";
import { EmptyState } from "../components/EmptyState/EmptyState";
import { Header } from "../components/Header/Header";

export function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

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

          <CategoryFilter />
        </section>

        <EmptyState />
      </main>
    </div>
  );
}
