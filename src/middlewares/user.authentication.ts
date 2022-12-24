import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import config from '../configuration/config';

export const verifyAuthToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorizationHeader = req.headers.authorization as string;
    const token = authorizationHeader.split(' ')[1];
    jwt.verify(token, config.token as string);
    next();
    return;
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized access' });
  }
};