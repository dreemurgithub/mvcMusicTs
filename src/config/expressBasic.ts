import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
dotenv.config();
const localDev = process.env.ENVIROMENT === "DEV";
import express, { Application } from "express";

const configBasic: Application = express();
configBasic.use(express.json());
configBasic.use(cookieParser());
export default configBasic;
 