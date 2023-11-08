import { regex5minLess } from "./regex.validate";
import * as yt from "youtube-search-without-api-key";

export const checkDuration = async (id: string) => {
    const videosIdArr = await yt.search(id);
    if (!regex5minLess.test(videosIdArr[0].duration_raw)) return false;
    return true;
  };