import express, { Request, Response, Application } from "express";
import { regexPassword, regexUserName } from "@/validations/regex.validate";
const authMiddleware: Application = express();

authMiddleware.use(async (req: Request, res: Response, next) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).send({ message: "Bad Request" });
  if (regexPassword.test(password) && regexUserName.test(username)) next();
});

export default authMiddleware;