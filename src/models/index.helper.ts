import dotenv from "dotenv";
dotenv.config();
import { createHmac } from "crypto";
import { regexPassword, regexUserName } from "@/validations/index.validate";
import { pool } from "@/config/postgres";

const key = `${process.env.PASSWORD_KEY}`;
const hashPassword = (input: string) => {
  return createHmac("sha256", key).update(input).digest("hex");
};


const allMusicId = () => {
    // const file = path.join(__dirname, `../../data`);
    // const fileList = fs.readdirSync(file);
    // return fileList;
  };
  
  const idToMusic = (id: String) => {
    // const file = path.join(
    //   __dirname,
    //   `../../data/${id}`
    // );
    // const fileList = fs.readdirSync(file);
    // return path.join(file, fileList[0]);
  };
  
  const allMusicName = () => {
    // const musicHash: any = {};
    // const allMusicIdArr = allMusicId();
    // const allName = allMusicIdArr.map((el) => musicInforFromId(el));
    // allName.forEach((result) => {
    //   if (result.success && result.data) musicHash[result.data.id] = result.data;
    // });
    // return musicHash;
  };

export {hashPassword, allMusicName, idToMusic, allMusicId}
// CREATE TABLE playlist (
//     id SERIAL PRIMARY KEY,
//     playlist VARCHAR(50),
//     userId INTEGER,
//     songId VARCHAR(50)[]
// ); // create array string postgres

// to add songid, create an update query
// data will only contain folderid(youtube id)/the song