import { useEffect } from "react";
import { flashcardService } from "../services/flashcard.service";

export function Home() {
  useEffect(() => {
    flashcardService.getAll().then(console.log).catch(console.error);
  }, []);

  return <div>Home</div>;
}
