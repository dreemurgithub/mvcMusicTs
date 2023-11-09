import { addNewPlaylistHelper, readPlaylistByIdHelper } from "./helper";
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
  const result = await addNewPlaylistHelper({
    playlistName,
    songList,
    image,
    userId,
  });
  return result;
};

export const readPlaylistById = async (id: number) => {
  const playlist = await readPlaylistByIdHelper(id);
  if (playlist) return { success: true, data: playlist };
  return { success: false, message: "No playlist with this Id" };
};
