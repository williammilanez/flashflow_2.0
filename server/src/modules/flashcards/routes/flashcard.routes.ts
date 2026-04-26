import { Router } from "express";
import { FlashcardController } from "../controller/flashcard.controller";

const flashcardRoutes = Router();
const controller = new FlashcardController();

flashcardRoutes.post("/", controller.create.bind(controller));
flashcardRoutes.get("/", controller.list.bind(controller));
flashcardRoutes.put("/:id", controller.update.bind(controller));
flashcardRoutes.delete("/:id", controller.delete.bind(controller));

export { flashcardRoutes };
