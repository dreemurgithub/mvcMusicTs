import express, { Request, Response, Application } from "express";
import configBasic from "./expressBasic";
import configCors from "./cors";
import configSession from "./session";
import errorHandler from "./errorException";
const configApp: Application = express();
configApp.use(configBasic)
configApp.use(configCors)
configApp.use(configSession)
configApp.use(errorHandler)
export default configApp
