import axios from "axios";
import dotenv from "dotenv";
import fs from "fs";
import { checkDuration } from "@/validations/youtube.validate";
import { idToMusic, dataFolder, allMusicId } from "@/config/helper/musicFolder";
import { optionsDownload } from "@/config/helper/constant";
import { musicFromYoutubeId } from "./helper";
dotenv.config();

const serVerFetch = async (id: string) => {
  try {
    const response = await axios.request(optionsDownload(id));
    return {
      success: true,
      link: response.data.link,
      title: response.data.title,
      duration: response.data.duration,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      link: "",
      title: "",
      duration: "1:00",
    };
  }
};

export const downloadMusic = async (id: string) => {
  const folderSave = `${dataFolder}/${id}`;
  if (fs.existsSync(folderSave)) {
    const fileList = fs.readdirSync(folderSave);
    if (fileList.length) {
      const data = await musicFromYoutubeId(id);
      return { success: true, data };
    }
  }
  const infor = await serVerFetch(id);
  if (infor.success && infor.link) {
    const response = await axios.get(infor.link, {
      responseType: "arraybuffer",
    });
    fs.mkdirSync(folderSave);
    const fileBuffer = new Uint8Array(response.data);
    fs.writeFile(`${folderSave}/${infor.title}.mp3`, fileBuffer, (err: any) => {
      if (err) console.log(err);
    });
    const data = await musicFromYoutubeId(id);
    return { success: true, data };
  } else
    return {
      success: false,
      message: "No video",
      data: "",
    };
};
