import { Request, Response, NextFunction } from 'express';

export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction): void => {
  res.status(500).json({ message: `Internal server error: ${error}` });
};
