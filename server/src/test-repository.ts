import { randomUUID } from "crypto";
import { FlashcardRepository } from "./modules/flashcards/repository/flashcard.repository";

const repo = new FlashcardRepository();

const id = randomUUID();

repo.create({
  id,
  question: "Teste",
  answer: "Resposta",
  category: "JavaScript",
  created_at: new Date().toISOString(),
});

console.log(repo.findAll());
console.log(repo.findById(id));

repo.update({
  id,
  question: "Atualizado",
  answer: "Atualizado",
  category: "React",
  created_at: new Date().toISOString(),
});

console.log(repo.findById(id));

repo.delete(id);

console.log(repo.findById(id));
