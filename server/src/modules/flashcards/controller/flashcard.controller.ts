import { Request, Response } from "express";
import { FlashcardService } from "../service/flashcard.service";

export class FlashcardController {
  private service = new FlashcardService();

  create = (req: Request, res: Response): Response => {
    const { question, answer, category } = req.body;

    const flashcard = this.service.createFlashcard({
      question,
      answer,
      category,
    });

    return res.status(201).json(flashcard);
  };

  list = (_req: Request, res: Response): Response => {
    const flashcards = this.service.listFlashcards();

    return res.json(flashcards);
  };

  update = (req: Request, res: Response): Response => {
    const { id } = req.params;
    const { question, answer, category } = req.body;

    const updated = this.service.updateFlashcard({
      id,
      question,
      answer,
      category,
    });

    return res.json(updated);
  };

  delete = (req: Request, res: Response): Response => {
    const { id } = req.params;

    this.service.deleteFlashcard(id);

    return res.status(204).send();
  };
}
