export const FLASHCARD_CATEGORIES = [
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
] as const;

export type FlashcardCategory = (typeof FLASHCARD_CATEGORIES)[number];
