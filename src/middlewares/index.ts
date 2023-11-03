import express, { Request, Response, Application } from "express";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();
const secretKey = `${process.env.PASSWORD_KEY}`;
const priviledgeMiddleware: Application = express();

// allow [put to user, put to playlist(make later), put to comment] by req.session.userId === user.id
// allow [delete comment] by req.session.userId === user.id

// allow [get to user(as room), get query to search] if req.session.userId
// allow [get params id to stream, get query to search] if req.session.userId
// allow [delete sign out] if req.session.userId

// smallMiddleware handle bad request + un-authorized
// small smallMiddleware handle other request to specific route for bad type/null or undefine
// controller only return for data/bad request
priviledgeMiddleware.use(async (req: Request, res: Response, next) => {
  const tokenAuthen = req.headers.authorization;
  if (!tokenAuthen)
    return res.status(401).send({ message: "Un-authorized request" });

  jwt.verify(tokenAuthen, secretKey, (err: any, decoded: any) => {
    const newDecode = decoded as { userId: number; iat: number };
    if (err) return res.status(401).send({ message: "Un-authorized request" });

    const requestSearchAllow = req.params.id || req.query.search;
    const authReadAllow = newDecode.userId && true;

    if (requestSearchAllow || authReadAllow) {
      if (newDecode.iat < new Date().getTime())
        return res.status(401).send({ message: "You need to sign in again" });
      next();
    }
  });
  res.status(401).send({ message: "Un-authorized request" });
});

export default priviledgeMiddleware;
