import * as yt from "youtube-search-without-api-key";
import { regex5minLess } from "@/validations/regex.validate";
/**
 * Given a search query, searching on youtube
 * @param {string} search value (string or videoId).
 */
const musicSearch = async (search: string) => {
  if (!search) return { success: false, message: "Bad Request" };
  const videos = await yt.search(search);
  const videoFilter = videos.filter((el) =>
    regex5minLess.test(el.duration_raw)
  );
  //   const videos = await yt.search("y5kIrbG2gRc");
  if (videoFilter.length) return { data: videoFilter, success: true };
  else return { success: false, message: "No song" };
};

export {musicSearch}