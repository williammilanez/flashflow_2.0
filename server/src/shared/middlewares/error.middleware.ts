import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app-error";
import { ERROR_CODES } from "../errors/error-codes";

export function errorMiddleware(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.code,
      statusCode: err.statusCode,
    });
  }

  console.error("[UNEXPECTED ERROR]", err);

  return res.status(500).json({
    error: ERROR_CODES.INTERNAL_SERVER_ERROR,
    statusCode: 500,
  });
}
