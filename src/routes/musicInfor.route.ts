import express, { Request, Response, Application } from "express";
const musicInforRoute: Application = express();
import {musicInforController} from "@/controllers/musicInfor/index.controller";
// should return {success: boolean, data? , message?}
musicInforRoute.get("/music", musicInforController);
// musicInforRoute.post("/music" , musicInforController);
// musicInforRoute.put("/music" , musicInforController);
// musicInforRoute.delete("/music" , musicInforController);

export default musicInforRoute;
