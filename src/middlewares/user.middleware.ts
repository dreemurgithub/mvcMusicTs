import express, { Request, Response, Application } from "express";
import { errorUserCheck ,checkUsernameExist} from "@/models/user/errorCheck";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();
const secretKey = `${process.env.PASSWORD_KEY}`;

export const userMiddlewareNew: Application = express();
export const userMiddlewareUpdate: Application = express();

userMiddlewareNew.use(async(req: Request, res: Response ,next)=>{
    const {username, password, name} = req.body
    const resultErr = await errorUserCheck({username,password, name})
    const resultExist = await checkUsernameExist(username)
    if(!resultErr.success) return res.status(400).send( { message: resultErr.message})
    if(!resultExist.success) return res.status(400).send( { message: resultExist.message})
    next()
    // check all error for making new user
})

userMiddlewareUpdate.use(async(req: Request, res: Response ,next)=>{
    const {username, password, name} = req.body
    const resultErr = await errorUserCheck({username,password, name})
    if(!resultErr.success) return res.status(400).send( { message: resultErr.message})
    // check for bad password and username...
    const tokenAuthen = req.headers.authorization;
  if (!tokenAuthen)
    return res.status(401).send({ message: "Un-authorized request" });

  jwt.verify(tokenAuthen, secretKey, (err: any, decoded: any) => {
    // only allow authenticate user, and then mutate the req.body to mutate user
    const newDecode = decoded as { userId: number; iat: number };
    if (err) return res.status(401).send({ message: "Un-authorized request" });
    if (newDecode.iat < new Date().getTime()) return res.status(401).send({ message: "You need to sign in again" });
    req.body.userId = newDecode.userId

    if (newDecode.userId)return next();
    res.status(401).send({ message: "Un-authorized request" });
  });
    
})



// type: ? '/music'
// type: ? '/music'