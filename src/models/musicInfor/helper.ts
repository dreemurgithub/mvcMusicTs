import * as yt from "youtube-search-without-api-key";
import { MUSIC_PAGE } from "@/config/helper/constant";
import { regex5minLess } from "@/validations/regex.validate";
/**
 * Given a search query, searching on youtube
 * @param {string} search value (string or videoId).
 */
export const musicSearch = async ({search, page}: {search: string, page: number}) => {
  if (!search) return { success: false, message: "Bad Request" };
  const videos = await yt.search(search);
  const videoFilter = videos.filter((el) =>
    regex5minLess.test(el.duration_raw)
  );
  const pageArr = []
  for(let i = MUSIC_PAGE*page;i<MUSIC_PAGE*page + MUSIC_PAGE;i++) {
    if(videoFilter[i]) pageArr.push(videoFilter[i])
  }
  //   const videos = await yt.search("y5kIrbG2gRc");
  if (pageArr.length) return { data: {data: pageArr, page, songCount: pageArr.length}, success: true,  };
  else return { success: false, message: "No song" };
};