import { ErrorCode } from "./error-codes";

export class AppError extends Error {
  public statusCode: number;
  public code: ErrorCode;

  constructor(code: ErrorCode, statusCode = 400) {
    super(code);
    this.code = code;
    this.statusCode = statusCode;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}
