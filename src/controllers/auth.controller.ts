import express, { Request, Response, Application } from "express";
const authController: Application = express();
import { authSignIn } from "@/models/auth";
authController.use(async (req: Request, res: Response) => {
  //   if (req.method === "GET") {
  //     const { username, password } = req.body;
  //     const result = await authSignIn({ username, password });
  //     if (result.success) return res.status(200).send(result.data);
  //     else return res.status(400).send(result.message);
  //   }
  if (req.method === "POST") {
    const { username, password } = req.body;
    const result = await authSignIn({ username, password });
    if (result.data) {
        req.session.userId = result.data.id;
        return res.status(201).send(result.data);
    }
    else return res.status(400).send(result.message);
  }
  //   if (req.method === "PUT") {
  //     const { username, password } = req.body;
  //     const result = await authSignIn({ username, password });
  //     if (result.success) return res.status(201).send(result.data);
  //     else return res.status(400).send(result.message);
  //   }
  if (req.method === "DELETE") {
    req.session.destroy((err) => {
      if (err) console.log(err);
    });
    res.clearCookie("connect.sid");
    res.status(200).send("Successfully signing out");
  }
});

export default authController;
