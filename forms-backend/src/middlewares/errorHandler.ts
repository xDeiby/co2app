import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/error";

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
export function errorHandler(err: Error, req: Request, resp: Response, next: NextFunction) {
  const error = err as CustomError;

  if (error?.status) {
    return resp.status(error.status).send({ error: err.message });
  }

  return resp.status(500).send({ error: err.message });
}
