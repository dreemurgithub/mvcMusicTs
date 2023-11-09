import * as fs from "fs/promises";
import { idToMusic } from "@/config/helper/musicFolder";
export const streamMusic = async (id: string) => {
  const pathItem = idToMusic(id);
  if (pathItem.success) {
    const data = await fs.readFile(pathItem.songPath);
    return {data, success: true};
  } return {success: false, message: pathItem.message }
};

export const download3File = async ({
  current,
  next,
  before,
}: {
  current: string;
  next: string;
  before: string;
}) => {
  //   const currentFile = await fs.readFile(idToMusic(current));
};

export const downloadFile = async (youtubeId: string) => {};
