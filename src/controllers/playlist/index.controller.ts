import express, { Request, Response, Application } from "express";
import {
  playListMaking,
  readPlaylistById,
  readAllPlaylistOwner,
  readAllPlaylistTop,
} from "@/models/playlist";
export const playlistGetController = express.Router({ mergeParams: true });
export const playlistNewController = express.Router({ mergeParams: true });
export const playlistOwnerController = express.Router({ mergeParams: true });

playlistGetController.use(async (req: Request, res: Response) => {
  const playlistid = req.query.playlistid as string;
  const result = await readPlaylistById(parseInt(playlistid));
  if (result.success) return res.status(200).send(result.data);
  else res.status(404).send({ message: result.message });
});

playlistOwnerController.use(async (req: Request, res: Response) => {
  const sort = req.params.sort;
  const userId = parseInt(req.params.owner);
  const sortCast = sort === "DESC" || sort === "ASC" ? sort : "DESC";
  const page = req.query.page as string;
  if (userId) {
    const result = await readAllPlaylistOwner({
      userId: userId,
      sort: sortCast,
      page: parseInt(page),
    });
    if (result.success) return res.status(200).send(result.data);
    else res.status(204).send({ message: result.message });
  }
  const result = await readAllPlaylistTop({
    sort: sortCast,
    page: parseInt(page),
  });
  if (result.success) return res.status(200).send(result.data);
  else res.status(204).send({ message: result.message });
});

playlistNewController.use(async (req: Request, res: Response) => {
  const result = await playListMaking(req.body);
  res.status(201).send(result.data);
});
