import * as fs from "fs/promises";
import { idToMusic } from "@/config/helper/musicFolder";
export const streamMusic = async (id: string) => {
  const data = await fs.readFile(idToMusic(id));
  return data;
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
