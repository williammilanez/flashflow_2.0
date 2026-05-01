import { useEffect, useRef } from "react";
import { flashcardService } from "../services/flashcard.service";

export function Home() {
  const hasExecuted = useRef(false);

  useEffect(() => {
    if (hasExecuted.current) return;
    hasExecuted.current = true;

    flashcardService
      .create({
        question: "Teste",
        answer: "Resposta",
        category: "JavaScript",
      })
      .then(console.log)
      .catch(console.error);
  }, []);

  return <div>Home</div>;
}
