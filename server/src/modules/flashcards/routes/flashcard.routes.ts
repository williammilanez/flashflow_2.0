import { Router } from "express";

export const flashcardRoutes = Router();

flashcardRoutes.get("/", (req, res) => {
  return res.json({ status: "ok" });
});
