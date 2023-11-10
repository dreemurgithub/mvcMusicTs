import express, { Request, Response, Application } from "express";
const streamRoute= express.Router({mergeParams: true});
import {streamController,streamControllerpost} from "@/controllers/stream/index.controller";
import {requireAuth} from "@/middlewares/authentication";
import { checkYoutubeId ,checkYoutubeIdList} from "@/middlewares/youtube.middleware";
// should return {success: boolean, data? , message?}
// streamRoute.get("/stream", priviledgeMiddleware, streamController);
streamRoute.get("/stream", requireAuth,checkYoutubeId, streamController);

streamRoute.post('/stream',checkYoutubeIdList,streamControllerpost)
// streamRoute.put('/stream',streamMiddleware,streamController)
// streamRoute.delete('/stream',streamMiddleware,streamController)

export default streamRoute;
