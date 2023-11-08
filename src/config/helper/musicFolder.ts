import path from "path";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();
const downloadKey = process.env.DOWNLOAD_MUSIC;

export const checkPath = path.join(__dirname, `../../../data/_k3y2tVWK74`);
export const allMusicId = () => {
  const file = path.join(__dirname, `../../../data`);
  const fileList = fs.readdirSync(file);
  return fileList;
};

export const idToMusic = (id: String) => {
  try {
    const file = path.join(__dirname, `../../../data/${id}`);
    const fileList = fs.readdirSync(file);
    return {songPath: path.join(file, fileList[0]), success: true};
  } catch {
    return {message:"Download the song first", success: false, songPath:''}
  }
};
export const options = (id: string) => {
  return {
    method: "GET",
    url: "https://youtube-mp36.p.rapidapi.com/dl",
    params: { id },
    headers: {
      "X-RapidAPI-Key": downloadKey,
      "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
    },
  };
};

export const dataFolder = path.join(__dirname, "../../../data");
