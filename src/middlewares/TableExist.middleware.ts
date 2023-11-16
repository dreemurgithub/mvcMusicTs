import { Request, Response } from "express";
import { usernameExist } from "@/validations/checkUsernameExist";
import { readOnePlaylistIdhelper } from "@/models/playlist/helper";

export const validateUsernameExist = async (
  req: Request,
  res: Response,
  next: any
) => {
  const username = req.body.username;
  const checkExist = await usernameExist(username);
  if (checkExist) return res.status(400).send({ message: "Username exist" });
  return next();
};

export const validatePlaylistExist = async (
  req: Request,
  res: Response,
  next: any
) => {
  const playlistId = req.body.playlistId;
  const checkExist = await readOnePlaylistIdhelper(playlistId);
  if (!checkExist) return res.status(400).send({ message: "No playlist to comment" });
  return next();
};
