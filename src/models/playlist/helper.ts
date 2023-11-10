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

export const readPlaylistTimeSortHelper = async ({
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
export const readPlaylistTimeTopSortHelper = async ({
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

export const readPlaylistUserSortHelper = async ({
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
    order : {userId: sort},
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
export const readPlaylistUserTopSortHelper = async ({
  sort,
  page,
}: {
  sort: "DESC" | "ASC";
  page: number;
}) => {
  let limit = 6;
  const dataPromise = playlistRepository.find({
    order : {userId: sort},
    skip: page*limit - limit,
    take: limit
  }
  );
  const rowCountPromise = playlistRepository.count({ })
  const [data,rowCount] = await Promise.all([dataPromise,rowCountPromise])

  return {data,rowCount};
};

export const deletePlaylistIdHelper = async ({userId,id}: {userId: number,id: number})=>{
  try {
    const result = await playlistRepository.delete({ id,userId });
    if(result.affected) return { success: true, message: "Successfully delete playlist" };
    else return { success: false, message: "UnAuthorize" }
  } catch(err) {
    if(err)console.log(err)
    return { success: false, message: "UnAuthorize" };
  }
}
export const updatePlaylistIdHelper = async({
  id,
  playlistName,
  songList,
  image,
  userId,
}: {  
  id: number;
  playlistName: string;
  songList: string[];
  image: string;
  userId: number;})=>{
    const playlist = await playlistRepository.findOne({where: {id, userId}})
    if(!playlist) return { success: false, message: "Cant find a playlist to update" };
    playlist.playlistName = playlistName
    playlist.songList = songList
    playlist.image = image
    playlist.playlistName = playlistName
    await playlistRepository.save(playlist)
    return { success: true, message: "Successfully update playlist" };
  }