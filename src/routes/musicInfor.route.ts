import express, { Request, Response, Application } from "express";
const musicInforRoute: Application = express();
import {requireAuth} from "@/middlewares/authentication";
import musicInforController from "@/controllers/musicInfor/index.controller";
// should return {success: boolean, data? , message?}
musicInforRoute.get("/music",requireAuth , musicInforController);
// musicInforRoute.post("/music",requireAuth , musicInforController);
// musicInforRoute.put("/music",requireAuth , musicInforController);
// musicInforRoute.delete("/music",requireAuth , musicInforController);

export default musicInforRoute;
