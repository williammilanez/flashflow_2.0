import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app-error";

export function errorMiddleware(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // Caso erro controlado da aplicação
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.message,
      statusCode: err.statusCode,
    });
  }

  // Erro inesperado (fallback)
  console.error("[UNEXPECTED ERROR]", err);

  return res.status(500).json({
    error: "INTERNAL_SERVER_ERROR",
    statusCode: 500,
  });
}
