import express, { Request, Response, Application } from "express";
import { musicYoutubeSearch } from "@/models/musicInfor";

export const musicInforController: Application = express();

musicInforController.use(async (req: Request, res: Response) => {
  const search = req.query.search as string;
  if(search){
      const result = await musicYoutubeSearch(search);
      if (result.success) return res.status(201).send(result.data);
      else return res.status(400).send({message: result.message});
  }
});
