import { CategoryFilter } from "../components/CategoryFilter/CategoryFilter";
import { CreateCardButton } from "../components/CreateCardButton/CreateCardButton";
import { EmptyState } from "../components/EmptyState/EmptyState";
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
    {
      id: "4",
      category: "JavaScript",
      question: "Por que o JavaScripté é uma linguagem de programação?",
      answer: "Porque ele processa lógica e dados dinamicamente.",
    },
    {
      id: "5",
      category: "Tailwind CSS",
      question: "Qual a principal utilidade do Tailwind CSS",
      answer: "Estilização rápida via classes utilitárias.",
    },
  ];

  const hasFlashcards = flashcards.length > 0;

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

        {!hasFlashcards ? (
          <EmptyState />
        ) : (
          <section
            className="
              mt-12
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-6
            "
          >
            <FlashcardGrid flashcards={flashcards} />

            <CreateCardButton />
          </section>
        )}
      </main>
    </div>
  );
}
