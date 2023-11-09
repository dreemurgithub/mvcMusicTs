import express, { Request, Response, Application } from "express";
import { encryptAuth, checkAllowUpdateAuth,mutateBodyRequestAuth } from "@/validations/JWT.validate";

import jwt from "jsonwebtoken";

import dotenv from "dotenv";
import { string } from "joi";
dotenv.config();
const secretKey = `${process.env.PASSWORD_KEY}`;

export const requireAuth: Application = express();
export const authUpdate: Application = express();
export const authMutate: Application = express();

requireAuth.use(async (req: Request, res: Response, next) => {
  const tokenAuthen = req.headers.authorization;
  // allow authenticate user to make playlist, stream music, search music

  const result = encryptAuth(tokenAuthen);
  if (result.success) return next();
  else return res.status(401).send({ message: result.message });
});

// allow [put to user, put to playlist(make later), put to comment] by req.session.userId === user.id
// allow [delete comment] by req.session.userId === user.id
authUpdate.use(async (req: Request, res: Response, next) => {
  const userIdRequest = req.query.userId as string;
  const tokenAuthen = req.headers.authorization;
  const result = checkAllowUpdateAuth({ token: tokenAuthen, userIdRequest });
  if (result.success) return next();
  else return res.status(401).send({ message: result.message });
});

authMutate.use(async (req: Request, res: Response, next) => {
  const tokenAuthen = req.headers.authorization;
  const infor = mutateBodyRequestAuth(tokenAuthen) as {userId : number}
  if(infor){
    req.body.userId = infor.userId
    return next()
  }  else return res.status(401).send({ message: "Something wrong" });

});
