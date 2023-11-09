import express, { Request, Response, Application } from "express";
export const playlistGetController: Application = express();


playlistGetController.use(async (req: Request, res: Response) => {
    res.send("hello playlist");
  });
  