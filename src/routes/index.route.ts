import express, { Request, Response, Application } from "express";
import authRoute from "./auth.route";
import userRoute from "./user.route";
import musicInforRoute from "./musicInfor.route";
import streamRoute from "./stream.route";
const expressRoute: Application = express();
expressRoute.use(authRoute)
expressRoute.use(userRoute)
expressRoute.use(musicInforRoute)
expressRoute.use(streamRoute)

export default expressRoute