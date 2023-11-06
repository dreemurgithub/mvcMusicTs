import axios from "axios";
import dotenv from 'dotenv';
import fs from 'fs';
import { checkDuration } from "@/validations/checkDuration.validate";
import {options, idToMusic,dataFolder, allMusicId} from '@/config/helper/musicFolder'
dotenv.config()
const downloadKey = process.env.DOWNLOAD_MUSIC

const serVerFetch = async (id: string) => {
    try {
      const response = await axios.request(options(id));
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
        link: '',
        title: '',
        duration: '1:00',
      };
    }
  };
  
  const downloadMusic = async (id: string) => {
    const infor = await serVerFetch(id);
    if (infor.success && infor.link) {
      const response = await axios.get(infor.link, {
        responseType: "arraybuffer",
      });
      fs.mkdirSync(`${dataFolder}/${id}`);
      const fileBuffer = new Uint8Array(response.data);
      fs.writeFileSync(`${dataFolder}/${id}/${infor.title}.mp3`, fileBuffer);
      return {
        success: true,
        data: { title: infor.title, id, duration: infor.duration },
      };
    } else
      return {
        success: false,
        message: "No video",
        data: ''
      };
  };
export const downloadMusicCheck = async (id: string) => {
    const check = await checkDuration(id);
    if (!check)
      return {
        success: false,
        message: "Duration must be less than 5 minutes",
        data: null
      };
    else {
      const allId = allMusicId();
      if (!allId.includes(id)) return downloadMusic(id);
    //   return musicInforFromId(id);
    }
  };