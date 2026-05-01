import cors from "cors";
import express from "express";
import { flashcardRoutes } from "./modules/flashcards/routes/flashcard.routes";
import { errorMiddleware } from "./shared/middlewares/error.middleware";

export const app = express();

app.use(cors());

app.use(express.json());

app.get("/health", (req, res) => {
  return res.json({ status: "ok" });
});

app.use("/flashcards", flashcardRoutes);

app.use((req, res) => {
  res.status(404).json({
    error: "ROUTE_NOT_FOUND",
    statusCode: 404,
  });
});

app.use(errorMiddleware);
