import { Comment } from "@/config/database/typeorm/comment";
import { commentlistRepository } from "@/config/database/typeorm";

const makeComment = async ({
  userId,
  content,
  playlistId,
}: {
  userId: number;
  content: string;
  playlistId: number;
}) => {
  const newComment = new Comment();
  newComment.content = content;
  newComment.userId = userId;
  newComment.playlistId = playlistId;
};
