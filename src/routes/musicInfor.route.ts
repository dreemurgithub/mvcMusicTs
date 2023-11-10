import express, { Request, Response, Application } from "express";
const musicInforRoute = express.Router({ mergeParams: true });
import {
  musicInforController,
  musicDownloadController,
} from "@/controllers/musicInfor/index.controller";
import { checkYoutubeId } from "@/middlewares/youtube.middleware";
import { schemaQuerys, schemaParams } from "@/validations/validateGeneral";
import { validateQuery } from "@/middlewares/validateQuery";
import { validateParams } from "@/middlewares/validateParams";
// should return {success: boolean, data? , message?}
musicInforRoute.get(
  "/api/music",
  validateQuery(schemaQuerys.pageCheck),
  validateQuery(schemaQuerys.searchCheck),
  musicInforController
);
musicInforRoute.get(
  "/api/music/:songId",
  checkYoutubeId,
  musicDownloadController
);
// musicInforRoute.put("/api/music" , musicInforController);
// musicInforRoute.delete("/api/music" , musicInforController);

export default musicInforRoute;
