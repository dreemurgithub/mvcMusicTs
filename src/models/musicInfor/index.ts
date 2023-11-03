import { musicSearch } from "./helper";
export const musicYoutubeSearch = async (search: string) => {
  const data = await musicSearch(search);
  return data;
};
