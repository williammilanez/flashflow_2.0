import { Router } from "express";
import { FlashcardController } from "../controller/flashcard.controller";

const flashcardRoutes = Router();
const controller = new FlashcardController();

flashcardRoutes.post("/", controller.create);
flashcardRoutes.get("/", controller.list);
flashcardRoutes.put("/:id", controller.update);
flashcardRoutes.delete("/:id", controller.delete);

export { flashcardRoutes };
