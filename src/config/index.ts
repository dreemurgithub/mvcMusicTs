import express, { Request, Response, Application } from "express";
import configBasic from "./expressBasic";
import configCors from "./cors";
import configSession from "./session";
const configApp: Application = express();
configApp.use(configBasic)
configApp.use(configCors)
configApp.use(configSession)
configApp.use(express.json());
export default configApp
