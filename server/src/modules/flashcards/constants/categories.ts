export const FLASHCARD_CATEGORIES = [
  "JavaScript",
  "TypeScript",
  "Node",
  "SQL",
] as const;

export type FlashcardCategory = (typeof FLASHCARD_CATEGORIES)[number];
