import { CategoryFilter } from "../components/CategoryFilter/CategoryFilter";
import { FlashcardGrid } from "../components/FlashcardGrid/FlashcardGrid";
import { Header } from "../components/Header/Header";

export function Home() {
  const flashcards = [
    {
      id: "1",
      category: "React",
      question: "O que é React?",
      answer: "Uma biblioteca JavaScript para interfaces.",
    },
    {
      id: "2",
      category: "Node.js",
      question: "O que é Node.js?",
      answer: "Um runtime JavaScript baseado no motor V8.",
    },
    {
      id: "3",
      category: "JavaScript",
      question: "O que é closure?",
      answer: "Função com acesso ao escopo léxico externo.",
    },
  ];

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

        <FlashcardGrid flashcards={flashcards} />
      </main>
    </div>
  );
}
