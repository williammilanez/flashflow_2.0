import { Request, Response } from "express";
import { successResponse } from "../../../shared/utils/http-response";
import { FlashcardService } from "../service/flashcard.service";

export class FlashcardController {
  private service = new FlashcardService();

  create = (req: Request, res: Response) => {
    const result = this.service.createFlashcard(req.body);
    return res.status(201).json(successResponse(result, "FLASHCARD_CREATED"));
  };

  list = (req: Request, res: Response) => {
    const result = this.service.listFlashcards();
    return res.status(200).json(successResponse(result, "FLASHCARD_LIST"));
  };

  update = (req: Request, res: Response) => {
    const result = this.service.updateFlashcard({
      id: req.params.id,
      ...req.body,
    });

    return res.status(200).json(successResponse(result, "FLASHCARD_UPDATED"));
  };

  delete = (req: Request, res: Response) => {
    this.service.deleteFlashcard(req.params.id);
    return res.status(200).json(successResponse(null, "FLASHCARD_DELETED"));
  };
}
