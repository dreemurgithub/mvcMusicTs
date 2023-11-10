import {
  addNewPlaylistHelper,
  readPlaylistByIdHelper,
  readPlaylistOwnerSortHelper,
  readPlaylistTopSortHelper
} from "./helper";
export const playListMaking = async ({
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
  const data = await addNewPlaylistHelper({
    playlistName,
    songList,
    image,
    userId,
  });
  if (data) return { success: true, data };
  return { success: false, message: "Fail to add new playlist" };
};

export const readPlaylistById = async (id: number) => {
  const playlist = await readPlaylistByIdHelper(id);
  if (playlist) return { success: true, data: playlist };
  return { success: false, message: "No playlist with this Id" };
};

export const readAllPlaylistOwner = async ({
  userId,
  sort,
  page,
}: {
  userId: number;
  sort: "DESC" | "ASC";
  page: number;
}) => {
  const playlist = await readPlaylistOwnerSortHelper({ userId, sort, page });
  if (playlist.rowCount) return { success: true, data: playlist };
  return { success: false, message: "This user don't have any/more playlist" };
};


export const readAllPlaylistTop = async ({
  sort,
  page,
}: {
  sort: "DESC" | "ASC";
  page: number;
}) => {
  const playlist = await readPlaylistTopSortHelper({ sort, page });
  if (playlist.rowCount) return { success: true, data: playlist };
  return { success: false, message: "This user don't have any/more playlist" };
};
