import jwt, { JwtPayload, decode } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import config from '../configuration/config';

export const verifyAuthToken = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorizationHeader = req.headers.authorization as string;
    const token = authorizationHeader.split(' ')[1];
    const decoded = jwt.verify(token, config.token as string) as JwtPayload;
    req.userid = decoded.id
    next();
    return;
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized access' });
  }
};