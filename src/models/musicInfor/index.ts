import { musicSearch } from "./helper";
export const musicYoutubeSearch = async ({page,search}: {page: number,search: string}) => {
  const data = await musicSearch({search,page});
  return data;
};
