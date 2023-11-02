import dotenv from "dotenv";
dotenv.config();
const localDev = process.env.ENVIROMENT === "DEV";
import express, { Request, Response, Application } from "express";

const configBasic: Application = express();
configBasic.use(express.json());
export default configBasic;
 