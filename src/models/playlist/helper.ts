import { playlistRepository } from "@/config/database/typeorm";
import { PlayList } from "@/config/database/typeorm/playlist";
export const addNewPlaylistHelper = async ({
  playlistName,
  songList,
  image,
  userId,
}: {
  playlistName: string;
  songList: string[];
  image: string;
  userId: number;
}) => {
  const newPlaylist = new PlayList();
  newPlaylist.image = image;
  newPlaylist.songList = songList;
  newPlaylist.userId = userId;
  newPlaylist.playlistName = playlistName;
  const data = await playlistRepository.save(newPlaylist);
  return data;
};

export const readPlaylistByIdHelper = async (id: number) => {
  const playlist = await playlistRepository.findOne({ where: { id } });
  return playlist;
};

export const readPlaylistOwnerSortHelper = async ({
  userId,
  sort,
  page,
}: {
  userId: number;
  sort: "DESC" | "ASC";
  page: number;
}) => {
  let limit = 10;
  const dataPromise = playlistRepository.find({
    where: { userId },
    order : {createdAt: sort},
    skip: page*limit - limit,
    take: limit
  }
  );
  const rowCountPromise = playlistRepository.count({
    where : {userId},
  })
  const [data,rowCount] = await Promise.all([dataPromise,rowCountPromise])

  return {data,rowCount};
};
export const readPlaylistTopSortHelper = async ({
  sort,
  page,
}: {
  sort: "DESC" | "ASC";
  page: number;
}) => {
  let limit = 6;
  const dataPromise = playlistRepository.find({
    order : {createdAt: sort},
    skip: page*limit - limit,
    take: limit
  }
  );
  const rowCountPromise = playlistRepository.count({ })
  const [data,rowCount] = await Promise.all([dataPromise,rowCountPromise])

  return {data,rowCount};
};