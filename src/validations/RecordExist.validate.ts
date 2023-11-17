import { readOnePlaylistId } from "@/models/playlist";
import { checkUsernameExist } from "@/models/user/helper";
import {
  commentlistRepository,
  likeListRepository,
} from "@/config/database/typeorm";

export const usernameExist = async (username: string) => {
  const check = await checkUsernameExist(username);
  return check && true;
};

export const playlistExist = async (id: number) => {
  const check = await readOnePlaylistId(id);
  return check && true;
};

export const likeExist = async ({
  userId,
  playlistId,
}: {
  userId: number;
  playlistId: number;
}) => {
  const check = await likeListRepository.find({where:{userId,playlistId}})
  return check.length && true;
};

export const commentExist = async ({
  userId,
  id,
}: {
  userId: number;
  id?: number ;
}) => {
  const check =id? await commentlistRepository.find({ where: { userId, id } }) : await commentlistRepository.find({ where: { userId} });
  return check.length && true;
};
