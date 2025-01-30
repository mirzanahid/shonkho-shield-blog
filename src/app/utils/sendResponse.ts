import { Response } from 'express';

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data: T;
};

const sendResponse = <T>(res: Response, responseData: TResponse<T>) => {
  const { statusCode, success, message, data } = responseData;

  const responseBody: Record<string, unknown> = {
    success,
    message,
    statusCode,
  };

  if (data && Object.keys(data as object).length > 0) responseBody.data = data; // Add `data` only if it's not empty

  res.status(statusCode).json(responseBody);
};

export default sendResponse;
