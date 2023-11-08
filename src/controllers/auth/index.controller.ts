import express, { Request, Response, Application } from "express";
import jwt from "jsonwebtoken";
import { authSignIn } from "@/models/auth";
import dotenv from "dotenv";
dotenv.config();
const secretKey = `${process.env.PASSWORD_KEY}`;
export const authControllerGet: Application = express();
authControllerGet.use(async (req: Request, res: Response) => {
  res.send(req.body)
})
export const authControllerSignin: Application = express();
export const authControllerSignOut: Application = express();
authControllerSignin.use(async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const result = await authSignIn({ username, password });
  if (result.data) {
    // req.session.userId = result.data.id;
    const newDate = new Date();
    const userToken = jwt.sign(
      {
        userId: result.data.id,
        iat: newDate.setDate(newDate.getDate() + 10),
      },
      secretKey,
      { algorithm: "HS256" }
    );

    return res.status(201).send({ token: userToken });
  } else return res.status(400).send({ message: result.message });
});

authControllerSignOut.use(async (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) console.log(err);
  });
  res.clearCookie("connect.sid");
  res.status(200).send({ message: "Successfully signing out" });
});
