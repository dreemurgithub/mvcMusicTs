import { DataSource } from "typeorm"
import dotenv from "dotenv";
dotenv.config()
import { User } from "./user";
import { playList } from "./playlist";
import { Comment } from "./comment";
const isLocalhost = process.env.ENVIROMENT === "DEV";

export const dataSource = new DataSource({
  type: "postgres",
  port:
    process.env.POSTGRES_PORT && parseInt(process.env.POSTGRES_PORT)
      ? parseInt(process.env.POSTGRES_PORT)
      : 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: true,
  host: isLocalhost ? process.env.POSTGRES_LOCAL : process.env.POSTGRES_HOST, // for docker-compose up db, to just run the database
  entities: [User,playList,Comment],

});
export const userRepository = dataSource.getRepository("User");
export const playlistRepository = dataSource.getRepository("play_list");
export const commentlistRepository = dataSource.getRepository("comment");
