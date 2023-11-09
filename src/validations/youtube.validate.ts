import { rejects } from "assert";
import { regex5minLess } from "./regex.validate";
import * as yt from "youtube-search-without-api-key";
import { resolve } from "path";

export const checkDuration = async (id: string) => {
  const videosIdArr = await yt.search(id);
  if (!regex5minLess.test(videosIdArr[0].duration_raw)) return false;
  return true;
};

export const validateYoutubeId = (id: string) => {
  return new Promise(async(resolve: any, rejects: any) => {
    const videosIdArr = await yt.search(id);
    if (videosIdArr[0].id.videoId === id) return resolve( true);
    return rejects( false)
  });
};

export const validateYoutubeSongList = (songList: string [])=>{
  const checkYoutubeList = songList.map(id => validateYoutubeId(id))
  return Promise.allSettled(checkYoutubeList)
}