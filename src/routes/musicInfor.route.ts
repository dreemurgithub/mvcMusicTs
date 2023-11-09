import express, { Request, Response, Application } from "express";
const musicInforRoute: Application = express();
import {musicInforController,musicDownloadController} from "@/controllers/musicInfor/index.controller";
import { checkYoutubeId } from "@/middlewares/youtube.middleware";
import { schemaQuerys } from "@/validations/validateGeneral";
import { validateQuery } from "@/middlewares/validateQuery";
// should return {success: boolean, data? , message?}
musicInforRoute.get("/music",validateQuery(schemaQuerys.pageCheck),validateQuery(schemaQuerys.searchCheck), musicInforController);
musicInforRoute.get("/music/download" , checkYoutubeId,musicDownloadController);
// musicInforRoute.put("/music" , musicInforController);
// musicInforRoute.delete("/music" , musicInforController);

export default musicInforRoute;
