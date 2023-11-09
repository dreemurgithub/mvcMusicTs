import dotenv from "dotenv";
dotenv.config();

export const MUSIC_PAGE = 5;
export const USERNAME_VALIDATE = {
    min: 5,
    max: 32
}

const downloadKey = process.env.DOWNLOAD_MUSIC;
export const optionsDownload = (id: string) => {
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