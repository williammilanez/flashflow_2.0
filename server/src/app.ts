import express from "express";
import { flashcardRoutes } from "./modules/flashcards/routes/flashcard.routes";
import { errorMiddleware } from "./shared/middlewares/error.middleware";

export const app = express();

app.use(express.json());

// Health check (antes dos middlewares de erro)
app.get("/health", (req, res) => {
  return res.json({ status: "ok" });
});

// Rotas de domínio
app.use("/flashcards", flashcardRoutes);

// Middleware de erro (SEMPRE por último)
app.use(errorMiddleware);
