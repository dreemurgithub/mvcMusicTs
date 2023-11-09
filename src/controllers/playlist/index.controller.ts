import express, { Request, Response, Application } from "express";
import { playListMaking, readPlaylistById } from "@/models/playlist";
export const playlistGetController: Application = express();
export const playlistNewController: Application = express();

playlistGetController.use(async (req: Request, res: Response) => {
  const playlistid = req.query.playlistid as string;
  const result = await readPlaylistById(parseInt(playlistid));
  if (result.success) return res.status(200).send(result.data);
  else res.status(404).send({ message: result.message });
});

playlistNewController.use(async (req: Request, res: Response) => {
  const result = await playListMaking(req.body);
  res.status(201).send(result.data);
});
