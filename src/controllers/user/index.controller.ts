import express, { Request, Response, Application } from "express";
import { makeUser ,editUser} from "@/models/user";

export const userNewController= express.Router({mergeParams: true});
export const getController= express.Router({mergeParams: true});
export const userEditController= express.Router({mergeParams: true});
const secretKey = `${process.env.PASSWORD_KEY}`;

getController.use(async (req: Request, res: Response) => {
  res.send("hello");
});

userNewController.use(async (req: Request, res: Response) => {
  const { username, name, password } = req.body;
  const result = await makeUser({ name, password, username });
  if (result.success) return res.status(201).send(result.data);
  else return res.status(401).send({ message: result.message });
});

userEditController.use(async (req: Request, res: Response) => {
  const { username, name, password,userId } = req.body;
  const tokenAuthen = req.headers.authorization;
  // allow authenticate user to make playlist, stream music, search music
  
  const result = await editUser({ name, password, username ,id: userId});
  if (result.success) return res.status(201).send(result.data);
  else return res.status(401).send({ message: result.message });
});
