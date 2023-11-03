import express, { Request, Response, Application } from "express";
import { makeUser } from "@/models/user";
export const userController: Application = express();
export const getController: Application = express();

getController.use(async (req: Request, res: Response) => {
  res.send("hello");
});

userController.use(async (req: Request, res: Response) => {
  const { username, name, password } = req.body;
  const result = await makeUser({ name, password, username });
  if (result.success) return res.status(201).send(result.data);
  else return res.status(400).send({ message: result.message });
});

