import express, { Request, Response, Application } from "express";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();
const secretKey = `${process.env.PASSWORD_KEY}`;
export const requireAuth: Application = express();
export const authUpdate: Application = express();

// allow [put to user, put to playlist(make later), put to comment] by req.session.userId === user.id
// allow [delete comment] by req.session.userId === user.id

// smallMiddleware handle bad request + un-authorized
// small smallMiddleware handle other request to specific route for bad type/null or undefine
// controller only return for data/bad request

requireAuth.use(async (req: Request, res: Response, next) => {
  const tokenAuthen = req.headers.authorization;
  // allow authenticate user to make playlist, stream music, search music
  if (!tokenAuthen)
    return res.status(401).send({ message: "Un-authorized request" });

  jwt.verify(tokenAuthen, secretKey, (err: any, decoded: any) => {
    const newDecode = decoded as { userId: number; iat: number };
    if (err) return res.status(401).send({ message: "Un-authorized request" });
    if (newDecode.iat < new Date().getTime()) return res.status(401).send({ message: "You need to sign in again" });

    if (newDecode.userId) return next();
    res.status(401).send({ message: "Un-authorized request" });
  });
  
});

authUpdate.use(async (req: Request, res: Response, next) => {
  const userIdRequest = req.query.userId? req.query.userId : 0
  const tokenAuthen = req.headers.authorization;
  // allow authenticate user to make playlist, stream music, search music
  if (!tokenAuthen)
    return res.status(401).send({ message: "Un-authorized request" });

  jwt.verify(tokenAuthen, secretKey, (err: any, decoded: any) => {
    const newDecode = decoded as { userId: number; iat: number };
    const userId = `${newDecode.userId}`

    if (userId === userIdRequest) return next();
    res.status(401).send({ message: "Un-authorized request" });
  });
  
});
