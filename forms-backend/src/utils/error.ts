export interface CustomError extends Error {status?: number}

export const error = (msg: string, status = 400) => {
  const err: CustomError = new Error(msg);
  err.status = status;

  return err;
};
